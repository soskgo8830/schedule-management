import React from 'react';
import { Form, Input, Button, Flex, Select } from 'antd';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { changeSeach } from '../../store/modules/calendar';
import { SearchOutlined, ReloadOutlined } from '@ant-design/icons';
const { Option } = Select;

const SearchWrapper = styled.div`
  border-top: 2px solid #f0f0f0;
  border-bottom: 2px solid #f0f0f0;
  padding-top: 1rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
`;

const SearchCalendar = () => {
  const completionOption = [
    { id: 'all', name: 'All' },
    { id: 'incomplete', name: 'Incomplete' },
    { id: 'partiallyCompleted', name: 'PartiallyComplete' },
    { id: 'complete', name: 'Complete' },
  ];

  const dispatch = useDispatch();

  const onFinish = async (values) => {
    const { title, completion } = values;

    dispatch(
      changeSeach({
        title: title || '',
        completion: completion || 'all',
      })
    );
  };

  const resetSearch = async () => {
    form.resetFields();
    dispatch(
      changeSeach({
        title: '',
        completion: 'all',
      })
    );
  };

  const [form] = Form.useForm();

  return (
    <SearchWrapper>
      <h2>Search</h2>
      <Form
        form={form}
        name='basic'
        layout='vertical'
        onFinish={onFinish}
        autoComplete='off'
      >
        <div className='form-input-header'>Title</div>
        <Form.Item name='title'>
          <Input />
        </Form.Item>

        <div className='form-input-header'>Completion</div>
        <Form.Item
          name='completion'
          rules={[
            {
              required: false,
              message: 'Please enter your completion.',
            },
          ]}
        >
          <Select style={{ width: '100%' }} defaultValue={'all'}>
            {completionOption.map((completionOption) => (
              <Option key={completionOption.id} value={completionOption.id}>
                {completionOption.name}
              </Option>
            ))}
          </Select>
        </Form.Item>

        <Flex justify={'flex-end'}>
          <Form.Item>
            <Button
              icon={<SearchOutlined />}
              htmlType='submit'
              style={{
                backgroundColor: '#2f3249',
                color: '#ffffff',
                border: 0,
                marginRight: '0.5rem',
              }}
            ></Button>
            <Button
              icon={<ReloadOutlined />}
              onClick={resetSearch}
              style={{
                backgroundColor: '#2f3249',
                color: '#ffffff',
                border: 0,
              }}
            ></Button>
          </Form.Item>
        </Flex>
      </Form>
    </SearchWrapper>
  );
};

export default SearchCalendar;
