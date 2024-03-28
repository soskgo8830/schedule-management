import React, { useState } from 'react';
import {
  Form,
  Input,
  Modal,
  Button,
  DatePicker,
  Select,
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
  const [form] = Form.useForm();

  const [addCalendarData, setAddCalendarData] = useState({
    title: '',
    start: '',
    end: '',
    categoryId: '',
    contents: '',
    checkList: [],
  });

  const handleCancel = async () => {
    form.resetFields();
    setAddCalendarData({
      title: '',
      start: '',
      end: '',
      categoryId: '',
      contents: '',
      checkList: [],
    });
    setIsModalOpen(false);
  };

  const onFinish = async () => {
    handleAddCalendarFinish(addCalendarData);
    form.resetFields();
    setAddCalendarData({
      title: '',
      start: '',
      end: '',
      categoryId: '',
      contents: '',
      checkList: [],
    });
  };

  const onValuesChange = (changedValues, allValues) => {
    const { title, contents, categorys, rangeDate, checkList } = allValues;
    const startRangeDate = rangeDate ? moment(rangeDate[0].$d) : '';
    const endRangeDate = rangeDate ? moment(rangeDate[1].$d) : '';

    const newData = {
      title: title || '',
      start: startRangeDate ? startRangeDate.format('YYYY-MM-DD HH:mm:ss') : '',
      end: endRangeDate ? endRangeDate.format('YYYY-MM-DD HH:mm:ss') : '',
      categoryId: categorys || '',
      contents: contents || '',
      checkList: checkList || [],
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
        form={form}
        name='addCalendar'
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

        <div className='form-input-header'>Check List</div>
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
                  <Form.Item
                    name={[field.name, 'checkCategory']}
                    rules={[
                      {
                        required: true,
                        message: 'Please input Check Category.',
                      },
                    ]}
                  >
                    <Input placeholder='Check Category' />
                  </Form.Item>

                  <Form.Item>
                    <Form.List name={[field.name, 'item']}>
                      {(subFields, subOpt) => (
                        <div
                          style={{
                            display: 'flex',
                            flexDirection: 'column',
                            rowGap: 16,
                          }}
                        >
                          {subFields.map((subField) => (
                            <div
                              key={subField.key}
                              style={{ display: 'flex', alignItems: 'center' }}
                            >
                              <Form.Item
                                noStyle
                                name={[subField.name, 'isCheck']}
                                valuePropName='checked'
                                initialValue={false}
                              >
                                <Checkbox
                                  style={{ marginRight: 10 }}
                                ></Checkbox>
                              </Form.Item>
                              <Form.Item
                                noStyle
                                name={[subField.name, 'item']}
                                style={{ flex: 1 }}
                              >
                                <Input
                                  placeholder='item'
                                  style={{ marginRight: 10 }}
                                />
                              </Form.Item>
                              <CloseOutlined
                                onClick={() => {
                                  subOpt.remove(subField.name);
                                }}
                              />
                            </div>
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
