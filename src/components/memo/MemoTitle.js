import React, { useState, useEffect } from 'react';
import { Input, Button, Flex } from 'antd';
import { update } from '../../api';
import { useDispatch } from 'react-redux';
import { changeMemoType } from '../../store/modules/memo';
import { DeleteOutlined } from '@ant-design/icons';

const MemoTitle = ({ memoData }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');

  const onDeleteMemo = () => {
    dispatch(
      changeMemoType({
        changeType: 'deleteMemo',
      })
    );
  };

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
  );
};

export default MemoTitle;
