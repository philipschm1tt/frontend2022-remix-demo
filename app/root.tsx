import type {MetaFunction} from "@remix-run/cloudflare";
import {Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration,} from "@remix-run/react";
import styles from "./styles/tailwind.css"
import {Navigation} from "~/components/navigation";

export const meta: MetaFunction = () => ({
    charset: "utf-8",
    title: "Remix Demo",
    viewport: "width=device-width,initial-scale=1",
});

export function links() {
    return [{rel: "stylesheet", href: styles}]
}

export default function App() {
    return (
        <html lang="en">
        <head>
            <Meta/>
            <Links/>
        </head>
        <body className="min-h-screen bg-blue-50">
        <header className="sticky top-0 z-10 shadow-xl">
            <Navigation/>
        </header>
        <Outlet/>
        <ScrollRestoration/>
        <Scripts/>
        <LiveReload/>
        </body>
        </html>
    );
}
