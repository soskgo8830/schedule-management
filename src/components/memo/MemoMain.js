import React, { useState } from 'react';
import { Button, Empty, Flex, Pagination } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

const MemoMain = ({ memoData }) => {
  const [memoDetails, setMemoDetails] = useState([]);

  const onAddDetailMemo = () => {};

  return (
    <div>
      <div
        style={{
          height: 'calc(85vh - 100px)', // 전체 높이에서 상단 padding과 헤더 높이를 뺀 높이로 설정
          overflow: 'auto',
          padding: '15px',
        }}
      >
        {memoDetails.length !== 0 ? (
          <div>
            <div></div>
            <Flex justify={'center'}>
              <Button
                style={{
                  backgroundColor: '#2f3249',
                  color: '#ffffff',
                  border: 0,
                }}
                icon={<PlusOutlined></PlusOutlined>}
                onClick={onAddDetailMemo}
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
                onClick={onAddDetailMemo}
              >
                Add Memo
              </Button>
            </Empty>
          </Flex>
        )}
      </div>
      <Flex justify={'center'}>
        <Pagination defaultCurrent={6} total={40} />
      </Flex>
    </div>
  );
};

export default MemoMain;
