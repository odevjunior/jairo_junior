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
            photo:"https://seeklogo.com/images/M/mercado-livre-logo-D1DC52B13E-seeklogo.com.png"
        },
    ]
    return (
        <div className="h-96 flex flex-col justify-center align-center mb-32" id="career">
            <h1 className="font-semibold text-5xl text-indigo-500 text-center md:my-10">Carreira</h1>
            <div className="flex flex-row justify-center align-center">
            {jobs.map(job => (
                <>
                    <div className="w-10 h-2 bg-indigo-500 self-center -m-1"></div>
                    <div className="w-40 h-40 rounded-full bg-indigo-500 flex flex-col justify-center align-center"  data-tooltip-target={`tooltip-${job.id}`}  data-tooltip-placement="bottom" data-tooltip-style="light">
                        <div className="w-36 h-36 rounded-full bg-white self-center flex p-1" >
                            <img className="w-22 self-center"
                                src={job.photo} alt="" />
                        </div>
                    </div>
                    <div id={`tooltip-${job.id}`} role="tooltip" class="tooltip absolute z-10 inline-block bg-white font-medium shadow-sm text-gray-900 border border-4 border-indigo-500 shadow-lg py-2 px-3 text-sm rounded-lg opacity-0 invisible">
                        <span className="font-black text-base text-indigo-500">{job.companyName}</span>
                        <br />
                        <p className="w-48">{job.description}</p>
                        <br />
                        <span className="font-black text-base text-indigo-500">{job.year}</span>
                        <div class="tooltip-arrow" data-popper-arrow></div>
                    </div>
                    <div className="w-10 h-2 bg-indigo-500 self-center -m-1"></div>
                </>
            ))}
                
            </div>
        </div>
    )
}