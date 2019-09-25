import '../../App.css';
import React, { Component } from 'react'
import { connect } from 'react-redux'


class UserHome extends Component {
    
    render() {
        return (
            <div className="User-div">
                <h1 className ="User-home">Welcome {this.props.currentUser}</h1>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
      currentUser: state.user.currentUser,
    }
  }

export default connect(mapStateToProps)(UserHome)