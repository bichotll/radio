'use strict';

import React from 'react';
import RadioApi from '../services/radio';

export default React.createClass({
    getInitialState(){
        return {
        }
    },

    componentWillMount(){
        console.log('song list');
    },

    render: function () {
        return (
            <div>
                <h1>Song list</h1>
            </div>
        );
    }
});
