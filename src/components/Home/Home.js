import React, { Component } from 'react';
import './Home.css';
// import './bootstrap.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateUser } from '../../ducks/get_reducer';
import Login from './Login';

class Home extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    this.props.updateUser();
  }

  render() {
    return (
      <div className='website'>
        <h1 className='website-title'>PLAY IT FORWARD</h1>
        {/* <Login /> */}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ ...state.getReducer });

export default connect(mapStateToProps, { updateUser })(Home);
