import React, { useState } from 'react';
import { List, Input, Button, Dropdown, Menu } from 'antd';
import { MoreOutlined } from '@ant-design/icons';
const { TextArea } = Input;

const NotionPage = () => {
  const [data, setData] = useState([
    {
      key: '1',
      content: '1 row content',
    },
    {
      key: '2',
      content: '2 row content',
    },
    {
      key: '3',
      content: '3 row content',
    },
  ]);

  const handleDeleteClick = (key) => {
    setData(data.filter((item) => item.key !== key));
  };

  const handleInputChange = (e, key) => {
    const { value } = e.target;
    setData((prevData) =>
      prevData.map((item) =>
        item.key === key ? { ...item, content: value } : item
      )
    );
  };

  const menu = (key) => (
    <Menu>
      <Menu.Item onClick={() => handleDeleteClick(key)}>Delete</Menu.Item>
    </Menu>
  );

  return (
    <div
      style={{
        width: '100%',
        minHeight: '90vh',
        backgroundColor: 'white',
        borderRadius: '5px',
        padding: '1rem',
        boxShadow:
          'rgba(17, 17, 26, 0.1) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 48px',
      }}
    >
      <List
        dataSource={data}
        renderItem={(item) => (
          <List.Item key={item.key}>
            <Dropdown overlay={menu(item.key)}>
              <Button icon={<MoreOutlined />} />
            </Dropdown>
            <TextArea
              autoSize
              value={item.content}
              onChange={(e) => handleInputChange(e, item.key)}
              style={{
                marginLeft: '10px',
                border: 0,
              }}
            />
          </List.Item>
        )}
      />
    </div>
  );
};

export default NotionPage;
