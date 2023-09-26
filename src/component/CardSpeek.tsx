import '../App.css';

interface Props {
  transcript: string;
  isListening: any;
}

function CardSpeek({ transcript, isListening }: Props) {

  return (
    <div className="text-3xl font-bold justify-center flex flex-col h-full">
      {(transcript === "" && !isListening)&& <span className='text-slate-400'>Fale o trecho da música que deseja...</span>}
      {(isListening) && <span className='text-slate-400'>Ouvindo</span>}

      <span className='text-slate-900'>{transcript}</span>
    </div>
  );
}

export default CardSpeek;
