import logo from './logo.svg';
import './App.css';
import './data';
import ACTOR_DATA from './data';

const data = ACTOR_DATA.cast;
const imageURL = 'https://image.tmdb.org/t/p/original';

function ActorList(props){
  return (
    <div>
      <h2>Hi, {props.name}</h2>
      <ActorItem />
    </div>
  );
}

function ActorItem(props){
  return(
    <>

      <div>
        <ul>{data.map(item => <li key={item.id}> 
          <img src={imageURL+item.profile_path} alt=""/>
          {item.name}
          <br/>
          {/* {item.character} */}

          <hr/>
          {item.character}
        </li>)}
        
        
        </ul>
      </div>
      
      
    </>
  );
}


function App() {
  return (
    <div className="App">
      <h2>Welcome to movie world</h2>
      <ActorList name={"This is our team"} />
    </div>
  );
}

export default App;
