import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from '../build/lib.js';

ReactDOM.render(
    <div>
      <div>
	<Button>Default</Button>
	<Button raised>Raised</Button>
	<Button dense>Dense default</Button>
	<Button dense raised>Dense raised</Button>
	<Button compact>Compact</Button>
	<Button compact raised>Compact raised</Button>
	<Button primary>Default with primary</Button>
	<Button raised primary>Raised with primary</Button>
	<Button accent>Default with accent</Button>
	<Button raised accent>Raised with accent</Button>
      </div>
      <div className="mdc-theme--dark" style={{background: "#333"}}>
	<Button>Default</Button>
	<Button raised>Raised</Button>
	<Button dense>Dense default</Button>
	<Button dense raised>Dense raised</Button>
	<Button compact>Compact</Button>
	<Button compact raised>Compact raised</Button>
	<Button primary>Default with primary</Button>
	<Button raised primary>Raised with primary</Button>
	<Button accent>Default with accent</Button>
	<Button raised accent>Raised with accent</Button>
      </div>
    </div>,
    document.getElementById("buttons")
);
