import React, { useContext } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ListWalletContext } from "./Context/ListWalletContext";
import "semantic-ui-css/semantic.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css/animate.css";
import NoWallet from "./Pages/NoWalletPage/NoWalletPage";
import Navbar from "./Components/NavBar/Navbar";
import SingleWalletPage from "./Pages/SingleWalletPage/SingleWalletPage";
import WalletsPage from "./Pages/WalletsPage/WalletsPage";
import SignUpPage from "./Pages/SignUpPage/SignUpPage";
import SignInPage from "./Pages/SignInPage/SignInPage";
import ResetPassPage from "./Pages/ResetPassPage/ResetPassPage";
import ProfilePage from "./Pages/ProfilePage/ProfilePage";
import UpdateProfilePage from "./Pages/UpdateProfilePage/UpdateProfilePage";

export default function App() {
  const { WalletList } = useContext(ListWalletContext);
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route exact path="/">
          {WalletList ? <NoWallet /> : <WalletsPage />}
        </Route>
        <Route path="/SingleWalletPage/:name">
          <SingleWalletPage />
        </Route>
        <Route path="/wallets">
          <WalletsPage />
        </Route>
        <Route path="/NoWallets">
          <NoWallet />
        </Route>
        <Route path="/sign-up">
          <SignUpPage />
        </Route>
        <Route path="/sign-in">
          <SignInPage />
        </Route>
        <Route path="/reset-pass">
          <ResetPassPage />
        </Route>
        <Route path="/profile">
          <ProfilePage />
        </Route>
        <Route path="/update-profile">
          <UpdateProfilePage />
        </Route>
      </div>
    </Router>
  );
}
