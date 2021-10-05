import './style.css'

import { Swiper, SwiperSlide } from "swiper/react";

const Projects = () => {

    const projects = [
        {
            title: "proj1",
            file: "proj1.pdf",
            banner: "images/perfil3.jpg"
        },
        {
            title: "proj2",
            file: "proj2.pdf",
            banner: "images/perfil3.jpg"
        },
        {
            title: "proj3",
            file: "proj3.pdf",
            banner: "images/perfil3.jpg"
        },
        {
            title: "proj4",
            file: "proj4.pdf",
            banner: "images/perfil3.jpg"
        },
        {
            title: "proj5",
            file: "proj5.pdf",
            banner: "images/perfil3.jpg"
        },
        {
            title: "proj6",
            file: "proj6.pdf",
            banner: "images/perfil3.jpg"
        },
    ]

    const openPdf = (file) => {
        window.open(`files/${file}`)
    }

    return (
        <section id="projects">
            <h2>Projetos</h2>
            <span>Esses sao os projetos desenvolvidos durante meu curso de formacao</span>
            <div id="projects-section">
                <Swiper
                  spaceBetween={15}
                  slidesPerView={3}
                  freeMode={true}
                  autoplay={true}
                  id="slides-section"
                >
                    {projects.map((project, index) => (
                        <SwiperSlide key={index + 1} className="project-slide" onClick={() => openPdf(project.file)}>
                            <img src={'/images/documents.jpg'} alt={project.title + "image"} />
                            <h3>{project.title}</h3>
                        </SwiperSlide>              
                    ))}
                </Swiper>
            </div>
        </section>
    )
}

export default Projects