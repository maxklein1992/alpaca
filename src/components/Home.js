import React from "react";
import { stylesDict } from "../assets/utils/data";
import { useState, useEffect } from "react";
import AlpacaImage from "./AlpacaImage";
import StyleButton from "./StyleButton";
import CategoryButton from "./CategoryButton";

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
              <AlpacaImage />
            </div>
            <div class="text-white ds:w-1/2 w-full mt-72 ds:mt-0">
              <div>
                <p class="my-4 w-full ds:text-start text-center">
                  Accessorize the Alpaca's
                </p>
                <div class="">
                  {categories.map((style) => {
                    return (
                      <CategoryButton
                        changeCategory={changeCategory}
                        style={style}
                      />
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
                        <StyleButton
                          name={name}
                          image={image}
                          type={type}
                          changeLayout={changeLayout}
                        />
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
