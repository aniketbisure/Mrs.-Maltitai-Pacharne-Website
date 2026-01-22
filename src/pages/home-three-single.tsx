import AboutThree from "@/components/sections/about/aboutThree"
import BlogsThree from "@/components/sections/blogs/blogsThree"
import HeroThree from "@/components/sections/heros/heroThree"
import ProjectsThree from "@/components/sections/projects/projectsThree"
import ServicesThree from "@/components/sections/services/servicesThree"

const HomeThreeSingle = () => {
    return (
        <>
            <HeroThree />
            <AboutThree />
            {/* <PartnersOne className="pt-0" /> */}
            <ServicesThree />
            {/* <WorkProcess /> */}
            {/* <AchievementTwo achievementWrapperClass="style-2" className="section-bg-2" /> */}
            <ProjectsThree />
            {/* <MarqueTwo className="section-padding" /> */}
            {/* <TeamesThree /> */}
            {/* <TestimonialThree /> */}
            <BlogsThree />
        </>
    )
}

export default HomeThreeSingle