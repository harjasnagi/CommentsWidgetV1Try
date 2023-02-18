import InputComments from "./HarjasComponents/InputComments";
import StoredComments from "./HarjasComponents/StoredComments";

function App() {
  return (
    <div className="container"> 
      <InputComments/>
      <StoredComments/>
      <p className="bottom">Made By Harjas - ReactJs</p>
    </div>
  );
}

export default App;