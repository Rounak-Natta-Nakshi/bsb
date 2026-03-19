import "./globals.css";
import Topbar from "@/components/layout/Topbar";
import Navbar from "@/components/layout/Navbar";
import BackToTop from "@/components/layout/BackToTop";

export const metadata = {
  title: "TBS",
  description: "TBS Project",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <Topbar />
        <Navbar />
        {children}
        <BackToTop />
        
      </body>
    </html>
  );
}