import React, { useCallback, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { api } from './feature/api';
import CardSpeek from './component/CardSpeek';
import Tools from './component/Tools';

function App() {

  const [isListening, setIsListening] = useState(false);

  const [transcript, setTranscript] = useState<string>('');

  const [dataList, setDataList] = useState([]);

  const getData = useCallback(async () => {
    const texto = transcript.replace(' ', '%20')
    const resp: any = await api.get(`/search/findPalco?texto=${texto}`);
    console.log('resp', resp)
    setDataList(resp.data.response.docs)
  }, [transcript])

  return (
    <div className="flex flex-col h-screen bg-slate-300">
      <div className="basis-1/2 ">list 1 </div>
      <div className="basis-1/2 bg-slate-500 rounded-tl-2xl rounded-tr-2xl p-5 align-middle" > <CardSpeek transcript={transcript} isListening={isListening} /></div>
      <div className="basis-1/4 bg-slate-500 align-middle"><Tools setTranscript={(value) => { setTranscript(value) }} setListening={(value) => { setIsListening(value) }} /></div>
    </div>
  );
}

export default App;
