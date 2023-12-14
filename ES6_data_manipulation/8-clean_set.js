export default function cleanSet(set, startString) {
  let result = '';

  if (startString.length === 0) {
    return '';
  }

  [...set].map((term) => {
    const pos = term.indexOf(startString);

    if (pos === 0) {
      // console.log(term.slice(startString.length));
      result += term.slice(startString.length) + '-';
    }
  });

  return result.slice(0, -1);
}
