import logo from "../../assets/logo.jpg"

const Footer = () => {
    return (
        <footer className="footer p-10 bg-[#252C41] text-white mt-8">
            <aside>
                <img src={logo} alt="" className="max-w-16 rounded-full" />
                <p>Real Estate Industries Ltd.<br />Providing reliable estate since 1992</p>
            </aside>
            <nav>
                <h6 className="footer-title">Quick Links</h6>
                <a className="link link-hover">Home</a>
                <a className="link link-hover">Services</a>
                <a className="link link-hover">Blog</a>
            </nav>
            <nav>
                <h6 className="footer-title">COMPANY</h6>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">FAQ</a>
            </nav>
            <nav>
                <h6 className="footer-title">Follow Us</h6>
                <a className="link link-hover">Facebook</a>
                <a className="link link-hover">Twitter</a>
                <a className="link link-hover">Instagram policy</a>
            </nav>
        </footer>
    );
};

export default Footer;