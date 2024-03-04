import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';

const CheckboxWrapper = styled.div`
  font-size: 1rem;
  margin-top: 0.5rem;

  display: flex;
  align-items: center;

  [type='checkbox'] {
    width: 1.2rem;
    height: 1.2rem;
    appearance: none;
    border-radius: 5px;
    background-color: #ffffff;
    transition: background 300ms;
    cursor: pointer;

    &::before {
      content: '';
      color: transparent;
      display: block;
      width: inherit;
      height: inherit;
      border-radius: inherit;
      border: 0;
      background-color: transparent;
      background-size: contain;
      box-shadow: inset 0 0 0 1px #ccd3d8;
    }

    &:checked {
      background-color: ${(props) => props.color || '#7367ef'};
    }

    &:checked::before {
      box-shadow: none;
      background-image: url("data:image/svg+xml,%3Csvg   xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E %3Cpath d='M15.88 8.29L10 14.17l-1.88-1.88a.996.996 0 1 0-1.41 1.41l2.59 2.59c.39.39 1.02.39 1.41 0L17.3 9.7a.996.996 0 0 0 0-1.41c-.39-.39-1.03-.39-1.42 0z' fill='%23fff'/%3E %3C/svg%3E");
    }
  }

  label {
    cursor: pointer;
    padding-left: 0.5rem;
  }
`;

const Checkbox = ({
  className,
  checkBoxList,
  isAllCheck,
  initCheckAll,
  onCheckboxChange,
}) => {
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    if (initCheckAll) {
      const allIds = checkBoxList.map((category) => category.id);
      setSelected(allIds);
    }
  }, [initCheckAll, checkBoxList]);

  const memoizedHandleCheckboxChange = useCallback((checkId, checked) => {
    setSelected((prevSelected) => {
      if (checked) {
        return [...prevSelected, checkId];
      } else {
        return prevSelected.filter((id) => id !== checkId);
      }
    });
  }, []);

  useEffect(() => {
    onCheckboxChange(selected);
  }, [selected, onCheckboxChange]);

  const handleSelectAll = useCallback(
    (checked) => {
      if (checked) {
        const allIds = checkBoxList.map((category) => category.id);
        setSelected(allIds);
      } else {
        setSelected([]);
      }
    },
    [checkBoxList]
  );

  return (
    <div className={className}>
      {isAllCheck && (
        <CheckboxWrapper>
          <input
            type='checkbox'
            id='all'
            name='all'
            checked={selected.length === checkBoxList.length}
            onChange={(e) => handleSelectAll(e.target.checked)}
          />
          <label htmlFor='all'>View All</label>
        </CheckboxWrapper>
      )}
      {checkBoxList.map((list) => (
        <CheckboxWrapper key={list.id} color={list.color}>
          <input
            type='checkbox'
            id={list.id}
            name={list.id}
            checked={selected.includes(list.id)}
            onChange={(e) =>
              memoizedHandleCheckboxChange(list.id, e.target.checked)
            }
          />
          <label htmlFor={list.id}>{list.name}</label>
        </CheckboxWrapper>
      ))}
    </div>
  );
};

export default Checkbox;
