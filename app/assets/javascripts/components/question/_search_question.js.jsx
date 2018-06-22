class SearchQuestion extends React.Component {
  constructor(props){
      super(props);
      this.state = {
        editable: false
      }
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
      <input onChange={this.handleSearch}
             type="text"
             className="form-control"
             placeholder="Type search phrase here..."
             ref={input => this.query = input} />
    )
  }
};
