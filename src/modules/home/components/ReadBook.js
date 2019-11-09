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

  onToggleFontSize = () => {};

  getRendition = rendition => {
    const check = () => {
      const frames = document.getElementsByTagName("iframe");
      if (!frames || !frames.length) {
        return false;
      }
      const id = frames[0].id;
      const iFrame = document.getElementById(id);
      const iDoc = iFrame.contentDocument;
      const style = iDoc.getElementById("epubjs-inserted-css");
      if (!style) {
        return false;
      }
      style.remove();
      return true;
    };

    const loop = () => {
      const result = check();
      if (!result) {
        setTimeout(loop, 100);
        console.log("check failed, pending another check after 100ms");
      } else {
        console.log("check ok!!");
      }
    };
    loop();
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
              url={`${this.props.url}`}
              locationChanged={this.onLocationChanged}
              location={location}
              getRendition={this.getRendition}
              styles={{
                ...ReactReaderStyle,
                reader: {
                  ...ReactReaderStyle.reader,
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
                width: "100%",
                layout: {
                  columnWidth: 1000
                }
              }}
            />
          </ReaderContainer>
        )}
      </div>
    );
  }
}

export default ReadBook;
