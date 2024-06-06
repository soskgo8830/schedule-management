import React, { useState, useEffect } from 'react';
import { Input, Flex, Button } from 'antd';
import { update } from '../../api';
import { useDispatch } from 'react-redux';
import { changeMemoType } from '../../store/modules/memo';
import { PlusOutlined } from '@ant-design/icons';

const MemoTitle = ({ memoData, onAddMemoButtonClick }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');

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

  const handleClick = () => {
    onAddMemoButtonClick('add');
  };

  return (
    <div>
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
      </Flex>
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
  );
};

export default MemoTitle;
