import React from 'react';
import Titulo from './components/Titulo/titulo.js';
import Form from './components/Form/form.js';
import Citas from './components/Citas/citas.js';

function App() {
  const [citaS, setCitaS] = useState([]);
  return (
    <div>
      <Titulo />
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Form />
          </div>
          <div className="one-half column">
            <Citas />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

