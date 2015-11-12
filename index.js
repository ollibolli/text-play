"use strict";

var $ = require("jquery");
var _ = require("lodash");
var Soundfont = require('soundfont-player');
var analyzeHarmony = require("./analyzeHarmony");
var ctx = new AudioContext();
var soundfont = new Soundfont(ctx);
var toneMapper = require("./tone-mapper");
var tempoMultiplier = 0.2;



if (window.location.href.match("textplay=true")) {
  var newsValue = $("[data-svd-newsvalue]").data("svd-newsvalue");
  tempoMultiplier = (parseInt(newsValue, 10) /1000) + 0.1;
  console.log(newsValue);
  var theText = $("article header div.ContentLayout-mainColumn").text();
  theText += $("article div.ContentLayout.ContentLayout--article.ContentLayout--article--main div.Body").text();
  var words = theText.split(/\s+/);
  var mainInstrument = $(".Page-section").hasClass("theme-Business") ? "synth_strings_1" : "electric_grand_piano";

  var inst1 = global.instrument = soundfont.instrument(mainInstrument);
  var inst2 = global.instrument = soundfont.instrument(mainInstrument);
  var inst3 = global.instrument = soundfont.instrument('taiko_drum');
  var inst4 = global.instrument = soundfont.instrument('tinkle_bell');
  var inst5 = global.instrument = soundfont.instrument("synth_bass_2");
  var melodyNotes = [];
  var beatNotes = [];
  var basNotes = [];

  soundfont.onready(function() {
    melodyNotes = processMelody(words);
    beatNotes = processBeat(words);
    basNotes = processBas(words);

    melodyNotes.forEach(function(note) {
      note.inst1[0] ? inst1.play.apply(inst1.play, note.inst1) : null;
      note.inst2[0] ? inst2.play.apply(inst2.play, note.inst2) : null;
    });

    beatNotes.forEach(function(note) {
      if (note.inst1 && note.inst1[0]){
        inst3.play.apply(inst3.play, note.inst1);
      } else if (note.inst2 && note.inst2[0]){
        inst4.play.apply(inst4.play, note.inst2);
      }
    });

    basNotes.forEach(function(note) {
     inst5.play.apply(inst5.play, note.inst1);
    })
  });
}

function processBas(words) {
  var time = ctx.currentTime;
  var ticks = 0;
  var last = 0;
  var melodyTones = [];
  return words.reduce(function(result, word, index) {
    word = word.toLowerCase();
    ticks += wordLengthParser(word);
    melodyTones.push([toneMapper[word[0]], toneMapper[word[1]]]);
    while(ticks > last) {
      result.push({
        inst1: [analyzeHarmony(melodyTones), time + (last * tempoMultiplier), 3]
      });
      melodyTones = [];
      last += 8;
    }
    return result;
  }, []);
}

function processMelody(words) {
  var time = ctx.currentTime;
  var ticks = 0;
  return words.map(function(word) {
    word = word.toLowerCase();
    ticks += wordLengthParser(word);
    return {
      inst1: [toneMapper[word[0]], time + (ticks * tempoMultiplier), 0.7],
      inst2: [toneMapper[word[1]], time + (ticks * tempoMultiplier), 0.7]
    }
  });
}


function processBeat(words) {
  var notes = [];
  var length = words.reduce(function(sum, word, i) {
    return sum + parseInt(wordLengthParser(word), 10);
  }, 0);
  var time = ctx.currentTime;
  for (var index = 0 ; index < (length/2); index++){
    if ( index % 4 === 0 ) {
      console.log("BEAT NOTE PUSH");
      notes.push({
        inst1:["G3", time + (index * tempoMultiplier * 2),0.3]
      });
    }
    if ( index % 2 === 0 ) {
      console.log("BEAT NOTE PUSH 2");
      notes.push({
        inst2: ["G6", time + (index * tempoMultiplier * 2), 0.3]
      });
    }
  }
  return notes;
}

function wordLengthParser(word) {
  switch (word.length){
    case 1 :
      return 1;
      break;
    case 2 :
    case 3 :
      return 1;
      break;
    case 4 :
    case 5 :
      return 2;
      break;
    case 6 :
    case 7 :
      return 4;
      break;
    case 6 :
    case 7 :
      return 4;
      break;
    default :
      return 6;

  }
}
