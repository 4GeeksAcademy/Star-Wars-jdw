import React, { createContext, useContext, useState, useEffect } from 'react';
import getState from './flux';

const StarWarsContext = createContext();

export const useStarWarsContext = () => useContext(StarWarsContext);

export const StarWarsProvider = ({ children }) => {
  const [state, setState] = useState({});

  useEffect(() => {
    const stateObject = getState({
      getStore: () => state,
      setStore: (newState) => setState(newState)
    });
    setState(stateObject.store);
  }, []);

  return (
    <StarWarsContext.Provider value={{ state, setState }}>
      {children}
    </StarWarsContext.Provider>
  );
};
