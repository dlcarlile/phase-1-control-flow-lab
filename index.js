function scuberGreetingForFeet(feet){
  let result
  if (feet > 0,feet <=399) {
    result = feet
  return 'This one is on me!'
  }
  if (feet >= 400,feet <= 2000) {
    result = feet
  return 'That will be twenty bucks.'
  }
  if (feet > 2000,feet <=2499){
  result = feet
  return `I will gladly take your thirty bucks.` 
  }
  if (feet > 2500){
    result = feet
    return `No can do.`
  }
}
  
  function ternaryCheckCity(city){
    let result
    if (city == "NYC") {
      result = city
      return `Ok, sounds good.`
    } 
    else (city !== "NYC"); {
      result = city
      return `No go.`
    }
  
}

function switchOnCharmFromTip(tip){
  let result 
  switch (tip){
    case 'generous':
      return "Thank you so much."
    break; 
      case 'not as generous':
      return "Thank you."
      break;
      default:
        return "Bye."
    }
    
}