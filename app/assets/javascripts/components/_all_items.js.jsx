const AllItems = (props) => {
  var items = props.items.map((item) => {
      return(
        <div key={item.id}>
          <Item item={item} handleDelete={props.handleDelete} handleUpdate={props.handleUpdate}/>
        </div>
      )
    })
  return(
        <div>
          {items}
        </div>
      )
}
