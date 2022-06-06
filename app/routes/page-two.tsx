import {json, LoaderFunction} from "@remix-run/cloudflare";
import {useLoaderData} from "@remix-run/react";
import {Card, getCards} from "~/data/cards.server";

type LoaderData = {
    cards: Array<Card>;
};

export const loader: LoaderFunction = async ({context}) => {
    const cards = await getCards(context);

    return json<LoaderData>({cards});
};

export default function PageTwo() {
    const {cards} = useLoaderData();

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
        </main>
    );
}
