export class AlbumServices {

    url = 'https://jsonplaceholder.typicode.com/albums'
    getAllAlbums() {
        return fetch(`${this.url}?_limit=10`).then(value => value.json()).then(value => value)
    }

    getAlbumById(id) {
        return fetch(`${this.url}/${id}`).then(value => value.json()).then(value => value)
    }
}