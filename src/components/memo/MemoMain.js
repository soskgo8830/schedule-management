import React, { useState, useEffect } from 'react';
import { Input, Button, Empty } from 'antd';
import { DeleteOutlined, PlusOutlined } from '@ant-design/icons';
import { Flex, Pagination } from 'antd';
import { update } from '../../api';
import { useDispatch } from 'react-redux';
import { changeMemoType } from '../../store/modules/memo';

const MemoMain = ({ memoData }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [memoDetails, setMemoDetails] = useState([]);

  const onDeleteMemo = () => {
    dispatch(
      changeMemoType({
        changeType: 'deleteMemo',
      })
    );
  };

  const onAddDetailMemo = () => {};

  useEffect(() => {
    setTitle(memoData.title);
  }, [memoData]);

  useEffect(() => {
    const delayDebounceFn = setTimeout(async () => {
      try {
        await update('memos', memoData.id, {
          title: title,
          createDt: memoData.createDt,
        });
        dispatch(
          changeMemoType({
            changeType: 'updateMemoTitle',
            title: title,
          })
        );
      } catch (error) {
        console.log(error);
      }
    }, 1000);

    return () => clearTimeout(delayDebounceFn);
  }, [dispatch, memoData.createDt, memoData.id, title]);

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
          padding: 10,
          borderTopLeftRadius: '5px',
          borderTopRightRadius: '5px',
        }}
      >
        <Input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          count={{
            show: true,
            max: 20,
          }}
        />
        <Button
          style={{
            backgroundColor: '#ea5456',
            color: '#ffffff',
            border: 0,
            marginLeft: '0.5rem',
          }}
          icon={<DeleteOutlined />}
          onClick={onDeleteMemo}
        />
      </Flex>
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
