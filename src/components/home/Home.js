import React from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { increase, decrease } from '../../actions/countAction'
import Counter from './Counter'

class Home extends React.Component {
  constructor(props, context) {
    super(props, context)

    this.onClickIncrease = this.onClickIncrease.bind(this)
    this.onClickDecrease = this.onClickDecrease.bind(this)
  }

  onClickIncrease() {
    this.props.actions.increase(1)
  }

  onClickDecrease() {
    this.props.actions.decrease(1)
  }

  render() {
    const {number} = this.props

    return (
      <div>
        <Counter
          number={number}
          increase={this.onClickIncrease}
          decrease={this.onClickDecrease}
        />
      </div>
    )
  }
}

function mapStateToProps(state) {
    return {
        number: state.count.number
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({increase, decrease}, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
