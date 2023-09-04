import { useState } from 'react';

const heavyWork = () => {
  console.log('엄청 무거운 작업!!!');
  return['홍길동', '김민수'];
}

function App(){
  const [names, setNames] = useState(() => {
    return heavyWork();
  });
  const [input, setInput] = useState('');

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleUpload = () => {
    setNames((prevState) => {
      return([input, ...prevState])
    });
  }

  console.log(input);

  return (
    <div>
     <input type="text" value={input} onChange={handleInputChange}></input>
     <button onClick={handleUpload}>Upload</button>
     {names.map((name, idx) => {
      return <p key={idx}>{name}</p>
     })}
    </div>
  );
}

export default App;                        
