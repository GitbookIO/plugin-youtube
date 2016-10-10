const getYouTubeID = require('get-youtube-id');

module.exports = {
    blocks: {
        youtube: (block) => {
            console.log('in block youtube');
            console.log(block);
            const videoId = getYouTubeID(block.kwargs.src) || block.kwargs.src;
            const url     = `http://youtube.com/watch?v=${videoId}`;

            const videoThumb = `http://img.youtube.com/vi/${videoId}/0.jpg`; /* 0.jpg is default full resolution image. 1–3.jpg is thumbnails */

            return {
                youtubeUrl: this.output.name != 'website' ? videoThumb : url
            };
        }
    }
};
