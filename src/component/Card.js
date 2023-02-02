import Location from "../images/location.png"

function Card(props) {
    return(
        <div className="card">
            <div className="card-img">
                <img src={props.imageUrl} className="coverImg" alt="coverImg"/>
            </div>
            <div className="card-content">
                <div className="card-location">
                    <img className="location-icon" src={Location} alt="location"/>
                    <p className="location-country">{props.location}</p>
                    <a href={props.googleMapsUrl} rel="noreferrer" target="_blank" className="location-map">View on map</a>
                </div>
                <h1 className="title">{props.title}</h1>
                <p className="card-date">{props.startDate} - {props.endDate}</p>
                <p className="card-description">
                    {props.description}
                </p>
            </div>
        </div>
    )
}

export default Card