import React, { useState, useEffect, useCallback } from 'react';
import CalendarMain from '../components/calendar/CalendarMain';
import AddCalendarButton from '../components/calendar/AddCalendarButton';
import Filters from '../components/calendar/Filters';
import SearchCalendar from '../components/calendar/SearchCalendar';
import AddCalendarModal from '../components/calendar/AddCalendarModal';
import EditCalendarModal from '../components/calendar/EditCalendarModal';
import { get, post, remove, update } from '../api/index';
import { Flex } from 'antd';

const CalendarPage = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [initEditData, setInitEditData] = useState({});
  const [categories, setCategories] = useState([]);
  const [calendarList, setCalendarList] = useState([]);

  const fetchData = useCallback(async () => {
    try {
      const [categoryResponse, calendarResponse] = await Promise.all([
        get('categorys'),
        get(`schedules`),
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
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const openModal = useCallback((status) => {
    if (status === 'add') {
      setIsAddModalOpen(true);
    } else if (status === 'edit') {
      setIsEditModalOpen(true);
    }
  }, []);

  const onInitEditData = useCallback((data) => {
    setInitEditData(data);
  }, []);

  const handleAddCalendarFinish = useCallback(
    async (addCalendarData) => {
      try {
        await post('schedules', addCalendarData);
        fetchData();
        setIsAddModalOpen(false);
      } catch (error) {
        console.error('Error adding schedules:', error);
      }
    },
    [fetchData]
  );

  const handleEditCalendarFinish = useCallback(
    async (editCalendarData) => {
      try {
        await update('schedules', editCalendarData.id, editCalendarData);
        fetchData();
        setIsEditModalOpen(false);
      } catch (error) {
        console.error('Error editing schedules:', error);
      }
    },
    [fetchData]
  );

  const handleDeleteCalendarFinish = useCallback(
    async (deletCalendarId) => {
      try {
        await remove('schedules', deletCalendarId);
        fetchData();
        setIsEditModalOpen(false);
      } catch (error) {
        console.error('Error delete schedules:', error);
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
      <CalendarMain
        calendarList={calendarList}
        onEditButtonClick={openModal}
        onInitEditData={onInitEditData}
      />
      <AddCalendarModal
        isModalOpen={isAddModalOpen}
        setIsModalOpen={setIsAddModalOpen}
        handleAddCalendarFinish={handleAddCalendarFinish}
        categories={categories}
      />
      <EditCalendarModal
        isModalOpen={isEditModalOpen}
        setIsModalOpen={setIsEditModalOpen}
        handleEditCalendarFinish={handleEditCalendarFinish}
        handleDeleteCalendarFinish={handleDeleteCalendarFinish}
        categories={categories}
        initEditData={initEditData}
      ></EditCalendarModal>
    </Flex>
  );
};

export default CalendarPage;
