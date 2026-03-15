
import Alert from './components/Alert';
import MyButton from './components/MyButton';

function App() {
    return (
      <div>
        <Alert>
          This <b>Succeeded</b>!
        </Alert>
      
        <div>
          <MyButton onClick={() => console.log("clicked")}>My Button</MyButton>
        </div>
      </div>
    )
}


export default App
