import React from 'react';
import { BookingEngine } from '../components/booking/BookingEngine';
import { useBooking } from '../hooks/useBooking';

export function BookingPage() {
  const bookingState = useBooking();

  return (
    <div className="page-booking" style={{ paddingTop: '40px' }}>
      <BookingEngine bookingState={bookingState} />
    </div>
  );
}
