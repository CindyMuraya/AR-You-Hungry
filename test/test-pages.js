const assert = require('chai').assert;
const Restaurant = require('../models/Restaurant');

describe('Restaurant Model', () => {
    it('should create a new restaurant', (done) => {
        const restaurant = new Restaurant({
            name: 'Test Restaurant',
            location: 'Test Location',
            cuisine: 'Test Cuisine',
            rating: 'Test Rating',
            tables: 10,
            image: 'test.jpg'
        });
        restaurant.save().then(() => {
            assert(!restaurant.isNew);
            done();
        });
    });
});
