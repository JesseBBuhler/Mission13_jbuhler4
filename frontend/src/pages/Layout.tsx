import {Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Layout() {
    return (
      <>
      <Header/>
      <div className="container">
<main className="pd-3">
<Outlet/>
</main>
      </div>

      <Footer/>
      </>
    );
  }
  
  export default Layout;