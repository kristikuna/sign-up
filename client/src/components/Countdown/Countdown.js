import { useEffect, useState, useCallback, useMemo } from "react"
import { Typography, Box } from "@mui/material"

const ThanksgivingCountdown = () => {
  const thanksgivingDate = useMemo(() => new Date("2024-11-28T00:00:00"), [])
  const [timeRemaining, setTimeRemaining] = useState({})

  const calculateTimeRemaining = useCallback(() => {
    const now = new Date()
    const distance = thanksgivingDate - now

    const days = Math.floor(distance / (1000 * 60 * 60 * 24))
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    )
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((distance % (1000 * 60)) / 1000)

    // Only update state if the time has changed
    setTimeRemaining((prevTime) => {
      const newTime = { days, hours, minutes, seconds }
      if (JSON.stringify(prevTime) !== JSON.stringify(newTime)) {
        return newTime
      }
      return prevTime
    })
  }, [thanksgivingDate])

  useEffect(() => {
    const timer = setInterval(calculateTimeRemaining, 1000)
    return () => clearInterval(timer)
  }, [calculateTimeRemaining]) // Added calculateTimeRemaining to dependencies

  return (
    <Box>
      <Typography
        align="center"
        variant="h2"
        color="#fff4db"
        sx={{
          background: "#cc5500",
          borderRadius: "4px",
          fontSize: "1.9rem",
          fontWeight: "bold",
          padding: "1rem",
          minWidth: "400px",
        }}
      >
        FEAST STARTING IN:
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "7rem",
        }}
      >
        {timeRemaining.days ? (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: 2,
              textAlign: "center",
            }}
          >
            <Box paddingRight={3}>
              <Typography
                component="p"
                align="center"
                color="#333"
                sx={{
                  fontSize: "2rem",
                  fontWeight: "bold",
                }}
              >
                {timeRemaining.days}
              </Typography>
              <Typography component="p" align="center" color="#333">
                Days
              </Typography>
            </Box>
            <Box paddingRight={3}>
              <Typography
                component="p"
                align="center"
                color="#333"
                sx={{
                  fontSize: "2rem",
                  fontWeight: "bold",
                }}
              >
                {timeRemaining.hours}
              </Typography>
              <Typography
                component="p"
                align="center"
                color="var(--color-text)"
              >
                Hours
              </Typography>
            </Box>
            <Box paddingRight={3}>
              <Typography
                component="p"
                align="center"
                color="#333"
                sx={{
                  fontSize: "2rem",
                  fontWeight: "bold",
                }}
              >
                {timeRemaining.minutes}
              </Typography>
              <Typography
                component="p"
                align="center"
                color="var(--color-text)"
              >
                Minutes
              </Typography>
            </Box>
            <Box>
              <Typography
                component="p"
                align="center"
                color="#333"
                sx={{
                  fontSize: "2rem",
                  fontWeight: "bold",
                }}
              >
                {timeRemaining.seconds}
              </Typography>
              <Typography
                component="p"
                align="center"
                color="var(--color-text)"
              >
                Seconds
              </Typography>
            </Box>
          </Box>
        ) : (
          <Typography
            component="p"
            align="center"
            color="#333"
            sx={{
              fontSize: "2rem",
              fontWeight: "bold",
              alignSelf: "center",
            }}
          >
            "Calculating feast time..."
          </Typography>
        )}
      </Box>
    </Box>
  )
}

export default ThanksgivingCountdown
