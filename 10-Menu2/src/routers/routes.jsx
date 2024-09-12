import {BrowserRouter,Routes,Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { NavBar } from "../components/NavBar/NavBar";
import {Products} from "../pages/Products";
import { R1,R2, Reports } from "../pages/Reports";
// import {R1,R2,Reports} from "../pages/Reports"

export function MyRoutes(){
    return(
    <BrowserRouter>
    <NavBar/>
        <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/products" element={<Products/>}/>
            <Route exact path="/reports" element={<Reports/>}/>

            <Route exact path="/reports/reports1" element={<R1/>} />
            <Route exact path="/reports/reports2" element={<R2/>} />
        </Routes>
    </BrowserRouter>
    );
}
