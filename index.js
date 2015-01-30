var getYouTubeID = require('get-youtube-id');

module.exports = {
    blocks: {
        youtube: {
            process: function(blk) {
                var videoId = getYouTubeID(blk.body) || blk.body;
                var url = "http://www.youtube.com/watch?v="+videoId;

                if (this.genertaor != "website") {
                    return '<a href="'+url+'">'+url+'</a>';
                }

                return '<iframe width="420" height="315" src="http://www.youtube.com/embed/'+videoId+'"></iframe>'
            }
        }
    }
};
