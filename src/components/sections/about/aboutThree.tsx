import SectionTitle from "@/components/ui/sectionTitle"
import AboutVideoPopup from "./aboutVideoPopup"


const AboutThree = () => {
    return (
        <section id="about" className="about-section section-padding fix bg-cover">
            <div className="container">
                <div className="about-wrapper-2">
                    <div className="row">
                        <div className="col-lg-6 wow slideUp" data-delay=".4">
                            <div className="about-image">
                                <div className="shape-image">
                                    <img src="/img/about/shape.png" alt="shape-img" />
                                </div>
                                <div className="circle-shape">
                                    <img src="/img/about/circle.png" alt="shape-img" />
                                </div>
                                <img src="/img/about/image2.jpeg" alt="about-img" />
                                <AboutVideoPopup />
                            </div>
                        </div>
                        <div className="col-lg-6 mt-4 mt-lg-0">
                            <div className="about-content">
                                <SectionTitle>
                                    <SectionTitle.SubTitle>About Us</SectionTitle.SubTitle>
                                    <SectionTitle.Title>सौ. मालतीताई बाबुराव पाचर्णे</SectionTitle.Title>
                                </SectionTitle>
                                <p className="mt-3 mt-md-0 wow slideUp" data-delay=".5" style={{ textAlign: "justify", fontWeight: "600", fontSize: "18px" }}>
                                    मी, मालतीताई बाबुराव पाचर्णे, साहेबांच्या पवित्र आशीर्वादाने व त्यांच्या विकासाच्या वारशाला पुढे नेण्याच्या निर्धाराने, शिरूर–न्हावरा जिल्हा परिषद व पंचायत समिती निवडणूक २०२६ लढवत आहे.
                                </p>
                                <p className="mt-3 wow slideUp" data-delay=".5" style={{ textAlign: "justify", fontWeight: "600", fontSize: "18px" }}>
                                    आज जरी साहेब आपल्यात नसले, तरी त्यांची विचारधारा, विकासाची दिशा आणि जनसेवेची प्रेरणा राहुलदादा, नितीनदादा व असंख्य सहकारी यांच्या माध्यमातून या मतदारसंघात अखंडपणे सुरू आहे.
                                </p>
                                <p className="mt-3 wow slideUp" data-delay=".5" style={{ textAlign: "justify", fontWeight: "600", fontSize: "18px" }}>
                                    जनतेच्या विश्वासावर आणि आपल्या प्रेमळ पाठिंब्यावरच ही लढाई उभी आहे - विकासासाठी, परिवर्तनासाठी आणि उज्ज्वल भविष्यासाठी.
                                </p>
                                <p className="mt-3 wow slideUp" data-delay=".5" style={{ textAlign: "justify", fontWeight: "600", fontSize: "18px" }}>
                                    तसेच माझ्यासोबत शिरूर ग्रामीण पंचायत समिती उमेदवार <strong>सौ. उज्वला विजय भोस</strong> आणि पंचायत समिती उमेदवार <strong>श्री. सागर बाळासो खंडागळे</strong> हेही आपल्या सेवेसाठी मैदानात उभे आहेत.
                                </p>
                                <p className="mt-3 wow slideUp" data-delay=".5" style={{ textAlign: "justify", fontWeight: "700", fontSize: "20px", color: "var(--primary-color)" }}>
                                    येत्या ७ फेब्रुवारी २०२६ रोजी कमळ या निशाणीसमोरील बटन दाबून आम्हा सर्वांना प्रचंड बहुमताने विजयी करा!
                                </p>
                                <p className="mt-3 wow slideUp" data-delay=".5" style={{ textAlign: "center", fontWeight: "800", fontSize: "22px" }}>
                                    आपला विश्वास — आमची ताकद!<br />
                                    विकास, सेवा आणि परिवर्तनासाठी एकजूट!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default AboutThree