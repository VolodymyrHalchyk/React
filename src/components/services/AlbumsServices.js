export class AlbumsServices {

    url = 'https://jsonplaceholder.typicode.com/albums'

    async getAlbums (){
        return await fetch(`${this.url}?_limit=10`).then(value => value.json())
    }


}