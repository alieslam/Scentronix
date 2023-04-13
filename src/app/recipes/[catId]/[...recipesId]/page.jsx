import React from "react";
import CustomTypography from "@/components/CustomTypography";
import Image from "next/image";
import { BiTimeFive } from "react-icons/bi";
import { CiForkAndKnife } from "react-icons/ci";

async function getRecipe(category, recipeName) {
  const res = await fetch("http://localhost:3000/recipes.json", {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  const item = {
    ...data.find((itm) => itm.uid === category),
  };
  return item.recipes.find((itm) => itm.uid === recipeName);
}

export default async function RecipesDetails(props) {
  const { params } = props;
  
  const recipe = await getRecipe(params.catId, params.recipesId[params.recipesId.length - 1 ]);
  return (
    <>
      <div className="flex px-8 pt-28 space-x-4 flex-col-reverse lg:flex-row">
        <div className="mt-8 space-y-4 lg:mt-0">
          <CustomTypography variant="h1" component="h1">
            {recipe.name}
          </CustomTypography>
          <div className="bg-white bg-opacity-70 sm:h-fit rounded-md p-4">
            <CustomTypography variant="h3" component="h3">
              Description:
            </CustomTypography>
            <CustomTypography variant="body2" component="body2">
              {recipe.cookingDescription}
            </CustomTypography>
          </div>
          <div className="flex space-x-4">
            <div className="flex flex-col  sm:flex-row mt-4 p-4 space-x-2 bg-white bg-opacity-70 w-fit rounded-md items-center">
              <CustomTypography variant="h3" component="h3">
                Servings:
              </CustomTypography>
              <div className="flex items-center justify-center space-x-2">
                <CustomTypography variant="body1" component="body1">
                  {recipe.servings}
                </CustomTypography>
                <CiForkAndKnife size="1.25em" />
              </div>
            </div>
            <div className="flex flex-col sm:flex-row mt-4 p-4 space-x-2 bg-white bg-opacity-70 w-fit rounded-md items-center">
              <CustomTypography variant="h3" component="h3">
                Cooking Time:
              </CustomTypography>
              <div className="flex items-center justify-center space-x-2">
                <CustomTypography variant="body1" component="body1">
                  {recipe.cookingTime}
                </CustomTypography>
                <BiTimeFive size="1.25em" />
              </div>
            </div>
          </div>
        </div>
        <div className="justify-center max-h-full">
          <Image
            src={recipe.image}
            width={1024}
            height={768}
            className="object-contain rounded-md max-w-full md:max-h-96"
            placeholder="blur"
            blurDataURL="/spinner.svg"
            alt="image is not available"
          ></Image>
        </div>
      </div>
      <div className="m-8">
        <ul className="bg-white bg-opacity-70 rounded-md p-4">
          <CustomTypography variant="h3" component="h3">
            Ingredients:
          </CustomTypography>
          {recipe.ingredients.map((ingredient, index) => {
            return <li key={ingredient + index}> - {ingredient}</li>;
          })}
        </ul>
      </div>
    </>
  );
}
