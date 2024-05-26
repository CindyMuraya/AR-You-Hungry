const Reservation = require('../models/Reservation');

describe('Reservation', () => {
    let reservation;

    beforeEach(() => {
        reservation = new Reservation('John Doe', '2022-12-31', '18:00', 4);
    });

    it('should create a new reservation object', () => {
        expect(reservation).toBeInstanceOf(Reservation);
        expect(reservation.name).toBe('John Doe');
        expect(reservation.date).toBe('2022-12-31');
        expect(reservation.time).toBe('18:00');
        expect(reservation.partySize).toBe(4);
    });

    it('should return the correct reservation details', () => {
        const reservationDetails = reservation.getReservationDetails();
        expect(reservationDetails).toEqual({
            name: 'John Doe',
            date: '2022-12-31',
            time: '18:00',
            partySize: 4,
        });
    });

    it('should update the reservation details', () => {
        reservation.updateReservation('Jane Smith', '2023-01-01', '19:00', 6);
        expect(reservation.name).toBe('Jane Smith');
        expect(reservation.date).toBe('2023-01-01');
        expect(reservation.time).toBe('19:00');
        expect(reservation.partySize).toBe(6);
    });

    it('should cancel the reservation', () => {
        reservation.cancelReservation();
        expect(reservation.isCancelled).toBe(true);
    });
});