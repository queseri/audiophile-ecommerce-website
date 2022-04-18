import Header from "./audiophile/header/Header";
import Main from "./audiophile/main/Main";
import Aside from "./audiophile/main/Aside";
import { DataProvider } from "./audiophile/context/Context";

function App() {
  return (
    <DataProvider>
      <div className="App">
        <Header />
        <Main />
        <Aside />
      </div>
    </DataProvider>
  );
}

export default App;
