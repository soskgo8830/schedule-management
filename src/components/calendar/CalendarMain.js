import React, { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import { get } from '../../api/index';

const CalendarMain = () => {
  const headerToolbar = {
    left: 'prev,next today',
    center: 'title',
    right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek',
  };

  const [calendarList, setCalendarList] = useState([]);

  useEffect(() => {
    getCalendarList();
  }, []);

  const getCalendarList = async () => {
    try {
      const response = await get(`schedules`);
      setCalendarList(response);
    } catch (error) {
      console.error('데이터 가져오는 중 오류 발생:', error);
    }
  };

  return (
    <div style={{ width: '100%', color: '#2f3249' }} className='padding-lg'>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, listPlugin]}
        initialView={'dayGridMonth'}
        weekends={true}
        eventContent={renderEventContent}
        headerToolbar={headerToolbar} // 커스텀 헤더 설정
        events={calendarList}
      />
    </div>
  );
};

function renderEventContent(eventInfo) {
  return (
    <>
      <div>{eventInfo.event.title}</div>
    </>
  );
}

export default CalendarMain;
