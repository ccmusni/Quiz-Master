const NewQuestion = (props) => {
  let formFields = {}
  let alert = props.newAdded ? <div id="alert_message" className="alert alert-success" role="alert" ref={input => formFields.alert = input}>Successfully added.</div> : ''
  $("#alert_message").fadeTo(3000, 0, '', function(){ $(this).remove(); });

  $(function() {
    $('div#froala-editor').froalaEditor({
      toolbarButtons: ['bold', 'italic', 'underline', 'strikeThrough', 'fontFamily', 'fontSize', '|', 'inlineStyle', 'paragraphFormat', 'align', 'undo', 'redo', 'html'],
      placeholderText: 'Enter a new question',
      hidePopups: true,
      inlineStyles: {
        'Big Red': 'font-size: 20px; color: red;',
        'Small Blue': 'font-size: 14px; color: blue;'
      }
    })
  });

  return (
    <div className="panel panel-default" style={{padding: '0 15px 0 15px', margin: '1% 0 1% 0'}}>
      <h2>New Question</h2>
      <div className="row">
        <div className="col-md-12">
          <div id="froala-editor" ref={input => formFields.content = input}></div>
        </div>
      </div>
      <br />
      <div className="row">
        <div className="col-md-12">
          <div className="input-group" style={{width: '100%'}}>
            <input className="form-control" ref={input => formFields.answer = input} placeholder='Enter the answer' />
            <span className="input-group-btn">
              <button className="btn btn-success" onClick={ () => props.handleFormSubmit(formFields.content, formFields.answer.value, formFields.alert )} >Add</button>
            </span>
          </div>
        </div>
      </div>
      <br />
      <div id="alert_message" className="alert alert-success" role="alert" ref={input => formFields.alert = input} style={{display: 'none'}}>Successfully added.</div>
    </div>
  )
}
