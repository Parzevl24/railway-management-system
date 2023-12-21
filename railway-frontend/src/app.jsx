import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
// import './app.css'
import Appbar from "./Appbar.jsx";
import Signup from "./SignUp.jsx";
import Signin from "./Signin.jsx";
import AddTrain from './AddTrain.jsx';
import Home from './Home.jsx';
import Gtrains from './gtrains.jsx';

import USignup from './USignup.jsx';
import USignin from './USignin.jsx';
import UTrains from './UTrains.jsx';
import UBookings from './UBookings.jsx';
import Uhome from './UHome.jsx';
// import GetTrains from './GetTrains.jsx';

export function App() {
  return (
  <div >
    {/* <RecoilRoot> */}
      <Router>
        <Appbar/>
          <Routes>
            <Route path="/addtrain" element={<AddTrain/>}></Route>
            <Route path="/signup" element={<Signup/>}></Route>
            <Route path="/signin" element={<Signin/>}></Route> 
            <Route path="/home" element={<Home/>}></Route> 
            <Route path="/gettrains" element={<Gtrains/>}></Route> 
            {/* user Routes */}
            <Route path="/user/signup" element={<USignup/>}></Route>
            <Route path="/user/signin" element={<USignin/>}></Route>
            <Route path="/user/trains" element={<UTrains/>}></Route>
            <Route path="/user/bookings" element={<UBookings/>}></Route>
            <Route path="/user/home" element={<Uhome/>}></Route>
          </Routes>
      </Router>
    {/* </RecoilRoot> */}
    {/* hello world */}
  </div>
  )
}
