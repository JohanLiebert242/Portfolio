import SkillCard from "./SkillCard";
import { skills } from "../data";
import TitleSection from "./TitleSection";

function Skills() {
    return (
        <section className="py-20 align-element" id="skills">
            <TitleSection text="Tech Stack" />
            <div className=" py-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {skills.map((skill) => (
                    <SkillCard key={skill.id} {...skill} />
                ))}
            </div>
        </section>
    );
}

export default Skills;
