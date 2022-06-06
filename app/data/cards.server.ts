//See https://github.com/AriPerkkio/remix-cloudflare-pages-with-kv/blob/main/app/models/counter.server.ts

import type {AppLoadContext} from "@remix-run/cloudflare";

export type Card = {
    title: string;
    body: string;
};

export type Counter = number;

export async function getCards(context: AppLoadContext): Promise<Array<Card>> {
    const cards = await getKv(context).get("cards", { type: "json" }) || [];

    const result: Array<Card> = cards as Array<Card>;
    return result;
}

export async function addCard(context: AppLoadContext, card: Card): Promise<void> {
    const currentCards = await getCards(context);
    const newCards = currentCards.concat(card);

    await getKv(context).put("cards", JSON.stringify(newCards));
}

/**
 * Get Cloudflare KV namespace from request context
 */
function getKv(context: AppLoadContext): KVNamespace {
    if (!context) {
        throw new Error("context not available");
    }

    if (!context.FRONTEND2022_DEMO) {
        throw new Error("context.FRONTEND2022_DEMO not available");
    }

    if (!isKvNamespace(context.FRONTEND2022_DEMO)) {
        throw new Error(
            "context.FRONTEND2022_DEMO doesnt look like KVNamespace"
        );
    }

    return context.FRONTEND2022_DEMO;
}

function isKvNamespace(kvNamespace: any): kvNamespace is KVNamespace {
    if (kvNamespace == null) return false;
    if (typeof kvNamespace !== "object") return false;

    if (!("get" in kvNamespace) || typeof kvNamespace.get !== "function") {
        return false;
    }

    if (!("put" in kvNamespace) || typeof kvNamespace.put !== "function") {
        return false;
    }

    return true;
}
