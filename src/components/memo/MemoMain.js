import React from 'react';
import { Button, Empty, Flex, Collapse } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
const { Panel } = Collapse;

const MemoMain = ({ memoDetailData, handleDeleteMemo }) => {
  const handleEdit = (editItem, event) => {
    event.stopPropagation();
  };

  const handleDelete = (deleteId, event) => {
    event.stopPropagation();
    handleDeleteMemo(deleteId);
  };

  const renderHeader = (item) => (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <span>{item.title}</span>
      <div>
        <Button
          style={{
            color: '#2f3249',
            border: '1px solid #adb0cb',
            marginRight: '5px',
          }}
          icon={<EditOutlined></EditOutlined>}
          onClick={(e) => handleEdit(item, e)}
        ></Button>
        <Button
          style={{
            color: '#ea5456',
            border: '1px solid #adb0cb',
          }}
          icon={<DeleteOutlined></DeleteOutlined>}
          onClick={(e) => handleDelete(item.id, e)}
        ></Button>
      </div>
    </div>
  );

  return (
    <div
      style={{
        height: 'calc(85vh - 70px)', // 전체 높이에서 상단 padding과 헤더 높이를 뺀 높이로 설정
        overflow: 'auto',
        padding: '10px',
      }}
    >
      {memoDetailData.length !== 0 ? (
        <Collapse defaultActiveKey={[memoDetailData[0].id]}>
          {memoDetailData.map((item, index) => (
            <Panel header={renderHeader(item)} key={item.id}>
              <div dangerouslySetInnerHTML={{ __html: item.content }} />
            </Panel>
          ))}
        </Collapse>
      ) : (
        <Flex
          style={{ width: '100%', height: '100%' }}
          justify={'center'}
          align={'center'}
        >
          <Empty></Empty>
        </Flex>
      )}
    </div>
  );
};

export default MemoMain;
