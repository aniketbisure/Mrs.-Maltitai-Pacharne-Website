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
                                <img src="/img/about/image1.jpeg" alt="about-img" />
                                <AboutVideoPopup />
                            </div>
                        </div>
                        <div className="col-lg-6 mt-4 mt-lg-0">
                            <div className="about-content">
                                <SectionTitle>
                                    <SectionTitle.SubTitle>ABOUT US</SectionTitle.SubTitle>
                                    <SectionTitle.Title>Mrs. Maltitai Baburaoji Pacharne</SectionTitle.Title>
                                </SectionTitle>
                                <p className="mt-3 mt-md-0 wow slideUp" data-delay=".5" style={{ textAlign: "justify", fontWeight: "500" }}>
                                    भारतीय संस्कृती, राष्ट्रवाद, सामाजिक सलोखा आणि सुशासन या मूलभूत मूल्यांपासून प्रेरणा घेऊन भारतीय जनता पक्षाच्या (भाजपा) निष्ठावान नेत्या सौ. मालतीताई पाचारणे या लोकसेवेला समर्पित व जनतेकेंद्रित नेतृत्वाचे प्रतीक म्हणून कार्यरत आहेत. त्यांचा सार्वजनिक जीवनातील प्रवास हा वैयक्तिक महत्त्वाकांक्षेचा नसून समाज व राष्ट्रउभारणीसाठीच्या जबाबदारीतून घडलेला आहे.

                                    राजकारण हे सत्तेचे साधन नसून सेवेचे माध्यम आहे, असा मालतीताईंचा ठाम विश्वास आहे. “सबका साथ, सबका विकास, सबका विश्वास” या भाजपच्या विचारसरणीच्या मार्गदर्शनाखाली त्या समता, सन्मान व पारदर्शकतेच्या मूल्यांवर काम करतात. प्रत्यक्ष जनतेशी संवाद साधणे, स्थानिक प्रश्न समजून घेणे आणि त्यावर ठोस उपाययोजना करणे, यामध्ये त्यांचे नेतृत्व स्पष्टपणे दिसून येते.

                                    मा. पंतप्रधान श्री नरेंद्र मोदीजी यांच्या दूरदर्शी नेतृत्वातून प्रेरणा घेत आणि भाजपच्या राष्ट्रविकास व सामाजिक उत्थानाच्या बांधिलकीचा वारसा पुढे नेत, खरे राजकारण समाजसेवेतूनच सुरू होते, या विचारावर मालतीताई ठामपणे कार्यरत आहेत.
                                </p>
                                <p className="mt-3 mt-md-0 wow slideUp" data-delay=".5" style={{ textAlign: "justify", fontWeight: "500" }}>
                                    गरिब व वंचित घटकांना मदत करणे, महिलांचे सक्षमीकरण, युवकांना प्रोत्साहन देणे, ज्येष्ठ नागरिकांची काळजी घेणे आणि उपेक्षित समाजघटकांच्या पाठीशी ठामपणे उभे राहणे — या सर्व क्षेत्रांमध्ये मालतीताईंचे कार्य विस्तारलेले आहे. विविध सामाजिक व विकासात्मक उपक्रमांच्या माध्यमातून त्यांनी अनेकांचे जीवनमान उंचावले असून नागरिकांमध्ये विश्वास, आत्मविश्वास आणि एकतेची भावना निर्माण केली आहे.

                                    सौ. मालतीताई पाचारणे यांच्यासाठी नेतृत्व म्हणजे पद किंवा प्रसिद्धी नव्हे —
                                    ते म्हणजे सेवा, शिस्त आणि भारतीय जनता पक्षाच्या विचारसरणीप्रती तसेच राष्ट्राच्या प्रगतीप्रती असलेली अढळ निष्ठा होय.
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