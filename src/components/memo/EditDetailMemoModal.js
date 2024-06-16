import React from 'react';
import { Form, Input, Modal, Button } from 'antd';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useState, useEffect } from 'react';
import moment from 'moment/moment';

const EditDetailMemoModal = ({
  isModalOpen,
  initEditData,
  setIsModalOpen,
  handleEditDetailMemoFinish,
}) => {
  const [form] = Form.useForm();
  const [editDetailMemoData, setEditDetailMemoData] = useState({});

  useEffect(() => {
    form.setFieldsValue({
      title: initEditData.title,
      content: initEditData.content,
    });
  }, [form, initEditData]);

  const handleCancel = () => {
    form.resetFields();
    setEditDetailMemoData({});
    setIsModalOpen(false);
  };

  const onFinish = async () => {
    form.resetFields();
    setEditDetailMemoData({});
    handleEditDetailMemoFinish(editDetailMemoData);
  };

  const onValuesChange = (changedValues, allValues) => {
    const { title, content } = allValues;
    const updateDt = new Date();
    const newData = {
      id: initEditData.id,
      fKey: initEditData.fKey,
      title: title,
      content: content,
      createDt: moment(updateDt).format('YYYY-MM-DD HH:mm:ss'),
    };
    setEditDetailMemoData(newData);
  };

  return (
    <Modal
      title='Edit Detail Memo'
      open={isModalOpen}
      onCancel={handleCancel}
      footer={null}
    >
      <Form
        form={form}
        name='editDetailMemo'
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

        <div className='form-input-header'>Contents</div>
        <Form.Item
          name='content'
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
            Edit
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default EditDetailMemoModal;
