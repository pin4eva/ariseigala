import React from "react";

const HeaderComp = ({ title }: { title: string }): JSX.Element => {
  return (
    <div className="container">
      <span className="line"></span>
      <h3 className="">{title}</h3>
      <span className="line"></span>
    </div>
  );
};

export default HeaderComp;
