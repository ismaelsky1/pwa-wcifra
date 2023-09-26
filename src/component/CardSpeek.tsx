
interface Props {
  transcript: string;
  isListening: any;
}

function CardSpeek({ transcript, isListening }: Props) {

  return (<>
    {(isListening) && <span className='text-orange-200'><div className="h-5"><span className="loader"></span></div></span>}
    <div className="text-3xl font-bold justify-center flex flex-col h-full">
      {(transcript === "" && !isListening) && <span className='text-orange-200'>Fale o trecho da música que deseja...</span>}
   
      <span className='text-orange-50'>{transcript}</span>
    </div>
  </>
  );
}

export default CardSpeek;
