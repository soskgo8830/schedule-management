import React, { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import moment from 'moment/moment';
import { useSelector } from 'react-redux';

const CalendarMain = ({ calendarList, onEditButtonClick, onInitEditData }) => {
  const headerToolbar = {
    left: 'prev,next today',
    center: 'title',
    right: 'dayGridMonth,listWeek',
  };

  const [calendarData, setCalendarData] = useState([]);

  const changeCategoriesArray = useSelector(
    ({ calendar }) => calendar.changeCategoriesArray
  );

  useEffect(() => {
    const filteredEvents = calendarList.filter((event) =>
      changeCategoriesArray.includes(event.categoryId)
    );
    setCalendarData(filteredEvents);
  }, [calendarList, changeCategoriesArray]);

  const handleEventClick = (calData) => {
    const { id, title, start, end } = calData.event;
    const { categoryId, contents, checkList } =
      calData.event._def.extendedProps;

    let initData = {
      id: id || null,
      title: title || '',
      start: start || '',
      end: end || '',
      categoryId: categoryId || '',
      contents: contents || '',
      checkList: checkList || [],
    };

    onEditButtonClick('edit');
    onInitEditData(initData);
  };

  return (
    <div style={{ width: '100%', color: '#2f3249' }} className='padding-lg'>
      <FullCalendar
        locale={'ko'}
        plugins={[dayGridPlugin, timeGridPlugin, listPlugin]}
        initialView={'dayGridMonth'}
        weekends={true}
        eventContent={renderEventContent}
        headerToolbar={headerToolbar}
        events={calendarData}
        height={'90vh'}
        eventClick={(calData) => handleEventClick(calData)}
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
    <div>
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
    </div>
  );
}

export default CalendarMain;
