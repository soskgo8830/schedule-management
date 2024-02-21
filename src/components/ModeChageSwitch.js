import React from 'react';
import { Switch } from 'antd';
import { SunOutlined, MoonOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';
import { changeMode } from '../store/modules/common';

const ModeChangeSwitch = () => {
  const isThemeMode = useSelector(({ common }) => common.isThemeMode);
  const dispatch = useDispatch();

  const onSwitchChangeMode = (checked) => {
    dispatch(changeMode());
  };

  return (
    <Switch
      checkedChildren={<SunOutlined />}
      unCheckedChildren={<MoonOutlined />}
      checked={!isThemeMode}
      onChange={onSwitchChangeMode}
      style={{ backgroundColor: isThemeMode ? '#7466f1' : '#25293d' }}
    />
  );
};

export default ModeChangeSwitch;
