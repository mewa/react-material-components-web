import { Card } from '../build/lib.js';
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
    <div>
      <Card className="demo-card" media="https://material-components-web.appspot.com/images/16-9.jpg">
	Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.
      </Card>
      <Card className="demo-card" media="https://material-components-web.appspot.com/images/16-9.jpg">
	<Card.Title>Title</Card.Title>
	<Card.Subtitle>Subhead</Card.Subtitle>
	Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.
	<Card.Action>Action 1</Card.Action>
	<Card.Action>Action 2</Card.Action>
      </Card>
      <Card className="demo-card" >
	<Card.Title>Title</Card.Title>
	<Card.Subtitle>Subhead</Card.Subtitle>
	Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.
	<Card.Action>Action 1</Card.Action>
	<Card.Action>Action 2</Card.Action>
      </Card>
      <Card className="demo-card" >
	<Card.Title large>Large title</Card.Title>
	<Card.Subtitle>Subhead</Card.Subtitle>
	Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.
	<Card.Action>Action 1</Card.Action>
	<Card.Action>Action 2</Card.Action>
      </Card>
    </div>,
    document.getElementById("cards")
);

