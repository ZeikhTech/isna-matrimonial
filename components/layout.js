import Header from "./Includes/Header";
import Footer from "./Includes/Footer";
// import WithAuth from "./HOC/WithAuth";
const Layout = function ({ children }) {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
export default Layout;
