import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pokelist from "../Pages/PokemonsListPage/Pokelist";
import PokedexPage from "../Pages/PokedexPage/PokedexPage";
import PokemonDetail from "../Pages/PokemonDetailPage/PokemonDetail";
 
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Pokelist />} />
        <Route path="/pokedex" element={<PokedexPage />} />
       
        <Route
          path={`/detailPage/:name/:types/:id`}
          element={<PokemonDetail />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
