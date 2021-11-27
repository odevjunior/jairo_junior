export default function FatecBox() {
    return(
        <div className="w-screen bg-white flex flex-col p-10" id="fatec">
            <h1 className="font-semibold text-5xl text-indigo-500 text-center md:my-10">Fatec</h1>
            <div className="w-full">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29659.97118381945!2d-49.761100320593066!3d-21.68343928141937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94be15ecb135a5dd%3A0x66b807178c781125!2sFATEC%20Lins!5e0!3m2!1sen!2sbr!4v1637983795409!5m2!1sen!2sbr"
                    height="600" style={{border:0}} allowfullscreen="" loading="lazy"
                    className="w-full rounded-2xl shadow-lg "
                    >
                </iframe>
            </div>
        </div>
    )
}