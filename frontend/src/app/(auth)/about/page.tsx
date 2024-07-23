"use client";

import Header from "@/components/Header";
import React from "react";
import backgroundimg from "@/assets/background.svg";

const About: React.FC = () => {
  return (
    <>
      <Header />
      <div className="flex flex-row mt-4 justify-center items-center gap-12">
        <span className="text-center text-[24px] w-100 font-bold">
          Get All Your Technology Updates at One Place
        </span>
        <img src={backgroundimg.src} className="img-fluid w-96 rounded-xl" />
      </div>
      <div className="flex flex-row justify-center w-64 ">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
          temporibus impedit quidem in odio aperiam facere fugit provident
          debitis nisi libero, aliquam obcaecati tempore dolorum quaerat culpa
          voluptatibus. Ab aliquam a dolores corrupti ipsum praesentium in eos
          perspiciatis voluptatum velit nihil, deserunt amet, illum ipsam
          asperiores facilis necessitatibus? At earum laborum tempora eaque
          nobis velit nesciunt neque fugit veniam possimus corrupti placeat
          perspiciatis consectetur quo officia aperiam suscipit, cumque
          architecto expedita debitis soluta est amet? Assumenda consectetur
          nulla quaerat, quidem expedita ex vero nemo illum ipsam maxime
          distinctio ea! Soluta sed maxime neque, doloribus similique
          laudantium, ex inventore voluptate totam praesentium aut iure labore.{" "}
        </p>
      </div>
    </>
  );
};

export default About;
