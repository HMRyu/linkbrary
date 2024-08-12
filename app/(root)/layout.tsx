import Footer from "../shared/components/footer/Footer";
import Header from "../shared/components/header/Header";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen flex-col">
      <Header />
      <div className="flex-1">{children}</div>
      <Footer />
    </div>
  );
};

export default RootLayout;
