import './App.css';
import data from './data.json';
import compass from './assets/compass.svg';
import picture from './assets/picture.jpg';

function App() {
  return (
    <div>
      <h4>svg</h4>
      <img src={compass} width={70} height={70} alt='svg' />
      <h4>png</h4>
      <img src={picture} width={512} height={341} alt='png' />
      <p>
        рррррр
        vdnfdkfjkd
        fdljfkdflk
        dfdkjfkd
        fdljfkdlf
      </p>
      <ul>
        {data.map(({title, id}) => {
          return <li key={id}>{title}</li>
        })}
      </ul>
    </div>
  );
}

export default App;
