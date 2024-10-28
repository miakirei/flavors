import { Link } from "react-router-dom";

function SiteMap({ db, cat }) {
    const list = cat.filter((item, index) => index > 0);

    return (
        <div className="container mt-3 mb-5">
            <div className="h2">Site Map</div>
            <hr />
            <div className="row">
                <div className="h4 col-6 col-lg-2">
                    <div className="mb-4"><Link to="/flavors" className="text-decoration-none text-danger">Home</Link></div>
                    <div className="mb-4"><Link to="/flavors/gallery" className="text-decoration-none text-danger">Gallery</Link></div>
                    <div className="mb-4"><Link to="/flavors/about" className="text-decoration-none text-danger">About Us</Link></div>
                    <div className="mb-4"><Link to="/flavors/contact" className="text-decoration-none text-danger">Contact Us</Link></div>
                    <div className=""><Link to="/flavors/sitemap" className="text-decoration-none text-danger">Site Map</Link></div>
                </div>
                <div className="col-6 col-lg-2">
                    <div className="h4 mb-3"><Link to="/flavors/categories" className="text-decoration-none text-danger">All Categories</Link></div>
                    {list.map(item => (
                        <div className="h6 mb-3"><Link to={`/flavors/categories${item.link}`} className="text-decoration-none text-danger">{item.name}</Link></div>
                    ))}
                </div>
                <div className="mt-5 mt-lg-0 col-lg-8 row"><div className="h4 mb-3"><Link to="/flavors/products" className="text-decoration-none text-danger">All Products</Link></div>
                    {db.map(item => (
                        <div className="h6 mb-3 col-6 col-md-4 col-lg-6 col-xl-4"><Link to={`/flavors/products/${item.id}`} className="text-decoration-none text-danger">{item.name}</Link></div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default SiteMap;