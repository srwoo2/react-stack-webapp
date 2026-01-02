import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CommonButton } from '../../styles/common.style';
import { RouteLink } from '../../utils/constants';

const Forbidden: React.FC = () => {
  const navigate = useNavigate();

  const goMain = () => {
    navigate(RouteLink.MAIN);
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '60vh',
        textAlign: 'center',
      }}
    >
      <h1 style={{ fontSize: '4rem', margin: '0', color: '#ffcc00' }}>403</h1>
      <h2 style={{ fontSize: '1.5rem', margin: '20px 0' }}>접근 권한이 없습니다.</h2>
      <p style={{ color: '#666', marginBottom: '30px' }}>
        이 페이지에 접근할 수 있는 권한이 없습니다.
        <br />
        관리자에게 문의하시거나 권한이 있는 계정으로 로그인해 주세요.
      </p>
      <CommonButton onClick={goMain} style={{ width: '200px' }}>
        메인으로 돌아가기
      </CommonButton>
    </div>
  );
};

export default Forbidden;
