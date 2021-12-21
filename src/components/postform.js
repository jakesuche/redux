import React, { Component } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import { CreatePosts } from '../actions/postsAction'


class Postform extends Component {
    constructor(props){
        super(props);
        this.state = {
            title:'',
            body:''
        }
    }

    handleChange(e) {
        
        const { name, value} = e.target
      
        this.setState({...this.state,[name]: value})
        
    }

    onSumbit(e){
        e.preventDefault()

        const post = {
            title:this.state.title,
            body:this.state.body
        }

        this.props.CreatePosts(post)

       
    }

   
    render() {
        const {title, body } = this.state
        return (
            <div>
                <h1>Add post</h1>
                <form onSubmit={(e)=>this.onSumbit(e)}>
                    <div>
                        <label>Title : </label>
                        <br />
                        <input onChange={(e)=>this.handleChange(e)} value={title} type="text" name="title" />
                    </div>
                    <div>
                        <label>Body : </label>
                        <br />
                        <textarea onChange={(e)=>this.handleChange(e)} value={body} name="body" />
                    </div>
                    <br />
                    <button  type="submit">submit</button>
                </form>
            </div>
        ); 
    }
}

Postform.propTypes = {
    CreatePosts:PropTypes.func.isRequired,
   
}

export default connect(null, {CreatePosts})(Postform)