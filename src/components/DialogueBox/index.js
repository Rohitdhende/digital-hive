import { Button, Dialog, DialogTitle } from "@mui/material";
import React from "react";

const DialogueBox = (props) => {
  const { onClose, cancelNavigation, confirmNavigation, open } = props;
  const handleClose = () => {
    onClose();
  };
  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Unsaved Changes</DialogTitle>
      <Button onClick={cancelNavigation}>Cancel</Button>
      <Button onClick={confirmNavigation}>Confirm</Button>
    </Dialog>
  );
};

export default DialogueBox;
