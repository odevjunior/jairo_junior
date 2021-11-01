import { useState } from "react";
export default function Projects() {
    const [file, setFile] = useState("");
    const projects = [
        {
            name: 'capitulo1',
            source: 'files/first.pdf'
        },
        {
            name: 'capitulo2',
            source: 'files/second.pdf'
        },
        {
            name: 'capitulo3',
            source: 'files/thirty.pdf'
        },
        {
            name: 'capitulo4',
            source: 'files/fourth.pdf'
        },
        {
            name: 'capitulo5',
            source: 'files/fiveth.pdf'
        },
        // {
        //     name: 'capitulo6',
        //     source: 'files/first.pdf'
        // },
    ];

    return (
        <section id="projects" className="projects w-full">
            <h1 className="hidden md:block ont-semibold text-5xl text-indigo-500 text-center md:my-14">Trabalho de Conclusão de Curso</h1>
            <h1 className="md:hidden font-semibold text-5xl text-indigo-500 text-center md:my-14">TCC</h1>

            <div className="w-full h-full flex flex-col md:flex-row align-center justify-center mb-14">
                <div className="left-side w-full md:w-4/12 flex flex-col flex-wrap align-center justify-center">
                    <h2 className="hidden md:block ont-semibold text-3xl text-indigo-500 text-center">Escolha um capitulo</h2>
                    <br />
                    <select className="hidden md:block  max-h-20 border-4 border-indigo-100 bg-indigo-500 rounded-lg shadow-xl text-indigo-100" onChange={(e) => setFile(e.target.value)}>
                        <option value="">Selecione uma opcao</option>
                        {projects.map((project,key) => (
                            <option value={project.source} className="text-indigo-50" key={key}>{project.name}</option>
                        ))}
                    </select>

                    <select 
                      className="md:hidden w-11/12  h-20 border-4 border-indigo-100 bg-indigo-500 rounded-lg shadow-xl text-indigo-100 mt-10a" 
                      onChange={(e) => window.open(e.target.value, '_blank')}>
                        <option value="">Selecione uma opcao</option>
                        {projects.map((project,key) => (
                            <option value={project.source} className="text-indigo-50" key={key}>{project.name}</option>
                        ))}
                    </select>
                    
                </div>
                <div className="iframe w-full md:w-8/12 h-pdfViewer">
                    <iframe src={file} className="hidden md:block w-11/12 rounded-lg shadow-xl" height="700px" frameBorder="0"/>
                </div>
            </div>
        </section>
    )
}