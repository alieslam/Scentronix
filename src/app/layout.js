import Header from "@/components/Header";
import "./globals.css";
import Providers from "./Providers";
import ResponsiveAppBar from "@/components/AppBar";

export const metadata = {
  title: "Algorithmic Perfumery",
  description: "By Scentronix",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <ResponsiveAppBar/>
          {children}
        </Providers>
      </body>
    </html>
  );
}
