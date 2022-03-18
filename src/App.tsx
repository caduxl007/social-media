import { Home } from "pages/Home";
import AppProvider from "./hooks";
import GlobalStlyles from "./styles/global";

function App() {
  return (
    <AppProvider>
      <Home />
      <GlobalStlyles />
    </AppProvider>
  );
}

export default App;
