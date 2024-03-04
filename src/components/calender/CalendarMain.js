import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';

const CalendarMain = () => {
  const headerToolbar = {
    left: 'prev,next today',
    center: 'title',
    right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek',
  };

  return (
    <div style={{ width: '100%' }} className='padding-lg'>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, listPlugin]}
        initialView={'dayGridMonth'}
        weekends={true}
        eventContent={renderEventContent}
        headerToolbar={headerToolbar} // 커스텀 헤더 설정
        events={[
          {
            title: '이벤트1',
            date: '2024-03-01',
            start: '2024-03-01 12:11',
            end: '2024-03-04 14:24',
            backgroundColor: '#2f3249',
            borderColor: '#2f3249',
          },
          { title: '이벤트2', date: '2024-03-02' },
        ]}
      />
    </div>
  );
};

function renderEventContent(eventInfo) {
  return (
    <>
      <i>{eventInfo.event.title}</i>
    </>
  );
}

export default CalendarMain;
