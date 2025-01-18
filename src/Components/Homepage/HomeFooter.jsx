import "./Footer.css";

export default function HomeFooter() {
    return (
        <footer className="home-footer">
            <div className="footer-content">
                <p>&copy; 2024 Urjit Aich. Built with React.</p>
                <p>Note that this website is a work in progress. Not everything has been updated or added yet.</p>
            </div>
            <div className="social-icons">
                <p>Connect with me:</p>
                <a href="https://github.com/uaich123" target="_blank" rel="noopener noreferrer">
                    <img src="/githublogo.png" alt="Visit my GitHub Profile" className="social-icon"/>
                </a>
                <a href="https://www.linkedin.com/in/urjit-aich-26416a309/" target="_blank" rel="noopener noreferrer">
                    <img src="/linkedInlogo.png" alt="Connect with me on LinkedIn" className="social-icon"/>
                </a>
            </div>
        </footer>
    )
}