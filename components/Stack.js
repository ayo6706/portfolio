import Image from "next/image";
import Node from "../public/assets/img/node.png";
import Django from "../public/assets/img/django.png";
import Laravel from "../public/assets/img/laravel.png";
import React from "../public/assets/img/react.png";
import Aws from "../public/assets/img/aws.png";
import Firebase from "../public/assets/img/firebase.svg";
import Next from "../public/assets/img/next.png";

function Stack() {
    return (
  
      
    <div className="tech-stack" id="tech-stack">
        <h2>Tech Stack</h2><span></span>

        <div className="stack-imgs">
            <Image src={Node} alt="Node js" />
            <Image src={Django} alt="django" />
            <Image src={Laravel} alt="laravel" />
            <Image src={React} alt="react" />
            <Image src={Aws} alt="aws" />
            <Image src={Firebase} alt="Firebase" />
            <Image src={Next} alt="next js" />
        </div>
    </div>
      
    );
  }
  
  export default Stack;
