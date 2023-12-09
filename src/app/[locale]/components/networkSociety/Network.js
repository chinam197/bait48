"use client";
import Link from "next/link";
import ThemeSwitcher from "../../ThemeSwitcher";
import "../../assets/style.scss";
import { usePathname } from "next/navigation";
import clsx from "clsx";
const Network = () => {
  const pathName = usePathname();
  const isActive = (path) => {
    return pathName === path;
  };
  return (
    <ul className="col-6 d-flex justify-content-end align-items-center menu">
      <li>
        <ThemeSwitcher />
      </li>
      <li className={clsx(isActive("/vi") && "active")}>
        <Link href="vi">vi</Link>
      </li>
      <li className={clsx(isActive("/en") && "active")}>
        <Link href="en">en</Link>
      </li>
    </ul>
  );
};

export default Network;
