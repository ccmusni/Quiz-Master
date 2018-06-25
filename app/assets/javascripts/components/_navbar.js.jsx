class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <a className="navbar-brand" href="#">Quiz Master</a>
          </div>
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li className={(this.props.activeNav == "questions") ? "active" : "inactive"}><a href="/">Manage Questions</a></li>
              <li className={(this.props.activeNav == "quizes") ? "active" : "inactive"}><a href="/quizes">Quiz</a></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
