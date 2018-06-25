class Question extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      editable: false
    }
    this.handleEdit = this.handleEdit.bind(this)
  }

  handleEdit(){
    if(this.state.editable){
       let content = this.content.value
       let answer = this.answer.value
       let id = this.props.question.id
       let question = {id: id, content: content, answer: answer, created_at: this.props.question.created_at, updated_at: new Date()}
       this.props.handleUpdate(question)
    }
    this.setState({
      editable: !this.state.editable
    });

     $(function() {
       $('div#froeditor').froalaEditor({
         toolbarButtons: ['bold', 'italic', 'underline', 'strikeThrough', 'fontFamily', 'fontSize', '|', 'inlineStyle', 'paragraphFormat', 'align', 'undo', 'redo', 'html'],
         placeholderText: 'Enter a new question',
         hidePopups: true,
         inlineStyles: {
           'Big Red': 'font-size: 20px; color: red;',
           'Small Blue': 'font-size: 14px; color: blue;'
         }
       })
     });
  }

  render() {
    var question = this.props.question;
    const DATE_OPTIONS = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };

    var tempDIV = document.createElement("div");
    tempDIV.innerHTML = question.content;
    htmlcontent = tempDIV.textContent || tempDIV.innerText;

    let content = this.state.editable ? <td><input type='text' ref={input => this.content = input} defaultValue={question.content}/></td> : <td>{htmlcontent}</td>
    let answer = this.state.editable ? <td><input type='text' ref={input => this.answer = input} defaultValue={question.answer}/></td> : <td>{question.answer}</td>

    return(
      <tr>
        {content}
        {answer}
        <td>{(new Date(question.created_at)).toLocaleDateString('en-US', DATE_OPTIONS)}</td>
        <td>{(new Date(question.updated_at)).toLocaleDateString('en-US', DATE_OPTIONS)}</td>
        <td>
          <div className="btn-group" role="group">
            <button type="button" className={this.state.editable? "btn btn-success" : "btn btn-primary"} onClick={() => this.handleEdit()}>{this.state.editable? 'Save' : 'Edit'}</button>
            <button type="button" className="btn btn-danger" onClick={() => this.props.handleDelete(this.props.question.id)}>Delete</button>
          </div>
        </td>

      </tr>
    )
  }
};
