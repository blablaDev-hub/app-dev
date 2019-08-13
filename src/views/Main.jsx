import React from "react";
import { observer } from 'mobx-react'
import { logOut } from '../api'
import Store from '../store'

class Main extends React.Component {
  constructor(props) {
    super(props)

    this.handleLogOut = this.handleLogOut.bind(this);
  }

  componentDidMount() {
    const { state } = this.props.location;

    if (state) {
      Store.setUser(state);
      Store.user.getProjects();
      Store.user.checkInvites();
      console.log(Store.user);

    } else {
      Store.checkUser()
        .then(res => {
          if (!res) {
            this.props.history.replace('/')
            return
          } else {
            Store.user.getProjects();
            Store.user.checkInvites();
          }
        })
    }
  }

  handleLogOut() {
    const { history } = this.props;
    Store.user.logOut()
      .then(_ => {
        history.replace('/');
      })
  }

  render() {
    return (
      <section className="main">
        {Store.user && Store.user.full_name}
      </section>
    )
  }
}

export default observer(Main)
