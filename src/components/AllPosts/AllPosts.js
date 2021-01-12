import React, {Component} from 'react';
import {PostsService} from "../../services/PostsServices";
import Post from "../Post/Post";

class AllPosts extends Component {

    state = {posts: [], chosenOnePost: null}
    postService = new PostsService();

    componentDidMount() {
        this.postService.getAllPost().then(value => this.setState({posts:value}))
    }

    chosePost = (id) => {
        this.postService.getPostById(id).then(value => this.setState({chosenOnePost:value}))
    }

    render() {
        let {posts, chosenOnePost} = this.state
        return (
            <div>
                <h1>All Posts</h1>
                {posts.map(value => <Post item = {value} key = {value.id} chosePost = {this.chosePost}/>)}
                {chosenOnePost && <h2>{chosenOnePost.id} - {chosenOnePost.body}</h2>}
            </div>
        );
    }
}

export default AllPosts;