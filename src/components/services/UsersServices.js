export class UsersServices {

    url = 'https://jsonplaceholder.typicode.com/users'

    async getUsers () {
        return await fetch(this.url).then(value => value.json())
    }

    async getUser (id) {
        return await fetch(this.url).then(value => value.json())
    }
}