import React from "react";

function Image() {
  return (
    <div>
      <div class="">
        <img
          id="backgrounds"
          src="../alpaca/backgrounds/blue50.png"
          alt="background"
          className="absolute w-60 h-60 ds:w-80 ds:h-80 z-0"
        />
      </div>
      <div>
        <img
          id="neck"
          src="../alpaca/neck/default.png"
          alt="background"
          className="absolute w-60 h-60 ds:w-80 ds:h-80 z-5"
        />
      </div>
      <div>
        <img
          id="mouth"
          src="../alpaca/mouth/default.png"
          alt="background"
          className="absolute w-60 h-60 ds:w-80 ds:h-80 z-20"
        />
      </div>
      <div>
        <img
          id="accessories"
          src="../alpaca/accessories/headphone.png"
          alt="background"
          className="absolute w-60 h-60 ds:w-80 ds:h-80 z-20"
        />
      </div>
      <div>
        <img
          id="ears"
          src="../alpaca/ears/default.png"
          alt="background"
          className="absolute w-60 h-60 ds:w-80 ds:h-80 z-5"
        />
      </div>
      <div>
        <img
          id="nose"
          src="../alpaca/nose.png"
          alt="background"
          className="absolute w-60 h-60 ds:w-80 ds:h-80 z-0"
        />
      </div>
      <div>
        <img
          id="eyes"
          src="../alpaca/eyes/panda.png"
          alt="background"
          className="absolute w-60 h-60 ds:w-80 ds:h-80 z-20"
        />
      </div>
      <div>
        <img
          id="hair"
          src="../alpaca/hair/default.png"
          alt="background"
          className="absolute w-60 h-60 ds:w-80 ds:h-80"
        />
      </div>
      <div>
        <img
          id="leg"
          src="../alpaca/leg/default.png"
          alt="background"
          className="absolute w-60 h-60 ds:w-80 ds:h-80"
        />
      </div>
    </div>
  );
}

export default Image;
