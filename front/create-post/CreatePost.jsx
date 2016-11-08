import React from 'react';
import $ from 'jquery';
import {Link} from 'react-router';
import '../app.css';

const CreatePost = React.createClass({
  getInitialState() {
    return {
      title: '',
      body: ''
    }
  },
  handleChange(inputField, e) {
    console.log(e);
    this.setState({[inputField]: e.target.value})
    console.log('The value of inputField',inputField)
    console.log(this.state);
  },
  submitNewPost() {
    $.ajax({
      url: '/posts',
      type: 'POST',
      data: {
       // title: 'This is a test post that is being sent from AJAX',
        title: this.state.title,
        text: this.state.body
      }
    })
    .done((data) => {
      console.log('AJAX data');
      console.log('AJAX state', this.state);
    })
  },
  render(){
    return (
      <form>
      <br/>
        <h1>Contribute to Metal Fanatics!</h1>
        <label className="label">Title</label>
        <br/>
        <br/>
        <input className="postTitle" onChange={this.handleChange.bind(this, 'title')} type="text" name="title" />
        <br/>
        <br/>
        <label className="label">Body</label>
        <br/>
        <br/>
        <input className="textArea" onChange={this.handleChange.bind(this, 'body')} type="text" name="body" placeholder="Let the metal flow..."/>
        <br/>
        <br/>
        <Link to="/"><input className="submitButton" onClick={this.submitNewPost} type="button" value="Submit" /></Link>
      </form>
    )
  }
})

export default CreatePost;
