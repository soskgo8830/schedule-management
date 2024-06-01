import React from 'react';
import { Form, Input, Modal, Button } from 'antd';
import moment from 'moment/moment';

const AddMemoModal = ({ isModalOpen, setIsModalOpen, handleAddMemoFinish }) => {
  const [form] = Form.useForm();

  const handleCancel = () => {
    form.resetFields();
    setIsModalOpen(false);
  };

  const onFinish = async (values) => {
    const { title } = values;
    const nowDt = moment(new Date());
    const memosData = {
      title: title || '',
      createDt: nowDt.format('YYYY-MM-DD HH:mm:ss'),
    };

    handleAddMemoFinish(memosData);
    form.resetFields();
  };

  return (
    <Modal
      title='Add Memo'
      open={isModalOpen}
      onCancel={handleCancel}
      footer={null}
    >
      <Form
        form={form}
        name='addMemo'
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

export default AddMemoModal;
