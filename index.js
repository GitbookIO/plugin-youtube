const getYouTubeID = require('get-youtube-id');

module.exports = {
    blocks: {
        youtube: ({ kwargs }) => {
            const videoId = getYouTubeID(kwargs.src) || kwargs.src;
            const url     = `http://youtube.com/watch?v=${videoId}`;

            // Get thumbnail for E-Books version
            // 0.jpg is default full resolution image. 1–3.jpg is thumbnails
            const videoThumb = `http://img.youtube.com/vi/${videoId}/0.jpg`;

            return {
                youtubeUrl: this.output.name != 'website' ? videoThumb : url
            };
        }
    }
};
