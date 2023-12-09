import { notFound } from "next/navigation";
import Provides from "./Providers";
import Nav from "./components/Nav";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
export const metadata = {
  title: "Nam yasua",
  description: "bài này mãi mới làm được",
};
// Can be imported from a shared config
const locales = ["vi", "en"];

export default function LocaleLayout({ children, params: { locale } }) {
  // Validate that the incoming `locale` parameter is valid
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
