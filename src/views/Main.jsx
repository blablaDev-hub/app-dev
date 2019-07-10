import React from "react";
import { checkSession, logOut } from '../api'

class Main extends React.Component {
  constructor(props) {
    super(props)

    this.handleLogOut = this.handleLogOut.bind(this);
  }

  componentDidMount() {
    const { state } = this.props.location;
    console.log(state);

    if (state) {

    } else {
      checkSession()
    }
  }

  handleLogOut() {
    const { history } = this.props;
    logOut()
      .then(_ => {
        history.replace('/');
      })
  }

  render() {
    return (
      <section className="main">
        DIS IS MAIN
        <button onClick={this.handleLogOut}>LOG OUT</button>
      </section>
    )
  }
}

export default Main
