import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from "../pages/HomePage/HomePage";
import PokedexPage from "../pages/PokedexPage/PokedexPage";
import DetailsPage from "../pages/DetailsPage/DetailsPage";

const Router = () => (
  <BrowserRouter>
        <Switch>
          <Route exact path='/'   
                component = { HomePage } 
          />

          <Route exact path='/pokedex' 
                component = { PokedexPage } 
            />

          <Route exact path='/detalhes/:pokemon'  
                component = { DetailsPage } 
          />

            <Route>
              <div>"Erro 404 - Este Pokemon não existe!" </div>
            </Route>
    </Switch>
  </BrowserRouter>
);
export default Router;