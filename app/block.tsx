type Props = {
  blur?: boolean;
};

export default function Block({ blur }: Props) {
  const style = {
    // borderWidth: width,
    // width: size,
    // height: size,
    filter: blur ? "blur(20px)" : undefined,
  };
  return <div className="bg-white w-20 h-20" style={style}></div>;
}
