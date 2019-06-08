const car = require('./cars');
const user = require('./users');

const Order = [{
id : 1,
buyer: user[0].id,
car_id: car[0].id,
amount: 5200,
status: 'pending' ,
created_on: Date(),  
price_offered: 'xxxxxx',
},
{
    id : 2,
    buyer: user[1].id,
    car_id: car[2].id,
    amount: 2100,
    status: 'accepted',
    created_on: Date(),  
    price_offered: "xxxx", 
    },
    {
        id : 3,
        buyer: user[0].id,
        car_id: car[3].id,
        amount: 1700,
        status: 'rejected',
        created_on: Date(),  
        price_offered: 'xxxxxx', 
        }
]

module.exports = Order;
