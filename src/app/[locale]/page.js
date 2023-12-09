import { useTranslations } from "next-intl";

export default function Index() {
  const t = useTranslations("Info");
  return (
    <div className="row project-c">
      <h1 className="text-center name-m">{t("name")}</h1>
      <div className="col-4">
        <div className="d-flex flex-column">
          <hr />
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-tcu3Y0er7OUY-l6JE3ProQd6onR6Wc_0dVtvFpX51w&s"
            alt="nobita"
          />
          <hr />
          <span className="text-center">nobita</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora,
            iure!
          </p>
          <hr />
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate
            repellat explicabo commodi! At, quisquam nam ex natus velit ad
            aperiam?
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae
            error harum doloremque vitae tenetur?
          </p>
        </div>
      </div>
      <div className="col-8">
        <hr />
        <h2 className="text-center">Thông tin liên hệ</h2>
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
          <h3>Các dự án cá nhân</h3>
        </div>
      </div>
    </div>
  );
}
