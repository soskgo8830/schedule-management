import React from 'react';
import Checkbox from '../common/CheckBox';
import { changeCategories } from '../../store/modules/calendar';
import { useDispatch } from 'react-redux';

const Filters = ({ categories }) => {
  const dispatch = useDispatch();

  const onCheckboxChange = (values) => {
    dispatch(changeCategories(values));
  };

  return (
    <div className='padding-lg'>
      <h2>Categories</h2>
      <Checkbox
        className='category-checkbox'
        checkBoxList={categories}
        isAllCheck={true}
        initCheckAll={true}
        onCheckboxChange={onCheckboxChange}
      ></Checkbox>
    </div>
  );
};

export default Filters;
