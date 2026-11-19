import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Hospital Management",
  description: "Modern Hospital Website",
  icons: {
    icon: "/fac.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="">
         <Navbar/>
        {children}
         <Footer />
       
      </body>
    </html>
  );
}