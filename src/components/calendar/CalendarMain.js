import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';

const CalendarMain = ({ categories, calendarList }) => {
  const headerToolbar = {
    left: 'prev,next today',
    center: 'title',
    right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek',
  };

  return (
    <div style={{ width: '100%', color: '#2f3249' }} className='padding-lg'>
      <FullCalendar
        locale={'ko'}
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
