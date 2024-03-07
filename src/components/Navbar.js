import { links } from "../data";

function Navbar() {
    return (
        <nav className="bg-emerald-100 ">
            <div className="mx-auto max-w-7xl  px-8 py-4 flex flex-col  sm:flex-row sm:gap-x-16 sm:items-center sm:py-8'">
                <h2 className="text-3xl font-bold">
                    Web
                    <span className="text-emerald-600">Dev</span>
                </h2>

                <div className="flex gap-x-3">
                {links.map((link) => (
                    <a 
                        href={link.href}
                        key={link.id} 
                        className='capitalize text-lg tracking-wide hover:text-emerald-600 duration-300' 
                    >    
                        {link.text}
                    </a>
                ))}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
