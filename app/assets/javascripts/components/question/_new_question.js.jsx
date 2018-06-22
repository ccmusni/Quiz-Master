const NewQuestion = (props) => {
  let formFields = {}

  return(
    <form className="form-inline" onSubmit={this.handleAdd}>
      <div className="form-group">
        <input className="form-control" ref={input => formFields.content = input} placeholder='Enter a new question'/>
      </div>
      <div className="form-group">
        <input className="form-control" ref={input => formFields.answer = input} placeholder='Enter the answer' />
      </div>
      <button className="btn btn-success" onClick={ () => props.handleFormSubmit(formFields.content.value, formFields.answer.value)} >Add</button>
    </form>
    )
}
