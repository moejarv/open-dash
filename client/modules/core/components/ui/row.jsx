import React from 'react';
import classNames from 'classnames';

class Row extends React.Component {

  render() {
    const rowStyles = {
      marginLeft: '0px',
      marginRight: '0px'
    };

    const classes = classNames(this.props.className, 'row');

    return (
      <div className={classes} style={rowStyles}>
        {this.props.children}
      </div>
    );
  }
}

export default Row;
