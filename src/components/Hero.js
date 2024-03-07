import { FaGithub, FaLinkedin, FaSquareTwitter } from "react-icons/fa6";
import HeroImg from "../assets/hero.svg";

function Hero() {
    return (
        <section className="bg-emerald-100 py-24  ">
            <div className=" mx-auto max-w-7xl  px-8  grid  md:grid-cols-2 items-center gap-8">
                <article>
                    <h1 className="text-7xl font-bold tracking-wider">
                        I'm Johan
                    </h1>
                    <p className="mt-4 text-3xl text-slate-700 capitalize tracking-wide">
                        Front-end Developer
                    </p>
                    <p className="mt-2 text-lg text-slate-700 capitalize tracking-wide">
                        Turning ideas into Interactive Reality
                    </p>
                    <div className="flex gap-x-4 mt-4">
                        <a href="https://github.com/JohanLiebert242">
                            <FaGithub className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
                        </a>
                        <a href="#!">
                            <FaLinkedin className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
                        </a>
                        <a href="#!">
                            <FaSquareTwitter className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
                        </a>
                    </div>
                </article>

                <article className="hidden md:block ">
                    <img
                        className="h-80 lg:h-96"
                        src={HeroImg}
                        alt="a man coding"
                    />
                </article>
            </div>
        </section>
    );
}

export default Hero;
