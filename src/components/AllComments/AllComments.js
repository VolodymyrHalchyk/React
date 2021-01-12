import React, {Component} from 'react';
import {CommentsServices} from "../../services/CommentsServices";
import Commetn from "../Comment/Commetn";

class AllComments extends Component {

    state = {comments: [], chosenOneComment: null}
    commentsService = new CommentsServices()

    componentDidMount() {
        this.commentsService.getAllComments().then(value => this.setState({comments: value}))
    }

    choseComment = (id) => {
        this.commentsService.getCommentById(id).then(value => this.setState({chosenOneComment: value}))
    }

    render() {

        let {comments, chosenOneComment} = this.state

        return (
            <div>
                <h1>All Comments</h1>
                {comments.map(value => <Commetn
                    item = {value}
                    key = {value.id}
                    choseComment = {this.choseComment}/>)}
                    {chosenOneComment && <h2>{chosenOneComment.id} - {chosenOneComment.body}</h2>}
            </div>
        );
    }
}

export default AllComments;