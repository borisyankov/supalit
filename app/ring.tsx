type Props = {
  size: number;
  width: number;
  blur?: boolean;
};

export default function Ring({ size, width, blur }: Props) {
  const style = {
    borderWidth: width,
    width: size,
    height: size,
    blur: blur ? "filter: blur(20px)" : undefined,
  };
  return <div className="border-white rounded-full" style={style}></div>;
}
