'use strict';

import React from 'react';
import RadioApi from '../services/radio';
import {Link} from 'react-router';

var SongCard = React.createClass({
    getInitialState(){
        return {
            favourite: false
        }
    },

    handleClickFavourite () {
        this.setState({
            favourite: true
        });
    },

    render: function () {

        return (
            <div className="col-sm-6 col-md-4">
                <div className="song-card">
                    <div className="thumbnail">
                        <Link to={"songs/" + this.props.song.id} >
                            <img alt="100%x200"
                                 src={"http://img.youtube.com/vi/" + this.props.song.youtube_id + "/mqdefault.jpg"}
                                />

                            <h3 className="h5 title">{this.props.song.title}</h3>
                        </Link>

                        <div className="chords-list">
                            <i onClick={this.handleClickFavourite} className={(this.state.favourite ? "added " : "") +
                             "favourite-icon glyphicon glyphicon-star pull-right"}></i>
                            <i className="chords-icon glyphicon glyphicon-music"></i>
                            {this.props.song.chords.join(' ')}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

export default React.createClass({
    getInitialState(){
        return {
            songs: []
        }
    },

    componentWillMount(){
        RadioApi.getSongs().then((songsData)=> {
            this.setState({
                songs: songsData.songs
            });
        });
    },

    render: function () {
        var songCardNodes = [];
        if (this.state.songs) {
            this.state.songs.forEach((song) => {
                songCardNodes.push(
                    <SongCard key={song.id} song={song}/>
                );
            });
        }

        return (
            <div className="song-list">

                <h1>Featured songs</h1>

                <hr/>

                <div className="row">
                    {songCardNodes}
                </div>

            </div>
        );
    }
});
