import { useState } from "react";
export default function Projects() {
    const [file, setFile] = useState("files/first.pdf");
    const projects = [
        {
            name: '1. Introduçao',
            source: 'files/first.pdf'
        },
        {
            name: '2. Sistema de Boletins Informativos',
            source: 'files/second.pdf'
        },
        {
            name: '3. Projeto de Cabeamento de um Predio',
            source: 'files/thirty.pdf'
        },
        {
            name: '4. Analise SWOT e Canvas',
            source: 'files/fourth.pdf'
        },
        {
            name: '5. Sistema para Biblioteca',
            source: 'files/fiveth.pdf'
        },
        {
            name: '6. Projeto IMC com Flutter',
            source: 'files/sixth.pdf'
        },
        {
            name: 'Curriculo',
            source: 'files/curriculo.pdf'
        },
    ];

    return (
        <section id="projects" className="projects w-full pt-10">
            <h1 className="hidden md:block font-semibold text-5xl text-indigo-500 text-center md:my-14">Trabalho de Conclusão de Curso</h1>
            <h1 className="md:hidden font-semibold text-5xl text-indigo-500 text-center md:my-14">TCC</h1>

            <div className="w-full h-full flex flex-col md:flex-row align-center justify-center mb-14">
                <div className="left-side w-full md:w-4/12 flex flex-col flex-wrap align-center justify-center">
                    <h2 className="hidden md:block font-semibold text-3xl text-indigo-500 text-center m-0">Escolha Um Capitulo</h2>
                    <select className="hidden md:block m-10 w-10/12 h-10 border-4 border-indigo-100 bg-indigo-500 rounded-lg shadow-xl text-indigo-100" onChange={(e) => setFile(e.target.value)}>
                        <option value="">Selecione uma opcao</option>
                        {projects.map((project,key) => (
                            <option value={project.source} className="text-indigo-50" key={key}>{project.name}</option>
                        ))}
                    </select>

                    <select 
                      className="md:hidden w-12/12  h-30 border-4 border-indigo-100 bg-indigo-500 rounded-lg shadow-xl text-indigo-100 mt-10" 
                      onChange={(e) => window.open(e.target.value, '_blank')}>
                        <option value="">Selecione uma opcao</option>
                        {projects.map((project,key) => (
                            <option value={project.source} className="text-indigo-50" key={key}>{project.name}</option>
                        ))}
                    </select>
                    
                </div>
                <div className="iframe w-full md:w-8/12 h-pdfViewer">
                    <iframe src={file} className="hidden md:block w-11/12 rounded-lg shadow-2xl" height="700px" frameBorder="0"/>
                </div>
            </div>
        </section>
    )
}