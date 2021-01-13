import React, {Component} from 'react';
import {AlbumsServices} from "../services/AlbumsServices";
import Album from "../Album/Album";


class AllAlbums extends Component {

    state = {albums: []}
    albumsServices = new AlbumsServices()

    async componentDidMount() {
        let albums = await this.albumsServices.getAlbums()
        this.setState({albums})
    }

    render() {

        let {albums} = this.state

        return (
            <div>

                {albums.map(value => <Album item={value} key={value.id}/>)}

            </div>
        );
    }
}

export default AllAlbums;