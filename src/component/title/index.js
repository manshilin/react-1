import "./index.css"

export default function Title({
    title,
    rating,
    reviews,
    city,
    country,
    superhost}) {
    return (
        <div className="title">
            <h1 className="title__text">{title}</h1>
            <div className="title__sub-block">
                <span className="title__sub-value">{rating}</span>
                <span className="title__sub-value">{reviews}</span>
                <span className="title__sub-value"> 
                    {city} {country}
                </span>
            {superhost && <span className="title__sub-value">Супер-хост</span>}
            </div>
        </div>

    );
}
