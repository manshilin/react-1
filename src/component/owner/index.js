import "./index.css"

export default function Owner({
    name,
    image,
    response_rate,
    response_time,
    info,
    phone,}) {
    return (
        <div className="title">
            <h1 className="title__text">Господар - {name}</h1>
            <div className="title__sub-block">
                <img className="title__img" src={image} alt="owner"/>
                <span className="title__sub-value">{phone}</span>
                <span className="title__sub-value">{response_time}</span>
                <span className="title__sub-value">{response_rate}</span>
              </div>  
            <div className="title__sub-value">{info}</div>
            
        </div>

    );
}
