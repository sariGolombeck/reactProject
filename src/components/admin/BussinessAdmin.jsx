import BusinessData from "../BussinessData/BussinesData"
import { Outlet, Link } from "react-router-dom"

const BussinessAdmin=()=>{
    return(<>
    <BusinessData/>;
    {/* <Link to="./services">services</Link>;
    <Link to="./meeting">meeting</Link>; */}
    {/* <Outlet /> */}
    </>)
}
export default  BussinessAdmin;