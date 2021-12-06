export default function Knowledge() {
    const images = [
        {
            logo: "https://www.mbejda.com/content/images/2015/12/node.png",
            name: 'NodeJS'
        },
        {
            logo: "https://www.celsonunes.com.br/wp-content/uploads/2018/05/java-logo.png",
            name: "Java"
        },
        {
            logo: "http://springframework.guru/wp-content/uploads/2015/02/spring-framework-project-logo.png",
            name: "Spring"
        },
        {
            logo: "https://www.opencodez.com/wp-content/uploads/2019/08/Micronaut.png",
            name: "Micronaut"
        },
        {
            logo: "https://pngimg.com/uploads/mysql/mysql_PNG11.png",
            name: "MySQL"
        },
        {
            logo: "https://miro.medium.com/max/500/1*cPh7ujRIfcHAy4kW2ADGOw.png",
            name: "React"
        },
        {
            logo: "https://www.w3.org/html/logo/downloads/HTML5_Badge_512.png",
            name: "HTML"
        },
        {
            logo: "https://logospng.org/download/css-3/logo-css-3-2048.png",
            name: "CSS"
        },
        {
            logo: "http://www.lasvegascoder.com/img/tailwindcss-logo.png",
            name: "TailwindCSS"
        },
        {
            logo: "https://www.postgresql.org/media/img/about/press/elephant.png",
            name: "PostgreSQL"
        },
        {
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Unofficial_JavaScript_logo.svg/480px-Unofficial_JavaScript_logo.svg.png",
            name: "JavaScript"
        }
        
    ];
    return(
        <section id="knowledge" className="bg-gradient-to-r to-indigo-700 from-indigo-400 w-full flex flex-row justify-center align-center py-10">
            <h1 className="font-semibold text-5xl text-white text-center my-10 w-5/12 self-center">Conhecimentos</h1>
            <div className="flex flex-row flex-wrap justify-center align-center self-center w-full md:w-7/12 mb-10 px-10">
                {images.map((image, key) => (
                    <div className=" w-36 h-44 md:w-44 md:h-48 p-4 flex flex-col text-center rounded-2xl shadow-lg m-4 bg-indigo-50 flex justify-center align-center" key={key}>
                        <img src={image.logo} alt="" className="w-full" />
                        <span className="font-medium text-xl mt-1 text-indigo-500">{image.name}</span>
                    </div>
                ))}
            </div>
        </section>
    )
}
