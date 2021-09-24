import { Swiper, SwiperSlide } from "swiper/react";

import './style.css'
//import 'swiper/css';

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
                {knowledgeList.map(item => (
                    <Swiper
                        spaceBetween={10}
                        slidesPerView={'auto'}
                        freeMode={true}
                    >
                    {item.map(item2 =>(
                        <SwiperSlide className='knowledge-item'>
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