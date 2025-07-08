import mapMark from "../map_mark.png";
import "./entry.css";

export default function Entry(props) {
  return (
    <>
      <article className="entry"> 
        <img src={props.imgSrc} alt={props.imgAlt} className="image" /> 

        <div className="entry-content">
          <div className="map">
            <img src={mapMark} alt="map" className="map-icon" aria-hidden="true" /> 
            <span className="country">{props.country}</span>
            <a
              href={props.googleMapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="link"
              aria-label="View Mount Fuji on Google Maps (opens in a new tab)"
            >
              View on Google Maps
            </a>
          </div>
          <div className="detail">
            <h2 className="entry-place">{props.title}</h2>
            <p className="dates"> 
              {props.dates}
            </p>
            <p className="entry-detail">
              {props.text}
            </p>
          </div>
        </div>
      </article>
      <hr className="entry-separator" />
    </>
  );
}