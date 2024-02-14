import { Metadata } from "next";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";
import CustomLayout from "./_layout";

export const metadata: Metadata = {
  title: {
    template: "%s - Showkat Ali | Software Developer",
    default: "Showkat Ali | Software Developer",
  },
  description:
    "Welcome to my portfolio website showcasing my skills as a web developer.",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <CustomLayout>{children}</CustomLayout>
      </body>
    </html>
  );
};

export default RootLayout;
