const QuizMain = (props) => {
  return(
    <div className="container">
      <br />
      <Jumbotron/>
      <div className="row">
        <div className="col-md-12">
          <RandomQuestion />
        </div>
      </div>
    </div>
  )
}
