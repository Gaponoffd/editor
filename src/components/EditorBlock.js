
import TitleBlock from "./TitleBlock";

function EditorBlock (props) {
  return (
    <div className="editor-block" key={props.block.id} >
      <div className="delete-block-wrap" >
        <button className="delete-block" >
          <img src="./images/icons/delete.png" alt="delete" />
        </button>
      </div>
      <div className="place" >
        <TitleBlock block={props.block} />
      </div>
    </div>
  )
}

export default EditorBlock;