

function Contact() {
    return (
        <div className="container mt-3 mb-5">
            <h2>Contact Information</h2>
            <hr />
            <div className="row">
                <div className="col-lg-6">
                    <div className="mb-3 d-flex bg-warning-subtle p-3 rounded-5">
                        <div className="rounded-circle bg-danger-subtle text-center" style={{ width: "80px", height: "80px" }}><i className="bi bi-geo-alt-fill" style={{ fontSize: "3em" }}></i></div>
                        <div className="ms-3"><div className="h4">Address:</div>
                            <div className="fs-55">
                                590 Cach Mang Thang Tam Street, <br />
                                Ward 11, District 3, <br />
                                Ho Chi Minh City, Vietnam
                            </div>
                        </div>
                    </div>
                    <div className="mb-3 d-flex bg-warning-subtle p-3 rounded-5">
                        <div className="rounded-circle bg-danger-subtle text-center" style={{ width: "80px", height: "80px" }}><i className="bi bi-telephone-fill" style={{ fontSize: "3em" }}></i></div>
                        <div className="ms-3"><div className="h4">Phone:</div>
                            <div className="fs-55">0931 313 329</div>
                        </div>
                    </div>
                    <div className="mb-3 d-flex bg-warning-subtle p-3 rounded-5">
                        <div className="rounded-circle bg-danger-subtle text-center" style={{ width: "80px", height: "80px" }}><i className="bi bi-envelope-fill" style={{ fontSize: "3em" }}></i></div>
                        <div className="ms-3"><div className="h4">Email:</div>
                            <div className="fs-55"><a href="mailto:huynguyen89006@gmail.com" className="text-decoration-none text-danger">huynguyen89006@gmail.com</a></div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <form className="bg-warning-subtle p-5 rounded-5">
                        <legend className="h3 mb-3">Leave a Message</legend>
                        <div className="mb-3">
                            <label htmlFor="" className="form-label">Name</label>
                            <input type="text" className="form-control" id="inputName" placeholder="Enter your name" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="inputEmail" placeholder="Enter your email address" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="" className="form-label">Message</label>
                            <textarea type="text" className="form-control" id="inputMessage" placeholder="Enter your message..." />
                        </div>
                        <button type="submit" className="btn btn-warning">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;