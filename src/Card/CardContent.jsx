import React from 'react';
import classNames from 'classnames';

var Action = (props) => {
    return <button className="mdc-button mdc-button--compact mdc-card__action" {...props}>{props.children}</button>;
};

var SupportingText = (props) => {
    return <section className="mdc-card__supporting-text" {...props} >{props.children}</section>;
};

var Media = (props) => {
    var height = props.height;
    if (!height) {
	height = 90;
    }
    var style = {
	background: "url(" + props.src + ")",
	backgroundSize: "cover",
	backgroundRepeat: "no-repeat",
	height: height
    };
    return <section className="mdc-card__media" style={style} {...props} ></section>;
};

exports.Action = Action;
exports.SupportingText = SupportingText;
exports.Media = Media;
