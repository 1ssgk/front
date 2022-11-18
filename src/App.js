import './App.css';
import axios from 'axios';

function App() {
 //.get('localhost/api/test',"dd",{ headers: { 'authtoken': token } })
 console.log('이거 맞지?')
  axios
    .get('api/test',"dd",{})
    .then((response) => {
        console.log('성공인가?')
    })
    .catch(err =>{
        console.log(err)
        return false;
    });

  return (
    <h1>hi13</h1>
  );
}

export default App;
