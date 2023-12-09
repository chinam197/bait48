import { useTranslations } from "next-intl";

export default function Project() {
  const info = useTranslations("Info");
  const skills = useTranslations("Skills");
  const intro = useTranslations("Intro");
  const project = useTranslations("Project");
  return (
    <div className="row project-c">
      <h1 className="text-center name-m">{info("name")}</h1>
      <div className="col-4">
        <div className="d-flex flex-column">
          <hr />
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-tcu3Y0er7OUY-l6JE3ProQd6onR6Wc_0dVtvFpX51w&s"
            alt="nobita"
          />
          <hr />
          <span className="text-center">Front-end developer</span>
          <h2>{skills("title")}</h2>
          <hr />
          <p>
            <strong>{skills("skill-1")}</strong>
            REST API, React.js, Next.js, Redux, Context, CSS3, HTML5, UI/UX,
            Figma, Photoshop...
          </p>
          <p>
            <strong>{skills("other-title")}</strong>
            {skills("other")}
          </p>
        </div>
      </div>
      <div className="col-8">
        <hr />
        <h2 className="text-center">{intro("Contact")}</h2>
        <p>
          Phone:
          <a href="#">113</a>
        </p>
        <p>
          Zalo:
          <a href="#">https://zalo.me/0986921104</a>
        </p>
        <p>
          Email:
          <a href="#">hotboy@gmail.com</a>
        </p>
        <p>
          Faceb ook:
          <a href="#">113</a>
        </p>
        <hr />
        <div className="project-p">
          <h3>{project("title")}</h3>
        </div>
      </div>
    </div>
  );
}
