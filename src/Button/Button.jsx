import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class Button extends React.Component {
    constructor(props) {
	super(props);

	this.classes = classNames(["mdc-button"], this.props.className, {
	    "mdc-button--accent": this.props.accent,
	    "mdc-button--primary": this.props.primary,
	    "mdc-button--raised": this.props.raised,
	    "mdc-button--compact": this.props.compact,
	    "mdc-button--dense" : this.props.dense
	});
    }

    render() {
	const { accent, primary, raised, href, compact, dense, className, ...p } = this.props;
	if (href)
	    return <a href={href} className={this.classes} {...p} />;
	else
	    return <button className={this.classes} {...p} />
    }
};

Button.propTypes = {
    accent: PropTypes.bool,
    primary: PropTypes.bool,
    raised: PropTypes.bool,
    compact: PropTypes.bool,
    dense: PropTypes.bool
};
