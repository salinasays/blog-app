import React from 'react';
import Post from '../post/Post.jsx';

const Posts = React.createClass({
  render: function() {
    return (
      <div>
        <h2>Featured Posts</h2>
        {this.props.posts.map((post, indx) => <Post key={indx} post={post} />)}
      </div>
    );
  }

});

Posts.propTypes = {
  posts: React.PropTypes.array
}


export default Posts;
