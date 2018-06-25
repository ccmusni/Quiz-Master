class SearchQuestion extends React.Component {
  constructor(props){
    super(props);
    this.handleSearch = this.handleSearch.bind(this)
  }

  handleSearch() {
    fetch(`/api/v1/questions/search?query=${this.query.value}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => {return response.json()})
      .then((data) => {this.props.handleSearch(data)});
  }

  render() {
    return(
      <div className="row">
        <div className="col-md-12">
          <div className="input-group">
            <input onChange={this.handleSearch}
              type="text"
              className="form-control"
              placeholder="Type search phrase here..."
              ref={input => this.query = input} />
            <span className="input-group-addon">Search</span>
          </div>
        </div>
      </div>
    )
  }
};
