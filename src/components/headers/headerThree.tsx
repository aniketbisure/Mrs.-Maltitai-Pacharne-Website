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
                                    <Link to="/" className="header-logo d-flex align-items-center gap-2">
                                        <img src="/img/new image/BJP-logo.png" alt="logo-img" style={{ maxWidth: '80px' }} />
                                        <h4 className="m-0">मालतीताई बाबुरावजी पाचर्णे</h4>
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

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>

    )
}

export default HeaderThree