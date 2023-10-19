
import Cabecalho from './components/Cabecalho/Cabecalho.jsx'
import Rodape from './components/Rodape/Rodape.jsx'
import { Outlet } from "react-router-dom";
import "./App.module.scss"


export default function App(){

  return(
    <>
      <Cabecalho/>
      <Outlet/>
      <Rodape/>
    </>
)}
