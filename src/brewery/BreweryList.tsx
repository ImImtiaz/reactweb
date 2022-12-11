import { useState } from "react";
import { Brewery } from "../types/brewery";
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import useFetchBrewery from "../hooks/BreweryHook";
import BreweryDetails from "./BreweryDetails";

const BreweryList = () => {
    const breweries = useFetchBrewery();

    const [selectedBrew, setSelectedBrew] = useState<Brewery | null>(null);

    const showDetails = (event: React.MouseEvent<HTMLButtonElement>, b: Brewery) => {
        
        setSelectedBrew(b);
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    };

    return (
        <div>
            {selectedBrew &&
                <div>
                    <BreweryDetails brewery={selectedBrew}></BreweryDetails>
                </div>
            }
            <div className="row mb-2 mt-4">
                <h5 className="themeFontColor text-center">
                    List of Breweries
                </h5>
            </div>
            <table className="table table-hover table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Address</th>
                        <th>URL</th>
                        <th>Details</th>
                    </tr>
                </thead>
                <tbody>
                    {breweries.map((b) => (
                        <tr key={b.id}>
                            <td>{b.name}</td>
                            <td>{b.brewery_type}</td>
                            <td>{b.street + ", " + b.city + ", " + b.state + ", " + b.postal_code}</td>
                            <td><a href={b.website_url} target="_blank">{b.website_url}</a></td>
                            <td><button onClick={event => showDetails(event, b)} className="button btn btn-primary">Details</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default BreweryList;