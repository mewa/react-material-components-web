import React from 'react';
import classNames from 'classnames';

var Title = (props) => {
    const classes = classNames({
	"mdc-card__title": true,
	"mdc-card__title--large": props.large
    });
    return <h1 className={classes}>Title</h1>;
}

var Subtitle = (props) => {
    return <h2 className="mdc-card__subtitle" {...props}>Title</h2>;
}

exports.Title = Title;
exports.Subtitle = Subtitle;