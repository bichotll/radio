var radioConfig = require('../config/radio');

export default new function () {
    /**
     * Get all songs
     * @return promise
     */
    this.getSongs = function() {
        console.log(radioConfig.apiUrl + 'songs');
        return $.get(radioConfig.apiUrl + 'songs');
    };

    /**
     * Get song by id
     * @param id
     * @return promise
     */
    this.getSong = function (id) {
        return $.get(radioConfig.apiUrl + 'songs/' + id);
    };
};
