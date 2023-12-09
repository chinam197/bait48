import { notFound } from "next/navigation";
import Provides from "./Providers";
import Nav from "./components/Nav";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useTranslations } from "next-intl";
let title;

export const metadata = {
  title: "Nam/Portfolio",
  description: "Nam Portfolio",
};

const locales = ["vi", "en"];

export default function LocaleLayout({ children, params: { locale } }) {
  const meta = useTranslations("Info");
  title = meta("title");

  if (!locales.includes(locale)) notFound();

  return (
    <html lang={locale}>
      <body>
        <div className="container">
          <Provides>
            <Nav />
            {children}
          </Provides>
        </div>
      </body>
    </html>
  );
}
