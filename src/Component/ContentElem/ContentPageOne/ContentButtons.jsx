import New_model from "../Source/New_model.svg";
import Dowload_model from "../Source/Download_model.svg";
import Settings from "../Source/Settings.svg";
import { NavLink } from "react-router-dom";

export default function ContentButtons() {
  const buttonsElem = [
    { title: "Новая модель", link: New_model, href: "/NewModel" },
    { title: "Загрузить модель", link: Dowload_model, href: "/Load-model" },
    { title: "Настройки", link: Settings, href: "/Settings" }
  ];

  const btnElm = buttonsElem.map((buttonElem) => (
    <NavLink to={buttonElem.href}>
      <button
        key={buttonElem.toString()}
        type="button"
        className="btn btn-lg bg-light text-success text-start mb-3 btn-outline-success"
      >
        {buttonElem.title}
        <img src={buttonElem.link} className="ps-3" alt="Новая модель" />
      </button>
    </NavLink>
  ));

  const fqElem = (
    <button
      type="button"
      className="btn btn-lg bg-light text-success text-start mb-3 btn-outline-success"
    >
      Справка
    </button>
  );
  const exitElem = (
    <button
      type="button"
      className="btn btn-lg bg-light text-success text-start mb-3 btn-outline-success"
    >
      Выход
    </button>
  );
  return (
    <div className="btn-group-vertical">
      {btnElm}
      {fqElem}
      {exitElem}
    </div>
  );
}
