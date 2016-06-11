'use strict';

import React from 'react';
import RadioApi from '../services/radio';

export default React.createClass({
    getInitialState(){
        return {
            song: {}
        }
    },

    componentWillMount(){
        RadioApi.getSong(this.props.params.id).then((songsData)=> {
            this.setState({
                song: songsData
            });
        });
    },

    render: function () {

        var iFrameNode;
        if (this.state.song.youtube_id) {
            iFrameNode = (
                <iframe id="ytplayer" type="text/html" width="640" height="390"
                        src={"https://www.youtube.com/embed/" + this.state.song.youtube_id + "?autoplay=1"}
                        frameborder="0"/>
            );
        }

        return (
            <div class="song-view">
                <h1>{this.state.song.title}</h1>

                <hr/>

                {iFrameNode}
            </div>
        );
    }
});
