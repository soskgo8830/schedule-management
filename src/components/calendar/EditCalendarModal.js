import React, { useState, useEffect } from 'react';
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
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
const { RangePicker } = DatePicker;
const { Option } = Select;

const EditCalendarModal = ({
  isModalOpen,
  setIsModalOpen,
  handleEditCalendarFinish,
  handleDeleteCalendarFinish,
  categories,
  initEditData,
}) => {
  const [form] = Form.useForm();
  const [editCalendarData, setEditCalendarData] = useState({});

  const completionOption = [
    { id: 'incomplete', name: 'Incomplete' },
    { id: 'partiallyCompleted', name: 'PartiallyComplete' },
    { id: 'complete', name: 'Complete' },
  ];

  useEffect(() => {
    form.setFieldsValue({
      title: initEditData.title,
      completion: initEditData.completion,
      rangeDate: [moment(initEditData.start), moment(initEditData.end)],
      contents: initEditData.contents,
      categorys: initEditData.categoryId,
      checkList: initEditData.checkList,
    });
  }, [form, initEditData]);

  const onDeleteCalendar = () => {
    handleDeleteCalendarFinish(initEditData.id);
  };

  const handleCancel = async () => {
    form.resetFields();
    setEditCalendarData({});
    setIsModalOpen(false);
  };

  const onFinish = async () => {
    form.resetFields();
    setEditCalendarData({});
    handleEditCalendarFinish(editCalendarData);
  };

  const onValuesChange = (changedValues, allValues) => {
    const { title, completion, contents, categorys, checkList } = allValues;
    const newData = {
      id: initEditData.id,
      title: title,
      completion: completion,
      start: moment(initEditData.start).format('YYYY-MM-DD HH:mm:ss'),
      end: moment(initEditData.end).format('YYYY-MM-DD HH:mm:ss'),
      categoryId: categorys,
      contents: contents,
      checkList: checkList,
    };
    setEditCalendarData(newData);
  };

  return (
    <Modal
      title='Edit Calendar'
      open={isModalOpen}
      onCancel={handleCancel}
      footer={null}
    >
      <Form
        form={form}
        name='editCalendar'
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

        <div className='form-input-header'>Completion</div>
        <Form.Item
          name='completion'
          rules={[
            {
              required: true,
              message: 'Please enter your completion.',
            },
          ]}
        >
          <Select style={{ width: '100%' }}>
            {completionOption.map((completionOption) => (
              <Option key={completionOption.id} value={completionOption.id}>
                {completionOption.name}
              </Option>
            ))}
          </Select>
        </Form.Item>

        <div className='form-input-header'>Range Date</div>
        <Form.Item name='rangeDate'>
          <RangePicker showTime style={{ width: '100%' }} disabled />
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
          <ReactQuill
            modules={{
              toolbar: [
                ['bold', 'italic', 'underline', 'strike'],
                ['blockquote', 'code-block', 'image'],
                [{ list: 'ordered' }, { list: 'bullet' }, { list: 'check' }],
                [{ script: 'sub' }, { script: 'super' }],
                [{ indent: '-1' }, { indent: '+1' }],
                [{ header: [1, 2, 3, 4, 5, 6, false] }],
                [{ color: [] }, { background: [] }],
                [{ font: [] }],
                [{ align: [] }],
              ],
            }}
          />
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
            style={{
              backgroundColor: '#2f3249',
              color: '#ffffff',
              border: 0,
            }}
          >
            Edit
          </Button>
          <Button
            onClick={onDeleteCalendar}
            style={{
              backgroundColor: '#ea5456',
              color: '#ffffff',
              border: 0,
              marginLeft: '0.5rem',
            }}
          >
            Delete
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default EditCalendarModal;
