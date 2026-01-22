
import { Fragment } from "react";
import { menuDataSingleHomePage } from "@/db/menuDataSingleHomePage";

function Navbar() {
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, link: string) => {
        if (link.startsWith('#')) {
            e.preventDefault();
            const element = document.querySelector(link);
            if (element) {
                const headerOffset = 100;
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        }
    };

    return (
        <ul>
            {menuDataSingleHomePage.map(({ link, title, megamenu, submenu }, index) => (
                <li key={index} className={`${megamenu ? 'menu-thumb' : ''} ${submenu ? 'has-dropdown' : ''} ${index === 0 ? 'active' : ''}`}>
                    <a href={link} onClick={(e) => handleClick(e, link)}>
                        {title}{' '}
                        {
                            megamenu || submenu ? <i className="fas fa-angle-down" /> : ''
                        }
                    </a>
                    {
                        submenu?.length &&
                        <ul className="submenu">
                            {
                                submenu.map((dropdown, ind) => {
                                    return (
                                        <Fragment key={ind}>
                                            {
                                                dropdown.submenu ?
                                                    <li className="has-dropdown">
                                                        <a href="#">
                                                            {dropdown.title}
                                                            {' '}<i className="fas fa-angle-down" />
                                                        </a>
                                                        <ul className="submenu">
                                                            {
                                                                dropdown.submenu.map((subDropdown, index) =>
                                                                    <li key={index}><a href={subDropdown.link} onClick={(e) => handleClick(e, subDropdown.link)}>{subDropdown.title}</a></li>
                                                                )
                                                            }
                                                        </ul>
                                                    </li>
                                                    :
                                                    <li ><a href={dropdown.link} onClick={(e) => handleClick(e, dropdown.link)}>{dropdown.title}</a></li>
                                            }
                                        </Fragment>
                                    )
                                })
                            }
                        </ul>
                    }
                </li >
            ))
            }
        </ul >
    );
}

export default Navbar;