import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { StarWarsContext } from "../store/appContext"; // Import the StarWarsContext

export const Navbar = () => {
    const { state, actions } = useContext(StarWarsContext); // Use the useContext hook to access state and actions

    // Function to handle "Add to Favorites" button click event
    const addToFavorites = () => {
        // Call the addFavorites action
        actions.addFavorites(/* Pass any necessary parameters */);
    };

    return (
        <nav className="navbar navbar-light bg-light mb-3">
            <Link to="/">
                <h1>Star Wars Icon</h1>
            </Link>
            <button class="btn btn-secondary dropdown-toggle" type="button" id="favorites" data-bs-toggle="dropdown" aria-expanded="false">
    			Favorites {favorites.length}
  			</button>
			  <ul class="dropdown-menu" aria-labelledby="favorites">
    			<li><a class="dropdown-item" href="{}"></a></li>
			  </ul>
        </nav>
    );
};
