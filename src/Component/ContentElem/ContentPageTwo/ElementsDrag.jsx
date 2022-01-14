import { ItemType } from "./ItemType";
import { useDrag } from "react-dnd";
/*import { useState } from "react";
import PopupMenu from "./PopupMenu";*/

const style = {
  position: "absolute",
  cursor: "move",
  width: "5%"
};

export const ElementsDrag = ({ id, left, top, pop, setPop, children }) => {
  console.log(left, top);
  const [, drag] = useDrag(
    () => ({
      type: ItemType.SVGIMG,
      item: { id, left, top },
      collect: (monitor) => ({
        isDragging: monitor.isDragging()
      })
    }),
    [id, left, top]
  );
  /*const [state, setState] = useState(false);
  const body = state && <PopupMenu />;*/

  return (
    <>
      <div
        ref={drag}
        style={{ ...style, left, top }}
        onClick={() => setPop(!pop)}
      >
        {children}
      </div>
    </>
  );
};
