import '../styles/Categories.css';

const categories = [
    'Кухня',
    'Декор',
    'Текстиль',
    'Хранение',
    'Ванная'
];

function Categories() {
    return (
        <section className="categories" id="catalog">
            <div className="container">

                <div className="sectionHeader">
                    <p>КАТЕГОРИИ</p>
                    <h2>Всё для уютного дома</h2>
                </div>

                <div className="categoriesGrid">
                    {categories.map((category) => (
                        <a
                            href="#"
                            className="categoryCard"
                            key={category}
                        >
                            <span>{category}</span>
                            <span className="categoryArrow">→</span>
                        </a>
                    ))}
                </div>

            </div>
        </section>
    );
}

export default Categories;