function Pessoa() {
  this.age = 0

  setInterval(() => {
    console.log(this.age++)
  }, 2000);
}

const p1 = new Pessoa()