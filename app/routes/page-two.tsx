import {json, LoaderFunction} from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";

type Card = {
    title: string;
    body: string;
};

type LoaderData = {
    cards: Array<Card>;
};

export const loader: LoaderFunction = async () => {
    return json<LoaderData>({
        cards: [
            {
                title: "First Card",
                body: "Look! A bit of data!"
            },
            {
                title: "Second Card",
                body: "More data to look at."
            },
        ],
    });
};

export default function PageTwo() {
    const { cards } = useLoaderData();
    console.log(cards);

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
