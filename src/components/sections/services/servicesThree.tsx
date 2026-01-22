import { serviceThreeData } from "@/db/serviceThreeData"
import NewsLetterTwo from "../newsLetterTwo"
import ServiceCardTwo from "./serviceCardTwo"
import SectionTitle from "@/components/ui/sectionTitle"


const ServicesThree = () => {
    return (
        <section id="services" className="service-section-3 pb-0 fix section-padding bg-cover" style={{ backgroundImage: 'url("/img/service/service-bg-3.jpg")' }}>
            <div className="container">
                <div className="section-title-area">
                    <SectionTitle>
                        <SectionTitle.SubTitle>Services We Offer</SectionTitle.SubTitle>
                        <SectionTitle.Title>Provide Comprehensive<br /> Ecological Service</SectionTitle.Title>
                    </SectionTitle>
                    <a href="#gallery" className="theme-btn" onClick={(e) => {
                        e.preventDefault();
                        const element = document.querySelector('#gallery');
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
                        See all Services
                        <i className="fa-solid fa-arrow-right-long" />
                    </a>
                </div>
                <div className="row">
                    {serviceThreeData.slice(0, 4).map((service) => (
                        <div key={service.id} className="col-xl-3 col-lg-4 col-md-6">
                            <ServiceCardTwo service={service} />
                        </div>
                    ))}
                </div>
            </div>
            <NewsLetterTwo />
        </section>

    )
}

export default ServicesThree