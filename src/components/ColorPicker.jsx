import "./color-picker.css"

const ColorPicker = ({ bubbles, onBubbleClick }) => {
  return (
    <div className="colorPicker">
      <div className="bubbleChoiceList">
        {bubbles.map((bubble) => (
          <span key={bubble.id} id="1" className="bubbleChoiceItem" onClick={() => onBubbleClick(bubble)}>
            <i style={{ color: bubble.color }} className="fas fa-lightbulb"></i>
          </span>
        ))}
      </div>
    </div>
  )
}

export default ColorPicker
