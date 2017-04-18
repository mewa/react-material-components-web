import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import { Primary, Title, Subtitle } from "Card/CardPrimary.jsx";
import { Action, Actions, Horizontal, Media, MediaItem, SupportingText } from "Card/CardContent.jsx";

var base = ["mdc-card"];

export default class Card extends React.Component {
    constructor(props) {
	super(props);

	this.classes = classNames(base, this.props.className, {
	    "mdc-card--dark": this.props.dark
	});
    }
    
    render() {
	let { dark, verticalActions, horizontal, className, maxWidth, ...props} = this.props;
	return (
	    <div {...props} className={this.classes} style={{maxWidth}}>
	    </div>
	);
    }
}

Card.propTypes = {
    dark: PropTypes.bool,
    verticalActions: PropTypes.bool,
    horizontal: PropTypes.bool,
    maxWidth: PropTypes.string
};

Card.Title = Title;
Card.Subtitle = Subtitle;
Card.Action = Action;
Card.Media = Media;
Card.Content = SupportingText;
Card.Header = Primary;
Card.MediaItem = MediaItem;
Card.Horizontal = Horizontal;
Card.Actions = Actions;
