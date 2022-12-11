import { useEffect, useState } from "react";
import config from "../config";
import { Brewery } from "../types/brewery";

const useFetchBrewery = (): Brewery[] => {
    const [breweries, setBreweries] = useState<Brewery[]>([]);

    useEffect(() => {
        const fetchBreweries = async() =>{
            const rsp = await fetch(`${config.baseApiUrl}/breweries`);
            const breweries = await rsp.json();
            setBreweries(breweries);
        }
        fetchBreweries();
    },[])
    return breweries;
}

export default useFetchBrewery;