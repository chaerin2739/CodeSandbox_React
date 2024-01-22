let person = {
    name: "유채린",
    age: 23,
    tall: 158
  };
  
  const personkey = Object.keys(person);
  for (let i = 0; i < personkey.length; i++) {
    const curKey = personkey[i];
    const curvalue = person[curKey];
  
    console.log(`${curKey} : ${curvalue}`);
  }
  