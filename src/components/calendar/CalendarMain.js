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
  const searchObj = useSelector(({ calendar }) => calendar.searchObj);

  useEffect(() => {
    const filterCategoriesArray = calendarList.filter((obj) => {
      return changeCategoriesArray.includes(obj.categoryId);
    });

    const filterTitleArray = filterCategoriesArray.filter((obj) => {
      return obj.title.includes(searchObj.title);
    });

    if (searchObj.completion !== 'all') {
      const filterCompletion = filterTitleArray.filter((obj) => {
        return obj.completion === searchObj.completion;
      });
      setCalendarData(filterCompletion);
    } else {
      setCalendarData(filterTitleArray);
    }
  }, [calendarList, changeCategoriesArray, searchObj]);

  const handleEventClick = (calData) => {
    const { id, title, start, end } = calData.event;
    const { completion, categoryId, contents, checkList } =
      calData.event._def.extendedProps;

    let initData = {
      id: id || null,
      title: title || '',
      completion: completion || '',
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
        height={'80vh'}
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
          fontSize: '0.8rem',
          color: 'white',
        }}
      >
        {startDate === endDate ? (
          <div
            style={{
              background: backgroundColor,
              padding: 2,
              borderRadius: 3,
            }}
          >
            <div>{title}</div>
            <div>{moment(start).format('HH:mm:ss')}</div>
            <div>{moment(end).format('HH:mm:ss')}</div>
          </div>
        ) : (
          <div
            style={{
              background: backgroundColor,
              padding: 2,
              borderRadius: 3,
            }}
          >
            <div>{title}</div>
            <div>{moment(start).format('YYYY-MM-DD HH:mm:ss')}</div>
            <div>{moment(end).format('YYYY-MM-DD HH:mm:ss')}</div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CalendarMain;
