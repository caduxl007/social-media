import AppProvider from "./hooks";
import GlobalStlyles from "./styles/global";

function App() {
  return (
    <AppProvider>
      <GlobalStlyles />
    </AppProvider>
  );
}

export default App;
