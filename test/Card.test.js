"use strict";

import React from 'react';
import { shallow } from 'enzyme';
import { Card } from '../build/lib.js';

describe("<Card />", () => {
    const wrapper = shallow(<Card />);
    expect(wrapper.find(<div />).at(0).props().className).to.equal("mdc-card");
});
