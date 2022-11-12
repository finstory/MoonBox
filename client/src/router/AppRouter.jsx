import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { Auth } from "../components/Auth/Auth";
import { Details } from "../components/Details/Details";
import { Footer } from "../components/Global/Footer/Footer";
import { MugsToBuy } from "../components/Global/Header/Game/MugsToBuy";
import { Header } from "../components/Global/Header/Header";
import { FullView } from "../pages/FullView";
import { Home } from "../pages/Home";
import { useGlobalServices } from "../services/useGlobalServices";

export const AppRouter = () => {
  const { getCart, getFavorites, addItemInFavorites } = useGlobalServices();
  useEffect(() => {
    getCart();
    getFavorites();
  }, []);
  return (
    <>
      <MugsToBuy />
      <Auth />
      <Header />
      <main className="main-index">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<Home />} />
          <Route path="/view_full/:page" element={<FullView />} />
          <Route path="/details/:id" element={<Details  />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};
