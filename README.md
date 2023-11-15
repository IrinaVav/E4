# E4

Здравствуйте, подскажите, пожалуйста как объеденить эту часть в одну функцию.

Electrodevices.prototype.connectOff = function() {
    this.socked = true;
    console.log(`${this.name} выключен из розетки.`)
};

Electrodevices.prototype.connectOn = function() {
    this.socked = false;
    console.log(`${this.name} включен в розетку.`);
};

Чтобы было: (У меня в таком случае не работает, и всегда выдает, что не включен). Возможно я ее не так вызываю, не понимаю куда вписывать true и false.
Electrodevices.prototype.connect = function() {
  if(this.socked == true) {
    console.log(`${this.name} выключен из розетки.`)
    } else {
    console.log(`${this.name} включен в розетку.`)
  }
