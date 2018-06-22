class QuestionTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: []
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.addNewQuestion = this.addNewQuestion.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.deleteQuestion = this.deleteQuestion.bind(this)
    this.handleUpdate = this.handleUpdate.bind(this)
    this.updateQuestion = this.updateQuestion.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
  }

  handleFormSubmit(content, answer){
    let body = JSON.stringify({question: {content: content, answer: answer} })
    fetch('/api/v1/questions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: body,
      }).then((response) => {return response.json()})
      .then((question)=>{
        this.addNewQuestion(question)
      })
  }

  addNewQuestion(question){
    this.setState({
      questions: this.state.questions.concat(question)
    })
  }

  handleDelete(id){
    fetch(`/api/v1/questions/${id}`,
    {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      this.deleteQuestion(id)
    })
  }

  deleteQuestion(id){
    newQuestions = this.state.questions.filter((question) => question.id !== id)
    this.setState({
      questions: newQuestions
    })
  }

  handleUpdate(question){
  fetch(`/api/v1/questions/${question.id}`,
  {
      method: 'PUT',
      body: JSON.stringify({question: question}),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => {
        this.updateQuestion(question)
      })
  }

  updateQuestion(question){
    let newQuestions = this.state.questions.filter((f) => f.id !== question.id)
    newQuestions.push(question)
    this.setState({
      questions: newQuestions
    })
  }

  handleSearch(questions) {
    this.setState({ questions: questions });
  }

  componentDidMount(){
    fetch('/api/v1/questions.json')
      .then((response) => {return response.json()})
      .then((data) => {this.setState({ questions: data }) });
  }

  render() {
    var questions = [];
    this.state.questions.map(function(question) {
      questions.push(<Question question={question} key={'question' + question.id} handleDelete={this.handleDelete} handleUpdate = {this.handleUpdate}/>);
    }.bind(this));

    return(
      <div>
        <div className="row">
          <div className="col-md-7">
            <SearchQuestion handleSearch={this.handleSearch} />
          </div>
          <div className="col-md-5">
            <NewQuestion handleFormSubmit={this.handleFormSubmit} />
          </div>
        </div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th className="col-md-3">Question</th>
              <th className="col-md-3">Answer</th>
              <th className="col-md-2">Date Added</th>
              <th className="col-md-2">Date Modified</th>
              <th className="col-md-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {questions}
          </tbody>
        </table>
      </div>
    )
  }
};
