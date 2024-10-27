import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import PrintRating from "./minicomps/printrating";

function Products({ db }) {
    const [list, setList] = useState(db);
    const location = useLocation();

    return (
        <div className="container-fluid mt-3 mb-5">
            <div className="h2 container">All Products
                <hr />
            </div>
            <div className="mx-3">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-3">
                    {list.map(item => (
                        <div className="col" key={item.id}>
                            <Link to={`/products/${item.id}`} state={{ background: location }} className="text-decoration-none">
                                <div className="card h-100">
                                    <div className={`card-header h6 ${item.category.match(RegExp("best", "i")) ? "bg-featured" : `${item.sale > 0 ? "bg-success-subtle" : `${item.category.match(RegExp("new", "i")) ? "bg-danger-subtle" : "bg-warning-subtle"}`}`}`}>
                                        {item.category.match(RegExp("best", "i")) ? "- Featured " : ""}
                                        {item.category.match(RegExp("new", "i")) ? "- New " : ""}
                                        {item.sale > 0 ? `- ${item.sale}% Off -` : "-"}
                                    </div>
                                    <div className="card-img-top">
                                        <img src={process.env.PUBLIC_URL + `/${item.image.i5}`} className="image-hover object-fit-cover" alt={item.name} style={{ width: "100%", height: "250px" }} />
                                        <img src={process.env.PUBLIC_URL + `/${item.image.i1}`} className="object-fit-cover" alt={item.name} style={{ width: "100%", height: "250px" }} />
                                    </div>
                                    <div className="card-body">
                                        <h4 className="card-title">{item.name}</h4>
                                        <h5 className="card-subtitle my-2 text-body-secondary">{item.sale > 0 ? <span><span className="text-decoration-line-through">${item.price}</span> {`$${item.price - item.price * item.sale / 100}`}</span> : `$${item.price}`} / {item.net} oz</h5>
                                        <p className="card-text">{item.short}</p>
                                    </div>
                                    <div className={`card-footer ${item.category.match(RegExp("best", "i")) ? "bg-featured" : `${item.sale > 0 ? "bg-success-subtle" : `${item.category.match(RegExp("new", "i")) ? "bg-danger-subtle" : "bg-warning-subtle"}`}`}`} title={`Rated ${(item.reviews.map(review => parseInt(review.rating)).reduce((a, b) => a + b, 0) / (item.reviews.map(review => parseInt(review.rating)).length)).toFixed(1)} out of 5`}>Rating:<span> </span>
                                        <PrintRating rating={(item.reviews.map(review => parseInt(review.rating)).reduce((a, b) => a + b, 0) / (item.reviews.map(review => parseInt(review.rating)).length)).toFixed(1)} />
                                        <span className="text-secondary"> ({item.reviews.length} Reviews)</span>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Products;