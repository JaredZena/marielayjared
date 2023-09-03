import { useRef, useState } from "react";
import giftIcon from "../images/gift-icon.svg"
import mexicoFlag from "../images/mexico-flag.png"
import usFlag from "../images/us-flag.png"

const DigitalEnvelope = () => {
  return (
    <div className="w-full px-1 md:px-4">
      <h4 className="text-3xl font-head font-bold text-center mb-6 pt-10 text-gray-700">
        Mesa de Regalos
      </h4>

      <div className="mb-6 text-center font-medium font-head text-gray-600 mx-3">
          <p>
            Si deseas enviarnos un regalo, lo puedes hacer desde los siguientes links, te lo agradeceremos mucho.
          </p>
          </div>

      <div className=" flex space-around sm:justify-evenly flex-col md:flex-row md:flex-wrap">
        <div className="px-4 mb-10">
          <WishlistCard
            wishlistUrl="https://www.amazon.com/hz/wishlist/ls/BABY6SEGWONS?ref_=wl_share"
            flagImage={usFlag}
            name="Amazon Wishlist US"
          />
        </div>
        <div className="px-4 mb-10">
          <WishlistCard
            wishlistUrl="https://www.amazon.com.mx/hz/wishlist/ls/2SVO2R7NGSYR2?ref_=wl_share"
            flagImage={mexicoFlag}
            name="Amazon Wishlist MX"
          />
        </div>
      </div>
    </div>
  );
};

interface WishlistProps {
  flagImage: string;
  wishlistUrl: string;
  name: string;
}

const WishlistCard = ({ flagImage, name, wishlistUrl }: WishlistProps) => {
  const handleClick = () => {
    // Redirect to the Amazon wishlist URL when the card/button is clicked
    window.open(wishlistUrl, '_blank');
  };

  return (
    <div className="gift-card flex space around justify-evenly border rounded-lg shadow-md hover:shadow-lg text-white bg-[#B7410E] hover:bg-[#973B27] outline-[#974D2D] disabled:opacity-50 disabled:pointer-events-none cursor-pointer">
      <button className="gift-button w-full" onClick={handleClick}>
      <img
              src={giftIcon}
              alt="Gift"
              className="w-48 h-48 rounded-full mx-auto"
            />
        <img className="flag-image mx-auto" src={flagImage} alt="Country Flag" />
        <div className="name">{name}</div>
      </button>
    </div>
  );
};

export default DigitalEnvelope;
