import "./App.scss";
import PostBlock from "./components/PostBlock/PostBlock";
import GetBlock from "./components/GetBlock/GetBlock";
import { GlobalProvider } from "./context/GlobalContext";
import Header from "./components/Header/Header";
import Intro from "./components/Intro/Intro";

function App() {
  return (
    <GlobalProvider>
      <>
        <Header />
        <Intro />
        <GetBlock />
        <PostBlock />
      </>
    </GlobalProvider>
  );
}

export default App;
