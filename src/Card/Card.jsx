import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import { Title, Subtitle } from "Card/CardPrimary.jsx";
import { Action, SupportingText } from "Card/CardContent.jsx";

var base = ["mdc-card"]

export default class Card extends React.Component {
    constructor(props) {
	super(props);
	
	this.classes = classNames(base, {
	    "mdc-card--dark": this.props.dark
	});

	// Extract possible children
	this.actions = [];
	this.titles = [];
	this.subtitles = [];
	this.content = [];
	React.Children.forEach(this.props.children, (child) => {
	    switch (child.type) {
	    case Card.Title:
		this.titles.push(child);
		break;
	    case Card.Subtitle:
		this.subtitles.push(child);
		break;
	    case Card.Action:
		this.actions.push(child);
		break;
	    default:
		this.content.push(child);
	    }
	});
    }
    render() {
	let p = {...this.props};
	if (p.media) {
	    p.style = { background: "url(" + p.media + ")"}
	}
	delete p.dark;
	return (
	    <div className={this.classes} {...p}>
	    { (this.titles.length > 0 || this.subtitles.length > 0) &&
		<section className="mdc-card__primary">
		{ this.titles[0] }
		{ this.subtitles[0] }
		</section>
	    }
	    <SupportingText>
	    { this.content }
	    </SupportingText>
	    { this.actions.length > 0 &&
		<section className="mdc-card__actions">
		{ this.actions }
		</section>
	    }
	    </div>
	    );
    }
}

Card.propTypes = {
    dark: PropTypes.bool
};

Card.Title = Title;
Card.Subtitle = Subtitle;
Card.Action = Action;