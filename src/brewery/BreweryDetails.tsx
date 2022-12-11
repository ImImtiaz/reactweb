import { useState } from "react";
import { useParams } from "react-router-dom";
import config from "../config";
import { Brewery } from "../types/brewery";
// import GoogleMapReact from 'google-map-react';

const MapMarkerReactComponent: React.FC<{ text: any, lat: number, lng: number }> = ({ text }) => <div>hi</div>;

const BreweryDetails: React.FC<{ brewery: Brewery }> = ({ brewery }) => {

    const [mapPath, setMapPath] = useState<string>(
        `https://maps.google.com/maps?q=${brewery.name}&t=&z=13&ie=UTF8&iwloc=&output=embed`
    );
    if(`https://maps.google.com/maps?q=${brewery.name}&t=&z=13&ie=UTF8&iwloc=&output=embed` != mapPath) {
        setMapPath(`https://maps.google.com/maps?q=${brewery.name}&t=&z=13&ie=UTF8&iwloc=&output=embed`);
    }

    return (
        <div className="card shadow-sm pd-5 m-card">
            <div className="car-body">
                <h5 className="card-title"><strong>{brewery.name}</strong></h5>
                <div className="card-text">
                    <div>
                        <span>Country: </span>
                        <strong>{brewery.country}</strong>
                    </div>
                    <div>
                        <span>Address: </span>
                        <strong>{brewery.street + ", " + brewery.city + ", " + brewery.state + ", " + brewery.postal_code}</strong>
                    </div>
                </div>
                {brewery.website_url &&
                    <a href={brewery.website_url} target="_blank" className="btn btn-primary mt-3">Visit Site</a>
                }
                {mapPath &&
                    <div style={{ height: '40vh', width: '100%' }}>
                        <iframe src={mapPath} style={{width: '100%', height: '240px'}}></iframe>
                    </div>
                }
            </div>
        </div>
    )
};

export default BreweryDetails;