function takeANumber(katzDeliLine, name) {
  if(katzDeliLine.length === 0) {
    return `Welcome, ${name}. You are number 1 in line.`;
  } else {
    return `Welcome, ${name}. You are number ${katzDeliLine.indexOf(name) + 1} in line.`;
  }
}