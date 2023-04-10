import "./globals.css";
import Providers from "./Providers";
import ResponsiveAppBar from "@/components/AppBar";
import MainAppBarItems from "@/components/MainAppBarItems";

export const metadata = {
  title: "Algorithmic Perfumery",
  description: "By Scentronix",
};

export default function RootLayout({ children, params }) {
  const route = children.props.childProp.segment; // There seems to be an issue not passing params and searchParams to root layout https://github.com/vercel/next.js/issues/43704
  return (
    <html lang="en">
      <body>
        <Providers>
          <ResponsiveAppBar
            appBarStyle={{
              position: "sticky",
              elevation: 0,
              sx: {
                mb: 1,
                height: 100,
                // boxShadow:
                //   "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)",
              },
            }}
            route={route}
          >
            <MainAppBarItems />
          </ResponsiveAppBar>
          {children}
        </Providers>
      </body>
    </html>
  );
}
