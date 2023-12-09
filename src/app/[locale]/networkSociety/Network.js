"use client";
import ThemeSwitcher from "../ThemeSwitcher";
const Network = () => {
  return (
    <ul className="col-6 d-flex justify-content-end align-items-center">
      <li>
        <ThemeSwitcher />
      </li>
      <li>
        <button>en</button>
        <button>vi</button>
      </li>
    </ul>
  );
};

export default Network;
