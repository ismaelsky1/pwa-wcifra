import { useEffect, useState } from 'react';
import '../App.css';
// import { RiMic2Fill, RiRefreshFill, RiPauseFill } from 'react-icons/ri';
import { RiRefreshFill } from 'react-icons/ri';
import { TbVolumeOff, TbVolume } from 'react-icons/tb';

//@ts-ignore
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';


interface Props {
  setTranscript: (value: string) => void;
  setListening: (value: any) => void;
}

const Tools = ({ setTranscript, setListening }: Props) => {

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  useEffect(() => {
    setTranscript(transcript);
    setListening(listening);
  }, [listening, setListening, setTranscript, transcript])

  const reset = () => {
    setTranscript('');
    resetTranscript();
  }

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <div className="text-center h-full pb-3">
      {!listening && <button onClick={() => { SpeechRecognition.startListening({ language: 'pt-br', continuous: true }) }} className='flex-none rounded-full border-none bg-slate-200 p-3 mr-4'><TbVolumeOff size={40} /></button>}
      {listening && <button onClick={() => { SpeechRecognition.stopListening() }} className='flex-none rounded-full border-none bg-slate-200 p-3 mr-4'><TbVolume size={40} /></button>}
      <button onClick={() => { reset() }} className='flex-none rounded-full border-none bg-slate-200 p-3'><RiRefreshFill size={40} /></button>
    </div>
  );
}

export default Tools;
