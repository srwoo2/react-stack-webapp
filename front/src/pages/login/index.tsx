import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { CommonButton, CommonForm, CommonImage, CommonInput, CommonInputText } from '../../styles/common.style';
import { LoginLayout } from '../../styles/layout.style';
import { RouteLink, UserRole } from '../../utils/constants';
import { sampeople } from '../../utils/image.import';

const Login: React.FC = () => {
  const { login: authLogin, logout: authLogout } = useAuth();
  const navigate = useNavigate();
  const [userId, setUserId] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [msg, setMsg] = useState<string>('');

  React.useEffect(() => {
    // 로그인 페이지에 진입하면 기존 쿠키 및 인증 상태 초기화
    authLogout();
  }, [authLogout]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    if (id === 'userId') {
      setUserId(value);
    } else if (id === 'password') {
      setPassword(value);
    }
  };

  const login = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (userId && password) {
      const role = userId === 'admin' ? UserRole.ADMIN : UserRole.USER;
      const accessToken = 'abcdefg';

      authLogin(userId, role, accessToken);
      navigate(RouteLink.MAIN);
    } else {
      setMsg('아이디와 비밀번호를 확인하세요.');
    }
  };

  return (
    <LoginLayout>
      <Link to={RouteLink.MAIN}>
        <CommonImage src={sampeople} alt="logo" width={180} height={100} />
      </Link>

      <CommonForm onSubmit={login}>
        <CommonInput type="text" id="userId" value={userId} onChange={handleChange} placeholder="아이디" />
        <CommonInput type="password" id="password" value={password} onChange={handleChange} placeholder="비밀번호" />
        <CommonInputText>{msg}</CommonInputText>

        <CommonButton type="submit">로그인</CommonButton>
      </CommonForm>
    </LoginLayout>
  );
};

export default Login;
