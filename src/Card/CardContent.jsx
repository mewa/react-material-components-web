import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

var Actions = (props) => {
    var classes = classNames(["mdc-card__actions"], props.className, {
	"mdc-card__actions--vertical": props.vertical
    });
    const { vertical, ...p } = props;
    return <section className={classes} {...p} />;
}

var Action = (props) => {
    return <button className="mdc-button mdc-button--compact mdc-card__action" {...props}>{props.children}</button>;
};

var SupportingText = (props) => {
    return <section className="mdc-card__supporting-text" {...props} >{props.children}</section>;
};

var Media = (props) => {
    var style = {
	background: "url(" + props.src + ")",
	backgroundSize: "cover",
	backgroundRepeat: "no-repeat",
	height: props.height
    };
    return <section className="mdc-card__media" style={style} {...props} ></section>;
};

Media.propTypes = {
    src: PropTypes.string.isRequired,
    height: PropTypes.string
};

Media.defaultProps = {
    height: "12.313rem"
};

var MediaItem = (props) => {
    const classes = classNames(["mdc-card__media-item"], props.className, {
	"mdc-card__media-item--1dot5x": props.x1dot5,
	"mdc-card__media-item--2x": props.x2,
	"mdc-card__media-item--3x": props.x3
    })
    return <img className={classes} src={props.src} style={{height: props.height}}/>  
};

MediaItem.propTypes = {
    height: PropTypes.string,
    x1dot5: PropTypes.bool,
    x2: PropTypes.bool,
    x3: PropTypes.bool
};

var Horizontal = (props) => {
    return <div className="mdc-card__horizontal-block" {...props} />;
}

exports.Actions = Actions;
exports.Action = Action;
exports.SupportingText = SupportingText;
exports.Media = Media;
exports.MediaItem = MediaItem;
exports.Horizontal = Horizontal;
