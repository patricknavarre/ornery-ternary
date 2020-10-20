// Your code below

function isItColin(str){
  return (str === 'Colin' ? 'Yes, that is Colin.' : 'No, that is not Colin.')
}

function isHot(temperature){
  return (temperature >= 80 ? 'Yes, it is indeed hot.' : 'No, it is not hot.')
}

function helloThere(name){
  return (name.length >= 6 ? 'Hi' + ', ' + name : 'Hello' + ', ' + name)
}

function goodbyeYou(name){
  return (name !== undefined ? 'Goodbye' + ', ' + name : 'Goodbye' + ', ' + 'stranger')
}

function darkAndStormyNight(time, rainFall){
  return (time === 'dark' && rainFall >= 0.5 ? 'It was a dark and stormy night.' : "My usual opening doesn't apply, I guess.")
}


// Our code below; do not touch!
if (typeof isItColin === 'undefined') {
  isItColin = undefined;
}

if (typeof isHot === 'undefined') {
  isHot = undefined;
}

if (typeof helloThere === 'undefined') {
  helloThere = undefined;
}

if (typeof goodbyeYou === 'undefined') {
  goodbyeYou = undefined;
}

if (typeof darkAndStormyNight === 'undefined') {
  darkAndStormyNight = undefined;
}

module.exports = {
  isItColin,
  isHot,
  helloThere,
  goodbyeYou,
  darkAndStormyNight,
}
