class Question extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      editable: false
    }
    this.handleEdit = this.handleEdit.bind(this)
    this.handleCancel = this.handleCancel.bind(this)
  }

  handleEdit(){
    if(this.state.editable){
      if (!confirm('Are you sure you want to save this?')) return;
      let content = $("div#edit-content-editor" + this.props.question.id).froalaEditor('html.get');
      let answer = this.answer.value
      let id = this.props.question.id
      let question = {id: id, content: content, answer: answer, created_at: this.props.question.created_at, updated_at: new Date()}
      this.props.handleUpdate(question)
      $("div#edit-content-editor" + this.props.question.id).hide();
    }
    else {
      $("div#edit-content-editor" + this.props.question.id).show();
    }
    this.setState({
      editable: !this.state.editable
    });
  }

  handleCancel() {
    this.setState({
      editable: !this.state.editable
    });
    $("div#edit-content-editor" + this.props.question.id).hide();
  }

  componentDidMount() {
    console.log('mounted')
      $("div#edit-content-editor" + this.props.question.id).froalaEditor({
        toolbarButtons: ['bold', 'italic', 'underline', 'strikeThrough', 'fontFamily', 'fontSize', '|', 'inlineStyle', 'paragraphFormat', 'align', 'undo', 'redo', 'html'],
        placeholderText: 'Enter a new question',
        hidePopups: true,
        inlineStyles: {
          'Big Red': 'font-size: 20px; color: red;',
          'Small Blue': 'font-size: 14px; color: blue;'
        }
      });
      $("div#edit-content-editor" + this.props.question.id).froalaEditor('html.set', this.props.question.content);
      $("div#edit-content-editor" + this.props.question.id).hide();
  }

  render() {
    var question = this.props.question;
    const DATE_OPTIONS = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };

    var tempDIV = document.createElement("div");
    tempDIV.innerHTML = question.content;
    htmlcontent = tempDIV.textContent || tempDIV.innerText;

    // let content = this.state.editable ? <td><input type='text' ref={input => this.content = input} defaultValue={question.content}/></td> : <td>{htmlcontent}</td>
    let content = !this.state.editable ? <div id={"show-content" + this.props.question.id}>{htmlcontent}</div> : ''
    let answer = this.state.editable ? <td><input type='text' ref={input => this.answer = input} defaultValue={question.answer}/></td> : <td>{question.answer}</td>
    let deleteButton = !this.state.editable ? <button type="button" className="btn btn-danger" onClick={() => {if(confirm('Are you sure you want to delete this?')) {this.props.handleDelete(this.props.question.id)}}}>Delete</button> : ''
    let cancelButton = this.state.editable ? <button type="button" className="btn btn-default" onClick={() => this.handleCancel()}>Cancel</button> : ''

console.log($("show-content" + this.props.question.id));
    return(
      <tr>
        <td><div id={"edit-content-editor" + this.props.question.id}></div>{content}</td>
        {answer}
        <td>{(new Date(question.created_at)).toLocaleDateString('en-US', DATE_OPTIONS)}</td>
        <td>{(new Date(question.updated_at)).toLocaleDateString('en-US', DATE_OPTIONS)}</td>
        <td>
          <div className="btn-group" role="group">
            <button type="button" className={this.state.editable? "btn btn-success" : "btn btn-primary"} onClick={() => this.handleEdit()}>{this.state.editable? 'Save' : 'Edit'}</button>
            {deleteButton}
            {cancelButton}
          </div>
        </td>

      </tr>
    )
  }
};
