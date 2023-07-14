import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { increaseCounter } from '../redux/actions/counterAction'

 class IncreaseCounter extends Component {
    render() {
        return (
            <div>
                <button onClick={e=>{
                    this.props.dispatch(increaseCounter());
                }}>
                1 ARTTIR
                </button>
            </div>
        )
    }
 }
    function mapDispatchToProps(dispatch) {
   return{actions:bindActionCreators(increaseCounter,dispatch)}
  }

export default connect(mapDispatchToProps)(IncreaseCounter)