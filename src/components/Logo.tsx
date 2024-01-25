import { FunctionComponent } from "react";

const Logo: FunctionComponent = () => {
  return (
    <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[174px] h-[33px] overflow-hidden">
      <img
        className="absolute h-[96.97%] w-[99.82%] top-[1.59%] right-[0.18%] bottom-[1.44%] left-[0%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/symbols.svg"
      />
    </button>
  );
};

export default Logo;
