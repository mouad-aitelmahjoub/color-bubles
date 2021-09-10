//import { useState } from "react"
import "./App.css"
import { bubbles } from "./data"

import Bubbles from "./components/Bubbles"
import ColorPicker from "./components/ColorPicker"

function App() {
  const onBubbleClick = (bubble) => {
    console.log(bubble)
  }

  return (
    <div className="app">
      <ColorPicker bubbles={bubbles} onBubbleClick={onBubbleClick} />
      <Bubbles />
    </div>
  )
}

export default App
