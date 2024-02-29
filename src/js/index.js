//import react into the bundle
import React from 'react'
import {createRoot} from 'react-dom/client'
import StarWarsView from './views/home'


const root = createRoot(document.querySelector("#app"))

//render your react application
root.render(<StarWarsView/>)

