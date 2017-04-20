import React from 'react';
import classNames from 'classnames';
import { MDCTextfieldFoundation } from '@material/textfield';

export default class Textfield extends React.Component {
    static baseClasses(props) {
	return {
	    "mdc-textfield": true
	}
    }

    static baseLabelClasses(props) {
	return {
	    "mdc-textfield__label": true
	}
    }
    
    constructor(props) {
	super(props);

	let regEv = (prop) => (handler) => this.input.addEventListener(prop, handler);
	let unregEv = (prop) => (handler) => this.input.removeEventListener(prop, handler);
	
	this.foundation = new MDCTextfieldFoundation({
	    isDisabled: () => this.state.disabled,
	    setDisabled: (v) => this.setState({...this.state, disabled: v}),
	    addClass: (c) => this.addClass(c),
	    removeClass: (c) => this.removeClass(c),
	    addClassToLabel: (c) => this.addClassToLabel(c),
	    removeClassFromLabel: (c) => this.removeClassFromLabel(c),
	    registerInputFocusHandler: regEv("focus"),
	    deregisterInputFocusHandler: unregEv("focus"),
	    registerInputBlurHandler: regEv("blur"),
	    deregisterInputBlurHandler: unregEv("blur"),
	    registerInputInputHandler: regEv("input"),
	    deregisterInputInputHandler: unregEv("input"),
	    getNativeInput: () => {return { value: this.input.value, disabled: this.input.disabled, checkValidity: () => this.input.checkValidity() }}
	});

	this.classes = [];
	this.labelClasses = [];
	this.state = {
	    disabled: this.props.disabled,
	    classes: classNames(Textfield.baseClasses(this.props)),
	    labelClasses: classNames(Textfield.baseLabelClasses(this.props))
	};
    }

    render() {
	return (
	    <div className={this.state.classes} >
	      <input type="text" id="my-textfield" className="mdc-textfield__input" ref={ (node) => this.input = node } />
	      <label className={this.state.labelClasses} htmlFor="my-textfield">Hint text</label>
	    </div>
	);
    }

    updateClasses() {
	this.setState({
	    ...this.state,
	    classes: classNames([], this.props.className, {...Textfield.baseClasses(this.props), ...this.classes})
	});
    }

    updateLabelClasses() {
	this.setState({
	    ...this.state,
	    labelClasses: classNames([], {...Textfield.baseLabelClasses(this.props), ...this.labelClasses})
	});
    }
    
    addClass(className) {
	this.classes = {
	    ...this.classes
	};
	this.classes[className] = true;
	this.updateClasses();
    }

    removeClass(className) {
	this.classes = {...this.classes};
	this.classes[className] = false;
	this.updateClasses();
    }

    addClassToLabel(className) {
	this.labelClasses = {...this.labelClasses};
	this.labelClasses[className] = true;
	this.updateLabelClasses();
    }

    removeClassFromLabel(className) {
	this.labelClasses = {...this.labelClasses};
	this.labelClasses[className] = false;
	this.updateLabelClasses();
    }

    componentDidUpdate() {
    }
    
    componentDidMount() {
	this.foundation.init();
    }

    componentWillUnmount() {
	this.foundation.destroy();
    }
};
