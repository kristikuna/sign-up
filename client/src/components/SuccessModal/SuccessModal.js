import {
  IconButton,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material/"
import { Link } from "react-router-dom"
import CloseIcon from "@mui/icons-material/Close"
import HomeIcon from "@mui/icons-material/Home"
import { THANKSGIVING_FACTS } from "../../constants/thanksgivingFacts"

function SuccessModal({ handleClose, open, showHome }) {
  const randomFact =
    THANKSGIVING_FACTS[Math.floor(Math.random() * THANKSGIVING_FACTS.length)]

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      sx={{
        ".MuiPaper-root": {
          background: `#fff4db`,
        },
      }}
    >
      <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
        Success!
      </DialogTitle>
      <IconButton
        aria-label="close"
        onClick={(e) => {
          e.stopPropagation()
          handleClose()
        }}
        sx={(theme) => ({
          position: "absolute",
          right: 8,
          top: 8,
          color: theme.palette.grey[500],
        })}
      >
        <CloseIcon color="warning" />
      </IconButton>
      <DialogContent
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          paddingTop: 0,
        }}
      >
        <Typography fontSize={50}>🦃</Typography>
        <Typography fontWeight={700} fontSize={20}>
          Did You Know?
        </Typography>

        {randomFact}
        {showHome ? (
          <DialogActions>
            <Link to="/" autoFocus>
              <HomeIcon color="warning" />
            </Link>
          </DialogActions>
        ) : null}
      </DialogContent>
    </Dialog>
  )
}

export default SuccessModal
