import { JobsDetails } from "../components/JobsDetails";
import { JobsLists } from "../components/JobsLists";
import {BrowserRouter as Router,Routes,Route,Navigate} from "react-router-dom";


export function MyRoutes () {
    return (<Router>
        <Routes>
            <Route exact path="/" element={<JobsLists/>}/>
            <Route exact path="/jobs" element={<JobsLists/>}/>
            <Route exact path="/jobs/:position" element={<JobsDetails/>}/>

        </Routes>
    </Router>);
}

