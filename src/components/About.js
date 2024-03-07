import aboutImg from "../assets/about.svg";

function About() {
    return (
        <section className="bg-white py-20" id="about">
            <div className="align-element grid md:grid-cols-2 items-center gap-16">
                <img
                    className="w-full h-64"
                    src={aboutImg}
                    alt="a man reviewing code"
                />
                <article>
                    <div className="border-b border-gray-200 pb-5">
                        <h2 className="text-3xl font-medium tracking-wider capitalize">
                            Code And Coffee
                        </h2>
                    </div>
                    <p className="text-slate-600 mt-8 leading-loose">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur.
                    </p>
                </article>
            </div>
        </section>
    );
}

export default About;
