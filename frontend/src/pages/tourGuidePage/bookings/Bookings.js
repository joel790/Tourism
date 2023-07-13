import React, { useState } from 'react';
import DataTable from 'react-data-table-component';
import './Booking.css';

const Bookings = () => {
  const [bookings, setBookings] = useState([
    { id: 1, customer: 'John Doe', status: 'Pending', bookingDate: '2023-07-15', bookingType: 'Tour', bookingPlace: 'Paris' },
    { id: 2, customer: 'Jane Smith', status: 'Confirmed', bookingDate: '2023-07-16', bookingType: 'Hotel', bookingPlace: 'London' },
    { id: 3, customer: 'Bob Johnson', status: 'Pending', bookingDate: '2023-07-17', bookingType: 'Tour', bookingPlace: 'Rome' },
    { id: 4, customer: 'John Doe', status: 'Pending', bookingDate: '2023-07-15', bookingType: 'Tour', bookingPlace: 'Paris' },
    { id: 5, customer: 'Jane Smith', status: 'Confirmed', bookingDate: '2023-07-16', bookingType: 'Hotel', bookingPlace: 'London' },
    { id: 6, customer: 'Bob Johnson', status: 'Pending', bookingDate: '2023-07-17', bookingType: 'Tour', bookingPlace: 'Rome' },
    { id: 7, customer: 'John Doe', status: 'Pending', bookingDate: '2023-07-15', bookingType: 'Tour', bookingPlace: 'Paris' },
    { id: 8, customer: 'Jane Smith', status: 'Confirmed', bookingDate: '2023-07-16', bookingType: 'Hotel', bookingPlace: 'London' },
    { id: 9, customer: 'Bob Johnson', status: 'Pending', bookingDate: '2023-07-17', bookingType: 'Tour', bookingPlace: 'Rome' },
    { id: 10, customer: 'John Doe', status: 'Pending', bookingDate: '2023-07-15', bookingType: 'Tour', bookingPlace: 'Paris' },
    { id: 11, customer: 'Jane Smith', status: 'Confirmed', bookingDate: '2023-07-16', bookingType: 'Hotel', bookingPlace: 'London' },
    { id: 12, customer: 'Bob Johnson', status: 'Pending', bookingDate: '2023-07-17', bookingType: 'Tour', bookingPlace: 'Rome' },
  ]);

  const updateBookingStatus = (id, newStatus) => {
    const updatedBookings = bookings.map((booking) =>
      booking.id === id ? { ...booking, status: newStatus } : booking
    );
    setBookings(updatedBookings);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Pending':
        return '#ffc107'; // Yellow
      case 'Confirmed':
        return '#28a745'; // Green
      case 'Cancelled':
        return '#dc3545'; // Red
      default:
        return '';
    }
  };

  const columns = [
    {
      name: 'Customer',
      selector: 'customer',
      sortable: true,
    },
    {
      name: 'Status',
      selector: 'status',
      sortable: true,
      cell: (row) => (
        <div style={{ color: getStatusColor(row.status) }}>{row.status}</div>
      ),
    },
    {
      name: 'Booking Date',
      selector: 'bookingDate',
      sortable: true,
    },
    {
      name: 'Booking Type',
      selector: 'bookingType',
      sortable: true,
    },
    {
      name: 'Booking Place',
      selector: 'bookingPlace',
      sortable: true,
    },
    {
      name: 'Actions',
      cell: (row) => (
        <select
          value={row.status}
          onChange={(e) => updateBookingStatus(row.id, e.target.value)}
        >
          <option value="Pending">Pending</option>
          <option value="Confirmed">Confirmed</option>
          <option value="Cancelled">Cancelled</option>
        </select>
      ),
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
    },
  ];

  return (
    <div className="bookings-container">
      <div className="bookings-header">
        <h2>Bookings</h2>
      </div>
      <DataTable
        columns={columns}
        data={bookings}
        pagination
        striped
        highlightOnHover
        responsive
      />
    </div>
  );
};

export default Bookings;
