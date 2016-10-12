var getYouTubeID = require('get-youtube-id');

module.exports = {
    blocks: {
        youtube: function(block) {
            // Try parsing src property to get Youtube videoId
            var videoId = getYouTubeID(block.kwargs.src) || block.kwargs.src;

            return {
               isVideo:   this.output.name === 'website',
               url:       `https://www.youtube.com/embed/${videoId}`,
               // Get thumbnail for E-Books version
               // 0.jpg is default full resolution image. 1–3.jpg is thumbnails
               thumbnail: `https://img.youtube.com/vi/${videoId}/0.jpg`
           };
        }
    }
};
