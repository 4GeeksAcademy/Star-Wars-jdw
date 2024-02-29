const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            people: [],
			vehicles: [],
			planets: [],
			favorites:[]
        },
        actions: {
            getData: async (type,id) => {
                try {
                    const response = await fetch(`https://www.swapi.tech/api/${type}/${id}`);
                    if (!response.ok) {
                        throw new Error('Failed to fetch people');
                    }
                    const data = await response.json();
                    setStore({ people: data });
                } catch (error) {
                    console.error('Error fetching data:', error);
                }
			},
            getPeople: async () => {
                try {
                    const response = await fetch('https://www.swapi.tech/api/people/');
                    if (!response.ok) {
                        throw new Error('Failed to fetch people');
                    }
                    const data = await response.json();
                    setStore({ people: data });}
                   catch (error) {
                    console.error('Error fetching people:', error);
                }
			},
            getVehicles: async () => {
                try {
                    const response = await fetch('https://www.swapi.tech/api/vehicles/');
                    if (!response.ok) {
                        throw new Error('Failed to fetch vehicles');
                    }
                    const data = await response.json();
                    setStore({ vehicles: data });
                } catch (error) {
                    console.error('Error fetching vehicles:', error);
                }
			},
            getPlanets: async () => {
                try {
                    const response = await fetch('https://www.swapi.tech/api/planets/');
                    if (!response.ok) {
                        throw new Error('Failed to fetch planets');
                    }
                    const data = await response.json();
                    setStore({ planets: data });
                } catch (error) {
                    console.error('Error fetching planets:', error);
                }
            },
            addFavorites: async (type, id) => {
                try {
                    const response = await fetch(`https://www.swapi.tech/api/${type}/${id}`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({})
                    });
                    if (!response.ok) {
                        throw new Error('Failed to add favorite');
                    }
                    const addedFavorite = await response.json();
                    setStore(prevStore => ({
                        favorites: [...prevStore.favorites, addedFavorite]
                    }));
                } catch (error) {
                    console.error('Error adding to favorites:', error);
                }
            },
            removeFavorites: async (type,id) => {
                try {
                    const response = await fetch(`https://www.swapi.tech/api/${type}/${id}`, {
                        method: 'DELETE',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify()
                    });
                    if (!response.ok) {
                        throw new Error('Failed to get data');
                    }
                    const removeFavorite = await response.json();
                    setStore(prevStore => ({
                        favorites: prevStore.favorites.filter(removeFavorite)
                    }));
                } catch (error) {
                    console.error('Error removing selection:', error);
                }
            },
            navigateToDetails: async (type,id) => {
                try {
                    const response = await fetch 
                }
                // let url;
                // switch (id) {
                //     case 'people':
                //         url = `/people/${people.id}`;
                //         break;
                //     case 'vehicles':
                //         url = `/vehicles/${vehicles.id}`;
                //         break;
                //     case 'planets':
                //         url = `/planets/${planets.id}`;
                //         break;
                //     default:
                //         url = '/';
                }
            
                // Navigate to the detailed view
                window.location.href = url;
            }
        
            
        }
    };
};

export default getState;