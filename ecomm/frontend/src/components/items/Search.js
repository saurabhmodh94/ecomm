import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { searchItems } from "../../actions/items"; // modify
class Search extends Component {
  state = {
    searchKey: ""
  };
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = e => {
    e.preventDefault();
    if (this.state.searchKey !== "") {
      this.props.searchItems(this.state.searchKey);
    } else {
      alert("Empty Search String");
    }
  };
  render() {
    return (
      <div className="card card-body mt-4 mb-4">
        <h2>Search Items</h2>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Item Name</label>
            <input
              className="form-control"
              type="text"
              name="searchKey"
              onChange={this.onChange}
              value={this.state.searchKey}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Search
            </button>
          </div>
        </form>
      </div>
    );
  }
}

Search.propTypes = {};

const mapStateToProps = state => ({});

export default connect(
  mapStateToProps,
  { searchItems }
)(Search);
