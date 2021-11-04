// 場地訂購確認
import "bootstrap/dist/css/bootstrap.min.css";
import "../../css/booking_check.css";
import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function BookingCheck() {
  const [value, setValue] = useState(new Date());
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      {/* 場地訂購 */}
      <h2 className="text-center">場地訂購</h2>
      <div className="titleLineBox">
        <img alt="" className="titleLine" src="img/index/line.png" />
      </div>

      <div className="siteCheck">
        {/* 場地租借日曆 */}
        <div className="calendarCheck">
          <Calendar onChange={setValue} value={value} />
        </div>
        {/* 場地租借照片 */}
        {/* <div className="siteImg">
          <Slider {...settings}>
            <div>
              <img alt="" className="" src="img/booking/siteIndex-3.jpg" />
            </div>
            <div>
              <img alt="" className="" src="img/booking/siteIndex-4.jpg" />
            </div>
          </Slider>
        </div> */}
        <button className="btn siteBookCheck" href="/#">
          前往訂購
        </button>
      </div>

      {/* 訂購確認 */}
      <h2 className="text-center">訂購確認</h2>
      <div className="titleLineBox">
        <img alt="" className="titleLine" src="img/index/line.png" />
      </div>
      <div className></div>
    </>
  );
}

export default BookingCheck;
