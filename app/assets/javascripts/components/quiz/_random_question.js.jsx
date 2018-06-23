class RandomQuestion extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      question: [],
      isAnswered: false,
      isAnswerCorrect: false
    }
    this.checkAnswer = this.checkAnswer.bind(this)
  }

  componentDidMount () {
    fetch('/api/v1/quizes.json')
      .then((response) => {return response.json()})
      .then((data) => {this.setState( {question: data} )})
  }

  checkAnswer() {
    this.setState({
      isAnswerCorrect: (this.state.question.answer == this.answer.value),
      isAnswered: !!this.answer.value
    })
  }

  rollQuestion() {
    fetch('/api/v1/quizes.json')
      .then((response) => {return response.json()})
      .then((data) => {this.setState( {question: data} )})
      
      this.setState({
        question: [],
        isAnswerCorrect: false,
        isAnswered: false
      })
  }

  render() {
    let message = this.state.isAnswerCorrect ? <div className="alert alert-success" role="alert">CORRECT</div> : <div className="alert alert-danger" role="alert">INCORRECT</div>
    let button = this.state.isAnswered ?
      <button type="button" className="btn btn-success" onClick={() => this.rollQuestion()}>Try New</button> :
      <button type="button" className="btn btn-primary" onClick={() => this.checkAnswer()}>Check</button>

    return(
      <div>
        <h1>Question</h1>
        <i>{(this.answer == undefined || this.answer.value == '') ? '' : message}</i>
        <h4>{this.state.question.content}</h4>
        <form>
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Type your answer.." ref={input => this.answer = input} />
          </div>
          {button}
        </form>
      </div>
    )
  }
};
