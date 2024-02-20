import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useStore } from "../store/appContext";
import { actions } from "../actions/store";

const DetailsView = () => {
    const { itemType, id } = useParams();
    const { state } = useStore();
    const [itemDetails, setItemDetails] = useState(null);

    useEffect(() => {
        const details = actions.getItemDetailsById(itemType, id, state);
        setItemDetails(details);
    }, [itemType, id, state]);

    if (!itemDetails) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <div>
                 <img src="{starwars.image}" alt="Star Wars Image" />
                 <div>
                 <h2>{itemDetails.name}</h2>
                <p>{itemDetails.about}</p>
                </div>
            </div>
                <div>
                  {itemDetails.appearances}
                {itemDetails.affiliations}
                {itemDetails.locations}
                {itemDetails.dimensions}
                {itemDetails.species}
                {itemDetails.vehicles}
                {itemDetails.weapons}
                {itemDetails.tool}
            </div>
        </div>
    );
};

export default DetailsView;
