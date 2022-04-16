import Header from "./audiophile/header/Header";
import Main from "./audiophile/main/Main";
import { DataProvider } from "./audiophile/context/Context";

function App() {
  return (
    <DataProvider>
      <div className="App">
        <Header />
        <Main />
      </div>
    </DataProvider>
  );
}

export default App;
