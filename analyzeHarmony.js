var _ = require("lodash");

function analyze(tones) {
  chords = {
    C : ["C","E","G"],
    D : ["D","F","A"],
    E : ["E","G","B"],
    F : ["F","A","C"],
    G : ["G","B","D"],
    A : ["A","C","E"],
    B : ["B","D","F"]
  };


  var harmony = _(tones)
    .flatten()
    .compact()
    .uniq()
    .map(function(value) { return value[0]})
    .value();

  if (_.isEmpty(harmony)){
    return "C2";
  }

  var match = _(chords).map(function(chord, key) {
    return {key: key , match :intersectArrays(chord, harmony).length};
  })
    .sortBy("match")
    .last()
    .key;

  return match+ "2";
}


function intersectArrays(a, b) {
  var sorted_a = a.concat().sort();
  var sorted_b = b.concat().sort();
  var common = [];
  var a_i = 0;
  var b_i = 0;

  while (a_i < a.length
    && b_i < b.length)
  {
    if (sorted_a[a_i] === sorted_b[b_i]) {
      common.push(sorted_a[a_i]);
      a_i++;
      b_i++;
    }
    else if(sorted_a[a_i] < sorted_b[b_i]) {
      a_i++;
    }
    else {
      b_i++;
    }
  }
  return common;
}

module.exports = analyze;
