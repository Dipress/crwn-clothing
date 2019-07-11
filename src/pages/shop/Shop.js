import React, {Component} from "react";
import {collections_data} from "../../utils";

import CollectionPreview from "../../components/collection-preview/CollectionPreview";

class Shop extends Component {
  constructor() {
    super();

    this.state = {
      collections: collections_data
    };
  }
  render() {
    const {collections} = this.state;
    return (
      <div className="shop-page">
        {collections.map(({id, ...rest}) => (
          <CollectionPreview key={id} {...rest} />
        ))}
      </div>
    );
  }
}

export default Shop;
