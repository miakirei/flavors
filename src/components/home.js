import { Link, useLocation } from "react-router-dom";
import PrintRating from "./minicomps/printrating";

function Home({ db, cat }) {
    const best = db.filter(item => item.category.match(RegExp("best", "i")));
    const newarv = db.filter(item => item.category.match(RegExp("new", "i")));
    const sale = db.filter(item => item.sale > 0);

    const images = [
        "/images/banner/banner1.jpg",
        "/images/banner/banner2.jpg",
        "/images/banner/banner3.jpg",
        "/images/banner/banner4.jpg",
        "/images/banner/banner5.jpg",
        "/images/banner/banner6.jpg",
        "/images/banner/banner7.jpg",
        "/images/banner/banner8.jpg",
        "/images/banner/banner9.jpg",
        "/images/banner/banner10.jpg"
    ];
    const categories = cat.filter((item, index) => index < 6);

    //assigning location variable
    const location = useLocation();
    //destructuring pathname from location
    const { hash } = location;
    //Javascript split method to get the name of the path in array
    const splitLocation = hash.split("#");

    return (
        <div className="mb-5">
            <div id="slider" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#slider" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#slider" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#slider" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#slider" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    <button type="button" data-bs-target="#slider" data-bs-slide-to="4" aria-label="Slide 5"></button>
                    <button type="button" data-bs-target="#slider" data-bs-slide-to="5" aria-label="Slide 6"></button>
                    <button type="button" data-bs-target="#slider" data-bs-slide-to="6" aria-label="Slide 7"></button>
                    <button type="button" data-bs-target="#slider" data-bs-slide-to="7" aria-label="Slide 8"></button>
                    <button type="button" data-bs-target="#slider" data-bs-slide-to="8" aria-label="Slide 9"></button>
                    <button type="button" data-bs-target="#slider" data-bs-slide-to="9" aria-label="Slide 10"></button>
                </div>
                <div className="carousel-inner">
                    {images.map((image, index) => (
                        <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                            <img src={process.env.PUBLIC_URL + image} className="d-block w-100" alt={`Slide ${index + 1}`} style={{ objectFit: 'cover', height: '40vh' }} />
                        </div>
                    ))}
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#slider" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#slider" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            <div>
                <div className="d-flex flex-row container-fluid my-3">
                    <div className="sidenav-container">
                        <div className="offcanvas offcanvas-start" data-bs-scroll="true" tabIndex="-1" id="offcanvas" aria-labelledby="offcanvasLabel" style={{ height: "fit-content", width: "fit-content", top: "25%" }}>
                            <div className="offcanvas-body">
                                <nav id="sidenav" className="nav nav-pills flex-column sticky-top p-2">
                                    <a className={splitLocation[1] === "best" ? "m-1 nav-link active" : "m-1 nav-link"} href="#best"><div className="h4">Best Sellers</div></a>
                                    <a className={splitLocation[1] === "new" ? "m-1 nav-link active" : "m-1 nav-link"} href="#new"><div className="h4">New Arrivals</div></a>
                                    <a className={splitLocation[1] === "hot" ? "m-1 nav-link active" : "m-1 nav-link"} href="#hot"><div className="h4">Hot Deals</div></a>
                                    <a className={splitLocation[1] === "cat" ? "m-1 nav-link active" : "m-1 nav-link"} href="#cat"><div className="h4">Categories</div></a>
                                </nav>
                            </div>
                        </div>
                        <button className="btn p-0 sticky-top d-md-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvas" aria-controls="offcanvas" style={{ top: "40%", marginLeft: "-10px" }}><img src={process.env.PUBLIC_URL + "/images/sidebar.png"} alt="sidebar" /></button>
                        <nav id="sidenav" className="nav nav-pills flex-column sticky-top d-none d-md-block p-2" style={{ top: "25%" }}>
                            <a className={splitLocation[1] === "best" ? "m-1 nav-link active" : "m-1 nav-link"} href="#best"><div className="h4">Best Sellers</div></a>
                            <a className={splitLocation[1] === "new" ? "m-1 nav-link active" : "m-1 nav-link"} href="#new"><div className="h4">New Arrivals</div></a>
                            <a className={splitLocation[1] === "hot" ? "m-1 nav-link active" : "m-1 nav-link"} href="#hot"><div className="h4">Hot Deals</div></a>
                            <a className={splitLocation[1] === "cat" ? "m-1 nav-link active" : "m-1 nav-link"} href="#cat"><div className="h4">Categories</div></a>
                        </nav>
                    </div>

                    <div className="ps-1 ps-md-3 home-container">
                        <div data-bs-spy="scroll" data-bs-target="#sidenav" data-bs-smooth-scroll="true" className="scrollspy" tabIndex="0">
                            <div className="mb-3 me-md-3">
                                <h2 id="best">Best Sellers</h2>
                                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-3">
                                    {best.map(item => (
                                        <div className="col" key={item.id}>
                                            <Link to={`/flavors/products/${item.id}`} state={{ background: location }} className="text-decoration-none">
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

                            <div className="mb-3 me-md-3">
                                <h2 id="new">New Arrivals</h2>
                                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-3">
                                    {newarv.map(item => (
                                        <div className="col" key={item.id}>
                                            <Link to={`/flavors/products/${item.id}`} state={{ background: location }} className="text-decoration-none">
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

                            <div className="mb-3 me-md-3">
                                <h2 id="hot">Hot Deals</h2>
                                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-3">
                                    {sale.map(item => (
                                        <div className="col" key={item.id}>
                                            <Link to={`/flavors/products/${item.id}`} state={{ background: location }} className="text-decoration-none">
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

                            <div className="me-md-3">
                                <h2 id="cat">Categories</h2>
                                <div className="row">
                                    {categories.map((category, index) => (
                                        <div className="col-6 col-lg-4 col-xl-3">
                                            <Link to={`/flavors/categories${category.link}`} className="text-decoration-none text-dark" key={index}>
                                                <img src={process.env.PUBLIC_URL + category.img} className="w-100 thumb rounded" alt={category.name} />
                                                <div className="h5 text-center mt-1">{category.name}</div>
                                            </Link>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;