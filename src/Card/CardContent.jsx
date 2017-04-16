import React from 'react';
import classNames from 'classnames';

var Action = (props) => {
    return <button className="mdc-button mdc-button--compact mdc-card__action" {...props}>{props.children}</button>;
}

var SupportingText = (props) => {
    return <section className="mdc-card__supporting-text" {...props} >{props.children}</section>;
}

exports.Action = Action;
exports.SupportingText = SupportingText;