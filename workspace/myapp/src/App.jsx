
import Home from "./components/Home";
import { BrowserRouter as Router,Routes,Route} from "react-router-dom";

function App() {
	return (
		<Router>
      <Routes>
        
        <Route path="/" element={<Home></Home>}></Route>



      </Routes>



    </Router>
	);
}
export default App;
