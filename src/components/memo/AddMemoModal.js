import React from 'react';
import { Form, Input, Modal, Button } from 'antd';
import { post } from '../../api/index';

const AddMemoModal = ({ isModalOpen, setIsModalOpen, handleAddMemoFinish }) => {
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onFinish = async (values) => {
    const { title } = values;

    try {
      await post('memos', {
        title,
        createDt: new Date(),
        contents: '',
        sortNumber: 0,
        subMemos: [],
      });

      setIsModalOpen(false);
      handleAddMemoFinish(true);
    } catch (error) {
      console.error('Error adding user:', error);
    }
  };

  return (
    <Modal
      title='Add Memo'
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
        <div className='form-input-header'>Memo Title</div>
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

export default AddMemoModal;
