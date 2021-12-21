import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchPosts } from '../actions/postsAction'
import PropTypes from 'prop-types'

class Posts extends Component {
    
    

    componentWillMount(){
        this.props.fetchPosts() 
    }

    
    render() {
       console.log(this.props)
        const postItems = this.props.posts.map(post => (
            <div key={post?.id}>
                <h3>
                    {post.id}
                </h3>
                <p>
                    {post.body}
                </p>
            </div>
        ))
        return (
            <div>
                <h1>LIST</h1>
                {postItems}
            </div>
        ); 
    }
}
Posts.propTypes = {
    fetchPosts:PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired
}
const mapStateToProps = (state) => ({
    posts:state.post.items
})

export default connect(mapStateToProps, {fetchPosts})(Posts)