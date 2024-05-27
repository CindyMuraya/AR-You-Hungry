const chai = require('./test.config.js');
const mongoose = require('mongoose');
const app = require('../app'); 
const Reservation = require('../models/Reservation');

const expect = chai.expect;

(async () => {
    describe('Backend API Tests', () => {
        // Before running tests, connect to MongoDB and clear the reservations collection
        before(async () => {
            await mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true, useUnifiedTopology: true });
            await Reservation.deleteMany({});
        });

        // After tests, disconnect from MongoDB
        after(async () => {
            await mongoose.disconnect();
        });

        describe('POST /api/reservation', () => {
            it('should add a new reservation', async () => {
                const reservationData = {
                    restaurantName: 'Test Restaurant',
                    userName: 'Test User',
                    reservationDate: '2024-05-27',
                    reservationTime: '19:00',
                    numberOfPeople: 4
                };

                const res = await chai.request(app)
                    .post('/api/reservation')
                    .send(reservationData);

                expect(res).to.have.status(201);
                expect(res.body).to.have.property('message').equal('Reservation successful');
            });
        });
    });
})();
