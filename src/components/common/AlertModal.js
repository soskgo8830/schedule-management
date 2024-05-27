import { useEffect, useState } from 'react';
import { Modal } from 'antd';

const AlertModal = ({ visible, type, message, onClose }) => {
  const [modalInstance, setModalInstance] = useState(null); // 모달 인스턴스 상태

  useEffect(() => {
    let instance = null; // 모달 인스턴스 변수

    // 만약 모달이 보이는 상태
    if (visible) {
      const config = {
        title: type === 'success' ? 'Success' : 'Error',
        content: message,
        okButtonProps: { style: { display: 'none' } },
      };

      // 현재 모달 인스턴스가 없는 경우
      if (!modalInstance) {
        instance = Modal[type](config); // 새로운 모달을 생성
        setModalInstance(instance); // 모달 인스턴스 상태를 업데이트
      }
      // 현재 모달 인스턴스가 있는 경우
      else {
        modalInstance.update(config); // 기존 모달을 업데이트
      }

      const timer = setTimeout(() => {
        // 모달 인스턴스가 존재한다면
        if (modalInstance) {
          modalInstance.destroy(); // 모달을 닫기
          setModalInstance(null); // 모달 인스턴스 상태를 초기화
          onClose(); // 부모 컴포넌트에 모달이 닫혔음 전달
        }
      }, 1000);

      // 컴포넌트가 사라질 때 타이머를 정리하여 메모리 누수를 방지
      return () => {
        clearTimeout(timer);
      };
    }
    // 모달이 보이지 않는 상태라면
    else {
      // 모달 인스턴스가 존재한다면
      if (modalInstance) {
        modalInstance.destroy(); // 모달을 닫기
        setModalInstance(null); // 모달 인스턴스 상태를 초기화
      }
    }
  }, [visible, type, message, onClose, modalInstance]);

  return null;
};

export default AlertModal;
