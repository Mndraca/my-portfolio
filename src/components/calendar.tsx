import React, { useEffect } from "react";

const BookingCalendar: React.FC = () => {
  useEffect(() => {
    // Create and append the link tag for the CSS
    const link = document.createElement("link");
    link.href = "https://assets.calendly.com/assets/external/widget.css";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    // Create and append the script tag for the JavaScript
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.head.appendChild(script);

    // Cleanup the added elements on component unmount
    return () => {
      document.head.removeChild(link);
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div>
      <div
        dangerouslySetInnerHTML={{
          __html: `<a href="" style="color: red;"  onclick="Calendly.initPopupWidget({url: 'https://calendly.com/marizanovic3/30min'});return false;">Schedule your meeting here.</a>`,
        }}
      />
    </div>
  );
};

export default BookingCalendar;
