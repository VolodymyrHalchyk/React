export class PostsService {

    url = 'https://jsonplaceholder.typicode.com/posts'

    getAllPost() {
        return fetch(`${this.url}?_limit=10`).then(value => value.json()).then(value => value)
    }
    getPostById(id) {
        return fetch(`${this.url}/${id}`).then(value => value.json()).then(value => value)
    }
}