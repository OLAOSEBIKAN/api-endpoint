const user = require('./users');
let Cars = [
    {
    id:1,
    owner:user[0].id,
    created_on:Date(),
    state:'Used',
    status:'Sold',
    price:'$ 1,200',
    manufacturer:'BMW',
    model:'SUV',
    body_type:'Car',
},
{
    id:2,
    owner:user[1].id,
    created_on:Date(),
    state:'New',
    status:'Available',
    price:'$ 1,200',
    manufacturer:'Nissan',
    model:'SUV',
    body_type:'Truck',
},
{
    id:3,
    owner:'Didi',
    created_on:Date(),
    state:'Used',
    status:'Sold',
    price:'$ 2,200',
    manufacturer:'Toyota',
    model:'Benz',
    body_type:'Trailer',
},
{
    id:4,
    owner:'Shady',
    created_on:Date(),
    state:'New',
    status:'Available',
    price:'$ 1,800',
    manufacturer:'Peugeot',
    model:'SUV',
    body_type:'Van',
}
]
module.exports = Cars;