import React from "react";
import { stylesDict } from "../assets/utils/data";
import { useState, useEffect } from "react";

function Home() {
  const categories = [
    "backgrounds",
    "ears",
    "neck",
    "hair",
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
    document.getElementById(type).src = image;
  }

  return (
    <div class="min-h-screen ds:h-96 bg-gray w-full">
      <div class="pr-12 pl-12 ds:pr-48 ds:pl-48 bg-gray">
        <div class="pt-8">
          <div>
            <a
              href="/"
              className="text-white text-xl ds:text-4xl block ds:inline-block uppercase ds:text-start text-center"
            >
              Alpaca Generator
            </a>
            <a
              href="https://www.linkedin.com/in/maxklein1992/"
              target="_blank"
              rel="noreferrer"
              className="text-yellow text-sm ds:text-xl hover:underline block ds:inline-block ds:ml-6 uppercase ds:text-start text-center"
            >
              by Max Klein
            </a>
          </div>
          <div class="flex flex-col ds:flex-row pt-12">
            <div class="ds:w-1/2 w-full">
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
            <div class="text-white ds:w-1/2 w-full mt-72 ds:mt-0">
              <div>
                <p class="my-4 w-full ds:text-start text-center">
                  Accessorize the Alpaca's
                </p>
                <div class="">
                  {categories.map((style) => {
                    return (
                      <button
                        onClick={() => {
                          changeCategory(style);
                        }}
                        className="my-3 ds:mr-4 mr-2 bg-yellow ds:py-3 ds:px-6 py-1 px-3 ds:text-l text-l text-white rounded-lg hover:bg-white hover:text-yellow border-4 border-solid border-yellow"
                      >
                        {style.charAt(0).toUpperCase() + style.slice(1)}
                      </button>
                    );
                  })}
                </div>
              </div>
              <div class="">
                <div class="min-h-screen w-full">
                  <p class="my-4 w-full ds:text-start text-center">Style</p>
                  {stylesDict &&
                    stylesDict[selectedCategory].map((style) => {
                      const { name, image, type } = style;
                      return (
                        <button
                          onClick={() => {
                            changeLayout(type, image);
                          }}
                          className="my-3 ds:mr-4 mr-2 bg-yellow ds:py-3 ds:px-6 py-1 px-3 ds:text-l text-l text-white rounded-lg hover:bg-white hover:text-yellow border-4 border-solid border-yellow"
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
