import React, { Component } from "react";
import { ReactReader, ReactReaderStyle } from "react-reader";
import { ReaderContainer } from "./Components";
import { css } from "emotion";
import { Spin } from "antd";

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
    const styles = {
      container: css`
        position: relative;
        height: 100vh;
        width: 100%;
        padding: 0px;
      `
    };
    const { fullscreen, location } = this.state;
    return (
      <div className={styles.container}>
        {this.props.loadingBook ? (
          <Spin size="large"></Spin>
        ) : (
          <ReaderContainer fullscreen={fullscreen}>
            <ReactReader
              url={this.props.url}
              locationChanged={this.onLocationChanged}
              title={this.props.title}
              location={location}
              getRendition={this.getRendition}
              styles={{
                ...ReactReaderStyle,
                // next: { display: "none" },
                // prev: { display: "none" },
                reader: {
                  position: "absolute",
                  width: "100%",
                  top: 50,
                  left: 1,
                  bottom: 20,
                  right: 1
                }
              }}
              epubOptions={{
                fontSize: "18px",
                flow: "scrolled-continuous",
                width: "100%"
              }}
            />
          </ReaderContainer>
        )}
      </div>
    );
  }
}

export default ReadBook;
