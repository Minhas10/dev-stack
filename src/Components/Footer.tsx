
import Logo from "../assets/logo-text.png";
const Footer = () => {
    return (<div>   
        <div className="flex container mx-auto  justify-center bg-white border-t border-gray-300 gap-25 p-10 ">
            <div>
                <img src={Logo} alt="logo" />
                <p className="text-gray-600 pt-1">Curated tools, technologies, and resources for developers building</p>
                <p className="text-gray-600">modern software.</p>
                <div className="flex gap-3 pt-3 font-semibold">
                    <a className="link link-hover">GitHub</a>
                    <a className="link link-hover">Twitter</a>
                    <a className="link link-hover">LinkedIn</a>
                </div>

            </div>
            <div>
                <h3 className="font-bold">PRODUCT</h3>
                <ul className="flex flex-col gap-2 text-gray-600 " >
                    <li><a href="#home">Home</a></li>
                    <li><a href="#integrations">Technologies</a></li>
                    <li><a href="#projects">Projects</a></li>
                </ul>
            </div>
            <div>
                <h3 className="font-bold">COMPANY</h3>
                <ul className="flex flex-col gap-2 text-gray-600">
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><a href="#careers">Careers</a></li>
                </ul>
            </div>
            <div>
                <h3 className="font-bold">LEGAL</h3>
                <ul className="flex flex-col gap-2 text-gray-600">
                    <li><a href="#privacy">Privacy Policy</a></li>
                    <li><a href="#terms">Terms of Service</a></li>
                </ul>
            </div>
        </div>
        <footer className="bg-white border-t border-gray-300 p-8">
            <div className="container  mx-auto text-gray-600 ">
                <p>&copy; 2026 Dev Stack All rights reserved.</p>
            </div>
        </footer>
        </div>
    );
};

export default Footer;