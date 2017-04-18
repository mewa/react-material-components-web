import { Card } from '../build/lib.js';
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
    <div>
      <Card className="demo-card" >
	<Card.Media src="https://material-components-web.appspot.com/images/16-9.jpg" height="12.313rem" />
	<Card.Content>
	  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.
	</Card.Content>
      </Card>
      
      <Card className="demo-card" >
	<Card.Media src="https://material-components-web.appspot.com/images/16-9.jpg" height="12.313rem" />
	<Card.Header>
	  <Card.Title large>Title</Card.Title>
	  <Card.Subtitle>Subhead</Card.Subtitle>
	</Card.Header>
	<Card.Action>Action 1</Card.Action>
	<Card.Action>Action 2</Card.Action>
      </Card>

      <Card className="demo-card" maxWidth="10.938rem">
	<Card.Media src="https://material-components-web.appspot.com/images/1-1.jpg" height="10.938rem" >
	  <Card.Title large>Title</Card.Title>
	</Card.Media>
	<Card.Action>Action 1</Card.Action>
      </Card>

      <Card className="demo-card" >
	<Card.Header>
	  <Card.Title large>Title</Card.Title>
	  <Card.Subtitle>Subhead</Card.Subtitle>
	</Card.Header>
	<Card.Content>
	  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
	</Card.Content>
	<Card.Action>Action 1</Card.Action>
	<Card.Action>Action 2</Card.Action>
      </Card>

      <Card className="demo-card" horizontal>
	<Card.Header>
	  <Card.Title large>Title</Card.Title>
	  <Card.Subtitle>Subtitle</Card.Subtitle>
	</Card.Header>
	<Card.MediaItem src="https://material-components-web.appspot.com/images/1-1.jpg" />
	<Card.Action>Action 1</Card.Action>
	<Card.Action>Action 2</Card.Action>
      </Card>
    </div>,
    document.getElementById("cards")
);

