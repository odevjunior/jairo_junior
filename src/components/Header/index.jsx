import './style.css';

const Header = () => (
    <section id="header">
        <div id="text-side">
            <h1>Jairo Junior</h1>
            <span>Desenvolvedor em busca da senioridade</span>
        </div>
        <div id="image-side">
            <img src="/images/banner.jpg" alt="banner initial background white with a green plant and some books in front" />
            <span>
                Photo by <a href="https://unsplash.com/@alexlvrs?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Alex Lvrs</a> on <a href="https://unsplash.com/s/photos/minimalist?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
            </span>
        </div>
    </section>
)

export default Header;