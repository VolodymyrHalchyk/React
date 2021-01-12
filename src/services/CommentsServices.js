export class CommentsServices {

    url = 'https://jsonplaceholder.typicode.com/comments'
    getAllComments(){
       return fetch(`${this.url}?_limit=10`).then(value => value.json()).then(value => value)
    }

    getCommentById(id) {
        return fetch(`${this.url}/${id}`).then(value => value.json()).then(value => value)
    }
}