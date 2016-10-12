const GitBook   = require('gitbook-core');
const { React } = GitBook;

const YoutubeBlock = React.createClass({
    propTypes: {
        youtubeUrl: React.PropTypes.string.isRequired
    },

    render() {
        const { youtubeUrl } = this.props;

        return (
            <div style="position: relative;padding-bottom: 56.25%;padding-top: 25px;height: 0;">
                <iframe src={`//www.youtube.com/embed/${youtubeUrl}`}
                    frameBorder="0"
                    allowFullScreen
                    style="border: none;position: absolute;top: 0;left: 0;width: 100%;height: 100%;"></iframe>
            </div>
        );
    }
});

module.exports = GitBook.createPlugin({
    activate: (dispatch, getState, { Components }) => {
        dispatch(Components.registerComponent(YoutubeBlock, { role: 'block:youtube' }));
    }
});
