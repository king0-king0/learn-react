import { Button } from "./components/Button";
import { Header } from "./components/Header";
import { Post } from "./components/Post";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <div>
        <Post></Post>
        <Post></Post>
        <Post></Post>
        <Post></Post>
      </div>
      <div className="button-group">
        <Button></Button>
        <Button></Button>
        <Button></Button>
      </div>
    </div>
  );
}

export default App;
