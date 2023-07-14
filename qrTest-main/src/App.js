import logo from "./logo.svg";
import "./App.css";
import { Button } from "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch("trksdeg_cv_tr.pdf").then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "trksdeg_cv_tr.pdf";
        alink.click();
      });
    });
  };

  return (
    <div className="App">
      <div className=" w-75 d-inline-block" style={{ height: "100px" }}>
        {" "}
      </div>
      <button
        className="btn btn-success"
        onClick={onButtonClick}
        style={{ width: "50%", height: "100px" }}
      >
        Garanti Belgesi İndir
      </button>
    </div>
  );
}

export default App;
