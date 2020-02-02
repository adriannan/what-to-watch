import React, { Component } from "react";
import Navigation from "./Navigation";
import ProfileInfo from "./ProfileInfo";
import Aside from "./Aside";
import Content from "./Content";
import Invite from "../components/Invite";
import InviteMsg from "../components/InviteMsg";

class Home extends Component {
  state = {
    follow: false,
    connect: false,
    showAlert: false,
    showAlertMsg: false,
    message: ""
  };

  handleClickFollow = () => {
    document.querySelector(".btn__follow").innerHTML = "Following";
    document.querySelector(".btn__follow").style.opacity = ".5";
    document.querySelector(".btn__follow").style.cursor = "no-drop";

    setTimeout(() => {
      this.setState({
        follow: true
      });
      document.querySelector(".btn__unfollow").style.opacity = "1";
      document.querySelector(".btn__unfollow").style.cursor = "pointer";
    }, 1000);
  };
  handleClickUnfollow = () => {
    this.setState({
      follow: false
    });
  };
  handleClickConnect = () => {
    if (this.state.connect) return;
    window.scrollTo(0, 0);
    document.querySelector("body").style.overflow = "hidden";
    this.setState({
      showAlert: true
    });
  };
  handleClickSend = e => {
    document.querySelector("body").style.overflow = "scroll";
    document.querySelector(".invite__alert-wrap").style.display = "none";
    this.setState({
      connect: true
    });
  };
  handleClickAddMsg = e => {
    this.setState({
      showAlert: false,
      showAlertMsg: true
    });
  };
  handleClickCancel = () => {
    document.querySelector(".invite__alert-wrap").style.display = "none";
    document.querySelector("body").style.overflow = "scroll";
    document.querySelector(".btn__connect").style.cursor = "pointer";
    this.setState({
      showAlert: false,
      showAlertMsg: false
    });
  };
  handleInputMsg = e => {
    this.setState({
      message: e.target.value
    });
  };
  handleSubmitMsg = e => {
    e.preventDefault();
    this.setState({
      connect: true,
      message: ""
    });
  };
  handleClickSendMsg = e => {
    document.querySelector("body").style.overflow = "scroll";
    this.setState({
      connect: true,
      showAlert: false,
      showAlertMsg: false,
      message: ""
    });
  };
  render() {
    return (
      <>
        <nav className="main__nav">{<Navigation />}</nav>
        <main>
          <aside className="aside-left">
            {
              <ProfileInfo
                clickFollow={this.handleClickFollow}
                clickUnfollow={this.handleClickUnfollow}
                clickConnect={this.handleClickConnect}
                follow={this.state.follow}
                connect={this.state.connect}
              />
            }
          </aside>
          <section className="content">{<Content />}</section>
          <aside className="aside-right">{<Aside />}</aside>
        </main>
        {this.state.showAlert && (
          <Invite
            submitMsg={this.handleSubmitMsg}
            clickCancel={this.handleClickCancel}
            clickAddMsg={this.handleClickAddMsg}
            clickSend={this.handleClickSend}
          />
        )}
        {this.state.showAlertMsg && (
          <InviteMsg
            submitMsg={this.handleSubmitMsg}
            clickCancel={this.handleClickCancel}
            message={this.state.message}
            input={this.handleInputMsg}
            clickSendMsg={this.handleClickSendMsg}
          />
        )}
      </>
    );
  }
}

export default Home;
