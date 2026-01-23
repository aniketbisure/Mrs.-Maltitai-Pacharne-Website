export interface ProjectDataType {
    id: number;
    image: string;
    category: string;
    title: string;
    link: string;
    delay?: string;
}

export const projectsOneData: ProjectDataType[] = [
    {
        id: 1,
        image: "/img/new image/1.jpeg",
        category: "Solar energy",
        title: "Solar Industry in UK",
        link: "/project-details"
    },
    {
        id: 2,
        image: "/img/new image/2.jpeg",
        category: "Solar energy",
        title: "Greener Planet",
        link: "/project-details"
    },
    {
        id: 3,
        image: "/img/new image/3.jpeg",
        category: "Solar energy",
        title: "Solar Industry in USA",
        link: "/project-details"
    },
    {
        id: 4,
        image: "/img/new image/4.jpeg",
        category: "Hybrid energy",
        title: "Solar Power in UAE",
        link: "/project-details"
    },
    {
        id: 5,
        image: "/img/new image/5.jpeg",
        category: "Solar energy",
        title: "Greener Planet",
        link: "/project-details"
    },
];
