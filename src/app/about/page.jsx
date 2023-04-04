import Image from "next/image";
import React from "react";
import healthyFoodPicture from "../../../public/healthyFood.png";

export default function About() {
  return (
    <div className="max-w-full  my-16 space-y-16 px-24">
      <div className="flex  justify-between flex-wrap">
        <div className="flex justify-start items-start">
          <Image
            width={600}
            height={600}
            alt="This is a food for pic"
            src={healthyFoodPicture}
          />
        </div>
        <div className="max-w-lg space-y-8 ">
          <h1>Empowering people by harnessing their senses.</h1>
          <p>
            At our company, we are passionate about providing delicious and
            nutritious food recipes to our customers. Our team of experienced
            chefs and nutritionists work together to create recipes that not
            only taste great but also promote a healthy lifestyle. We understand
            that people have different dietary needs and preferences, which is
            why we offer a wide range of recipes that cater to different dietary
            requirements such as vegan, gluten-free, and keto. Our recipes are
            easy to follow and come with step-by-step instructions and
            nutritional information to help our customers make informed choices.
            We believe that good food should not only taste good but also make
            you feel good, and that's what we strive to achieve with every
            recipe we create.
          </p>
        </div>
      </div>
      <div className="flex justify-start">
        <div className="max-w-lg space-y-8">
          <h1>
            We believe every human is a creator with the birthright to make
            choices freely
          </h1>
          <p>
            The joy of creation connects us to ourselves, to others and the
            world around us. This connection unleashes our imagination to dream,
            to play, to create. We believe imagination is the everlasting magic
            behind progress and happiness.
          </p>
        </div>
      </div>
    </div>
  );
}
