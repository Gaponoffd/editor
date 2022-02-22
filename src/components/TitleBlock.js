import React, {useContext} from 'react';
import Context from '../context';

export default function TitleBlock ({block}) {
  const {editsText} = useContext(Context)
  let [text, setText] = React.useState(block.content) 

  return (
    <textarea 
      style={block.style} 
      value={text} 
      onChange={event =>{
        setText(event.target.value);
        editsText(block.id, event.target.value)
      }} 
    ></textarea>
  )
}
  