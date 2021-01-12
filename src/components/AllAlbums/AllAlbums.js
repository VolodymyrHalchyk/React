import React, {Component} from 'react';
import {AlbumServices} from "../../services/AlbumServices";
import Album from "../Album/Album";


class AllAlbums extends Component {

    state = {albums: [], chosenAlbum: null}
    albumServices = new AlbumServices()

    componentDidMount() {
        this.albumServices.getAllAlbums().then(value => this.setState({albums: value}))
    }

    choseAlbum = (id) => {
        this.albumServices.getAlbumById(id).then(value => this.setState({chosenAlbum: value}))
    }

    render() {
        let {albums, chosenAlbum} = this.state
        return (
            <div>
                <h1>All Albums</h1>
                {albums.map(value => <Album item={value} key={value.id} choseAlbum={this.choseAlbum} />)}
                {chosenAlbum && <h2>{chosenAlbum.id} - {chosenAlbum.title}</h2>}
            </div>
        );
    }
}

export default AllAlbums;