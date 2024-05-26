const chai = await import('chai');
const chaiHttp = await import('chai-http');
const mongoose = await import('mongoose');
const app = await import('../app'); // Assuming app is defined in app.js
const Reservation = await import('../models/Reservation'); // Assuming Reservation model is defined in models/reservation.js

chai.use(chaiHttp);
const expect = chai.expect;

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

    describe('POST /api/reserve', () => {
        it('should add a new reservation', async () => {
            const reservationData = {
                restaurantName: 'Test Restaurant',
                userName: 'Test User',
                reservationDate: '2024-05-27',
                reservationTime: '19:00',
                numberOfPeople: 4
            };

            const res = await chai.request(app)
                .post('/api/reserve')
                .send(reservationData);

            expect(res).to.have.status(201);
            expect(res.body).to.have.property('message').equal('Reservation successful');
        });
    });
});
