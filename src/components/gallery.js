

function Gallery({ db }) {

    return (
        <div className="container mt-3 mb-5">
            <h2>A Journey of Spices Around the Globe</h2>
            <hr />
            <div className="row">
                <div className="col-lg-8">
                    <div className="mb-3">Herbs and spices play a pivotal role in some of the world's favorite recipes, elevating dishes from mundane to unforgettable.</div>
                    <div className="mb-3">The diversity of flavors they bring to the table allows chefs and home cooks alike to experiment and create signature dishes that tantalize taste buds. Nature provides a stunning array of colors, and herbs and spices allow us to infuse dishes with vibrant hues. These coloring properties not only make dishes visually appealing but also enhance the sensory experience of eating.</div>
                    <div className="mb-3">Let us show you a sneek peek at how our spices and organic products can help complement your dishes, whether you prefer American, European, Asian or any various other cuisines around the world.</div>
                </div>
                <div className="col-lg-4">
                    <img src={process.env.PUBLIC_URL + "/images/gallery/main.jpg"} className="w-100" alt="" title="" />
                </div>
            </div>

            <div className="">
                {db.map(items => (
                    <div className="mb-4" key={items.id}>
                        <h3>{items.title}</h3>
                        <div className="row">
                            <div className="col-lg-6">
                                <iframe width="100%" height="400px" src={items.video} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                                <div>{items.viddesc}</div>
                            </div>
                            <div className="d-flex flex-row flex-wrap mt-3 mt-lg-0 col-lg-6">
                                {items.image.map((item, index) => (
                                    <a href="#!" type="button" className="w-25 p-1 rounded thumb" data-bs-toggle="modal" data-bs-target={`#${items.id}${index + 1}Modal`} key={index}>
                                        <img src={process.env.PUBLIC_URL + item.img} height="100px" className="object-fit-cover w-100 shadow rounded" alt={`Pho ${index + 1}`} />
                                    </a>
                                ))}
                                {items.image.map((item, index) => (
                                    <div className="" key={index}>
                                        <div className="modal fade" id={`${items.id}${index + 1}Modal`} tabIndex="-1" aria-labelledby={`${items.title}${index + 1}ModalLabel`} aria-hidden="true">
                                            <div className="modal-dialog modal-lg modal-dialog-centered">
                                                <div className="modal-content">
                                                    <div className="modal-header">
                                                        <img src={process.env.PUBLIC_URL + item.img} className="object-fit-cover w-100" alt={`Pho ${index + 1}`} />
                                                    </div>
                                                    <div className="modal-body">
                                                        <div>{item.desc}</div>
                                                    </div>
                                                    <div className="modal-footer">
                                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Gallery;