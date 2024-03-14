import React from 'react';
import { Form, Input, Modal, Button, DatePicker, Select } from 'antd';
const { TextArea } = Input;
const { RangePicker } = DatePicker;
const { Option } = Select;

const AddCalendarModal = ({
  isModalOpen,
  setIsModalOpen,
  handleAddCalendarFinish,
}) => {
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onFinish = async (values) => {
    console.log(values);
  };

  function handleChange(value) {
    console.log(`Selected: ${value}`);
  }

  const categorys = [
    {
      id: 'ca1',
      name: 'Personal',
      color: '#ea5456',
    },
    {
      id: 'ca2',
      name: 'Business',
      color: '#fe9e41',
    },
    {
      id: 'ca3',
      name: 'Holiday',
      color: '#28c76f',
    },
    {
      id: 'ca4',
      name: 'ETC',
      color: '#11cee5',
    },
  ];

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

        <div className='form-input-header'>Date</div>
        <Form.Item
          name='date'
          rules={[
            {
              required: true,
              message: 'Please input Date.',
            },
          ]}
        >
          <DatePicker style={{ width: '100%' }} />
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
          <TextArea rows={6} />
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
          <Select style={{ width: '100%' }} onChange={handleChange}>
            {categorys.map((category) => (
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
              backgroundColor: '#7466f1',
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
