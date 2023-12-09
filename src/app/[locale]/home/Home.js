import React from "react";
import Link from "next/link";
const Home = ({ info }) => {
  console.log(info);
  return (
    <ul className="col-6 d-flex justify-content-start align-items-center">
      <li>
        <img className="img-home" src={info.img} alt="trang chu" />
      </li>
      <li>{info.name}</li>
    </ul>
  );
};

export default Home;
