import { TbWorldWww } from "react-icons/tb";
import { FaGithubSquare } from "react-icons/fa";

function Project({img, url, github, title, text}) {
    console.log(img);
    return (
        <article className="bg-white rounded-lg shadow-md hover:shadow-xl duration-300">
            <img
                src={img}
                alt={title}
                className="w-full object-cover rounded-t-lg h-64"
            />
            <div className="capitalize p-8">
                <h3 className="text-xl tracking-wide font-medium">{title}</h3>
                <p className="mt-4 text-slate-700 leading-loose">{text}</p>
                <div className="mt-4 flex gap-x-4">
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href={url}
                        alt="web link"
                    >
                        <TbWorldWww className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
                    </a>
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href={github}
                        alt="github link"
                    >
                        <FaGithubSquare className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
                    </a>
                </div>
            </div>
        </article>
    );
}

export default Project;