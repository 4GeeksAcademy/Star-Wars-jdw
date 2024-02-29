import React, { useEffect } from 'react';
import { useStarWarsContext } from '../store/appContext';
import PeopleView from './people';
import PlanetsView from './planets';
import VehiclesView from './vehicles';

const StarWarsView = () => {
  const { state, actions } = useStarWarsContext();

  useEffect(() => {
    actions.getPeople();
    actions.getVehicles();
    actions.getPlanets();
  }, [actions]); // Make sure to include actions in the dependencies array

  return (
    <div>
      <PeopleView/>
      <PlanetsView/>
      <VehiclesView/>
    </div>
  );
};

export default StarWarsView;
