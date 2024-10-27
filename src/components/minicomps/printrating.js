

function PrintRating({ rating }) {
    let content = [];
    for (let index = 0; index < parseInt(rating); index++) {
        content.push(<i key={index} className="bi bi-star-fill text-warning"></i>);
    }
    if (parseFloat(rating) > parseInt(rating)) {
        content.push(<i key={5} className="bi bi-star-half text-warning"></i>);
    }
    return content;
}

export default PrintRating;