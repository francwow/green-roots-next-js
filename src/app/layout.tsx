import Cursor from "../../components/Cursor";
import GoogleAnalytics from "../../components/GoogleAnalytics";
import Header from "../../components/Header";
import Provider from "../../components/Provider";
import ScrollTop from "../../components/ScrollTop";
import localFont from "next/font/local";
import "../../styles/index.css";
import "../../styles/normalize.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const materialSymbols = localFont({
  variable: "--font-family-symbols", // Variable name (to reference after in CSS/styles)
  style: "normal",
  src: "../../node_modules/material-symbols/material-symbols-rounded.woff2", // This is a reference to woff2 file from NPM package "material-symbols"
  display: "block",
  weight: "100 700",
});

export const metadata: Metadata = {
  title: "Green Roots",
  description:
    "Green Roots vende productos a base de CBD, envíos a toda Colombia.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={`${materialSymbols.variable}`} lang="en">
      <Provider>
        <body className={inter.className}>
          <ScrollTop />
          <div className="page-wrapper">
            <Cursor />
            <Header />
            <GoogleAnalytics />
            {children}
          </div>
        </body>
      </Provider>
    </html>
  );
}
