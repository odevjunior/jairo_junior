export default function Career() {
    const jobs = [
        {
            companyName:"AGTI",
            id:"agti",
            year:"05/2019-05/2020",
            description:"Aqui eu criava plugins para Prestashop, ou seja, criaçao de plugins para lojas virtuais usando PHP",
            photo:"https://www.agti.eng.br/img/agti-agencia-de-ti-logo-1510862144.jpg"
        },
        {
            companyName:"Vibe",
            id:"vibe",
            description:"Trabalhei tanto no backend quanto no frontend no backend usando JAva a Play Framework e no frontend AngularJS",
            year:"02/2020-10/2020",
            photo:"https://vibesaude.com/wp-content/uploads/2021/07/cropped-logo_VIBE.png"
        },
        {
            companyName:"Tudu",
            id:"tudu",
            description:"Foi um emprego mais focado em frontend fazendo manutençoes em toda a pagina da loja",
            year:"10/2020-05/2021",
            photo:"https://www.tudu.com.br/wp-content/themes/phooto/exxmo/assets/images/tudu.png?v=1637985959"
        },
        {
            companyName:"Mercado Livre",
            id:"meli",
            description:"Agora sou desenvolvedor backend criando aplicaçoes escalaveis e focadas em performance, usando Kotlin e o mais novo framework chamado Micronaut",
            year:"05/2021",
            photo:"https://static.vagas.com.br/portais-de-carreira/images/components/minicards/original/mercado-livre-logo.png?1621549466"
        },
    ]
    return (
        <div className="flex flex-col justify-center align-center mb-32" id="career">
            <h1 className="font-semibold text-5xl text-indigo-500 text-center md:my-10">Carreira</h1>
            <div className="flex flex-col md:flex-row justify-center align-center">
            {jobs.map(job => (
                <>
                    
                    <div className="flex flex-col my-5 md:my-0 mx-10 shadow-2xl rounded-lg">
                        <div className="w-full h-40 rounded-lg bg-indigo-500 flex flex-col justify-center align-center mb-5">
                            <div className="w-11/12 h-36 rounded-lg bg-white self-center flex p-1" >
                                <img className="w-full self-center"
                                    src={job.photo} alt="" />
                            </div>
                        </div>
                        <div className="p-4 h-64 flex flex-col justify-between align-center">
                            <div className="font-black text-base text-indigo-500">{job.companyName}</div>
                            <div className="w-48">{job.description}</div>
                            <div className="font-black text-base text-indigo-500">{job.year}</div>
                        </div>
                    </div>
                    
                </>
            ))}
                
            </div>
        </div>
    )
}