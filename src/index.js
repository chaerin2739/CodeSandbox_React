let person = {
    name: "유채린",
    age: 23,
    say: function () {
      console.log(`안녕 나는 ${this.name}이야`);
    }
  };
  //person.say();
  console.log(`name : ${"name" in person}`);