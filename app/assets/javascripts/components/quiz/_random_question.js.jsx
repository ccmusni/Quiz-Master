class RandomQuestion extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      question: [],
      hasAnswer: false,
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
      isAnswerCorrect: (convertNumbersInStringToWords(this.state.question.answer).replace(/-/g, " ") == convertNumbersInStringToWords(this.answer.value).replace(/-/g, " ")),
      hasAnswer: !!this.answer.value
    })
  }

  rollQuestion() {
    fetch('/api/v1/quizes.json')
      .then((response) => {return response.json()})
      .then((data) => {this.setState( {question: data} )})

      this.setState({
        question: [],
        isAnswerCorrect: false,
        hasAnswer: false
      });
      this.answer.value = '';
  }

  render() {
    let message = this.state.isAnswerCorrect ? <div className="alert alert-success" role="alert">CORRECT</div> : <div className="alert alert-danger" role="alert">INCORRECT</div>
    let button = this.state.hasAnswer ?
      <button type="button" className="btn btn-success" onClick={() => this.rollQuestion()}>Try New</button> :
      <div className="btn-group" role="group">
        <button type="button" className="btn btn-primary" onClick={() => this.checkAnswer()}>Check</button>
        <button type="button" className="btn btn-success" onClick={() => this.rollQuestion()}>Try Another</button>
      </div>

    return(
      <div>
        <h1>Question</h1>
        <i>{(this.answer == undefined || this.answer.value == '') ? '' : message}</i>
        <h4 dangerouslySetInnerHTML={{__html: this.state.question.content}}></h4>
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
