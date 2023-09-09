export default function taskBlock(trueOrFalse) {
  var task = false;
  var task2 = true;

  if (trueOrFalse) {
    (function() {
      var task = true;
      var task2 = false;
      // Here, task and task2 are different variables than the ones outside this function
    })();
  }

  return [task, task2];
}
