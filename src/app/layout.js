import Header from "@/components/Header";
import "./globals.css";
import Providers from "./Providers";
import ResponsiveAppBar from "@/components/AppBar";
import MainAppBarItems from "@/components/MainAppBarItems";

export const metadata = {
  title: "Algorithmic Perfumery",
  description: "By Scentronix",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <ResponsiveAppBar
            appBarStyle={{
              position: "sticky",
              elevation: 2,
              sx: {
                mb: 1,
                height: 100,
                boxShadow:
                  "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)",
              },
            }}
          >
            <MainAppBarItems />
          </ResponsiveAppBar>
          {children}
        </Providers>
      </body>
    </html>
  );
}
