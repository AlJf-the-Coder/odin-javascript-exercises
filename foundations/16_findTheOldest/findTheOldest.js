const findTheOldest = function(people) {
    const lastYearOfDeath = people.map(person => person.yearOfDeath).filter(year => !isNaN(year)).reduce((lastYr, yr) => Math.max(lastYr, yr));
    return people.reduce((oldest, person) => {
        const oldestAge = (oldest.yearOfDeath ?? lastYearOfDeath) - oldest.yearOfBirth;
        const personAge = (person.yearOfDeath ?? lastYearOfDeath) - person.yearOfBirth;
        console.log(oldest.name, oldestAge, person.name, personAge);
        return personAge > oldestAge ? person: oldest;
    })
};

// Do not edit below this line
module.exports = findTheOldest;
