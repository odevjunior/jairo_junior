import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function WhoIAm() {
    return (
        <section id="who-am-i" className="flex flex-col md:flex-row w-full bg-indigo-50">
            <div className=" w-full md:w-1/2 flex flex-row flex-wrap justify-center align-center py-10">
                <div className=" h-1/2 hidden md:flex flex-row md:flex-wrap justify-center align-center">
                    <img src="/perfil2.jpeg" alt="" className="w-72 h-72 rounded-3xl shadow-lg m-4 border-4 border-white animate__animated animate__fadeInTopLeft"/>
                    <img src="/perfil3.jpeg" alt="" className="w-72 h-72 rounded-3xl shadow-lg m-4 border-4 border-white animate__animated animate__fadeInTopRight"/>
                    <img src="/perfil4.jpeg" alt="" className="w-72 h-72 rounded-3xl shadow-lg m-4 border-4 border-white animate__animated animate__fadeInBottomLeft"/>
                    <img src="/perfil4.jpeg" alt="" className="w-72 h-72 rounded-3xl shadow-lg m-4 border-4 border-white animate__animated animate__fadeInBottomRight"/>
                </div>

                <Swiper 
                  className="w-screen h-1/2 md:hidden"
                  slidesPerView ={2}
                  autoplay ={true}
                  freeMode={true}
                  loop={true}
                >
                    <SwiperSlide><img src="/perfil2.jpeg" alt="" className="w-44 h-44 rounded-2xl shadow-xl m-4 border-4" /></SwiperSlide>
                    <SwiperSlide><img src="/perfil3.jpeg" alt="" className="w-44 h-44 rounded-2xl shadow-xl m-4 border-4"/></SwiperSlide>
                    <SwiperSlide><img src="/perfil4.jpeg" alt="" className="w-44 h-44 rounded-2xl shadow-xl m-4 border-4"/></SwiperSlide>
                    <SwiperSlide><img src="/perfil4.jpeg" alt="" className="w-44 h-44 rounded-2xl shadow-xl m-4 border-4"/></SwiperSlide>
                </Swiper>
            </div>
            <div className="p-3 mb-5 w-full md:w-1/2 flex flex-col justify-center align-center">
                <h1 className="font-semibold text-5xl text-indigo-500 text-center md:my-10">Quem sou eu?</h1>
                <p className="text-justify text-gray-600 md:w-11/12">Olá, sou Jairo Junior, desenvolvedor, músico e entusiasta de tecnologia, amo tudo vinculado com programação, e estou na jornada para me tornar um desenvolvedor completo em diferentes áreas.
Até essa fase do jogo da vida, tenho conhecimento em Java, JavaScript, PHP, MySQL, Postgres, Spring, React entre outras tecnologias, estou buscando me completar a cada dia, e no que eu puder te ajudar é só dar um grito aqui fechado ? ;]</p>
            </div>
        </section>
    )
}