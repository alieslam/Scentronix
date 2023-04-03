import Image from "next/image";
import React from "react";
import healthyFoodPicture from "../../../public/healthyFood.png";

export default function About() {
  return (
    <div className="max-w-6xl  mx-6 space-y-4 space-x-4">
      <h1 className="text-1xl text-red-900 font-medium">About</h1>
      <div className="flex items-center justify-center">
      <div className="text-center">
        <Image width={500} height={500} alt="This is a food for pic" src={healthyFoodPicture} />
      </div>
      </div>
      <p>
        At our company, we are passionate about providing delicious and
        nutritious food recipes to our customers. Our team of experienced chefs
        and nutritionists work together to create recipes that not only taste
        great but also promote a healthy lifestyle. We understand that people
        have different dietary needs and preferences, which is why we offer a
        wide range of recipes that cater to different dietary requirements such
        as vegan, gluten-free, and keto. Our recipes are easy to follow and come
        with step-by-step instructions and nutritional information to help our
        customers make informed choices. We believe that good food should not
        only taste good but also make you feel good, and that's what we strive
        to achieve with every recipe we create.
      </p>
      <div></div>
    </div>
  );
}
