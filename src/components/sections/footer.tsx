import { SuCallMessage, SuEmail, SuLocation } from "@/lib/icons";
import { Link } from "react-router-dom";

const contactInfo = [
    {
        icon: <SuCallMessage />,
        label: "Call Us 7/24",
        value: "+208-555-0112",
        link: "tel:+2085550112",
    },
    {
        icon: <SuEmail />,
        label: "Make a Quote",
        value: "Solar@gmail.com",
        link: "mailto:infotech@gmail.com",
    },
    {
        icon: <SuLocation />,
        label: "Location",
        value: "4517 Washington ave.",
    },
];







const Footer = () => {
    return (
        <footer className="footer-section footer-bg">
            <div className="container mb-3">
                <div className="contact-info-area">
                    {contactInfo.map((info, index) => (
                        <div
                            key={index}
                            className="contact-info-items wow slideUp"
                            data-delay={`${0.3 + index * 0.2}`}
                        >
                            <div className="icon">{info.icon}</div>
                            <div className="content">
                                <p>{info.label}</p>
                                <h3>
                                    {info.link ? (
                                        <Link to={info.link}>{info.value}</Link>
                                    ) : (
                                        info.value
                                    )}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="footer-bottom style-2">
                <div className="container">
                    <div className="footer-wrapper d-flex align-items-center justify-content-between">
                        <p className="wow slideLeft color-2" data-delay=".3">
                            © All Copyright 2025 by <Link to="https://www.mastermindmedias.com/" target="_blank" style={{ color: "#FF9933",font:"bold"}}>Mastermind Medias</Link> {" "}
                        </p>
                        <ul className="footer-menu wow slideRight" data-delay=".5">
                            <li>
                                <Link to="contact">Terms &amp; Condition</Link>
                            </li>
                            <li>
                                <Link to="contact">Privacy Policy</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <Link to="#" id="scrollUp" className="scroll-icon">
                    <i className="fa fa-arrow-up" />
                </Link>
            </div>
        </footer>
    );
};

export default Footer;