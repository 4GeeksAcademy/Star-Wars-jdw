import React, { useEffect, useContext } from "react";
import { useStarWarsContext } from "../store/appContext";

const PlanetsView = () => {
    const { state, actions } = useStarWarsContext();

    useEffect(() => {
        actions.getPlanets(); // Fetch list of vehicles when component mounts
    }, [actions]);

    return (
        <div>
            <h2>List of Vehicles</h2>
            <ul>
                {state.planets.map((planets, index) => (
                    <li key={index}>{planets.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default PlanetsView;
