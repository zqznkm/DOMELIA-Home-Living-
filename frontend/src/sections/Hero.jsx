import '../styles/Hero.css';

function Hero() {
    return (
        <section className="hero">
            <div className="heroContent">
                <p className="heroSubtitle">
                    HOME & LIVING
                </p>

                <h1>
                    Предметы
                    <br />
                    для спокойного дома
                </h1>

                <p className="heroText">
                    Вещи, которые делают каждый день
                    немного уютнее.
                </p>

                <a href="#catalog" className="heroButton">
                    Смотреть каталог
                </a>
            </div>
        </section>
    );
}

export default Hero;