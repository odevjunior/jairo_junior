import { Swiper, SwiperSlide } from "swiper/react";

import './style.css'

const KnowLedge = () => {
    const knowledgeList = [[
        {
            title: 'Java',
            logo: 'java-logo.png'
        },
        {
            title: 'JavaScript',
            logo: 'js-logo.png'
        },
        {
            title: 'Git',
            logo: 'git-logo.png'
        },
        {
            title: 'NodeJS',
            logo: 'nodejs.png'
        }],[
        {
            title: 'Spring',
            logo: 'spring-logo.png'
        },
        {
            title: 'React JS',
            logo: 'react-logo.png'
        },
        {
            title: 'MySQL',
            logo: 'mysql-logo.png'
        },
        {
            title: 'Postgres',
            logo: 'postgres-logo.png'
        }]
    ]
    
    return (
        <section id='knowledge'>
            <div id='text-side'>
                <h2>Conhecimento</h2>
                <span>Isso é um pouco do que eu sei</span>
            </div>
            <div id="logos-side">
                {knowledgeList.map((item, index) => (
                    <Swiper
                        spaceBetween={10}
                        slidesPerView={2}
                        freeMode={true}
                        key={index + 1}
                    >
                    {item.map((item2, index) =>(
                        <SwiperSlide key={index + 1} className='knowledge-item'>
                            <img src={`/images/logos/${item2.logo}`} alt={`${item2.title} logo`} />
                            <span>{item2.title}</span>
                        </SwiperSlide>
                    ))}
                    </Swiper>                   
                ))}
                
            </div>
            
        </section>
    )
}


export default KnowLedge