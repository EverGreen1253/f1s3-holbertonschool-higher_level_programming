export default function getListStudentIds(list) {
  const results = [];

  if (list instanceof Array) {
    for (const item of list) {
      results.push(item.id);
    }
  }

  return results;
}
