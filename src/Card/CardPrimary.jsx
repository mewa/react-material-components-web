import React from 'react';
import classNames from 'classnames';

var Title = (props) => {
    const { className, large, ...p } = props;
    const classes = classNames([], className, {
	"mdc-card__title": true,
	"mdc-card__title--large": props.large
    });
    return <h1 className={classes} {...p} ></h1>;
};

var Subtitle = (props) => {
    return <h2 className="mdc-card__subtitle" {...props} >{props.children}</h2>;
};

var Primary = (props) => {
    return <section className="mdc-card__primary" {...props} />;
}

exports.Title = Title;
exports.Subtitle = Subtitle;
exports.Primary = Primary;
