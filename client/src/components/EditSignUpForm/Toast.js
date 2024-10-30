import { Snackbar } from "@mui/material"

function Toast({ action, handleClose, open }) {
  return (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
      message="Updated"
      action={action}
    />
  )
}

export default Toast
