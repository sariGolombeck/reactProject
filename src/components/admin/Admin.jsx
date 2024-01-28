import AppStore from "../store-mobx/Services"
import Login from "../Login"
import { observer } from "mobx-react";
import BussinessAdmin from "./BussinessAdmin";


const Admin = observer(() => {
  return (
    <>
      {!AppStore.isLogin ? <Login /> : <BussinessAdmin /> }
    </>
  );
});

export default Admin;
