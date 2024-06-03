import React, { useState, useEffect } from 'react';
import { Button, Empty, Flex, Pagination } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

const MemoMain = ({ memoDetailData, onAddMemoButtonClick }) => {
  const handleClick = () => {
    onAddMemoButtonClick('add');
  };

  const [totalCnt, setTotalCnt] = useState(0);

  useEffect(() => {
    setTotalCnt(memoDetailData.length);
  }, [memoDetailData]);

  return (
    <div>
      <div
        style={{
          height: 'calc(85vh - 100px)', // 전체 높이에서 상단 padding과 헤더 높이를 뺀 높이로 설정
          overflow: 'auto',
          padding: '15px',
        }}
      >
        {memoDetailData.length !== 0 ? (
          <div>
            {memoDetailData.map((list) => (
              <div
                style={{
                  color: 'black',
                  marginBottom: 30,
                  padding: 15,
                  borderRadius: '5px  ',
                  border: '1px solid #2f3249',
                }}
              >
                <div>{list.title}</div>
                <div dangerouslySetInnerHTML={{ __html: list.content }} />
              </div>
            ))}
            <Flex justify={'center'}>
              <Button
                style={{
                  backgroundColor: '#2f3249',
                  color: '#ffffff',
                  border: 0,
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
      <Flex justify={'center'}>
        <Pagination defaultCurrent={6} total={totalCnt} />
      </Flex>
    </div>
  );
};

export default MemoMain;
