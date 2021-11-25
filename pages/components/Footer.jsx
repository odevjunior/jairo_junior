export default function Footer() {
    return (
        <section className="w-screen h-96 bg-indigo flex flex-col align-center justify-center bg-gradient-to-r to-indigo-700 from-indigo-400">
            <h1 className="font-semibold text-5xl text-white text-center my-10">Contatos</h1>
            <div className="social-links flex flex-row align-center justify-center">
                <a href="https://www.linkedin.com/in/jairo-junior-496a4b14a/" className="w-28 h-28 m-5 flex flex-col align-center justify-center bg-white rounded-lg shadow-md">
                    <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" className="w-14 self-center" alt="linkedin logo" />
                    <span className="text-center text-indigo-500 font-medium mt-1">LinkedIn</span>
                </a>
                <a href="https://www.facebook.com/jairinho.junior.12/" className="w-28 m-5 flex flex-col align-center justify-center bg-white rounded-lg shadow-md">
                    <img src="https://seeklogo.com/images/F/facebook-icon-logo-C61047A9E7-seeklogo.com.png" className="w-14 self-center" alt="facebook logo" />
                    <span className="text-center text-indigo-500 font-medium mt-1">Facebook</span>
                </a>
                <a href="https://www.instagram.com/jairojunior.dev/" className="w-28 m-5 flex flex-col align-center justify-center bg-white rounded-lg shadow-md">
                    <img src="https://logodownload.org/wp-content/uploads/2017/04/instagram-logo.png" className="w-14 self-center" alt="Instagram logo" />
                    <span className="text-center text-indigo-500 font-medium mt-1">Instagram</span>
                </a>
                <a href="https://github.com/odevjunior" className="w-28 m-5 flex flex-col align-center justify-center bg-white rounded-lg shadow-md">
                    <img src="https://github.githubassets.com/images/modules/logos_page/Octocat.png" className="w-14 self-center" alt="GitHub logo" />
                    <span className="text-center text-indigo-500 font-medium mt-1">GitHub</span>
                </a>
            </div>
            <div className=""></div>
        </section>
    )
}