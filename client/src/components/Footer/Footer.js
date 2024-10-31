import { Box, Typography } from "@mui/material"

function Footer() {
  const EMOJI_LIST = ["❤️", "☕", "🐱"]
  const madeWithEmoji =
    EMOJI_LIST[Math.floor(Math.random() * EMOJI_LIST.length)]
  return (
    <Box
      component="footer"
      sx={{
        background: `#fff4db`,
        bottom: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "7vh",
        position: "fixed",
        width: "100%",
      }}
    >
      <Typography>{`Made with ${madeWithEmoji} by Kristi Kuna`}</Typography>
    </Box>
  )
}

export default Footer
