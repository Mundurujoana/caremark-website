import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";
import logo from "./logo-1.png";

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

	return (
		<header>
	 <img src={logo} alt='logo'className='logo' />
			<nav ref={navRef}>
				<a href="#home">Home</a>
				<a href="#about"> About us </a>
				<a href="#solution"> Our solution </a>
				<a href="#team"> Our Team </a>
        <a href="#footer"> Find us </a>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button className="nav-btn" onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Navbar;