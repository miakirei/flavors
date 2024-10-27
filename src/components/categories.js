import { Link } from "react-router-dom";

function Categories({ cat }) {
    const list = cat.filter((item, index) => index > 0);

    return (
        <div className="container mt-3 mb-5">
            <div className="h2">All Categories</div>
            <hr />
            <div className="row">
                {list.map((category, index) => (
                    <div className="col-6 col-md-4 col-xl-3">
                        <Link to={`/categories${category.link}`} className="text-decoration-none text-dark" key={index}>
                            <img src={category.img} className="w-100 rounded thumb" alt={category.name} />
                            <div className="h5 text-center mt-1">{category.name}</div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Categories;