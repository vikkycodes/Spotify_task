import React from "react";
import sidebar_footer_img from "../../../images/sidebar_footer_img.jpg";
import more_than from "../../../images/more_than.png";
import "../../css/styles.css";

const Footer = () => {
  return (
    <div className="sidebar_footer">
      <img className="sidebar_footer_img" src={sidebar_footer_img} alt="" />
      <h4>Victor Okoro</h4>
      <img className="more_than_img" src={more_than} alt="" />
    </div>
  );
};

export default Footer;
