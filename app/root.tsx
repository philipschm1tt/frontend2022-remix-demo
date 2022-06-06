import type {MetaFunction} from "@remix-run/cloudflare";
import {Link, Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration,} from "@remix-run/react";
import styles from "./styles/tailwind.css"

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Remix Demo",
  viewport: "width=device-width,initial-scale=1",
});

export function links() {
  return [{ rel: "stylesheet", href: styles }]
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <header className="sticky top-0 bg-white">
          <nav className="container mx-auto py-2 flex justify-between">
            <span>
              <Link
                  to="/"
                  className="text-3xl font-bold"
              >
              Remix Demo
            </Link>
            </span>
            <ul className="flex flex-row">
              <li className="flex flex-col justify-end">
                <Link
                    to="/page-one"
                    className="px-4 uppercase tracking-wider font-bold hover:text-gray-400"
                >
                  Page One
                </Link>
              </li>
              <li className="flex flex-col justify-end">
                <Link
                    to="/page-two"
                    className="pl-4 uppercase tracking-wider font-bold hover:text-gray-400"
                >
                  Page Two
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
