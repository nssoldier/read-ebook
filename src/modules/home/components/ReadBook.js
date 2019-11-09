import React, { Component } from "react";
import { ReactReader } from "react-reader";
import { ReaderContainer } from "./Components";

class ReadBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullscreen: false,
      location: 0,
      largeText: false
    };
    this.rendition = null;
  }

  toggleFullscreen = () => {
    this.setState(
      {
        fullscreen: !this.state.fullscreen
      },
      () => {
        setTimeout(() => {
          const evt = document.createEvent("UIEvents");
          evt.initUIEvent("resize", true, false, global, 0);
        }, 1000);
      }
    );
  };

  onLocationChanged = location => {
    this.setState({
      location
    });
  };

  onToggleFontSize = () => {
    const nextState = !this.state.largeText;
    this.setState(
      {
        largeText: nextState
      },
      () => {
        this.rendition.themes.fontSize(nextState ? "140%" : "100%");
      }
    );
  };

  getRendition = rendition => {
    const { largeText } = this.state;
    this.rendition = rendition;
    rendition.themes.fontSize(largeText ? "140%" : "100%");
  };

  render() {
    const { fullscreen, location } = this.state;
    return (
      // <div className={styles.container}>
      <ReaderContainer fullscreen={fullscreen}>
        <ReactReader
          url={this.props.url}
          locationChanged={this.onLocationChanged}
          title={this.props.title}
          location={location}
          getRendition={this.getRendition}
          epubOptions={{ flow: "scrolled-doc" }}
        />
      </ReaderContainer>
      // </div>
    );
  }
}

export default ReadBook;
