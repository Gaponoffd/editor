import React from 'react';

export default function TextBlock ({block, editsText}) {

  let [text, setText] = React.useState(block.content) 

  function changeText(event) {
    setText(event.target.value);

    editsText(block.id, event.target.value)
  }

  return (
    <textarea style={block.style} value={text} onChange={event =>{changeText(event)}} ></textarea>
  )
}
  