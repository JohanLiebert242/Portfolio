import SkillCard from "./SkillCard";
import { skills } from "../data";

function Skills() {
    return (
        <section className="py-20 align-element" id="skills">
            <div className="border-b border-gray-200 pb-5">
                <h2 className="text-3xl font-medium tracking-wider capitalize">
                    Tech Stack
                </h2>
            </div>
            <div className=" py-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {skills.map((skill) => (
                    <SkillCard key={skill.id} {...skill} />
                ))}
            </div>
        </section>
    );
}

export default Skills;
