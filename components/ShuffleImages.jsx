// Image-Shuffler -> mit Helfer
import 'react-slideshow-image/dist/styles.css';
import BerlinImages from '@/library/berlinVerrueckt';
import { shuffleArray } from '../library/helpers';

// https://github.com/lodash-thailand/react-pixnode-shuffle-images/blob/master/example/index.js

// https://stackoverflow.com/questions/59510516/how-do-you-shuffle-a-table-of-images-every-second-on-the-click-of-a-button
// function shuffleImgArr(BerlinImages) {
//   const array = [...BerlinImages];
//   let interval;
//   handleStartShuffle = () => {
//     interval = setInterval(() => {
//       this.setState({ images: shuffle(this.state.images) });
//     }, 1000);
//   };
//   stopShuffle = () => {
//     if (interval) {
//       clearInterval(interval);
//     }
//   };
// }

// https://github.com/vercel/next.js/issues/10608
const shuffledList = shuffleArray(BerlinImages);

const index = () => {
  console.log(shuffledList);
  return (
    <div className="shuffle-img" style={{ display: 'flex', flexWrap: 'wrap' }}>
      {shuffledList.map((item) => (
        <>
          <div
            className="shuffle-img__img"
            key={item.id}
            style={{
              border: '.1rem solid black',
              margin: '1rem',
              textAlign: 'center',
            }}
          >
            <img src={item.src} alt={item.alt} title={item.alt} />
            <p>{item.alt}</p>
          </div>
        </>
      ))}
    </div>
  );
};

export default index;
