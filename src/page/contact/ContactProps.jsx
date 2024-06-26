import React from "react";
import "./style.css";
const ContactProps = ({ title, Type, Placeholder }) => {
  return (
    <div class="C-sub_title_2">
      <label>{title}</label>
      <div>
        <input
          class="C-textbox--simple"
          type={Type}
          placeholder={Placeholder}
          maxLength={60}
        />
      </div>
    </div>
  );
};

export default ContactProps;
