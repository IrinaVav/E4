class Electrodevices{
  constructor(name) {
  this.name = name;
  this.socked = false
  }
  
  connectOff() {
    this.socked = true;
    console.log(`${this.name} выключен из розетки.`)
  };
  
  connectOn() {
    this.socked = false;
    console.log(`${this.name} включен в розетку.`)
  };
  
  power(voltage, amperage) {
   power = voltage * amperage;
   return (`Потребляемая мощность: ${power} вт.`)
 }; 
}

class Fridge extends Electrodevices{
  constructor(size, name, voltage, amperage) {
  super(name, voltage, amperage);
  this.size = size;
  this.freezer = 'С морозильной камерой'
  }
  
  defrosting(defrost) {
    if(defrost === 'да') {
      console.log('Чтобы разморозить холодильник, достаньте прибор из розетки.')
    } else {
      console.log('Разморозка не требуется.')
    }
  }
};

class Telephone extends Electrodevices{
  constructor(company, color, name, voltage, amperage) {
  super(name, voltage, amperage);
  this.type = 'Смартфон';
  this.company = company;
  this.color = color
  }
  charge(percent) {
    if(percent >= 40) {
      return('Зарядка не требуется')
    } else {
      return('Поставьте телефон на зарядку')
    }
  }
};


const fridge_01 = new Electrodevices ('Холодильник')
const fridge_02 = new Fridge ('Маленький', 'Холодильник')

const phone_01 = new Electrodevices('Телефон')
const phone_02 = new Telephone('Apple', 'White', 'Телефон')

// console.log(fridge_01)
// console.log(fridge_02)

// fridge_01.connectOn()
// fridge_02.connectOff()

// console.log(fridge_01.power(220, 8))
// console.log(fridge_02.power(220, 8))

// fridge_02.defrosting('да')
// fridge_02.defrosting('нет')

// console.log(phone_01)
// console.log(phone_02)

// phone_01.connectOn()
// phone_02.connectOff()

// console.log(phone_01.power(220, 2))
// console.log(phone_02.power(220, 1))

// console.log(phone_02.charge(50))
// console.log(phone_02.charge(33))