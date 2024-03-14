import React from 'react';
import { Form, Input, Modal, Button } from 'antd';

const AddCalendarModal = ({
  isModalOpen,
  setIsModalOpen,
  handleAddCalendarFinish,
}) => {
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onFinish = async (values) => {};

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
