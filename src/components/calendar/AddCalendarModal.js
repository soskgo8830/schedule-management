import React, { useState } from 'react';
import {
  Form,
  Input,
  Modal,
  Button,
  DatePicker,
  Select,
  Space,
  Card,
  Checkbox,
} from 'antd';
import moment from 'moment/moment';
import { CloseOutlined } from '@ant-design/icons';
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

  const handleTaskToggle = (subField) => {
    console.log(subField);
    console.log('?');
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
        initialValues={{
          title: '',
          start: '',
          end: '',
          categoryId: null,
          contents: '',
        }}
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

        <div className='form-input-header'>checkList</div>
        <Form.List name='checkList'>
          {(fields, { add, remove }) => (
            <div
              style={{
                display: 'flex',
                rowGap: 16,
                flexDirection: 'column',
                marginBottom: '1rem',
              }}
            >
              {fields.map((field) => (
                <Card
                  size='small'
                  title={`Check List ${field.name + 1}`}
                  key={field.key}
                  extra={
                    <CloseOutlined
                      onClick={() => {
                        remove(field.name);
                      }}
                    />
                  }
                >
                  <Form.Item label='Name' name={[field.name, 'name']}>
                    <Input />
                  </Form.Item>

                  <Form.Item label='List'>
                    <Form.List name={[field.name, 'list']}>
                      {(subFields, subOpt) => (
                        <div
                          style={{
                            display: 'flex',
                            flexDirection: 'column',
                            rowGap: 16,
                          }}
                        >
                          {subFields.map((subField) => (
                            <Space key={subField.key}>
                              <Checkbox
                                checked={subField.completed}
                                onChange={() => handleTaskToggle(subField)}
                              >
                                {subField.text}
                              </Checkbox>
                              <Form.Item noStyle name={[subField.name, 'name']}>
                                <Input placeholder='first' />
                              </Form.Item>
                              <CloseOutlined
                                onClick={() => {
                                  subOpt.remove(subField.name);
                                }}
                              />
                            </Space>
                          ))}
                          <Button
                            type='dashed'
                            onClick={() => subOpt.add()}
                            block
                          >
                            + Add Sub Check item
                          </Button>
                        </div>
                      )}
                    </Form.List>
                  </Form.Item>
                </Card>
              ))}

              <Button type='dashed' onClick={() => add()} block>
                + Add Check List
              </Button>
            </div>
          )}
        </Form.List>

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
            Save
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default AddCalendarModal;
