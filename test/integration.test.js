const chai = await import('chai');
const chaiHttp = await import('chai-http');
const mongoose = await import('mongoose');
const app = await import('../app'); // Assuming app is defined in app.js
const Reservation = await import('../models/Reservation'); // Assuming Reservation model is defined in models/reservation.js

chai.use(chaiHttp);
const expect = chai.expect;

describe('Integration Tests', () => {
    before(async () => {
        await mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true, useUnifiedTopology: true });
        await Reservation.deleteMany({});
    });

    after(async () => {
        await mongoose.disconnect();
    });

    describe('POST /api/reserve', () => {
        it('should add a new reservation to the database', async () => {
            const reservationData = {
                restaurantName: 'Test Restaurant',
                userName: 'Test User',
                reservationDate: '2024-05-27',
                reservationTime: '19:00',
                numberOfPeople: 4
            };

            await chai.request(app)
                .post('/api/reserve')
                .send(reservationData);

            const reservations = await Reservation.find({});
            expect(reservations).to.be.an('array');
            expect(reservations).to.have.lengthOf(1);
            expect(reservations[0]).to.include(reservationData);
        });
    });
});
