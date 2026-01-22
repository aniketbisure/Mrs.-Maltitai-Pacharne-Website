import { Link } from "react-router-dom"
import Navbar from "./navbar"
import SearchPopup from "./searchPopup"
import useSticky from "@/hooks/useSticky"

const HeaderThree = () => {
    const [isSticky] = useSticky()
    return (
        <header>
            <div id="header-sticky" className={`header-3 ${isSticky ? 'sticky' : ''}`}>
                <div className="plane-shape">
                    <img src="/img/plane.png" alt="shape-img" />
                </div>
                <div className="container">
                    <div className="mega-menu-wrapper">
                        <div className="header-main">
                            <div className="header-left">
                                <div className="logo">
                                    <Link to="/" className="header-logo">
                                        <img src="/img/logo/black-logo.svg" alt="logo-img" />
                                    </Link>
                                </div>
                            </div>
                            <div className="header-right d-flex justify-content-end align-items-center">
                                <div className="mean__menu-wrapper d-lg-block d-none">
                                    <div className="main-menu">
                                        <nav id="mobile-menu">
                                            <Navbar />
                                        </nav>
                                    </div>
                                </div>
                                <SearchPopup />
                                <div className="header-button">
                                    <a href="#services" className="theme-btn bg-white" onClick={(e) => {
                                        e.preventDefault();
                                        const element = document.querySelector('#services');
                                        if (element) {
                                            const headerOffset = 100;
                                            const elementPosition = element.getBoundingClientRect().top;
                                            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                                            window.scrollTo({
                                                top: offsetPosition,
                                                behavior: 'smooth'
                                            });
                                        }
                                    }}>
                                        <span>
                                            get A Quote
                                            <i className="fa-solid fa-arrow-right-long" />
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>

    )
}

export default HeaderThree