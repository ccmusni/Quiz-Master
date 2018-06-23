const Main = (props) => {
  let activeModule = (props.activeNav == 'questions') ? <QuestionMain /> : <QuizMain />
    return (
      <div>
        <Navbar activeNav={props.activeNav} />
        {activeModule}
      </div>
    )
}
