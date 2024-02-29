import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { StarWarsContext } from "../store/appContext";

export const Navbar = () => {
    const { state } = useContext(StarWarsContext);

    return (
        <nav className="navbar navbar-light bg-light mb-3">
            <Link to="/">
                <h1>Star Wars Icon</h1>
            </Link>
            <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="favoritesDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                    Favorites ({state.favorites.length})
                </button>
                <ul className="dropdown-menu" aria-labelledby="favoritesDropdown">
                    {state.favorites.map(item => (
                        <li key={item.id}>
                            <Link className="dropdown-item" to={`/details/${item.id}`}>
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};
