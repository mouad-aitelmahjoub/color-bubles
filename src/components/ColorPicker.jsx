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
      <div className="colorChoices">
        <span className="color">#0984e3</span>
        <span className="color">#00b894</span>
        <span className="color">#ffeaa7</span>
        <span className="color">#d63031</span>
        <span className="color">#636e72</span>
        <span className="color">#a29bfe</span>
        <span className="color">#e17055</span>
        <span className="color">#6c5ce7</span>
        <span className="color">#6c5ce7</span>
        <span className="color">#6c5ce7</span>
        <span className="color">#6c5ce7</span>
        <span className="color">#6c5ce7</span>
      </div>
    </div>
  )
}

export default ColorPicker
