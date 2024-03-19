import React, { useState } from 'react';
import { Form, Input, Modal, Button, DatePicker, Select } from 'antd';
import moment from 'moment/moment';
const { TextArea } = Input;
const { RangePicker } = DatePicker;
const { Option } = Select;

const AddCalendarModal = ({
  isModalOpen,
  setIsModalOpen,
  handleAddCalendarFinish,
  categories,
}) => {
  const [addCalendarData, setAddCalendarData] = useState({
    title: '',
    start: '',
    end: '',
    categoryId: '',
    contents: '',
  });

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onFinish = async () => {
    handleAddCalendarFinish(addCalendarData);
  };

  const onValuesChange = (changedValues, allValues) => {
    const { title, contents, categorys, rangeDate } = allValues;
    const startRangeDate = rangeDate ? moment(rangeDate[0].$d) : '';
    const endRangeDate = rangeDate ? moment(rangeDate[1].$d) : '';

    const newData = {
      title: title || '',
      start: startRangeDate ? startRangeDate.format('YYYY-MM-DD HH:mm:ss') : '',
      end: endRangeDate ? endRangeDate.format('YYYY-MM-DD HH:mm:ss') : '',
      categoryId: categorys || '',
      contents: contents || '',
    };

    setAddCalendarData(newData);
  };

  return (
    <Modal
      title='Add Calendar'
      open={isModalOpen}
      onCancel={handleCancel}
      footer={null}
    >
      <Form
        name='basic'
        layout='vertical'
        onFinish={onFinish}
        autoComplete='off'
        onValuesChange={onValuesChange}
      >
        <div className='form-input-header'>Title</div>
        <Form.Item
          name='title'
          rules={[
            {
              required: true,
              message: 'Please enter your title.',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <div className='form-input-header'>Range Date</div>
        <Form.Item
          name='rangeDate'
          rules={[
            {
              required: true,
              message: 'Please input Range Date.',
            },
          ]}
        >
          <RangePicker showTime style={{ width: '100%' }} />
        </Form.Item>

        <div className='form-input-header'>Contents</div>
        <Form.Item
          name='contents'
          rules={[
            {
              required: true,
              message: 'Please enter your contents.',
            },
          ]}
        >
          <TextArea rows={10} />
        </Form.Item>

        <div className='form-input-header'>categorys</div>
        <Form.Item
          name='categorys'
          rules={[
            {
              required: true,
              message: 'Please enter your categorys.',
            },
          ]}
        >
          <Select style={{ width: '100%' }}>
            {categories.map((category) => (
              <Option
                key={category.id}
                value={category.id}
                style={{ color: category.color }}
              >
                {category.name}
              </Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item>
          <Button
            htmlType='submit'
            block
            style={{
              backgroundColor: '#2f3249',
              color: '#ffffff',
              border: 0,
            }}
          >
            Add
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default AddCalendarModal;
