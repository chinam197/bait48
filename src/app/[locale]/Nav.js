import Network from "./networkSociety/Network";
import Home from "./home/Home";
import { useTranslations } from "next-intl";
const Nav = () => {
  const t = useTranslations("Info");
  const info = {
    name: t("name"),
    img: t("img"),
  };
  return (
    <div className="row position-fixed d-flex justify-content-around bg-dark nav-bar">
      <Home info={info} />
      <Network />
    </div>
  );
};

export default Nav;
