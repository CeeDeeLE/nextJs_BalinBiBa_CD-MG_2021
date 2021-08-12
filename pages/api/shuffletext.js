// Text-Shuffler -> mit Helfer !
import { replace, shuffle } from '../../library/helpers';

// s.a. https://www.npmjs.com/package/react-shuffle-text
export default function shuffleText(req, res) {
  console.log(req.query);

  let { text = ' ' } = req.query;
  console.log(text);

  let textArray;
  let wordArray;
  let shuffledText = '';
  let shuffled;

  if (text.includes(' ')) {
    text = replace(text, ',', ' , ');
    text = replace(text, '.', ' .');

    wordArray = text.split(' ');
  } else {
    textArray = text.split('');
  }

  if (wordArray) {
    for (let i = 0; i < wordArray.length; i++) {
      shuffled = shuffle(wordArray[i]).join('') + ' ';
      shuffledText = shuffledText + shuffled;
    }
  } else {
    shuffledText = shuffle(textArray).join('');
  }
  console.log(shuffledText);

  res.status(200).json({ text: shuffledText });
}
