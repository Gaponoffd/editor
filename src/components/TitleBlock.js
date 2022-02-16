function TitleBlock (props) {

  let initialStyle = {
    fontSize: "24px",
    fontWeight: 700,
    color: "#000",
    width: "100%",
    textAlign: "center"
  }

  let initialText = "Заголовок"

  return (
    <div contenteditable="true" style={initialStyle}>{initialText}</div>
  )
}
  
export default TitleBlock;