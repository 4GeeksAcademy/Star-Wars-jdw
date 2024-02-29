import React, { useEffect} from "react";
import { useStarWarsContext } from "../store/appContext";

const VehiclesView = () => {
    const { state, actions } = useStarWarsContext();

    useEffect(() => {
        actions.getVehicles(); // Fetch list of vehicles when component mounts
    }, [actions]);

    return (
        <div>
            <h2>List of Vehicles</h2>
            <ul>
                {state.vehicles.map((vehicle, index) => (
                    <li key={index}>{vehicle.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default VehiclesView;
