import "../PageTwoStyles.css";
import arm from "../Source/Arm.svg";
import servergroup from "../Source/Server_group.svg";
import kommutator from "../Source/Switch.svg";
//import nextId from "react-id-generator";

export const DragElementArea = ({ dispatch }) => {
  return (
    <div className="content contentBg elementArea">
      <img
        className="rounded mx-auto d-block pt-3"
        src={arm}
        alt="Автоматизированное рабочее место"
        draggable="false"
        style={{ cursor: "pointer" }}
        onClick={() => dispatch("arm")}
      ></img>
      <p className="text-center pb-3" style={{ color: "white" }}>
        АРМ
      </p>
      <img
        className="rounded mx-auto d-block"
        src={servergroup}
        alt="серверная группа"
        draggable="false"
        style={{ cursor: "pointer" }}
        onClick={() => dispatch("servergroup")}
      ></img>
      <p className="text-center pb-3" style={{ color: "white" }}>
        Серверная группа
      </p>
      <img
        className="rounded mx-auto d-block"
        src={kommutator}
        alt="Коммутатор-Switch"
        draggable="false"
        style={{ cursor: "pointer" }}
        onClick={() => dispatch("kommutator")}
      ></img>
      <p className="text-center pb-3" style={{ color: "white" }}>
        Коммутатор-Switch
      </p>
      <div className="d-grid gap-2 mb-0">
        <button
          className="btn btn-danger"
          type="button"
          onClick={() => dispatch({})}
        >
          Очистить поле
        </button>
        <button
          className="btn btn-success"
          type="button"
          onClick={() => dispatch({})}
        >
          Промоделировать
        </button>
      </div>
    </div>
  );
};
