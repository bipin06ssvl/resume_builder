import { DragControls } from "framer-motion";

const ReorderIcon = ({ dragControls }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 39 39"
      width="39"
      height="39"
      onPointerDown={(event) => dragControls.start(event)}
    >
      {[...Array(3)].map((_, row) =>
        [...Array(3)].map((_, col) => (
          <circle
            key={`${row}-${col}`}
            cx={5 + col * 14}
            cy={5 + row * 14}
            r={5}
            fill="#CCC"
          />
        ))
      )}
    </svg>
  );
};

export default ReorderIcon;
