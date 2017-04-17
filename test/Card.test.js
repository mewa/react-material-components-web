"use strict";

import React from 'react';
import { shallow, mount } from 'enzyme';
import { Card } from '../build/lib.js';

describe("<Card />", () => {
    it("should have root element with mdc-card class", () => {
	const wrapper = shallow(<Card />);
	expect(wrapper.at(0).props().className.split(" ")).toContain("mdc-card");
    });

    it("should have root element with mdc-card class and custom classes", () => {
	const custom = "custom-classname";
	const wrapper = shallow(<Card className={custom}/>);
	expect(wrapper.at(0).props().className.split(" "))
	    .toEqual(expect.arrayContaining(["mdc-card", custom]));
    });
});

describe("<Card /> (sub)title", () => {    
    it("should render title", () => {
	const title = "Super title";
	const wrapper = mount(
	    <Card>
		<Card.Title>{title}</Card.Title>
		<Card.Content>
		  Super content
		</Card.Content>
	    </Card>
	);
	expect(wrapper.find('.mdc-card__title').text())
	    .toBe(title);
    });

    it("should render subtitle", () => {
	const title = "Super subtitle";
	const wrapper = mount(
	    <Card>
		<Card.Subtitle>{title}</Card.Subtitle>
		<Card.Content>
		  Super content
		</Card.Content>
	    </Card>
	);
	expect(wrapper.find('.mdc-card__subtitle').text())
	    .toBe(title);
    });
    
    it("should render large title", () => {
	const wrapper = shallow(
	    <Card.Title large>Super title</Card.Title>
	);
	expect(wrapper.find('.mdc-card__title').first().props().className.split(" "))
	    .toContain("mdc-card__title--large");
    });
});

describe("<Card /> content", () => {
    it("should render content", () => {
	const content = "Super content";
	const wrapper = mount(
	    <Card>
	    <Card.Title>Super title</Card.Title>
	    <Card.Content>
	      {content}
	    </Card.Content>
	    </Card>
	);
	expect(wrapper.find('section.mdc-card__supporting-text').text())
	    .toEqual(content);
    });
    
    it("should not render empty content", () => {
	const wrapper = mount(
	    <Card>
	    <Card.Title>Super title</Card.Title>
	    </Card>
	);
	expect(wrapper.find('section.mdc-card__supporting-text').exists())
	    .toBe(false);
    });
});

describe("<Card /> actions", () => {
    it("should render actions", () => {
	const wrapper = mount(
	    <Card>
	      <Card.Header>
		<Card.Title>Super title</Card.Title>
	      </Card.Header>
	      <Card.Action>Super Action 1</Card.Action>
	      Super content
	      <Card.Action>Super Action 2</Card.Action>
	    </Card>
	);
	expect(wrapper.find('section').last().props().className.split(" "))
	    .toContain("mdc-card__actions");
	expect(wrapper.find('.mdc-card__action').length)
	    .toBe(2);
    });
    
    it("should not render actions unless specified", () => {
	const wrapper = shallow(
	    <Card>
	    <Card.Title>Super title</Card.Title>
	    Super content
	    </Card>
	);
	expect(wrapper.find('section.mdc-card__actions').exists())
	    .toBe(false);
    });
});

describe("<Card horizontal />", () => {
    it("should stack horizontally", () => {
	const wrapper = shallow(
	    <Card horizontal />
	);
	expect(wrapper.at(0).props().className.split(" "))
	    .toContain("mdc-card__horizontal-block");
	expect(wrapper.at(0).props().className.split(" "))
	    .not.toContain("mdc-card");
    });
});

describe("<Card media />", () => {
    it("should have background image", () => {
	const wrapper = mount(
		<Card>
		<Card.Title>Super title</Card.Title>
		<Card.Content>Super content</Card.Content>
		<Card.Media src="https://material-components-web.appspot.com/images/16-9.jpg" />
	    	<Card.Action>Super Action 1</Card.Action>
	    </Card>
	);
	expect(wrapper.find("section.mdc-card__media").props().style.background)
	    .toEqual("url(https://material-components-web.appspot.com/images/16-9.jpg)");
    });
});

describe("<Card horizontal /> media item", () => {
    it("should stack horizontally", () => {
	const url = "https://material-components-web.appspot.com/images/16-9.jpg"
	const wrapper = shallow(
		<Card horizontal>
		<Card.Title>Super title</Card.Title>
		Super content
	    	<Card.Action>Super Action 1</Card.Action>
		<Card.MediaItem src={url} />
		</Card>
	);
	expect(wrapper.find("img.card__media-item").exists())
	    .toBe(true);
	expect(wrapper.find("img.card__media-item").props().src)
	    .toEqual(url);
    });
});
