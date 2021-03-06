 
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';
import $ from 'jquery';

//Components
import './app.css';
import Posts from './posts/Posts.jsx';
import PostPage from './post-page/PostPage.jsx';
import CreatePost from './create-post/CreatePost.jsx';
//import Comment from './comments/Comment.jsx';
import NoRoute from './NoRoute';

const App = React.createClass({
  getInitialState() {
    return {posts: []}
  },
  componentDidMount() {
    $.ajax({
      url: '/posts',
      type: 'GET'
    })
    .done((data) => {
      this.setState({posts: data});
    })
  },
  render: function() {
    return (
      <div>

        <div className="all-posts">
          <Posts posts={this.state.posts}/>
          {this.props.children}
        </div>

      </div>
    );
  }

});

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App} />
    <Route path="create-post" component={CreatePost} />
    <Route path="/post/:id" component={PostPage} />
    <Route path="*" component={NoRoute} />
  </Router>,
  document.getElementById('root')
)

export default App;
