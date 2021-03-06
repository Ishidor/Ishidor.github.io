const data = require('./data')

function entryCalculator(entrants = 0) {
  // seu código aqui
  let price = 0
  const { Adult = 0, Child = 0, Senior = 0 } = entrants

  if (Object.keys(entrants).length !== 0) {
    price = Adult * data.prices.Adult
    price += Child * data.prices.Child
    price += Senior * data.prices.Senior
  }
  return price
};

function schedule(dayName) {
  // seu código aqui
  const days = dayName ? [dayName] : Object.keys(data.hours);
  return days.reduce((acc, day) => {
    const { open, close } = data.hours[day];
    const text = day === 'Monday'
      ? 'CLOSED'
      : `Open from ${open}am until ${close - 12}pm`
    acc[day] = text;
    return acc;
  }, {});
};

function animalCount(species = 0) {
  // seu código aqui
  const allAnimals = data.animals
  const obj = {}
  const checkSpecies = (animal, animalSpecies) => animal.name === animalSpecies
  const filterFunction = (animalsFiltered, otherSpecies) => animalsFiltered.filter(
    animal => checkSpecies(animal, otherSpecies))
  if (species === 0) {
    Object.keys(allAnimals).forEach((key) => {
      obj[data.animals[key].name] = data.animals[key].residents.length
    })
  } else {
    return filterFunction(data.animals, species)[0].residents.length
  }
  return obj
};

function primeiroAssert() {
  return data.animals.reduce((arr, cur) => {
    if (arr[cur.location] === undefined) {
      arr[cur.location] = [];
    }
    arr[cur.location] = [...arr[cur.location], cur.name]
    return arr;
  }, {})
}

function segundoAssert(sort) {
  if (sort) {
    return data.animals.reduce((acc, cur) => {
      if (acc[cur.location] === undefined) {
        acc[cur.location] = [];
      }
      acc[cur.location] = [...acc[cur.location], {
        [cur.name]: cur.residents.map(el =>
          el.name).sort()
      }]
      return acc;
    }, {})
  }
  return data.animals.reduce((acc, cur) => {
    if (acc[cur.location] === undefined) {
      acc[cur.location] = [];
    }
    acc[cur.location] = [...acc[cur.location], {
      [cur.name]: cur.residents.map(el =>
        el.name)
    }]
    return acc;
  }, {})
}

function terceiroAssert(value) {
  return data.animals.reduce((acc, cur) => {
    if (acc[cur.location] === undefined) {
      acc[cur.location] = [];
    }
    acc[cur.location] = [...acc[cur.location], {
      [cur.name]: cur.residents.filter(el =>
        el.sex === value).map(ele => ele.name)
    }]
    return acc;
  }, {})
}

function animalMap(options) {
  // seu código aqui
  if (!options || !options.includeNames) return primeiroAssert();
  if (options.sorted) return segundoAssert(options.sorted);
  else if (options.sex) return terceiroAssert(options.sex);
  return segundoAssert(options.sorted);
};

function animalPopularity(rating) {
  // seu código aqui - Não precisa
};

function animalsByIds(...ids) {
  // seu código aqui
  const array = [];
  const aniField = data.animals;
  if (ids) {
    ids.map(id => array.push(aniField.find(x => x.id === id)))
  }
  return array
};

function animalByName(animalName) {
  // seu código aqui - Não precisa
};

function employeesByIds(ids) {
  // seu código aqui - Não precisa
};

function employeeByName(employeeName) {
  // seu código aqui
  let worker = {}
  if (employeeName) {
    worker = data.employees.find(x => x.firstName === employeeName || x.lastName === employeeName)
  }
  return worker
};

function managersForEmployee(idOrName) {
  // seu código aqui - Não precisa
};

function employeeCoverage(idOrName) {
  // seu código aqui
  const worker = data.employees
  const obj = {}
  if (!idOrName) {
    Object.keys(worker).forEach((key) => {
      obj[`${worker[key].firstName} ${worker[key].lastName}`] = worker[key].responsibleFor.map(who =>
        data.animals.find(animal => animal.id === who).name)
    })
  } else {
    const workerId = worker.find(workerX => workerX.id === idOrName ||
      workerX.firstName === idOrName || workerX.lastName === idOrName)
    obj[`${workerId.firstName} ${workerId.lastName}`] = workerId.responsibleFor.map(wId =>
      data.animals.find(animal => animal.id === wId).name)
  }
  return obj
};

function addEmployee(...param) {
  // seu código aqui
  const allWorkers = [...data.employees]
  const newEmployee = ([id, firstName, lastName, managers = [], responsibleFor = []]) =>
    ({ id, firstName, lastName, managers, responsibleFor })
  data.employees = [...allWorkers, newEmployee(param)]
}

function isManager(id) {
  // seu código aqui
  const worker = data.employees
  return worker.some(x => x.managers.some(y => y === id))
}

function animalsOlderThan(animal, age) {
  // seu código aqui
  return data.animals.find(x => x.name === animal).residents.every(x => x.age >= age)
}

function oldestFromFirstSpecies(id) {
  // seu código aqui
  const worker = data.employees.find(x => x.id === id)
  const firstAnimal = data.animals.find(y => y.id === worker.responsibleFor[0])
  .residents.map(z => z)
  const allAges = firstAnimal.map(z => z.age)
  const oldestAnimal = Math.max(...allAges)
  const foundMofo = firstAnimal.find(animal => animal.age === oldestAnimal)
  return [foundMofo.name, foundMofo.sex, foundMofo.age]
}

function increasePrices(percentage) {
  // seu código aqui
  Object.keys(data.prices).forEach((key) => {
    data.prices[key] = Math.round((data.prices[key] +
      (data.prices[key] * (percentage / 100))) * 100) / 100
  })
  return data.prices
}

class Animal {
  // seu código aqui
  constructor(name, age, sex, species) {
    this.name = name
    this.age = age
    this.sex = sex
    this.species = species.slice(0, -1)
  }
  info() {
    const { name, age, sex, species } = this
    return `${name} is a ${age} year old ${sex} ${species}`
  }
  static totalAnimals() {
    return data.animals.reduce((count, animal) => count + animal.residents.length, 0)
  }
}

function createAnimals() {
  // seu código aqui
  const animals = []
  data.animals.forEach(animal => (
    animal.residents.forEach(({ name, age, sex }) => (
      animals.push(new Animal(name, age, sex, animal.name))
    ))
  ))
  return animals
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  return { ...personalInfo, ...associatedWith }
}

module.exports = {
  entryCalculator: entryCalculator,
  schedule: schedule,
  animalCount: animalCount,
  animalMap: animalMap,
  animalPopularity: animalPopularity,
  animalsByIds: animalsByIds,
  animalByName: animalByName,
  employeesByIds: employeesByIds,
  employeeByName: employeeByName,
  managersForEmployee: managersForEmployee,
  employeeCoverage: employeeCoverage,
  addEmployee: addEmployee,
  isManager: isManager,
  animalsOlderThan: animalsOlderThan,
  oldestFromFirstSpecies: oldestFromFirstSpecies,
  increasePrices: increasePrices,
  createAnimals: createAnimals,
  Animal: Animal,
  createEmployee: createEmployee
}
