import { useState } from "react";
import { Java, SQL, HTML } from './Subject'
import './styles.css'

function App() {
  const[pg,setPg] = useState(1)
  function changePage(pgNum)
  {
    setPg(pgNum)
  }
  return (
    <div>
      <button onClick={()=>changePage(1)}>1</button>
      <button onClick={()=>changePage(2)}>2</button>
      <button onClick={()=>changePage(3)}>3</button>

      {pg===1 && <Java/>}
      {pg===2 && <SQL/>}
      {pg===3 && <HTML/>}
     
    </div>

  );
}

export default App;
