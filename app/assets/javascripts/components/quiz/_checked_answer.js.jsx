class CheckedAnswer extends React.Component {
  render() {
    let message = this.props.isCorrect ? <div className="alert alert-success" role="alert">CORRECT</div> : <div className="alert alert-danger" role="alert">INCORRECT</div>
    return (
      <h1>{message}</h1>
    )
  }
}
