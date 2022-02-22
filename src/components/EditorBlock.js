
import TitleBlock from "./TitleBlock";
import TextBlock from "./TextBlock";
import ImageBlock from "./ImageBlock";
import BackgroundBlock from "./BackgroundBlock";

function EditorBlock ({block, deleteBlock}) {
  
  return (
    <div className="editor-block" id={block.id}>
      <div className="block-navbar" >
        <button className="delete-block" onClick={ () => deleteBlock(block.id) }>
          <img src="./images/icons/delete.png" alt="delete" />
        </button>
      </div>
      <div className="place" >
        {block.name === 'title' ? <TitleBlock block={block} /> : '' }
        {block.name === 'text' ? <TextBlock block={block} /> : '' }
        {block.name === 'image' ? <ImageBlock block={block} /> : '' }
        {block.name === 'background' ? <BackgroundBlock block={block} /> : '' }
      </div>
    </div>
  )
}

export default EditorBlock;