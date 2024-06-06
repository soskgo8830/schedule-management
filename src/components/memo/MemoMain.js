import React from 'react';
import { Button, Empty, Flex, Collapse } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
const { Panel } = Collapse;

const MemoMain = ({ memoDetailData, onAddMemoButtonClick }) => {
  const handleClick = () => {
    onAddMemoButtonClick('add');
  };

  const onChange = (key) => {
    console.log(key);
  };

  return (
    <div>
      <div
        style={{
          height: 'calc(85vh - 70px)', // 전체 높이에서 상단 padding과 헤더 높이를 뺀 높이로 설정
          overflow: 'auto',
          padding: '10px',
        }}
      >
        {memoDetailData.length !== 0 ? (
          <div>
            <Collapse
              defaultActiveKey={[memoDetailData[0].id]}
              onChange={onChange}
            >
              {memoDetailData.map((item, index) => (
                <Panel header={item.title} key={item.id}>
                  <div dangerouslySetInnerHTML={{ __html: item.content }} />
                </Panel>
              ))}
            </Collapse>

            <Flex justify={'center'}>
              <Button
                style={{
                  backgroundColor: '#2f3249',
                  color: '#ffffff',
                  border: 0,
                  margin: '10px',
                }}
                icon={<PlusOutlined></PlusOutlined>}
                onClick={handleClick}
              >
                Add Memo
              </Button>
            </Flex>
          </div>
        ) : (
          <Flex
            style={{ width: '100%', height: '100%' }}
            justify={'center'}
            align={'center'}
          >
            <Empty>
              <Button
                style={{
                  backgroundColor: '#2f3249',
                  color: '#ffffff',
                  border: 0,
                  margin: '10px',
                }}
                icon={<PlusOutlined></PlusOutlined>}
                onClick={handleClick}
              >
                Add Memo
              </Button>
            </Empty>
          </Flex>
        )}
      </div>
    </div>
  );
};

export default MemoMain;
