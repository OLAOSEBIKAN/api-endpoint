const car = require('./cars');
const Flags = [
    {
id: 1,
car_id: car[2].id,
created_on: Date(),
reason:'pricing',
description:"The cost of purchase is too much"
},
{
    id: 2,
    car_id: car[2].id,
    created_on: Date(),
    reason:'weird demands',
    description:"Demand is too weird"
    }
]
module.exports = Flags;