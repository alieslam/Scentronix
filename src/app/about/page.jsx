import Image from "next/image";
import React from "react";
import healthyFoodPicture from "../../../public/healthyFood.png";
import "./about.scss";

export default function About() {
  return (
    <div>
      <div className="flex  xl:flex-nowrap flex-wrap">
        <div className="lg:px-20 pt-10 sm:max-w-full ">
          <Image
            width={1024}
            height={768}
            alt="This is a food for pic"
            src={healthyFoodPicture}
            className="lg:max-w-3xl"
          />
        </div>
        <div className="px:10 pt-10 sm:max-w-full px-10">
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
            you feel good, and that is what we strive to achieve with every
            recipe we create.
          </p>
        </div>
      </div>
      <div className="md:max-w-4xl xl:px-20 px-10 mt-20">
        <div>
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
