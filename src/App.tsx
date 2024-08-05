import Main from "./components/Main";
import BookmarkProvider from "./context/provider";

function App() {
  return (
    <BookmarkProvider>
      <Main />
    </BookmarkProvider>
  );
}

export default App;
