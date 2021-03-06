import React, { Component } from "react";
import { ReactReader, ReactReaderStyle } from "react-reader";
import { ReaderContainer } from "./Components";
import { css } from "emotion";
import { Spin } from "antd";

const check = () => {
  const frames = document.getElementsByTagName("iframe");
  if (!frames || !frames.length) {
    return false;
  }
  const iFrame = frames[0];
  const iDoc = iFrame.contentDocument;
  const style = iDoc.getElementById("epubjs-inserted-css");
  if (!style) {
    return false;
  }
  style.remove();
  window.iDoc = iDoc;
  const newStyle = iDoc.createElement("style");
  const height = window.innerHeight * 0.8;
  const width = window.innerWidth * 0.88;
  newStyle.innerHTML = `
    .image-wrap {
      text-align: center;
    }
    span{
      user-select: none;
    }
    body > div > img {
        ${width > 768 ? `height: ${height}px;` : `width: ${width}px;`}
    }
  `;
  iDoc.body.append(newStyle);
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
    loop();
  };

  onToggleFontSize = () => {};

  getRendition = rendition => {
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
