import {Link} from "@remix-run/react";

export function Navigation() {
    return (
        <div className="bg-white">
            <nav className="container mx-auto py-2 flex justify-between">
                    <span>
                      <Link
                          to="/"
                          className="text-3xl font-bold px-4 inline-block"
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
                            className="px-4 uppercase tracking-wider font-bold hover:text-gray-400"
                        >
                            Page Two
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
