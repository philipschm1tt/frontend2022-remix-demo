import {ActionFunction, json, LoaderFunction, redirect} from "@remix-run/cloudflare";
import {useLoaderData, Form, useActionData, useTransition} from "@remix-run/react";
import {addCard, CardContent, getCards} from "~/data/cards.server";
import invariant from "tiny-invariant";
import {useEffect, useRef} from "react";
import {PageHeader} from "~/components/page-header";
import {Card} from "~/components/card";

type LoaderData = {
    cards: Array<CardContent>;
};

type ActionData =
    | {
    title: null | string;
    body: null | string;
}
    | undefined;

export const loader: LoaderFunction = async ({context}) => {
    const cards = await getCards(context);

    return json<LoaderData>({cards});
};

export const action: ActionFunction = async ({context, request}) => {
    const formData = await request.formData();

    const title = formData.get("title");
    const body = formData.get("body");
    const delay = formData.get("delay");

    const errors: ActionData = {
        title: title ? null : "Title is required",
        body: body ? null : "Slug is required",
    };
    const hasErrors = Object.values(errors).some(
        (errorMessage) => errorMessage
    );
    if (hasErrors) {
        return json<ActionData>(errors);
    }

    invariant(
        typeof title === "string",
        "title must be a string"
    );
    invariant(
        typeof body === "string",
        "slug must be a string"
    );

    await addCard(context, {title, body});

    if (delay) {
        await new Promise((res) => setTimeout(res, 5000));
    }

    return redirect("/page-two");
};

export default function PageTwo() {
    const {cards} = useLoaderData();
    const errors = useActionData();

    const transition = useTransition();
    const isCreating = Boolean(transition.submission);
    const newCard = (isCreating && transition.submission) ?
        Object.fromEntries(transition.submission.formData) : null;

    let formRef = useRef<HTMLFormElement>(null);
    let titleRef = useRef<HTMLInputElement>(null);
    const inputClassName = `mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50`;

    useEffect(() => {
        if (!isCreating) {
            formRef.current?.reset();
            titleRef.current?.focus();
        }
    }, [isCreating])

    return (
        <main>
            <PageHeader headline="Page Two" subHeadline="A page that contains data and a form"/>
            <div className="container container mx-auto lg:grid lg:grid-cols-[3fr_1fr] lg:gap-4">
                <section className="py-10 px-4">
                    <div className="prose prose-lg">
                        <h2 className="mb-4">Some Cards</h2>
                    </div>
                    <ul className="list-none flex flex-wrap gap-4">
                        {cards.map((card: CardContent) => (
                            <li key={card.title}>
                                <Card headline={card.title} body={card.body}/>
                            </li>
                        ))}
                        {isCreating && newCard &&
                        <li>
                            <Card headline={newCard.title as string} body={newCard.body as string}/>
                        </li>
                        }
                    </ul>
                </section>
                <section className="py-10 px-4 bg-blue-200 shadow-lg">
                    <div className="sticky top-16 prose prose-lg">
                        <h2 className="mb-4">Create Card</h2>
                        <Form ref={formRef} method="post">
                            <p>
                                <label>
                                    Card Title:{" "}
                                    {errors?.title ? (
                                        <em className="text-red-600">{errors.title}</em>
                                    ) : null}
                                    <input
                                        type="text"
                                        name="title"
                                        ref={titleRef}
                                        className={inputClassName}
                                    />
                                </label>
                            </p>
                            <p>
                                <label>
                                    Card Body:{" "}
                                    {errors?.body ? (
                                        <em className="text-red-600">{errors.body}</em>
                                    ) : null}
                                    <input
                                        type="text"
                                        name="body"
                                        className={inputClassName}
                                    />
                                </label>
                            </p>
                            <p>
                                <label>
                                    Artificially delay form submit:{" "}
                                    <input
                                        type="checkbox"
                                        name="delay"
                                        className="ml-2 rounded border-gray-300 text-indigo-600 shadow-sm
                                    focus:border-indigo-300 focus:ring focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50"
                                    />
                                </label>
                            </p>
                            <p className="mb-0">
                                <button
                                    type="submit"
                                    className="rounded bg-blue-500 py-2 px-4 text-white shadow-lg hover:bg-blue-600 focus:bg-blue-400 disabled:bg-blue-300"
                                    disabled={isCreating}
                                >
                                    {isCreating ? "Creating..." : "Create CardContent"}
                                </button>
                            </p>
                        </Form>
                    </div>
                </section>
            </div>
        </main>
    );
}
