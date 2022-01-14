import { Component } from "react";
//import SubText from "./SdbText";

class ButtonHeader extends Component {
  render() {
    const { text } = this.props;
    return (
      <div
        className="btn-group ms-1 mt-1 mb-1"
        role="group"
        aria-label="Basic example"
      >
        <button
          className="btn btn-outline-success btn-sm dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {text.title}
        </button>
        <ul className="dropdown-menu">
          {text.text.map((subtext) => (
            <li key={subtext.toString()} className="nav-item">
              <a className="nav-link" href="123.com">
                {subtext}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ButtonHeader;
