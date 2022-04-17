import React, { useContext, useState } from "react";
import "./WalletCard.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";
import { ListWalletContext } from "../../Context/ListWalletContext";
import { Modal } from "react-bootstrap";

export default function WalletCard({ item, index }) {
  let history = useHistory();
  const [modal, setModal] = useState(false);
  const { WalletList, removeWallet } = useContext(ListWalletContext);

  const handleRemoveWallet = (id) => {
    removeWallet(id);
  };
  return (
    <div className="walletcard-pg " key={index}>
      <div className="label-trans-numb-pg">
        <div className="wal-ind"> {index + 1} </div>
        <div className="wal-date">{item.date} </div>
      </div>
      <Link
        to={`/SingleWalletPage/${item.walletName}`}
        style={{ textDecoration: "none" }}
      >
        <div className="wallet-name-pg">{item.walletName} </div>
      </Link>
      <div className="icons-card">
        <div className="trash">
          <FontAwesomeIcon
            icon={faTrashAlt}
            size="xs"
            onClick={() => setModal(true)}
          />
        </div>
        <div className="lab">
          {item.totalBal} {item.select}
        </div>
      </div>
      <Modal
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={modal}
        onHide={() => setModal(false)}
        className="modal-bg-style"
      >
         <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Warning!
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='delText'>Are you sure you want to delete this wallet? </div>
          <div className='actionIrr'>This action is irreversible</div>
        </Modal.Body>
        <Modal.Footer>
            <button className="delete-wlt-btn-modal" type="submit" onClick={() => {
              handleRemoveWallet(item.id);
              if (WalletList.length === 1) {
                history.push("/Nowallets/");
              }
            }}>
              Delete
            </button>
          </Modal.Footer>
      </Modal>
    </div>
  );
}
