import React from "react";
import { Provider } from "react-redux";
import "./css/styles.scss";
import store from "./store";
import Jugadores from "./components/Jugadores";
import EquipoSeleccionado from "./components/EquipoSeleccionado";

export default function App() {
  return (
    <Provider store={store}>
      <main>
        <h1>EDManager</h1>
        <Jugadores />
        <EquipoSeleccionado />
      </main>
    </Provider>
  );
}
