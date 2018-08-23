import React from 'react';
import { connect } from 'react-redux';


const CounterComponent = (props) => {
  return(
            <div>
                <h2>{props.counter}</h2>
                <button type='button' onClick={props.decrement}>-</button>
                <button type='button' onClick={props.increment}>+</button>
            </div>
  )
}

const mapStateToProps = (state, ownProps) => {
    return {
      counter: state.counterReducer
    }
  }

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        increment: () => {
        dispatch({type: 'INCREMENT', payload: 1})
        },
        decrement: () => {
        dispatch({type: 'DECREMENT', payload: -1})
        }
    }
}

  export default connect(mapStateToProps,mapDispatchToProps)(CounterComponent)
    

