import arm from "./Source/Arm.svg";
import servergroup from "./Source/Server_group.svg";
import kommutator from "./Source/Switch.svg";
import nextId from "react-id-generator";

const id = nextId("img_"); // id: id-1

export const initialState = {};

export const reducer = (state, action) => {
  switch (action) {
    case "arm":
      return {
        ...state,
        [id]: { top: 200, left: 200, title: "Арм", arm: arm }
      };
    case "servergroup":
      return {
        ...state,
        [id]: {
          top: 300,
          left: 200,
          title: "Серверная группа",
          servergroup: servergroup
        }
      };
    case "kommutator":
      return {
        ...state,
        [id]: {
          top: 400,
          left: 200,
          title: "Куммутатор-Switch",
          kommutator: kommutator
        }
      };
    default:
      return {};
  }
};
