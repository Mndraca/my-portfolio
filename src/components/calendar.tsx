import React from "react";

const BookingCalendar: React.FC = () => {
  return (
    <div>
      <h2>Book a Meeting</h2>
      <div
        dangerouslySetInnerHTML={{
          __html: `<iframe src="https://calendly.com/marizanovic3/30min" width="100%" height="600" frameBorder="0" style="border:0; padding:0;"></iframe>`,
        }}
      />
    </div>
  );
};

export default BookingCalendar;
