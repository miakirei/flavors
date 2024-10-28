import { useParams } from "react-router-dom";
import PrintRating from "./printrating";

function ProductInfo({ db }) {
    let { id } = useParams();
    const list = db.filter(item => item.id.match(RegExp(id, "i")));

    return (
        <div className="mt-3 mb-5">
            <div className="">
                {list.map(item => (
                    <div className="container" key={item.id}>
                        <div className={`ms-5 pt-2 pb-1 px-5 text-center rounded ${item.category.match(RegExp("best", "i")) ? "bg-featured" : `${item.sale > 0 ? "bg-success-subtle" : `${item.category.match(RegExp("new", "i")) ? "bg-danger-subtle" : "bg-warning-subtle"}`}`}`} style={{ width: "fit-content" }}>
                            <h1 className="fs-5">
                                {item.category.match(RegExp("best", "i")) ? "- Featured " : ""}
                                {item.category.match(RegExp("new", "i")) ? "- New " : ""}
                                {item.sale > 0 ? `- ${item.sale}% Off -` : "-"}
                            </h1>
                        </div>
                        <div className="">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div id="productCarousel" className="carousel slide" data-bs-ride="carousel">
                                        <div className="carousel-indicators">
                                            <button data-bs-target="#productCarousel" data-bs-slide-to="0" className="thumb active">
                                                <img src={process.env.PUBLIC_URL + `/${item.image.i1}`} className="d-block w-100 h-100 rounded" alt={`${item.name} 1`} />
                                            </button>
                                            <button data-bs-target="#productCarousel" data-bs-slide-to="1" className="thumb">
                                                <img src={process.env.PUBLIC_URL + `/${item.image.i2}`} className="d-block w-100 h-100 rounded" alt={`${item.name} 2`} />
                                            </button>
                                            <button data-bs-target="#productCarousel" data-bs-slide-to="2" className="thumb">
                                                <img src={process.env.PUBLIC_URL + `/${item.image.i3}`} className="d-block w-100 h-100 rounded" alt={`${item.name} 3`} />
                                            </button>
                                            <button data-bs-target="#productCarousel" data-bs-slide-to="3" className="thumb">
                                                <img src={process.env.PUBLIC_URL + `/${item.image.i4}`} className="d-block w-100 h-100 rounded" alt={`${item.name} 4`} />
                                            </button>
                                            <button data-bs-target="#productCarousel" data-bs-slide-to="4" className="thumb">
                                                <img src={process.env.PUBLIC_URL + `/${item.image.i5}`} className="d-block w-100 h-100 rounded" alt={`${item.name} 5`} />
                                            </button>
                                        </div>
                                        <div className="carousel-inner">
                                            <div className="carousel-item active">
                                                <img src={process.env.PUBLIC_URL + `/${item.image.i1}`} className="d-block w-100" alt={`${item.name} 1`} style={{ objectFit: 'contain', height: '500px' }} />
                                            </div>
                                            <div className="carousel-item">
                                                <img src={process.env.PUBLIC_URL + `/${item.image.i2}`} className="d-block w-100" alt={`${item.name} 2`} style={{ objectFit: 'contain', height: '500px' }} />
                                            </div>
                                            <div className="carousel-item">
                                                <img src={process.env.PUBLIC_URL + `/${item.image.i3}`} className="d-block w-100" alt={`${item.name} 3`} style={{ objectFit: 'contain', height: '500px' }} />
                                            </div>
                                            <div className="carousel-item">
                                                <img src={process.env.PUBLIC_URL + `/${item.image.i4}`} className="d-block w-100" alt={`${item.name} 4`} style={{ objectFit: 'contain', height: '500px' }} />
                                            </div>
                                            <div className="carousel-item">
                                                <img src={process.env.PUBLIC_URL + `/${item.image.i5}`} className="d-block w-100" alt={`${item.name} 5`} style={{ objectFit: 'contain', height: '500px' }} />
                                            </div>
                                        </div>
                                        <button className="carousel-control-prev" type="button" data-bs-target="#productCarousel" data-bs-slide="prev">
                                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                            <span className="visually-hidden">Previous</span>
                                        </button>
                                        <button className="carousel-control-next" type="button" data-bs-target="#productCarousel" data-bs-slide="next">
                                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                            <span className="visually-hidden">Next</span>
                                        </button>
                                    </div>
                                </div>
                                <div className="col-lg-6 mt-5 mt-lg-0 pt-4 pt-lg-0 mb-3">
                                    <div className="h2 mb-4 text-center">{item.name}</div>
                                    <div className="h4 d-flex justify-content-around mb-4">
                                        <div>{item.sale > 0 ? <span><span className="text-decoration-line-through">${item.price}</span> {`$${item.price - item.price * item.sale / 100}`}</span> : `$${item.price}`} / {item.net} oz</div>
                                        <div title={`Rated ${(item.reviews.map(review => parseInt(review.rating)).reduce((a, b) => a + b, 0) / (item.reviews.map(review => parseInt(review.rating)).length)).toFixed(1)} out of 5`}>Rating:<span> </span>
                                            <PrintRating rating={(item.reviews.map(review => parseInt(review.rating)).reduce((a, b) => a + b, 0) / (item.reviews.map(review => parseInt(review.rating)).length)).toFixed(1)} />
                                        </div>
                                    </div>
                                    <div className="mb-3">{item.description.d1}</div>
                                    <div className="mb-3">{item.description.d2}</div>
                                    <div className="mb-3">{item.description.d3}</div>
                                </div>
                            </div>
                            <div className="mt-xl-5 pt-xl-4 container px-lg-5">
                                <table className="table table-warning table-striped table-hover table-borderless rounded overflow-hidden">
                                    <tbody>
                                        <tr>
                                            <th scope="row">Also Called</th>
                                            <td>{item.altname}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Ingredients</th>
                                            <td>{item.ingredients}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Flavor Profile</th>
                                            <td>{item.flavor}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Recommended Uses</th>
                                            <td>{item.uses}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Cuisine</th>
                                            <td>{item.cuisine}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Country of Origin</th>
                                            <td>{item.origin}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="container mt-4 px-3 px-lg-5">
                            <div className="h5 mb-3">Product Reviews:<span className="text-secondary"> ({item.reviews.length} Reviews)</span></div>
                            {item.reviews.map((review, index) => (
                                <div className="row mb-3" key={index}>
                                    <div className="col-2 d-none d-lg-block text-center">
                                        <div className="h5">{review.name}</div>
                                        <div>{review.date}</div>
                                        <div title={`Rated ${review.rating} out of 5`}><PrintRating rating={parseInt(review.rating)} /></div>
                                    </div>
                                    <div className="col-10 d-none d-lg-block">
                                        <div className="h6">{review.title}</div>
                                        <div>{review.content}</div>
                                    </div>
                                    <div className="d-flex flex-row d-lg-none justify-content-between">
                                        <div className="h5">{review.name}</div>
                                        <div>{review.date}</div>
                                    </div>
                                    <div className="d-lg-none">
                                        <div className="d-flex flex-row justify-content-between">
                                            <div className="h6 my-1">{review.title}</div>
                                            <div className="h6 my-1" title={`Rated ${review.rating} out of 5`}><PrintRating rating={parseInt(review.rating)} /></div>
                                        </div>
                                        <div>{review.content}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProductInfo;