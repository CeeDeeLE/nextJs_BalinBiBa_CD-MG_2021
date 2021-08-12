/* 
Datenquelle:  https://github.com/zauberware/postal-codes-json-xml-csv
zum Testen: localhost:3000/api/locations?search=10999
*/

// ############### Auslesen der zipcode.js-Dateien #############
// zipcode-datei nur für Berliner PLZ
const plzDataB = require('../../library/zipcodes.berlin.json');
console.log(plzDataB);
// zipcode-Datei für ganz Deutschland
const plzDataD = require('../../library/zipcodes.de.json');
// console.log(plzDataD);

// filtered den Suchbegriff aus der zipcode.xyz.js
// Aufruf mit fetch()
function zipcode(req, res) {
  const { search = '' } = req.query;
  const locations = search.length > 1 ? getPLZundBezirk(search) : [];
  res.status(200).json(locations);
}

// Aufruf mit getStaticProps()
function getPLZundBezirk(searchTerm) {
  /* 
  Datensatz filtern, zipcode ist ein String und kein Integer, da PLZ mit 0 beginnen können. 
  startsWith ist eine String-Methode, die prüft, ob ein String mit einem anderen String beginnt, 
  und entsprechend true oder false zurückgibt.
  */

  const regExp = new RegExp(searchTerm, 'i');
  let result = plzDataB.filter(
    ({ zipcode, district }) =>
      zipcode.startsWith(searchTerm) || regExp.test(district)
  );
  console.log(result);

  return result;
}

export default zipcode;
export { plzDataB, plzDataD, getPLZundBezirk };
