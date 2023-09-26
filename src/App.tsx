import { useState } from 'react';

import CardSpeek from './component/CardSpeek';
import Tools from './component/Tools';
import List from './component/List';

function App() {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState<string>('');

  return (
    <div className="flex flex-col h-screen bg-orange-50">
      {/* <div className="basis-1/6 overflow-scroll p-5">Indentifica musica</div> */}
      <div className="basis-1/2 overflow-scroll p-5"><List transcript={transcript} isListening={isListening} /></div>
      <div className="basis-1/3 bg-orange-500 rounded-tl-2xl rounded-tr-2xl p-5 align-middle" > <CardSpeek transcript={transcript} isListening={isListening} /></div>
      <div className="basis-1/4 bg-orange-500 align-middle"><Tools setTranscript={(value) => { setTranscript(value) }} setListening={(value) => { setIsListening(value) }} /></div>
    </div>
  );
}

export default App;
