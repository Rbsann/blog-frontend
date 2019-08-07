import React  from 'react';
import './App.css';
import {Navigation} from './components/navigation/navigation';
import {Header} from './components/header/header';
import {BlogBody} from './components/blogBody/blogposts';
import {Footer} from './components/footer/footer';
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
      
  
      <div className='main'>
        <Navigation></Navigation>
        <Header></Header>
        <div className='container'>
          <BlogBody posts = {postsShown}>
          </BlogBody>
          <div className='clearfix '>
            <Pagination
              itemClass="page-item" 
              linkClass="page-link"
              activePage={this.state.activePage}
              totalItemsCount={this.state.blogPost.length}
              itemsCountPerPage={5}
              pageRangeDisplayed={5}
              hideFirstLastPages = {true}
              onChange={this.handlePageChange.bind(this)}
            />
            <Footer></Footer>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
