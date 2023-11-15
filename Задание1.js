const city = {
  city: 'Moscow',
}

const user01 = Object.create(city)

user01.ownName = 'Anna';
user01.ownSurname = 'Ivanova';
user01.ownAge = 20;


function print(obj) {
  for(let key in obj) {
    if (obj.hasOwnProperty(key)) {
        console.log(`${key}: ${obj[key]}`)
     }
  }
}

console.log(user01)
print(user01)