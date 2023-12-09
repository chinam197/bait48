import React from "react";
import Link from "next/link";
const Home = ({ info }) => {
  console.log(info);
  return (
    <ul className="col-6 d-flex justify-content-start align-items-center">
      <li className="home-vi">
        <Link href="/vi">
          <img className="img-home" src={info.img} alt="trang chu" />
        </Link>
      </li>
      <li className="home-vi">
        <Link href="/vi">{info.name}</Link>
      </li>
    </ul>
  );
};

export default Home;
