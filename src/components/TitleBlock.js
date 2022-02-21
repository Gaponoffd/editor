import React from 'react';

export default function TitleBlock ({block, editsText}) {

  let [text, setText] = React.useState(block.content) 

  function changeText(event) {
    setText(event.target.value);

    editsText(block.id, event.target.value)
    console.log(editsText);
  }

  return (
    <textarea style={block.style} value={text} onChange={event =>{changeText(event)}} ></textarea>
  )
}
  