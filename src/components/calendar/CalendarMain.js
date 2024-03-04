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
    <div style={{ width: '100%', color: '#2f3249' }} className='padding-lg'>
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
            start: '2024-03-01',
            end: '2024-03-01',
            backgroundColor: '#fe9e41',
            borderColor: '#fe9e41',
            textColor: 'white',
          },
          {
            title: '이벤트2',
            date: '2024-03-01',
            start: '2024-03-01 02:11',
            end: '2024-03-04 17:24',
            status: 'done',
            backgroundColor: '#ea5456',
            borderColor: '#ea5456',
            textColor: 'white',
          },
        ]}
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
