import { shuffle } from '@/library/helpers';
import { useMemo, useState } from 'react';
import LiItem from './LiItem';

export default function IntItem({ intPlace, intNames }) {
  const [showmore, setShowmore] = useState(false);
  const [showTip, setShowTip] = useState(false);
  console.log(intPlace)
  const wrap = {
    display: 'flex',
    padding: '20px 5px',
  };
  const imgStyle = {
    width: '190px',
    height: '190px',
    objectFit: 'cover',
  };
  const contentStyle = {
    padding: '0 20px',
  };

  // now get the name of the intPlace and 3 random other ones to get diplayed

  const questionList = useMemo(() => {
    const otherPlaces = intNames.filter((i) => i.xid !== intPlace.xid);

    const shuffledOtherPlaces = shuffle(otherPlaces);

    const threeRandomPlaces = shuffledOtherPlaces.slice(0, 3);

    const addCorrectOne = [...threeRandomPlaces, intPlace];
    console.log(addCorrectOne);

    const questionList = shuffle(addCorrectOne);

    return questionList;
  }, [intNames, intPlace]);

  return (
    <div style={wrap}>
      {/* I use img because we don't know where all the images come from, and somehow I only get the first Image to show with Image  */}
      <img
        style={imgStyle}
        src={intPlace.preview.source}
        width={intPlace.preview.width}
        height={intPlace.preview.height}
        alt={intPlace.name}
      />
      <div id='quiz' style={contentStyle}>
        <h3>Which historic place is this???</h3>
        <div className='anwsers'>
          {questionList.map((question) => (
            <LiItem
              key={question.xid}
              question={question}
              intPlace={intPlace}
            />
          ))}
        </div>
        <div>

        <button onClick={()=> setShowTip(!showTip)}>Tipp</button>
        {showTip && <span>Straße: {intPlace.address.road}, in {intPlace.address.suburb}</span>}
        </div>
        <button onClick={() => setShowmore(!showmore)}>
          Readmore about the place
        </button>
        {showmore && <p>{intPlace.wikipedia_extracts.text}</p>}
      </div>
    </div>
  );
}
