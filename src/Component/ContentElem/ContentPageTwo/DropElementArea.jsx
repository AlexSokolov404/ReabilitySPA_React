import { useState, useCallback } from "react";
import arm from "../Source/Arm.svg";
import servergroup from "../Source/Server_group.svg";
import kommutator from "../Source/Switch.svg";
import { useDrop } from "react-dnd";
import { ItemType } from "./ItemType";
import update from "immutability-helper";
import { ElementsDrag } from "./ElementsDrag";
import PopupMenu from "./PopupMenu";
//import ElementPage from "./ElementPage";

const styles = {
  position: "rilative"
};

export const DropElementArea = ({ state }) => {
  const initialstate = {
    a: {
      top: 300,
      left: 600,
      title: "Куммутатор-Switch",
      arm: kommutator
    },
    b: {
      top: 150,
      left: 800,
      title: "Коммутатор-Switch",
      arm: kommutator
    },
    c: { top: 600, left: 400, title: "Арм", arm: arm },
    d: { top: 600, left: 500, title: "Арм", arm: arm },
    e: { top: 600, left: 600, title: "Арм", arm: arm },
    f: { top: 600, left: 700, title: "Арм", arm: arm },
    g: { top: 600, left: 800, title: "Арм", arm: arm },
    i: { top: 200, left: 1200, title: "Арм", arm: arm },
    j: { top: 200, left: 1300, title: "Арм", arm: arm },
    k: { top: 300, left: 1200, title: "Арм", arm: arm },
    l: { top: 300, left: 1300, title: "Арм", arm: arm },
    m: {
      top: 100,
      left: 500,
      title: "Серверная группа",
      arm: servergroup
    }
  };

  const [img, setImg] = useState(initialstate);
  console.log(state, img);

  const moveBox = useCallback(
    (id, left, top) => {
      setImg(
        update(img, {
          [id]: {
            $merge: { left, top }
          }
        })
      );
    },
    [img, setImg]
  );

  const [, drop] = useDrop(
    () => ({
      accept: ItemType.SVGIMG,
      drop(item, monitor) {
        const delta = monitor.getDifferenceFromInitialOffset();
        const left = Math.round(item.left + delta.x);
        const top = Math.round(item.top + delta.y);
        moveBox(item.id, left, top);
        return undefined;
      }
    }),
    [moveBox]
  );

  const [pop, setPop] = useState(false);
  const body = pop && <PopupMenu pop={pop} setPop={setPop} />;

  return (
    <div
      ref={drop}
      style={styles}
      className="content dropElementArea contentBg"
    >
      {Object.keys(img).map((key) => {
        const { left, top, title, arm } = img[key];
        return (
          <ElementsDrag
            key={key}
            id={key}
            left={left}
            top={top}
            pop={pop}
            setPop={setPop}
          >
            <img src={arm} alt={title}></img>
            <p className="text-center" style={{ color: "white" }}>
              {title}
            </p>
          </ElementsDrag>
        );
      })}
      {body}
    </div>
  );
};
