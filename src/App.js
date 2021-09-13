import { v4 as uuid } from "uuid"
import { useState } from "react"
import "./App.css"
import { initBubbles } from "./data"

import ColorPicker from "./components/ColorPicker"

function App() {
  const [bubbles, setBubbles] = useState(initBubbles)

  const onBubbleClick = (selectedBubble) => {
    setBubbles(
      bubbles.map((b) => {
        if (b.id === selectedBubble.id) {
          return {
            ...b,
            color: "#" + Math.floor(Math.random() * 16777215).toString(16),
          }
        } else {
          return b
        }
      })
    )
  }
  const randomizer = () => {
    setBubbles(
      bubbles.map((b) => ({
        ...b,
        color: "#" + Math.floor(Math.random() * 16777215).toString(16),
      }))
    )
  }
  const changeNofBubbles = (operation) => {
    if (operation === "remove") {
      setBubbles(bubbles.filter((b, index) => index < bubbles.length - 1))
    }
    if (operation === "add") {
      setBubbles([
        ...bubbles,
        {
          id: uuid(),
          color: "burlywood",
        },
      ])
    }
  }

  return (
    <div className="app">
      <div className="wrapper">
        <div className="NumberOfBubbles">
          <span className="btnNofBubbles" onClick={() => changeNofBubbles("remove")}>
            -
          </span>
          <span>{bubbles.length}</span>
          <span className="btnNofBubbles" onClick={() => changeNofBubbles("add")}>
            +
          </span>
        </div>

        <ColorPicker bubbles={bubbles} onBubbleClick={onBubbleClick} />
        <button className="btnRandomizer" onClick={randomizer}>
          <i className="fas fa-dice"></i> Randomizer <i className="fas fa-dice"></i>
        </button>
      </div>
    </div>
  )
}

export default App
