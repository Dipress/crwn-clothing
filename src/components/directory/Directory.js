import React, {Component} from "react";
import "./directory.scss";
import {data} from "../../utils";
import MenuItem from "../menu-item/MenuItem";

class Directory extends Component {
  constructor() {
    super();

    this.state = {
      sections: data
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({id, ...rest}) => (
          <MenuItem key={id} {...rest} />
        ))}
      </div>
    );
  }
}

export default Directory;
