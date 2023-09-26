import { useCallback, useEffect, useState } from 'react';

import { api } from '../feature/api';

interface Props {
  transcript: string;
  isListening: any;
}

function List({ transcript, isListening }: Props) {

  const [dataList, setDataList] = useState<any>([]);

  const getData = useCallback(async () => {
    const texto = transcript.replace(' ', '%20').replace('.', '');

    const { data }: any = await api.get(`https://solr.sscdn.co/cc/h2/?q=${texto}`);
    let resp = JSON.parse(data.slice(1, -2));
    console.log('resp', resp)

    setDataList(resp.response.docs)
  }, [transcript])

  useEffect(() => {
    console.log('obs', isListening, transcript)
    if (!isListening && transcript !== '') getData()
  }, [getData, isListening, transcript])

  return (
    <div className="h- overflow-visible">
      {dataList.length === 0 && <div>
        <p className='text-orange-600 font-bold text-2xl text-center'> QMusicas </p>
      </div>}
      <ul className="divide-y divide-orange-300">
        {dataList.map((item: any, idx: number) => (
          <li key={`${idx}-${item.u}`} >
            <a target="_blank" className="flex justify-between gap-x-6 py-5" href={`https://www.cifraclub.com.br/${item.d}/${item.u}/`} >
              <div className="flex min-w-0 gap-x-4">
                <img className="h-12 w-12 flex-none rounded-full bg-orange-50"
                  src={`https://akamai.sscdn.co/letras/115x115/fotos/${item.i}`}
                  alt="C" />
                <div className="min-w-0 flex-auto">
                  <p className="text-sm font-semibold leading-6 text-gray-900">{item.m}</p>
                  <p className="mt-1 truncate text-xs leading-5 text-gray-500">{item.a}</p>
                </div>
              </div>
              <div className="shrink-0 sm:flex sm:flex-col sm:items-end">
                <p className="mt-1 text-xs leading-5 text-gray-500">
                  Cifras Club
                </p>
              </div>
            </a>
          </li>
        ))}

      </ul>
    </div>
  );
}

export default List;
