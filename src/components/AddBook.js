import React ,{Component} from 'react';
import {graphql,} from 'react-apollo';
import {getAuthorsQuery,addBookmutation,getBooksQuery} from '../queries/Queries';
import flowright from "lodash.flowright";


class AddBook extends Component  {
    constructor(props){
        super(props)
    this.state = {
        name: '',
        genre: '',
        authorId:''
    };
    
    }
    
    
    
    
    displayauthors = () => {
        var data = this.props.getAuthorsQuery
        
        if(data.loading){
          return(<option disabled> data loading </option>);
        } else {
        return data.authors.map(author => {
           return (
            <option key ={author.id} value = {author.id}>{author.name}</option>);
           
        })
      }
    }
      submitForm(e) {
     e.preventDefault();
     this.props.addBookmutation({
       variables: {
         name: this.state.name,
         genre: this.state.genre,
         authorId: this.state.authorId
       },
       refetchQueries: [{query: getBooksQuery}]
      });
      
    }
   
    render() {
        return(
            <div>
        <form id = "add-book" onSubmit = {this.submitForm.bind(this)}>
        
        <div className = "field">
        <label> Book Name</label>
        <input type = 'text' onChange={(e)=>this.setState({name:e.target.value})} />
        </div>
        
        <div className = "field">
        <label> Genre</label>
        <input type = 'text' onChange={(e)=>this.setState({genre:e.target.value})} />
        </div>
        
        <div className = "field">
        <label> Author</label>
        <select onChange={(e)=>this.setState({authorId:e.target.value})}>
        <option> select author</option>
        {this.displayauthors()}
        </select>
        
        </div>
        <button>+</button>
        
        
        
        
        </form>    
            
            
            
            
            
            
            
            
            </div>


   )}
    }

            export default flowright(
            graphql(getAuthorsQuery,{name:"getAuthorsQuery"}),
            graphql(addBookmutation,{name:"addBookmutation"})
            )(AddBook);





     