const QuestionMain = (props) => {
  return(
    <div className="container">
      <Jumbotron page="Questions"/>
      <div className="row">
        <div className="col-md-12">
          <QuestionTable />
          {/*<QuestionBody />*/}
        </div>
      </div>
    </div>
  )
}
