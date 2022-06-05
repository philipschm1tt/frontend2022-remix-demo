import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import styles from 'react-tabs/style/react-tabs.css';

export function links() {
    return [{rel: "stylesheet", href: styles}];
}

export default function PageOne() {
    return (
        <main>
            <section className="py-20 bg-blue-900">
                <div className="container mx-auto">
                    <h1 className="text-4xl font-bold mb-2 text-white">
                        Page One
                    </h1>
                    <p className="text-2xl text-gray-200">
                        A page that contains an interactive element
                    </p>
                </div>
            </section>
            <section className="container mx-auto py-10">
                <div className="prose prose-lg">
                    <h2 className="mb-4">A basic tab component</h2>
                    <Tabs>
                        <TabList>
                            <Tab>First Tab</Tab>
                            <Tab>Second Tab</Tab>
                        </TabList>
                        <TabPanel>
                            <h3>Lorem Ipsum</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                                invidunt
                                ut
                                labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo
                                duo
                                dolores
                                et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor
                                sit amet.
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                                invidunt
                                ut
                                labore et dolore magna aliquyam erat, sed diam voluptua.
                            </p>
                        </TabPanel>
                        <TabPanel>
                            <h3>Duis autem</h3>
                            <p>
                                Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat,
                                vel
                                illum
                                dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui
                                blandit
                                praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum
                                dolor
                                sit
                                amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet
                                dolore
                                magna
                                aliquam erat volutpat.
                            </p>
                        </TabPanel>
                    </Tabs>
                </div>
            </section>
        </main>
    );
}
