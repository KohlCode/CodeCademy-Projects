let raceNumber = Math.floor(Math.random() * 1000);

let earlyRegister = false; 
let runnerAge = 18;

(runnerAge > 18 && earlyRegister === true) ? raceNumber += 1000 : raceNumber

if (runnerAge > 18 && earlyRegister === true){
  console.log(`Race starts at 9:30. Your race number is: ${raceNumber}`)
}else if (runnerAge > 18 && earlyRegister !== true){
  console.log(`Late adults run at 11:00 am.  Your race number is ${raceNumber}`)
} else if(runnerAge < 18){
  console.log(`Youth registrants run at 12:30 pm (regardless of registration). Your race number is: ${raceNumber}`)
} else {
  console.log('See registration desk')
}v
