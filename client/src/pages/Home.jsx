import { useEffect } from "react";
import { Auth } from "../components/Auth/Auth";
import { CardDetails } from "../components/Details/CardDetails";
import { Details } from "../components/Details/Details";
import { MugsToBuy } from "../components/Global/Header/Game/MugsToBuy";
import { Header } from "../components/Global/Header/Header";
import { Main } from "../components/Home/Main/Main";
import { useDetailsContext } from "../context/useDetalis";
import { useGlobalContext } from "../context/useGlobal";
import { selectorId } from "../helpers/popper";
import { useGlobalServices } from "../services/useGlobalServices";

export const Home = () => {
  const { global, setGlobal } = useGlobalContext();

  const { details, setDetails } = useDetailsContext();

  return (
    <>
      <Main />
    </>
  );
};
