/* eslint-disable @next/next/no-img-element */
export default function Header() {

    return (
        <section id="header" className="bg-gray-300 w-full h-screen flex justify-center align-center">
            <div id="header-menu" className="w-full flex self-center flex-row justify-center fixed inset-x-0 top-0 bg-white shadow-lg z-10 p-3">
                <div className="md:flex flex-row justify-center my-1 hidden">
                    <a href="#who-am-i" className="md:mx-2 hover:text-indigo-900 text-indigo-500 font-medium md:text-lg">Quem sou eu</a>
                    <a href="#knowledge" className="md:mx-2 hover:text-indigo-900 text-indigo-500 font-medium md:text-lg">Conhecimentos</a>
                    <a href="#career" className="md:mx-2 hover:text-indigo-900 text-indigo-500 font-medium md:text-lg">Carreira</a>
                    <a href="#contact" className="md:mx-2 hover:text-indigo-900 text-indigo-500 font-medium md:text-lg">Contatos</a>
                    <a href="#projects" className="md:mx-2 hover:text-indigo-900 text-indigo-500 font-medium md:text-lg">TCC</a>
                    <a href="#fatec" className="md:mx-2 hover:text-indigo-900 text-indigo-500 font-medium md:text-lg">Fatec</a>
                </div>
            </div>
            <div id="banner" className="w-full flex justify-center align-center flex-col md:flex-row h-full bg-gradient-to-r from-indigo-700 to-indigo-400">
                <div className="left-side w-full md:w-1/2 flex flex-col justify-center align-center mt-10 animate__animated animate__fadeInLeftBig">
                    <h1 className="font-bold text-8xl text-gray-100 text-center">Jairo Junior</h1>
                    <span className="font-semibold text-6x1 text-center text-gray-100">Programador, músico e seguidor de Jesus Cristo</span>
                </div>
                <div className="right-side w-full md:w-1/2 flex flex-col h-full justify-center items-center">
                    <div className="w-7/12 p-0.5 bg-white shadow-xl rounded-3xl animate__animated animate__fadeInRight">
                        <img src="/perfil1.jpeg" alt="my foto" className="w-full rounded-3xl shadow-xl"/>
                    </div>
                </div>
            </div>
            
        </section>
   )
}