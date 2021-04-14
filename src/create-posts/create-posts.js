import React, {Component} from 'react';
import './create-posts.css';


class CreatePost extends Component{
  constructor(props){
    super(props);

    this.state = {
      content:'',
      posts: []
    };
    
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePostCgange = this.handlePostCgange.bind(this);
    this.showPosts = this.showPosts.bind(this);

  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll, true);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }


  handlePostCgange(event){
    const content = event.target.value;
    this.setState(() => {
      return{
        content,       
      };    
    });
  }

  handleSubmit(){
   let posts = this.state.posts;
   posts.push(this.state.content); 
   this.setState(()=>{
     return{
       content:'',
       posts
     };
   }); 
  }

  showPosts(){
    const listItems = this.state.posts.map((item) => {
      return(
        <li className="list-item">
          {item}
        </li>
      )
    })

    return (
      <ul className="list-group">
       {listItems}
      </ul>     
    );
  }

render(){
  const items = this.state.posts.map((item, i) => (
    <div className="item" key={i}>
      {item}
    </div>
  ));

  return(
      <div>
      <div className="add-posts">
        <textarea
          value = {this.state.content}
          onChange = {this.handlePostCgange}
          placeholder = "Enter your text"/>
        <button onClick = {this.handleSubmit}> Send </button>
      </div>
      <div className = "items-list">
        {items}
      </div>
    </div>
    
  )
}
}



export default CreatePost;