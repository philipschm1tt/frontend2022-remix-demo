import {ActionFunction, json, LoaderFunction, redirect} from "@remix-run/cloudflare";
import {useLoaderData, Form, useActionData} from "@remix-run/react";
import {addCard, Card, getCards} from "~/data/cards.server";
import invariant from "tiny-invariant";

type LoaderData = {
    cards: Array<Card>;
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

    return redirect("/page-two");
};

export default function PageTwo() {
    const {cards} = useLoaderData();
    const errors = useActionData();

    const inputClassName = `w-full rounded border border-gray-500 px-2 py-1 text-lg`;

    return (
        <main>
            <section className="py-20 bg-blue-900">
                <div className="container mx-auto">
                    <h1 className="text-4xl font-bold mb-2 text-white">
                        Page Two
                    </h1>
                    <p className="text-2xl text-gray-200">
                        A page that contains data and a form
                    </p>
                </div>
            </section>
            <section className="container mx-auto py-10">
                <div className="prose prose-lg">
                    <h2 className="mb-4">Some Cards</h2>
                    <ul>
                        {cards.map((card: Card) => (
                            <li key={card.title}>
                                <article>
                                    <h3>{card.title}</h3>
                                    <p>{card.body}</p>
                                </article>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
            <section className="container mx-auto py-10">
                <div className="prose prose-lg">
                    <h2 className="mb-4">Create Card</h2>
                    <Form method="post">
                        <p>
                            <label>
                                Card Title:{" "}
                                {errors?.title ? (
                                    <em className="text-red-600">{errors.title}</em>
                                ) : null}
                                <input
                                    type="text"
                                    name="title"
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
                        <p className="text-right">
                            <button
                                type="submit"
                                className="rounded bg-blue-500 py-2 px-4 text-white hover:bg-blue-600 focus:bg-blue-400 disabled:bg-blue-300"
                            >
                                Create Card
                            </button>
                        </p>
                    </Form>
                </div>
            </section>
        </main>
    );
}
