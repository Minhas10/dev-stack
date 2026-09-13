
import Logo from '../assets/logo-text.png'
import '../App.css'
const Nav = () => {
    return (
        <nav className="p-5">
            <div className="container mx-auto flex  justify-between">
                <img src={Logo} alt='Logo' />
                <div>
                    <ul className="flex  items-center gap-8 p-3">
                        <li className="home">Home</li>
                        <li><a href="#technologies" >Technologies</a></li>
                        <li><a href="#projects" >Projects</a></li>
                        <li><a href="#about" >About</a></li>
                        <li><a href="#contact" >Contact</a></li>
                    </ul>
                </div>
                <div className="flex gap-3">
                    <button className="btn btn-ghost">Sign in</button>
                    <button className="btn btn-secondary rounded-2xl">Sign up</button>
                </div>
            </div>
        </nav>
    );
};

export default Nav;