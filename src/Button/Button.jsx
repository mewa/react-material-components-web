import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { MDCRipple, MDCRippleFoundation } from '@material/ripple';
import * as util from '@material/ripple/util.js';
import { Map } from 'immutable';

export default class Button extends React.Component {
    constructor(props) {
	super(props);

	this.classes = ["mdc-button"]
	
	this.state = {
	    classes: classNames(this.classes, this.props.className, {
		"mdc-button--accent": this.props.accent,
		"mdc-button--primary": this.props.primary,
		"mdc-button--raised": this.props.raised,
		"mdc-button--compact": this.props.compact,
		"mdc-button--dense" : this.props.dense
	    }),
	    ripple: new Map()
	};

	var MATCHES = util.getMatchesProperty(HTMLElement.prototype);
	this.rippleFoundation = new MDCRippleFoundation({
	    browserSupportsCssVars: () => util.supportsCssVariables(window),
	    addClass: (c) => this.addClass(c),
	    removeClass: (c) => this.removeClass(c),
	    computeBoundingRect: () => this.root.getBoundingClientRect(),
	    isSurfaceActive: () => this.root[MATCHES](':active'),
	    isUnbounded:  () => false,
	    registerInteractionHandler: (evtType, handler) => this.root.addEventListener(evtType, handler),
	    deregisterInteractionHandler: (evtType, handler) => this.root.removeEventListener(evtType, handler),
	    registerResizeHandler: (handler) => window.addEventListener('resize', handler),
	    deregisterResizeHandler: (handler) => window.removeEventListener('resize', handler),
	    updateCssVariable: (name, value) => {
		this.setState({
		    ...this.state,
		    ripple: this.state.ripple.set(name, value)
		});
	    },
	    getWindowPageOffset: () => ({x: window.pageXOffset, y: window.pageYOffset})
	});
    }

    addClass(className) {
	this.classes.push(className);
	this.setState({
	    ...this.state,
	    classes: classNames(this.classes, this.props.className, {
		"mdc-button--accent": this.props.accent,
		"mdc-button--primary": this.props.primary,
		"mdc-button--raised": this.props.raised,
		"mdc-button--compact": this.props.compact,
		"mdc-button--dense" : this.props.dense
	    })
	});
    }

    removeClass(className) {
	let i = this.classes.indexOf(className);
	if (i > -1)
	    this.classes.splice(i, 1);
	this.setState({
	    ...this.state,
	    classes: classNames(this.classes, this.props.className, {
		"mdc-button--accent": this.props.accent,
		"mdc-button--primary": this.props.primary,
		"mdc-button--raised": this.props.raised,
		"mdc-button--compact": this.props.compact,
		"mdc-button--dense" : this.props.dense
	    })
	});
    }

    render() {
	const { accent, primary, raised, href, compact, dense, ripple, noripple, className, ...p } = this.props;
	if (href)
	    return <a href={href} className={this.state.classes} {...p} />;
	else
	    return <button className={this.state.classes} {...p} ref={ (node) => this.root = node }/>
    }

    componentDidMount() {
	this.rippleFoundation.init();
    }

    componentWillUnmount() {
	this.rippleFoundation.destroy();
    }

    componentDidUpdate() {
	if (this.root) {
	    this.state.ripple.forEach((v, k) => {
		this.root.style.setProperty(k, v);
	    })
	}
    }

};

Button.propTypes = {
    accent: PropTypes.bool,
    primary: PropTypes.bool,
    raised: PropTypes.bool,
    compact: PropTypes.bool,
    dense: PropTypes.bool,
    ripple: PropTypes.bool,
    noripple: PropTypes.bool
};

Button.defaultProps = {
    ripple: true
};
