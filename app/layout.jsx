import { Inter } from "next/font/google";
import "./globals.css";
var inter = Inter({ subsets: ["latin"] });
export var metadata = {
    title: "Create Next App Yellow",
    description: "Generated by create next app",
    openGraph: {
        title: "Create Next App Yellow",
        description: "Generated by create next app",
        images: ["https://app-info.healthypublicspaces.com/default-image.jpg"],
        url: "https://app-info.healthypublicspaces.com",
        type: "website",
    },
};
export default function RootLayout(_a) {
    var children = _a.children;
    return (<html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>);
}
