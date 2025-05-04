import Footer from "./Footer";
import Navbar from "./Navbar";

export default function AppShelter({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
