import React, { Component } from 'react';

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

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers:{
                'content-type': 'application/json',

            },
            body:JSON.stringify(post)
        }).then(res=>res.json()).then(data=>console.log(data))
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

export default Postform;