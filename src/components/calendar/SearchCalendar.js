import React from 'react';
import { Form, Input, Button, Flex } from 'antd';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { changeSeach } from '../../store/modules/calendar';
import { SearchOutlined, ReloadOutlined } from '@ant-design/icons';

const SearchWrapper = styled.div`
  border-top: 2px solid #f0f0f0;
  border-bottom: 2px solid #f0f0f0;
  padding-top: 1rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
`;

const SearchCalendar = () => {
  const dispatch = useDispatch();

  const onFinish = async (values) => {
    const { title } = values;

    dispatch(
      changeSeach({
        title: title || '',
      })
    );
  };

  const resetSearch = async () => {
    form.resetFields();
    dispatch(
      changeSeach({
        title: '',
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
