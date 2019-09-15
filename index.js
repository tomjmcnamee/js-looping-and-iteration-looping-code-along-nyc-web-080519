function writeCards(names_arr, event_name) {
  const new_arr = [];
  for (let i = 0; i < names_arr.length; i++){
    new_arr.push(`Thank you, ${names_arr[i]}, for the wonderful ${event_name} gift!`);
  }
  return new_arr;
}


function countdown(num) {
  while (num >= 0) {
    console.log(num);
    num--;
  }
}