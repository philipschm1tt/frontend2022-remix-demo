import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import tabStyles from 'react-tabs/style/react-tabs.css';

import AwesomeSlider from 'react-awesome-slider';
import sliderStyles from 'react-awesome-slider/dist/styles.css';

export function links() {
    return [{rel: "stylesheet", href: tabStyles}, {rel: "stylesheet", href: sliderStyles}];
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
            <div className="bg-slate-300">
                <section className="container mx-auto py-10">
                    <div className="prose prose-lg">
                        <h2 className="mb-4">A basic carousel component</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                            invidunt
                            ut
                            labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
                            dolores
                            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
                            amet.
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                            invidunt
                            ut
                            labore et dolore magna aliquyam erat, sed diam voluptua.
                        </p>
                        <p>
                            Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel
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
                    </div>
                    <div className="prose prose-lg py-10">
                        <AwesomeSlider>
                            {
                                [1, 2, 3, 4, 5].map((number, index) =>
                                    <div key={index} className="h-40 bg-blue-400 relative">
                                        <h3 className="my-0 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">{number}</h3>
                                    </div>)
                            }
                        </AwesomeSlider>
                    </div>
                </section>
            </div>
        </main>
    );
}
