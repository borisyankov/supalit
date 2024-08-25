import clsx from "clsx";

type Edge = "top" | "bottom" | "left" | "right";

export default function getGradientClassName(edge: Edge) {
  return clsx(
    "from-black to-white",
    edge === "top" && "bg-gradient-to-t",
    edge === "bottom" && "bg-gradient-to-b",
    edge === "left" && "bg-gradient-to-l",
    edge === "right" && "bg-gradient-to-r"
  );
}
