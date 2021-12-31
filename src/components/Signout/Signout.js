import React from "react";
import { useDispatch } from "react-redux";
import { Button, Modal } from "semantic-ui-react";
import { auth } from "../../firebase";
import { clearCart } from "../../slices/cartSlice";
import { logout } from "../../slices/userSlice";

function Signout({ openModal, setOpenModal }) {

  const dispatch = useDispatch()
  const signout = () => {
    auth.signOut();
    dispatch(logout());
    dispatch(clearCart());
  }

  return (
    <Modal
      onClose={() => setOpenModal(false)}
      onOpen={() => setOpenModal(true)}
      open={openModal}
      size="tiny"
    >
      <Modal.Header>Logout</Modal.Header>
      <Modal.Content>
        <p>Are you sure you want to logout of your account?</p>
      </Modal.Content>
      <Modal.Actions>
        <Button negative onClick={() => setOpenModal(false)}>
          No
        </Button>
        <Button positive onClick={signout}>
          Yes
        </Button>
      </Modal.Actions>
    </Modal>
  );
}

export default Signout;
