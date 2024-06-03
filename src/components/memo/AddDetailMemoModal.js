import React from 'react';
import { Form, Input, Modal, Button } from 'antd';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useState } from 'react';
import moment from 'moment/moment';

const AddDeTailMemoModal = ({
  isModalOpen,
  memoId,
  setIsModalOpen,
  handleAddDetailMemoFinish,
}) => {
  const [form] = Form.useForm();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleCancel = () => {
    form.resetFields();
    setIsModalOpen(false);
  };

  const onFinish = async (values) => {
    const nowDt = moment(new Date());
    const addMemoDetailData = {
      fKey: memoId,
      title: title,
      content: content,
      createDt: nowDt.format('YYYY-MM-DD HH:mm:ss'),
    };
    handleAddDetailMemoFinish(addMemoDetailData);
    form.resetFields();
  };

  const onValuesChange = (changedValues, allValues) => {
    const { title, content } = allValues;
    setTitle(title);
    setContent(content);
  };

  return (
    <Modal
      title='Add Detail Memo'
      open={isModalOpen}
      onCancel={handleCancel}
      footer={null}
    >
      <Form
        form={form}
        name='addDetailMemo'
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
            Add
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default AddDeTailMemoModal;
