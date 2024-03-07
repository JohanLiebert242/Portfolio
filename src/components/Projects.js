import Project from "./Project";
import TitleSection from "./TitleSection";
import {projects} from '../data';

function Projects() {
    return(
            <section  className='py-20 align-element' id='projects'>
                <TitleSection text="Web Creations" />
                <div className='py-16 grid lg:grid-cols-2 xl:grid-cols-3 gap-8'>
                    {projects.map(project => (
                        <Project key={project.id} {...project} />
                    ))}
                </div>
            </section>
        
    )
}

export default Projects;
