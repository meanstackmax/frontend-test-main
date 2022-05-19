import { Checkbox, FormControlLabel, Card, CardContent, CardMedia } from "@mui/material"
import { useEffect, useState } from "react"
import img from "../images/CardMedia.png"

function CardComponent({ title, defaultHover = false, defaultSelected = false }) {
  const [isSelected, setIsSelected] = useState(defaultSelected || false)
  const [styles, setStyles] = useState({})

  useEffect(() => {
    if (defaultHover && !isSelected) {
      setStyles({
        boxShadow: "0px 0px 0px 2px #65E9D9"
      })
    } else if (isSelected) {
      setStyles({
        border: "1px solid #3D8479",
        boxShadow: "0px 0px 0px 2px #65E9D9"
      })
    } else {
      setStyles({})
    }
  }, [defaultHover, isSelected])

  function handleClickByCard(event) {
    event.preventDefault()
    setIsSelected((prevState) => !prevState)
  }

  return (
    <Card
      sx={{
        maxWidth: 229,
        borderRadius: "10px",
        "&:hover, &.Mui-focusVisible": { boxShadow: "0px 0px 0px 2px #65E9D9" },
        ...styles
      }}
      variant="outlined"
      onClick={handleClickByCard}
    >
      <CardMedia component="img" alt={title} height="100px" image={img} />
      <CardContent
        sx={{
          "&.MuiCardContent-root": {
            padding: "8px 8px 8px 18px"
          }
        }}
      >
        <FormControlLabel
          control={
            <Checkbox
              sx={{
                "&.Mui-checked": {
                  color: "#21B6A8"
                }
              }}
              defaultChecked={defaultSelected}
              checked={isSelected}
            />
          }
          componentsProps={{ typography: { fontFamily: "Plus Jakarta Sans", fontSize: "14px", color: "#1B1B1B" } }}
          label={title}
        />
      </CardContent>
    </Card>
  )
}

export default CardComponent
