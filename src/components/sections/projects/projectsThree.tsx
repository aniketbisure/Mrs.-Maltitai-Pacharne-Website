import { useState } from "react";
import { projectsThreeData } from "@/db/projectsThreeData"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination } from "swiper/modules"
import 'swiper/css'
import 'swiper/css/pagination'
import ProjectCard from "./projectCard"
import ModalVideo from 'react-modal-video';

const ProjectsThree = () => {
    const [isOpen, setOpen] = useState(false);
    return (
        <section id="gallery" className="project-section-3 pb-0 fix bg-cover">
            <div className="container">

                <div className="project-wrapper style-2 mb-4">
                    <Swiper
                        spaceBetween={30}
                        speed={1500}
                        loop={true}
                        autoplay={{
                            delay: 1500,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            el: '.dot-2',
                            clickable: true,
                        }}
                        breakpoints={{
                            1199: { slidesPerView: 4 },
                            991: { slidesPerView: 2 },
                            767: { slidesPerView: 2 },
                            650: { slidesPerView: 2 },
                            575: { slidesPerView: 1 },
                            0: { slidesPerView: 1 },
                        }}
                        modules={[Autoplay, Pagination]}
                    >
                        {projectsThreeData.map((project) => (
                            <SwiperSlide key={project.id}>
                                <ProjectCard project={project} className="style-2" iconCalss="arrow-icon-2" />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
            <ModalVideo
                channel="youtube"
                youtube={{ mute: 0, autoplay: 0 }}
                isOpen={isOpen}
                videoId="Cn4G2lZ_g2I"
                onClose={() => setOpen(false)}
            />
        </section >

    )
}

export default ProjectsThree