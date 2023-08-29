import Spline from "@splinetool/react-spline";
import "./App.scss";
import Navi from "./component/navi";
import Content from "./component/content";
import Time from "./component/time";

function App() {
  return (
    <div className="App">
      <Navi />
      <Spline
        className="spline1"
        scene="https://prod.spline.design/S3Dr7lJ6TYRLFxBb/scene.splinecode"
      />
      <Content></Content>
      <Time></Time>
    </div>
  );
}

export default App;
