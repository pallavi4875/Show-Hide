// Write your code here
import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {
    isFirstNameVisible: false,
    isLastNameVisible: false,
  }

  toggleFirstName = () => {
    this.setState = prevState => ({
      isFirstNameVisible: !prevState.isFirstNameVisible,
    })
  }

  toggleLastName = () => {
    this.setState = prevState => ({
      isLastNameVisible: !prevState.isLastNameVisible,
    })
  }

  render() {
    const {isFirstNameVisible, isLastNameVisible} = this.state

    return (
      <div className="container">
        <h1 className="heading">SHOW/HIDE</h1>
        <div>
          <button onClick={this.toggleFirstName}>
            {isFirstNameVisible ? 'Show/Hide Lastname' : 'Show/Hide Firstname'}
          </button>
          {isFirstNameVisible && <p>>Joe</p>}
        </div>
        <div>
          <button onClick={this.toggleLastName}>
            {isLastNameVisible ? 'Show/Hide Firstname' : 'Show/Hide Lastname'}
          </button>
          {isLastNameVisible && <p> Jonas</p>}
        </div>
      </div>
    )
  }
}
export default ShowHide
