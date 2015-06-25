let React = require('react');
let SvgIcon = require('../../svg-icon');

let NavigationFullscreen = React.createClass({

  render() {
    return (
      <SvgIcon {...this.props}>
        <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/>
      </SvgIcon>
    );
  }

});

module.exports = NavigationFullscreen;