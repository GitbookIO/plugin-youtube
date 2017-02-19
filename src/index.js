const GitBook   = require('gitbook-core');
const { React } = GitBook;

/**
 * Block to render a youtube video.
 * @type {ReactClass}
 */
const YoutubeBlock = React.createClass({
    propTypes: {
        isVideo:   React.PropTypes.bool.isRequired,
        url:       React.PropTypes.string.isRequired,
        thumbnail: React.PropTypes.string.isRequired
    },

    render() {
        const { isVideo, url, thumbnail } = this.props;

        return (
            <div className="YoutubeBlock">
                <GitBook.ImportCSS href="gitbook/youtube/youtube.css" />
            { isVideo ?
                <iframe src={url}
                    frameBorder="0"
                    allowFullScreen></iframe>
                :
                <img src={thumbnail} />
            }
            </div>
        );
    }
});

module.exports = GitBook.createPlugin({
    activate: (dispatch, getState, { Components }) => {
        dispatch(Components.registerComponent(YoutubeBlock, { role: 'block:youtube' }));
    }
});
