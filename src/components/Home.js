import React from "react";
import { stylesDict } from "../assets/utils/data";
import { useState, useEffect } from "react";

function Home() {
  const categories = [
    "backgrounds",
    "ears",
    "neck",
    "hair",
    "nose",
    "mouth",
    "eyes",
    "accessories",
    "leg",
  ];

  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  function changeCategory(category) {
    setSelectedCategory([category]);
  }

  function changeLayout(type, image) {
    switch (type) {
      case "backgrounds":
        document.getElementById("background").src = image;
        break;
      case "neck":
        document.getElementById("neck").src = image;
        break;
      case "hair":
        document.getElementById("hair").src = image;
        break;
      case "eyes":
        document.getElementById("eyes").src = image;
        break;
      case "mouth":
        document.getElementById("mouth").src = image;
        break;
      case "leg":
        document.getElementById("leg").src = image;
        break;
      case "accessories":
        document.getElementById("accessories").src = image;
        break;
      case "ears":
        document.getElementById("ears").src = image;
        break;
      default:
        break;
    }
  }

  return (
    <div class="min-h-screen ds:h-96 bg-gray w-full">
      <div class="pr-12 pl-12 ds:pr-48 ds:pl-48 bg-gray">
        <div class="pt-8 ds:pt-8">
          <div>
            <a
              href="/"
              className="text-white text-xl ds:text-4xl block ds:inline-block uppercase"
            >
              Alpaca Generator
            </a>
            <a
              href="https://www.linkedin.com/in/maxklein1992/"
              target="_blank"
              rel="noreferrer"
              className="text-yellow text-sm ds:text-xl hover:underline block ds:inline-block ds:ml-6 uppercase"
            >
              by Max Klein
            </a>
          </div>
          <div class="flex flex-row pt-12">
            <div class="w-80 h-80">
              <div>
                <img
                  id="background"
                  src="../alpaca/backgrounds/blue50.png"
                  alt="background"
                  className="absolute w-80 h-80 z-0"
                />
              </div>
              <div>
                <img
                  id="neck"
                  src="../alpaca/neck/default.png"
                  alt="background"
                  className="absolute w-80 h-80 z-5"
                />
              </div>
              <div>
                <img
                  id="mouth"
                  src="../alpaca/mouth/default.png"
                  alt="background"
                  className="absolute w-80 h-80 z-20"
                />
              </div>
              <div>
                <img
                  id="accessories"
                  src="../alpaca/accessories/headphone.png"
                  alt="background"
                  className="absolute w-80 h-80 z-20"
                />
              </div>
              <div>
                <img
                  id="ears"
                  src="../alpaca/ears/default.png"
                  alt="background"
                  className="absolute w-80 h-80 z-5"
                />
              </div>
              <div>
                <img
                  id="nose"
                  src="../alpaca/nose.png"
                  alt="background"
                  className="absolute w-80 h-80 z-0"
                />
              </div>
              <div>
                <img
                  id="eyes"
                  src="../alpaca/eyes/panda.png"
                  alt="background"
                  className="absolute w-80 h-80 z-20"
                />
              </div>
              <div>
                <img
                  id="hair"
                  src="../alpaca/hair/default.png"
                  alt="background"
                  className="absolute w-80 h-80"
                />
              </div>
              <div>
                <img
                  id="leg"
                  src="../alpaca/leg/default.png"
                  alt="background"
                  className="absolute w-80 h-80"
                />
              </div>
            </div>
            <div class="pl-80 text-white">
              <div>
                <p>Accessorize the Alpaca's</p>
                <div class="">
                  <button
                    onClick={() => {
                      changeCategory("hair");
                    }}
                    className="mt-6 mr-4 bg-yellow py-3 px-6 text-white rounded-lg hover:bg-white hover:text-yellow border-4 border-solid border-yellow"
                  >
                    Hair
                  </button>
                  <button
                    onClick={() => {
                      changeCategory("ears");
                    }}
                    className="mt-6 mr-4 bg-yellow py-3 px-6 text-white rounded-lg hover:bg-white hover:text-yellow border-4 border-solid border-yellow"
                  >
                    Ears
                  </button>
                  <button
                    onClick={() => {
                      changeCategory("eyes");
                    }}
                    className="mt-6 mr-4 bg-yellow py-3 px-6 text-white rounded-lg hover:bg-white hover:text-yellow border-4 border-solid border-yellow"
                  >
                    Eyes
                  </button>
                  <button
                    onClick={() => {
                      changeCategory("mouth");
                    }}
                    className="mt-6 mr-4 bg-yellow py-3 px-6 text-white rounded-lg hover:bg-white hover:text-yellow border-4 border-solid border-yellow"
                  >
                    Mouth
                  </button>
                  <button
                    onClick={() => {
                      changeCategory("neck");
                    }}
                    className="mt-6 mr-4 bg-yellow py-3 px-6 text-white rounded-lg hover:bg-white hover:text-yellow border-4 border-solid border-yellow"
                  >
                    Neck
                  </button>
                  <button
                    onClick={() => {
                      changeCategory("leg");
                    }}
                    className="mt-6 mr-4 bg-yellow py-3 px-6 text-white rounded-lg hover:bg-white hover:text-yellow border-4 border-solid border-yellow"
                  >
                    Leg
                  </button>
                  <button
                    onClick={() => {
                      changeCategory("accessories");
                    }}
                    className="mt-6 mr-4 bg-yellow py-3 px-6 text-white rounded-lg hover:bg-white hover:text-yellow border-4 border-solid border-yellow"
                  >
                    Accessories
                  </button>
                  <button
                    onClick={() => {
                      changeCategory("backgrounds");
                    }}
                    className="mt-6 mr-4 bg-yellow py-3 px-6 text-white
                    rounded-lg hover:bg-white hover:text-yellow border-4
                    border-solid border-yellow"
                  >
                    Background
                  </button>
                </div>
              </div>
              <div class="">
                <div class="min-h-screen w-full bg-gray">
                  <p class="mt-8">Style</p>
                  {stylesDict &&
                    stylesDict[selectedCategory].map((style) => {
                      const { name, image, type } = style;
                      return (
                        <button
                          onClick={() => {
                            changeLayout(type, image);
                          }}
                          className="mt-6 mr-4 bg-yellow py-3 px-6 text-white rounded-lg hover:bg-white hover:text-yellow border-4 border-solid border-yellow"
                        >
                          {name}
                        </button>
                      );
                    })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
