import { createStore } from "redux";

const initialState = {
  jugadores: [
    {
      id: 1,
      nombre: "Juan Carlitos",
      foto: "https://api.ed.team/files/avatars/001803a2-cf00-4a26-8bac-c77c15dcb1d2.jpg"
  },
  {
      id: 2,
      nombre: "Beto Quiroga",
      foto: "https://api.ed.team/files/avatars/38118146-4b4a-4844-8959-157614e04cd1.jpg"
  },
  {
      id: 3,
      nombre: "Alejo Garcia",
      foto: "https://api.ed.team/files/avatars/e58f3a64-aa51-4582-80fa-9bf31c1208b9.jpg"
  },
  {
      id: 4,
      nombre: "Juan Disain",
      foto: "https://api.ed.team/files/avatars/695b4af3-3cee-4c2f-a165-b329f926b9d3.jpg"
  },
  {
      id: 5,
      nombre: "Alvaro Felipe",
      foto: "https://w7.pngwing.com/pngs/467/752/png-transparent-computer-icons-encapsulated-postscript-soccer-player-avatar-child-face-hand.png"
  },
  {
      id: 6,
      nombre: "Alexys Lozada",
      foto: "https://thumbs.dreamstime.com/b/jugador-de-f%C3%BAtbol-del-hombre-del-avatar-gr%C3%A1fico-73243586.jpg"
  },
  {
      id: 7,
      nombre: "Harold Pajuelo",
      foto: "https://img.lovepik.com/original_origin_pic/18/06/30/342ec96a837ccd99f74e3e6067f7dfb3.png_wh860.png"
  },
  {
      id: 8,
      nombre: "Manu Rodriguez",
      foto: "https://img2.freepng.es/20180706/hqq/kisspng-video-game-gamer-electronic-sports-avatar-gaming-5b3fdc923f8346.6302374715309118902602.jpg"
  },
  {
      id: 9,
      nombre: "Alejo Rodríguez",
      foto: "https://img2.freepng.es/20180222/bgw/kisspng-a-s-roma-football-player-playmaker-illustration-cartoon-footballer-avatar-5a8eb3be6a47f2.5314331915193015664353.jpg"
  },
  {
      id: 10,
      nombre: "Andrés Muquinche",
      foto: "https://api.ed.team/files/avatars/33f02168-6547-4520-bada-6302388d5880.jpg"
  },
  {
      id: 11,
      nombre: "Ricardo Otero",
      foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQBo9_bFiPei_hlvIepL4dNRR8Bw98dLNYaw_GcuVwOfH1ATsAU&usqp=CAU"
  },
  {
      id: 12,
      nombre: "Deivis Rivera",
      foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRMFWrt7dvHsLlc1Yck4En_XqqIl3NZu7czxsu2iZBm863PwKpw&usqp=CAU"
  },
  {
      id: 13,
      nombre: "Percy Tuncar",
      foto: "https://api.ed.team/files/avatars/b0801e8a-8bf0-442f-b2ef-0ddaf6ee7aef.png"
  }
  ],
  titulares: [],
  suplentes: []
};

const reducerEntrenador = (state = initialState, action) => {
  if (action.type === "AGREGAR_TITULAR") {
    return {
      ...state,
      titulares: state.titulares.concat(action.jugador),
      jugadores: state.jugadores.filter(j => j.id !== action.jugador.id)
    };
  }

  if (action.type === "AGREGAR_SUPLENTE") {
    return {
      ...state,
      suplentes: state.suplentes.concat(action.jugador),
      jugadores: state.jugadores.filter(j => j.id !== action.jugador.id)
    };
  }

  if (action.type === "QUITAR_TITULAR") {
    return {
      ...state,
      titulares: state.titulares.filter(j => j.id !== action.jugador.id),
      jugadores: state.jugadores.concat(action.jugador)
    };
  }

  if (action.type === "QUITAR_SUPLENTE") {
    return {
      ...state,
      suplentes: state.suplentes.filter(j => j.id !== action.jugador.id),
      jugadores: state.jugadores.concat(action.jugador)
    };
  }

  return state;
};

export default createStore(reducerEntrenador);
