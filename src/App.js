import React  from 'react';
import './App.css';
import {BlogBody} from './components/blogBody/blogposts';
import Pagination from "react-js-pagination"; 


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      blogPost:[],
      activePage:1,
      postsPerPage:5
    }
    
  }

    handlePageChange(pageNumber) {
    console.log(`active page is ${pageNumber}`);
    this.setState({activePage: pageNumber});
  }


  componentDidMount(){
    fetch('http://localhost:8080/posts').then((result)=>{
      result.json()
      .then(response=>{
        console.log(response.data);
        this.setState({blogPost:response.data})
      })
    })


  }

  render(){
    const lastPostIndex = this.state.activePage*this.state.postsPerPage;
    const firstPostIndex = lastPostIndex - this.state.postsPerPage;
    const postsShown = this.state.blogPost.slice(firstPostIndex,lastPostIndex);
    return  (
  
      <div className='App'>
        <BlogBody posts = {postsShown}>
        </BlogBody>
        <Pagination
          itemClass="page-item" 
          linkClass="page-link"
          activePage={this.state.activePage}
          totalItemsCount={this.state.blogPost.length}
          itemsCountPerPage={5}
          pageRangeDisplayed={5}
          onChange={this.handlePageChange.bind(this)}
        />
      </div>
    );
  }
}

export default App;
