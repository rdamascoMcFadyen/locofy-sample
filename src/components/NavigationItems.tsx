import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const NavigationItems: FunctionComponent = () => {
  const navigate = useNavigate();

  const onSearchTextClick = useCallback(() => {
    navigate("/results-page");
  }, [navigate]);

  const onHotelsTextClick = useCallback(() => {
    navigate("/hotels-page");
  }, [navigate]);

  return (
    <div className="flex flex-row items-center justify-end gap-[36px] text-left text-sm text-darkslategray-200 font-roboto sm:flex">
      <div className="flex flex-row items-center justify-end gap-[30px] md:hidden">
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-sm font-roboto text-cornflowerblue-200 text-left inline-block">
          Explore
        </button>
        <div className="relative cursor-pointer" onClick={onSearchTextClick}>
          Search
        </div>
        <div className="relative cursor-pointer" onClick={onHotelsTextClick}>
          Hotels
        </div>
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-sm font-roboto text-darkslategray-200 text-left inline-block">
          Offers
        </button>
      </div>
      <div className="flex flex-row items-center justify-center gap-[12px]">
        <img
          className="relative w-6 h-6 overflow-hidden hidden md:flex"
          alt=""
          src="/notification.svg"
        />
        <img
          className="relative w-6 h-6 overflow-hidden"
          alt=""
          src="/notification1.svg"
        />
        <img
          className="rounded-19xl w-9 h-9 object-cover"
          alt=""
          src="/top_avatar@2x.png"
        />
      </div>
    </div>
  );
};

export default NavigationItems;
