import React from 'react';
import { Form, Input, Modal, Button } from 'antd';

const AddDeTailMemoModal = ({
  isModalOpen,
  setIsModalOpen,
  handleAddMemoFinish,
}) => {
  const [form] = Form.useForm();

  const handleCancel = () => {};

  const onFinish = async (values) => {};

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
