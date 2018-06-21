class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.addNewItem = this.addNewItem.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.deleteItem = this.deleteItem.bind(this)
    this.handleUpdate = this.handleUpdate.bind(this)
    this.updateItem = this.updateItem.bind(this)
  }

  handleFormSubmit(name, description){
    let body = JSON.stringify({item: {name: name, description:   description} })
    fetch('/api/v1/items', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: body,
      }).then((response) => {return response.json()})
      .then((item)=>{
        this.addNewItem(item)
      })
  }

  addNewItem(item){
    this.setState({
      items: this.state.items.concat(item)
    })
  }

  handleDelete(id){
    fetch(`/api/v1/items/${id}`,
    {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      this.deleteItem(id)
    })
  }

  deleteItem(id){
    newItems = this.state.items.filter((item) => item.id !== id)
    this.setState({
      items: newItems
    })
  }

  handleUpdate(item){
  fetch(`/api/v1/items/${item.id}`,
  {
      method: 'PUT',
      body: JSON.stringify({item: item}),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => {
        this.updateItem(item)
      })
  }

  updateItem(item){
    let newItems = this.state.items.filter((f) => f.id !== item.id)
    newItems.push(item)
    this.setState({
      items: newItems
    })
  }

componentDidMount(){
    fetch('/api/v1/items.json')
      .then((response) => {return response.json()})
      .then((data) => {this.setState({ items: data }) });
  }
render(){
    return(
      <div>
        <NewItem handleFormSubmit={this.handleFormSubmit} />
        <AllItems items={this.state.items} handleDelete={this.handleDelete} handleUpdate = {this.handleUpdate} />
      </div>
    )
  }
}
