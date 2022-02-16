
import TitleBlock from "./TitleBlock";

function EditorBlock (props) {
  return (
    <div class="editor-block" id={props.block.key} >
      <div class="delete-block-wrap" >
        <button class="delete-block" >
          <img src="./images/icons/delete.png" alt="delete" />
        </button>
      </div>
      <div class="place" >
        <TitleBlock />
      </div>
    </div>
  )
}

export default EditorBlock;