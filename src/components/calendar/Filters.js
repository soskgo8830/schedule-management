import React from 'react';
import Checkbox from '../common/CheckBox';

const Filters = ({ categories }) => {
  const onCheckboxChange = (values) => {
    // console.log(values);
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
