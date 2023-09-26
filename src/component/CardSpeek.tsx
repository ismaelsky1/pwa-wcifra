import '../App.css';

interface Props {
  transcript: string;
  isListening: any;
}

function CardSpeek({ transcript, isListening }: Props) {

  return (
    <div className="text-3xl font-bold justify-center flex flex-col h-full">
      <span className='text-slate-400'>Fale o trecho da música que deseja...</span>

      <span className='text-slate-900'>{transcript} {isListening ? '...' : ''}</span>
    </div>
  );
}

export default CardSpeek;
