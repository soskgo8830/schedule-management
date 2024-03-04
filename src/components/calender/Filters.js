import React, { useState, useEffect } from 'react';
import { get } from '../../api/index';

import Checkbox from '../common/CheckBox';

const Filters = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await get(`categorys`);
        setCategories(response);
      } catch (error) {
        console.error('데이터 가져오는 중 오류 발생:', error);
      }
    };

    fetchData();
  }, []);

  const onCheckboxChange = (values) => {
    console.log(values);
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
