import React, { Component } from "react";
import PropTypes from "prop-types";
import Items from "./Items";
import Search from "./Search";
import { connect } from "react-redux";

class Dashboard extends Component {
  render() {
    return (
      <div>
        <Search />
        <Items />
      </div>
    );
  }
}

Items.propTypes = {};

const mapStateToProps = state => ({});

export default connect(
  mapStateToProps,
  {}
)(Dashboard);
