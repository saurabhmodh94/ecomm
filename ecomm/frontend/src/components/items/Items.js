import React, { Component } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { getItems } from "../../actions/items"; // modify

class Items extends Component {
  componentDidMount() {
    this.props.getItems();
  }
  render() {
    return (
      <div>
        <h2>Item List</h2>
        <div className="row">
          {this.props.items.map(item => (
            <div key={item.id} className="card col-md-4 mb-2">
              <img className="card-img-top" src="" alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">{item.description}</p>
                <p className="card-text">{item.price}</p>
                <a href="#" className="btn btn-primary">
                  Add to Cart
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

Items.propTypes = {};

const mapStateToProps = state => ({
  items: state.items.items
});

export default connect(
  mapStateToProps,
  { getItems }
)(Items);
