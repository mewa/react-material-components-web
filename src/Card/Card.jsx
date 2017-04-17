import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import { Primary, Title, Subtitle } from "Card/CardPrimary.jsx";
import { Action, Media, SupportingText } from "Card/CardContent.jsx";

var base = ["mdc-card"];
var baseActions = ["mdc-card__actions"];

export default class Card extends React.Component {
    constructor(props) {
	super(props);

	this.classes = classNames(base, this.props.className, {
	    "mdc-card--dark": this.props.dark
	});

	this.actionClasses = classNames(baseActions, {
	    "mdc-card__actions--vertical": this.props.verticalActions
	});
	
	this.actions = [];
	this.content = [];
	React.Children.forEach(this.props.children, (child) => {
	    switch (child.type) {
	    case Action:
		    this.actions.push(child);
		break;
	    default:
		    this.content.push(child);
	    }
	});
    }
    
    render() {
	let { dark, verticalActions, horizontal, className, maxWidth, ...props} = this.props;
	return (
	    <div {...props} className={this.classes} style={{maxWidth}}>
		{this.content}
		{this.actions.length > 0 &&
		    <section className={this.actionClasses} >
		    {this.actions}
		    </section>
		}
	    </div>
	);
    }
}

Card.propTypes = {
    dark: PropTypes.bool,
    verticalActions: PropTypes.bool,
    maxWidth: PropTypes.string
};

Card.defaultProps = {
    maxWidth: "21.875rem"
};


Card.Title = Title;
Card.Subtitle = Subtitle;
Card.Action = Action;
Card.Media = Media;
Card.Content = SupportingText;
Card.Header = Primary;
