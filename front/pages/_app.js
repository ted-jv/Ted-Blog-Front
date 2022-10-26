import { wrapper } from "../redux/store";
import "../styles/globals.css";

function App({ Component }) {
  return (
    <>
      <Component />
    </>
  );
}

export default wrapper.withRedux(App);
