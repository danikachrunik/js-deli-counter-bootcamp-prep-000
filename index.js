function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.indexOf(name) + 1} in line.`;
}

function nowServing(katzDeliLine) {
  if(katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    let next = katzDeliLine[0];
    katzDeliLine.shift();
    return `Currently serving ${next}.`;
  }
}

function currentLin(katzDeliLine) {
  
}