import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import moment from 'moment/moment';

const CalendarMain = ({ categories, calendarList }) => {
  const headerToolbar = {
    left: 'prev,next today',
    center: 'title',
    right: 'dayGridMonth,listWeek',
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
        height={'90vh'}
      />
    </div>
  );
};

function renderEventContent(eventInfo) {
  const { event } = eventInfo;
  const { title, backgroundColor, start, end } = event;

  const startDate = moment(start).format('YYYY-MM-DD');
  const endDate = moment(end).format('YYYY-MM-DD');

  return (
    <>
      {startDate === endDate ? (
        <span className='today-dot' style={{ background: backgroundColor }} />
      ) : (
        <div></div>
      )}
      <div
        style={{
          fontSize: '0.9rem',
          margin: '0.3rem',
          minWidth: '10px',
        }}
      >
        {startDate === endDate ? (
          <div>
            <div>{title}</div>
            <div>{moment(start).format('HH:mm:ss')}</div>
            <div>{moment(end).format('HH:mm:ss')}</div>
          </div>
        ) : (
          <div>
            <div>{title}</div>
            <div>
              {moment(start).format('YYYY-MM-DD HH:mm:ss')} ~{' '}
              {moment(end).format('YYYY-MM-DD HH:mm:ss')}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default CalendarMain;
