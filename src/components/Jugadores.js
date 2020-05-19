import React from "react";
import { connect } from "react-redux";

const Jugadores = ({ jugadores, agregarTitular, agregarSuplente }) => (
  <section>
    <h2>Jugadores</h2>
    <div className="contenedor-jugadores">
      {jugadores.map(j => (
        <article className="jugador">
          <img src={j.foto} alt={j.nombre} />
          <h3>{j.nombre}</h3>
          <div>
            <button onClick={ () => agregarTitular(j) } >Titular</button>
            <button onClick={ () => agregarSuplente(j) } >Suplente</button>
          </div>
        </article>
      ))}
    </div>
  </section>
);

//convierte el state en props
const mapStateToProps = state => ({
  jugadores: state.jugadores
});

//funciones que se convierten en props
const mapDispatchToProps = dispatch => ({
  agregarTitular(jugador){
    dispatch({
      type:'AGREGAR_TITULAR',
      jugador
    })
  },
  agregarSuplente(jugador){
    dispatch({
      type:'AGREGAR_SUPLENTE',
      jugador
    })
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Jugadores);
