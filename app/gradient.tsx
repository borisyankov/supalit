import clsx from "clsx";

type Edge = "top" | "bottom" | "left" | "right";

type Props = {
  edge: Edge;
};

export default function Gradient({ edge }: Props) {
  return (
    <div
      className={clsx(
        "absolute left-0 right-0 top-0 bottom-0 from-black to-white",
        edge === "top" && "bg-gradient-to-t",
        edge === "bottom" && "bg-gradient-to-b",
        edge === "left" && "bg-gradient-to-l",
        edge === "right" && "bg-gradient-to-r"
      )}
    ></div>
  );
}
