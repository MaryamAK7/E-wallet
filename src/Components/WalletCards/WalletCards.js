import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ListWalletContext } from "../../Context/ListWalletContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { Popup, Label } from "semantic-ui-react";
import "./WalletCards.css";
import { useHistory } from "react-router-dom";

function WalletCards() {
 
  let history = useHistory();
  const { WalletList, removeWallet } = useContext(ListWalletContext);

  const handleRemoveWallet = (id) => {
    removeWallet(id);
  };
  const style_popup = {
    borderRadius: 10 + "px",
    opacity: 0.7,
  };
  const changeClassName = (e) => {
    e.currentTarget.classList.add("onclickcard");
  };
  let step = 0;

  return (
    <div>
      {WalletList.map((item, index) => {
        step > 1 ? (step = 0) : step++;
        return (
             
            <div
              className="walletcard animate__animated animate__slideInDown animate__faster shadow-lg "
              style={{ backgroundColor: '#f0bf3b' }}
              eventKey={index}
              onFocus={changeClassName}
            >
               {console.log('item ', item)}
              <div className="label-trans-numb">
              <div className='wal-date'> {item.date} </div>
                <Label circular basic size="big" className='lb-cd'>
                  {item.balance} {item.select}
                </Label>
              </div>
              <Link
            to={`/SingleWalletPage/${item.walletName}`}
            style={{ textDecoration: "none" }}
          >
              <div className="wallet-name">
                {index + 1}. {item.walletName}{" "}
              </div>
              </Link>
              <div>
                
                </div> 
              <div className="icons-card">
                <Popup
                  trigger={
                    <FontAwesomeIcon
                      icon={faTrashAlt}
                      size="xs"
                      onClick={() => {
                        handleRemoveWallet(item.id)
                        if(WalletList.length === 1 ){
                          history.push('/Nowallets/');
                        }
                      }}
                    />
                  }
                  content="delete"
                  inverted
                  style={style_popup}
                  position="bottom center"
                  size="tiny"
                />
              </div>
            </div>
        );
      })}
    </div>
  );
}

export default WalletCards;
