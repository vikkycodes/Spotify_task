import React, { useContext } from "react";
import sidebar_footer_img from "../../../images/sidebar_footer_img.jpg";
import more_than from "../../../images/more_than.png";
import "../../css/styles.css";
import { AppContext } from "../../utils/appContext";

const Footer = () => {
  const { user } = useContext(AppContext);
  return (
    <div className="sidebar_footer">
      {user.name && (
        <>
          <img
            className="sidebar_footer_img"
            src={user.image ?? sidebar_footer_img}
            alt=""
          />
          <h4>{user.name}</h4>
          <img className="more_than_img" src={more_than} alt="" />
        </>
      )}
    </div>
  );
};

export default Footer;
