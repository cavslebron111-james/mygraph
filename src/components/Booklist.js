import React ,{Component} from 'react';
import {graphql} from 'react-apollo';
import {getBooksQuery} from '../queries/Queries';
import BookDetails from './BookDetails';



class Booklist extends Component  {
  constructor(props){
    super(props)
    this.state = {
      selected: null
    }
  }
 
 
  displayBooks = () => {
    var data = this.props.data
    if(data.loading){
      return <div> data loading</div>
    } else {
    return data.books.map(book => {
       return (
        
        <li key ={book.id} onClick={(e)=>{this.setState({selected:book.id})}}> {book.name}</li>
        
        )
    })
  }
}
  
  
  
  render(){

  return (
   
     <div>
    <ul id = "booklist">
      {this.displayBooks()}
    </ul>
    <BookDetails bookId = {this.state.selected} />
    </div>
    
  
    );
}
}
export default graphql(getBooksQuery)(Booklist);
