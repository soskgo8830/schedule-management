import React, { useState, useEffect, useCallback } from 'react';
import CalendarMain from '../components/calendar/CalendarMain';
import AddCalendarButton from '../components/calendar/AddCalendarButton';
import Filters from '../components/calendar/Filters';
import SearchCalendar from '../components/calendar/SearchCalendar';
import AddCalendarModal from '../components/calendar/AddCalendarModal';
import { get, post } from '../api/index';
import { Flex } from 'antd';
import { useSelector } from 'react-redux';

const CalendarPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const [calendarList, setCalendarList] = useState([]);
  const searchObj = useSelector(({ calendar }) => calendar.searchObj);

  const fetchData = useCallback(async () => {
    try {
      const [categoryResponse, calendarResponse] = await Promise.all([
        get('categorys'),
        get(`schedules?title=${searchObj.title}`),
      ]);

      const categoryMap = categoryResponse.reduce((map, category) => {
        map[category.id] = category;
        return map;
      }, {});

      const addColorCalendarList = calendarResponse.map((list) => {
        const category = categoryMap[list.categoryId];
        if (category) {
          return {
            ...list,
            backgroundColor: category.color,
            borderColor: category.color,
          };
        } else {
          return {
            ...list,
            backgroundColor: '#7367ef',
            borderColor: '#7367ef',
          };
        }
      });

      setCategories(categoryResponse);
      setCalendarList(addColorCalendarList);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }, [searchObj]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const openModal = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const handleAddCalendarFinish = useCallback(
    async (addCalendarData) => {
      try {
        await post('schedules', addCalendarData);
        fetchData();
        setIsModalOpen(false);
      } catch (error) {
        console.error('Error adding schedules:', error);
      }
    },
    [fetchData]
  );

  return (
    <Flex
      justify='space-between'
      style={{
        width: '100%',
        backgroundColor: 'white',
        borderRadius: '5px',
        boxShadow:
          'rgba(17, 17, 26, 0.1) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 48px',
      }}
    >
      <div style={{ minWidth: '25%', borderRight: '2px solid #f0f0f0' }}>
        <Flex vertical>
          <div>
            <AddCalendarButton onAddButtonClick={openModal} />
          </div>
          <div>
            <SearchCalendar></SearchCalendar>
          </div>
          <div>
            <Filters categories={categories} />
          </div>
        </Flex>
      </div>
      <CalendarMain categories={categories} calendarList={calendarList} />
      <AddCalendarModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        handleAddCalendarFinish={handleAddCalendarFinish}
        categories={categories}
      />
    </Flex>
  );
};

export default CalendarPage;
