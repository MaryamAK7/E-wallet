import React, {useContext} from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ListWalletContext } from "./Context/ListWalletContext";
import 'semantic-ui-css/semantic.min.css'
import "bootstrap/dist/css/bootstrap.min.css";
import 'animate.css/animate.css'
// import NoWallet from "./Pages/NoWalletPage/NoWalletPage";
import Navbar from "./Components/NavBar/Navbar";
// import SingleWalletPage from "./Pages/SingleWalletPage/SingleWalletPage";
import WalletsPage from './Pages/WalletsPage/WalletsPage';
import SignUpPage from './Pages/SignUpPage/SignUpPage';


export default function App() {
  const { WalletList } = useContext(ListWalletContext);
  return (
    <Router>
      <div className="App">
        
              <Navbar />
              {/* 
              <Route exact path="/"> 
              {  
              WalletList ? <NoWallet />  : <WalletsPage />
              }
              </Route>
              
              <Route exact path = "/SingleWalletPage/:name"> 
                 <SingleWalletPage/> 
              </Route> */}
              <Route exact path="/wallets/"> 
                 <WalletsPage />
              </Route>
              {/* <Route path='sign-up'> */}
                <SignUpPage />
              {/* </Route> */}
         
      </div>
    </Router>
  );
}
