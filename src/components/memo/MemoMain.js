import React from 'react';
import { Flex } from 'antd';

const MemoMain = ({ memoData }) => {
  return (
    <div
      style={{
        width: '100%',
        height: '85vh',
        backgroundColor: 'white',
        borderRadius: '5px',
        boxShadow:
          'rgba(17, 17, 26, 0.1) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 48px',
      }}
    >
      <Flex
        justify={'space-between'}
        style={{
          paddingLeft: 10,
          paddingRight: 10,
          backgroundColor: '#2f3249',
          borderTopLeftRadius: '5px',
          borderTopRightRadius: '5px',
          color: 'white',
        }}
      >
        <h2>{memoData.title}</h2>
      </Flex>
      <div
        style={{
          height: 'calc(85vh - 70px)', // 전체 높이에서 상단 padding과 헤더 높이를 뺀 높이로 설정
          overflow: 'auto',
          padding: '15px',
        }}
      >
        메인 내용들
      </div>
    </div>
  );
};

export default MemoMain;
