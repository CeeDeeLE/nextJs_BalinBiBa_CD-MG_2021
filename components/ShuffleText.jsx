// Teil der Fun-Stuff-Seite
// https://www.zitate-und-sprichwoerter.com/konfuzius

import { useEffect, useState } from 'react';
import { useDebouncedValue } from '../hooks/useDebouncedValue';

// liest den schon geshuffelten Text der shuffletext.js aus dem api-Verzeichnis aus
export default function ShuffleText() {
  // zum Einlesen des Textes von der Seite und Ausgeben des geshuffelten Textes
  const [text, setText] = useState('');
  const debouncedText = useDebouncedValue(text, 300);

  const [shuffledText, setShuffledText] = useState('');

  useEffect(() => {
    // fetch-Dings
    async function fetchShuffledText() {
      try {
        const response = await fetch(`/api/shuffletext?text=${debouncedText}`);

        // wenn fetch-Anfrage fehlschlägt
        if (!response.ok) {
          throw new Error('Problem aufgetreten!');
        }

        // holt den geshuffelten Text in apiText ab
        const apiText = await response.json();
        setShuffledText(apiText.text);
        console.log('fetched Text: ' + apiText.text);

        // falls try nicht geklappt hat
      } catch (error) {
        console.log('Fehler');
      }
    }
    // Aufruf fetch-Dings
    fetchShuffledText();
  }, [debouncedText]);

  const quote = `Lernen, ohne zu denken, ist verlorene Mühe. Denken, ohne etwas gelernt zu haben, ist gefährlich. Hoffe nicht auf Zukünftiges, denke über Vergangenes nach. Wer das Morgen nicht bedenkt, wird Kummer haben, bevor das Heute zu Ende ist.`;

  // Ausgabe
  return (
    <div className="shuffler">
      <h3>Textvorschlag: </h3>
      {quote}
      <p>&nbsp;</p>
      <h2>Texteingabe: &nbsp;</h2>
      <p>
        <input
          id="text"
          value={text}
          // defaultValue={quote}
          onChange={(e) => setText(e.target.value)}
        />
      </p>
      {shuffledText && (
        <strong className="shuffled-text">
          {/* animiert -> entfernt leider alle Leerzeichen */}
          {/* {[...shuffledText].map((char, index) => (
          <span
            key={Math.random()}
            style={{
              '--delay': `${(index * 0.2).toFixed(2)}s`,
            }}
          >
            {char}
          </span>
        ))} */}
          {/* nicht animiert */}
          {shuffledText}
        </strong>
      )}
      {shuffledText && (
        <strong className="shuffled-text-color">
          {/* nicht animiert */}
          {shuffledText}
        </strong>
      )}
      <button
        className="new-shuffle"
        type="reset"
        onClick={(e) => setText(e.target.value)}
      >
        Neuer Text
      </button>
    </div>
  );
}
