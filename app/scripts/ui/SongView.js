'use strict';

import React from 'react';
import RadioApi from '../services/radio';

export default React.createClass({
    getInitialState(){
        return {
        }
    },

    componentWillMount(){
        console.log('song view');
    },

    render: function () {
        return (
            <div class="song-view">
                <h1>Song view</h1>
            </div>
        );
    }
});
