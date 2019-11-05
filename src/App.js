import React, { useState } from "react";
import { ReactReader, EpubView } from "react-reader";

const App = () => {
  const [url, setUrl] = useState(
    "/Users/mac/Desktop/projects/read-ebook/src/Chuong-8.epub"
  );
  return (
    <>
      <div style={{ /*position: "relative",*/ height: "100%" }}>
        {" "}
        <ReactReader
          url={url}
          title={"Alice in wonderland"}
          location={"epubcfi(/6/2[cover]!/6)"}
          locationChanged={epubcifi => console.log(epubcifi)}
        />
      </div>{" "}
      <div style={{ /*position: "relative",*/ height: "100%" }}>
        <EpubView
          url={url}
          location={"epubcfi(/6/2[cover]!/6)"}
          locationChanged={epubcifi => console.log(epubcifi)}
          tocChanged={toc => console.log(toc)}
        />
      </div>
    </>
  );
};

export default App;
