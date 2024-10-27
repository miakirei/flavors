import React, { useState, useEffect } from 'react';
import { Outlet, Link, useNavigate, useLocation } from "react-router-dom";
import { NavLink } from 'react-router-dom';
import Counter from "./minicomps/counter";

function Layout() {
    const { pathname } = useLocation();

    const getCurrentTime = () => {
        return new Intl.DateTimeFormat('en-GB', { dateStyle: 'full', timeStyle: 'long' }).format(new Date());
    }
    const [currentTime, setCurrentTime] = useState(getCurrentTime);
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(getCurrentTime);
        }, 1000);
        return () => {
            clearInterval(interval);
        };
    }, []);

    const [userLocation, setUserLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const getUserLocation = () => {
        // if geolocation is supported by the users browser
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    setUserLocation({ latitude, longitude });
                },
                // if there was an error getting the users location
                (error) => {
                    setErrorMsg(error.message);
                }
            );
        }
        // if geolocation is not supported by the users browser
        else {
            setErrorMsg('Geolocation is not supported by this browser.');
        }
    };

    const navigate = useNavigate();
    let [search, setSearch] = useState("");
    const handleSearch = (ev) => {
        ev.preventDefault();
        if (search) {
            navigate("/search", { state: { key: search }, replace: true });
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
            /* you can also use 'auto' behaviour
         in place of 'smooth' */
        });
    };

    return (
        <div className='d-flex flex-column min-vh-100'>
            <header onLoad={getUserLocation}>
                <nav className="navbar navbar-expand-xl bg-danger-subtle px-3">
                    <div className="container-fluid d-flex justify-content-between">
                        <Link to="/flavors" className="navbar-brand me-0">
                            <div className="d-flex fs-1 align-items-center">
                                <img src={process.env.PUBLIC_URL + "/images/logo.png"} alt="Logo" width="50" className="me-2" />
                                FLAVORS
                            </div>
                        </Link>
                        <Counter />

                        <button className="navbar-toggler order-lg-1" type="button" data-bs-toggle="collapse" data-bs-target=".navbars" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse order-lg-0 navbars fs-55" id="navbar1">
                            <ul className="navbar-nav ms-auto my-2 my-lg-0 navbar-nav-scroll">
                                <li className="nav-item me-2">
                                    <NavLink end activeclassname="active" to="/flavors" className="nav-link px-2">
                                        <i className="bi bi-house-fill"></i>
                                    </NavLink>
                                </li>
                                <li className="nav-item me-2 dropdown">
                                    <NavLink activeclassname="active" to={pathname.match(RegExp("/flavors/categories", "i")) ? "/flavors/categories" : "/flavors/products"} className="nav-link px-2 dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Products
                                    </NavLink>
                                    <ul className="dropdown-menu" style={{ backgroundColor: "mistyrose" }}>
                                        <li><a className="dropdown-item" href="/flavors/categories/spices">Spices</a></li>
                                        <li><a className="dropdown-item" href="/flavors/categories/mixes">Spice Blends</a></li>
                                        <li><a className="dropdown-item" href="/flavors/categories/chilies">Chilies</a></li>
                                        <li><a className="dropdown-item" href="/flavors/categories/peppers">Peppers</a></li>
                                        <li><a className="dropdown-item" href="/flavors/categories/herbs">Culinary Herbs</a></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li><a className="dropdown-item" href="/flavors/products">All Products</a></li>
                                        <li><a className="dropdown-item" href="/flavors/categories">All Categories</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item me-2">
                                    <NavLink activeclassname="active" to="/flavors/gallery" className="nav-link px-2">Gallery</NavLink>
                                </li>
                                <li className="nav-item me-2">
                                    <NavLink activeclassname="active" to="/flavors/about" className="nav-link px-2">About Us</NavLink>
                                </li>
                                <li className="nav-item me-2">
                                    <NavLink activeclassname="active" to="/flavors/contact" className="nav-link px-2">Contact Us</NavLink>
                                </li>
                                <li className="nav-item me-2">
                                    <NavLink activeclassname="active" to="/flavors/sitemap" className="nav-link px-2">Site Map</NavLink>
                                </li>
                            </ul>
                        </div>
                        <div className="collapse navbar-collapse navbars order-last" id="navbar2">
                            <form id='search' className="d-flex mb-2 mb-xl-0 ms-auto" role="search" onSubmit={(ev) => handleSearch(ev)}>
                                <input className="form-control me-2" type="search" placeholder="Search for a product..." aria-label="Search" onChange={(ev) => setSearch(ev.target.value)} />
                                <button className="btn btn-outline-success" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </nav>
            </header>

            <div>
                <Outlet />
            </div>

            <footer className="bg-warning-subtle text-muted mt-auto">
                <button className='scroll-to-top btn rounded-circle p-0' onClick={scrollToTop}><img width={"80px"} src={process.env.PUBLIC_URL + '/images/top.png'} alt='Top' /></button>
                <div className="container pt-3">
                    <div className="row mt-3">
                        <div className="col-lg-6 mx-auto mb-md-0 mb-4">
                            <div className='container row'>
                                <div className='col-4'><img src={process.env.PUBLIC_URL + "/images/logo.png"} alt="Logo" className="w-100" /></div>
                                <div className='col-8 ps-5'>
                                    <div className='d-flex flex-row'>
                                        <i className="bi bi-geo-alt-fill fs-1"></i>
                                        <div className='ms-3'>590 Cach Mang Thang Tam Street, <br />
                                            Ward 11, District 3, <br />
                                            Ho Chi Minh City, Vietnam</div>
                                    </div>
                                    <div className='d-flex flex-row'>
                                        <i className="bi bi-telephone-fill fs-1"></i>
                                        <div className='ms-3 mt-3'>0931 313 329</div>
                                    </div>
                                    <div className='d-flex flex-row '>
                                        <i className="bi bi-envelope-fill fs-1"></i>
                                        <div className='ms-3 mt-3'><a href="mailto:huynguyen89006@gmail.com" className="text-decoration-none text-danger">huynguyen89006@gmail.com</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 ps-5 mt-4 mt-lg-0 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">Our partners</h6>
                            <div className='row'>
                                <div className='col-sm-6 col-lg-12 col-xl-6'><img src={process.env.PUBLIC_URL + '/images/fpt.png'} className='object-fit-cover w-100' alt='FPT' /></div>
                                <div className='col-sm-6 col-lg-12 col-xl-6'><img src={process.env.PUBLIC_URL + '/images/aptech.png'} className='object-fit-cover w-100' alt='Aptech' /></div>
                            </div>
                        </div>
                        <div className="col-lg-2 ps-5 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-3">
                                Useful links
                            </h6>
                            <div className='row'>
                                <div className='col-6 col-lg-12'>
                                    <div className='mb-1'><a href="/flavors/products" className="text-reset text-decoration-none">All Products</a></div>
                                    <div className='mb-1'><a href="/flavors/categories" className="text-reset text-decoration-none">All Categories</a></div>
                                </div>
                                <div className='col-6 col-lg-12'>
                                    <div className='mb-1'><a href="/flavors/about" className="text-reset text-decoration-none">About Us</a></div>
                                    <div className='mb-1'><a href="/flavors/contact" className="text-reset text-decoration-none">Contact Us</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="marquee">
                            <div>
                                <span>{currentTime} || </span>
                                {userLocation && (<span>Latitude: {userLocation.latitude} Longitude: {userLocation.longitude}</span>)}
                                {errorMsg && (<span>Error getting user location: <span className="text-danger">{errorMsg}</span></span>)}
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="text-center pb-3">
                        © 2024 FLAVORS - All rights reserved.
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Layout;