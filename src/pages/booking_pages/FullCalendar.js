import React, { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import timeGridPlugin from "@fullcalendar/timegrid";
import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/timegrid/main.css";
import "@fullcalendar/common/main.css";
import "@fullcalendar/core/locales-all.js";
import axios from "axios";
import { API_URL } from "../../configs/config";

function Calendar(prop) {
  // 讀取資料庫
  const [bookingContent, setbookingContent] = useState([]);

  useEffect(async () => {
    let bookingContent = await axios.post(`${API_URL}/booking`);
    //${API_URL}/booking = http://localhost:3001/api/booking
    setbookingContent(bookingContent.data);
  }, []);

  // 日曆套件
  // 轉換JSON至FullCalendar
  bookingContent &&
    bookingContent
      .filter((match) => !match.repeatExecute)
      .forEach((item) => {
        if (item.room === "fourRoom") {
          item.room = "四人房";
        } else if (item.room === "sixRoom") {
          item.room = "六人房";
        }

        // console.log(item.endTime);
        item.title = item.room + "已滿";
        item.start = item.startTime;
        item.end = item.endTime;
      });
  return (
    <FullCalendar
      defaultView="dayGridMonth"
      plugins={[dayGridPlugin, timeGridPlugin]} // 載入外掛
      locale="zh-tw"
      navLinks={true}
      headerToolbar={{
        left: "prev,next today",
        center: "title",
        right: "dayGridMonth,timeGridWeek,timeGridDay",
      }}
      buttonText={{
        today: "今天",
        month: "月",
        week: "周",
        day: "天",
      }}
      allDayText="全天"
      slotLabelFormat={{
        hour: "2-digit",
        minute: "2-digit",
        meridiem: false,
        hour12: false,
      }}
      eventSources={[bookingContent]}
      displayEventEnd
      eventTimeFormat={{
        hour: "2-digit",
        minute: "2-digit",
        meridiem: false,
        hour12: false,
      }}
    />
  );
}
export default Calendar;
