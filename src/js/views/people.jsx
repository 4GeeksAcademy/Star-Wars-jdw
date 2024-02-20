import React, { useEffect, useContext } from "react";
import { useStarWarsContext } from "../store/appContext";

const PeopleView = () => {
    const { state, actions } = useStarWarsContext();

    useEffect(() => {
        actions.getPeople(); // Fetch list of vehicles when component mounts
    }, []);

    return ( 
    <div>
    <h2>List Characters</h2>
    <ul>
        {state.people.map((people, index) => (
            <li key={index}>
                {people.name}
                {people.gender}
                {people.eyecolor}
                <button onClick={() => actions.navigateToDetail(people.id)}>Learn More</button>
                <button onClick={() => actions.addFavorites(people.id)}>Add to Favorites</button>
            </li>
        ))}
    </ul>
</div>
);
};

export default VehiclesView;
