import React from "react";
import "./styles/about.css"
;
import image from "./download (10).jpeg"
import image2 from "./download (11).jpeg"

import image3 from "./images (4).jpeg"


function About(){




    return(


<div class="james">
    <h2>About HybridTech</h2>
<p  >
        <strong class="str">HybridTech</strong> is a global technology company where customers can buy and access a wide range of 
        high-quality technological devices. We specialize in both <strong class="str">hardware and software solutions</strong>, 
        offering everything from powerful computers and gadgets to innovative digital services that make technology 
        simpler and more accessible for everyone.
      </p>

      <p class="pass">
        Founded in <strong class="str">2025</strong> by software engineer <strong class="str">David Jordan Dike</strong>, HybridTech was created 
        with the vision of connecting people and technology through reliable products and creative solutions. 
        Our mission is to make technology smarter, faster, and more efficient — for individuals, businesses, and 
        communities worldwide.
      </p>

      <p class="pass">
        Today, HybridTech proudly operates in over <strong class="str">20 countries</strong>, including the 
        <strong class="str"> United States, United Kingdom, China, Spain, Germany, Nigeria, Chad, Ghana,</strong> and many more. 
        We continue to grow as a trusted name in innovation, offering customers a seamless experience in both tech 
        products and professional support.
      </p>

      <p class="pass">
        At HybridTech, we don’t just sell technology — we build solutions that move the world forward.
      </p>
<div  class="im">

      <img  class="imm1" src={image} alt="image" />

      <img class="imm2" src={image2}  alt="image"/>
      <img class="imm3 " src={image3} alt="images"/>
</div>
</div>
     
    )

}

export default About;



