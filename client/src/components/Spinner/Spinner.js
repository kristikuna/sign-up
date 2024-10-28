import React, { useState, useEffect } from "react"

function Spinner() {
  const [rotation, setRotation] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRotation((prevRotation) => prevRotation + 36)
    }, 100)

    return () => clearInterval(intervalId)
  }, [])

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <span
        role="img"
        aria-label="loading"
        style={{ fontSize: "48px", transform: `rotate(${rotation}deg)` }}
      >
        &#x1f983;
      </span>
    </div>
  )
}

export default Spinner
