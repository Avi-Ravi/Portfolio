import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  // AiFillYoutube,
  AiOutlineArrowUp,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <img
          src={"https://res.cloudinary.com/dlhb7c0gg/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1691309045/Removal-153_uxmvpc.png"}
          alt="Founder"
        />

        <h2>Ravi Kumar</h2>
        <p>You know!But i have to deploye.</p>
      </div>

      <aside>
        <h2>Social Media</h2>

        <article>
          {/* <a href="https://youtube.com/6packprogrammer" target={"blank"}>
            <AiFillYoutube />
          </a> */}
          <a href="https://instagram.com/avi__ravi_?igshid=MzNlNGNkZWQ4Mg==" target={"blank"}>
            <AiFillInstagram />
          </a>
          <a href="https://github.com/Avi-Ravi" target={"blank"}>
            <AiFillGithub />
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;
