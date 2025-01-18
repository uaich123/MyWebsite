import "./Header.css"
import {Link} from "react-router-dom"
export default function HomeHeader() {
    return (
        <div className="fade-in">
            <header className="home-header">
                <h1 className="welcome">Welcome to my website</h1>
                <nav aria-label="Main navigation">
                    <ul className="home-nav">
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/blog">Blog</Link></li>
                        <li><Link to="/portfolio">Portfolio</Link></li>
                        <li><Link to="/recommendations">Recommendations</Link></li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}