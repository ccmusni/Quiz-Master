class Item extends React.Component{

  constructor(props){
      super(props);
      this.state = {
        editable: false
      }
      this.handleEdit = this.handleEdit.bind(this)
    }

    handleEdit(){
      if(this.state.editable){
         let name = this.name.value
         let description = this.description.value
         let id = this.props.item.id
         let item = {id: id, name: name, description: description}
         this.props.handleUpdate(item)
      }
      this.setState({
         editable: !this.state.editable
       })
     }

  render(){
    let name = this.state.editable ? <input type='text' ref={input => this.name = input} defaultValue={this.props.item.name}/>:<h3>{this.props.item.name}</h3>
    let description = this.state.editable ? <input type='text' ref={input => this.description = input} defaultValue={this.props.item.description}/>:<p>{this.props.item.description}</p>

    return(
      <div>
        {name}
        {description}
        <button onClick={() => this.handleEdit()}>{this.state.editable? 'Submit' : 'Edit'}</button>
        <button onClick={() => this.props.handleDelete(this.props.item.id)}>Delete</button>
      </div>
    )
  }
}
