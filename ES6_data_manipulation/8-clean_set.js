export default function cleanSet(set, startString) {
  if (startString.length === 0) {
    return '';
  }

  const result = [];
  for (const term of [...set]) {
    const pos = term.indexOf(startString);

    if (pos === 0) {
      result.push(term.slice(startString.length));
    }
  }

  return result.join('-');
}
