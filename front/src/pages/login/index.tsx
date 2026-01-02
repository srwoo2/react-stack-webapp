import React, { useState } from 'react';
import { CommonButton, CommonForm, CommonInput } from '../../styles/common.style';
import { CookieKey, UserRole, WordKey } from '../../utils/constants';
import { setCookie } from '../../utils/cookie';

const Login: React.FC = () => {
  const [userId, setUserId] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [msg, setMsg] = useState<string>('');

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

      setCookie(CookieKey.ACCESS_TOKEN, accessToken, 1);
      setCookie(CookieKey.USER_ID, userId);
      setCookie(CookieKey.ROLE, role);
      window.location.href = '/';
    } else {
      setMsg('아이디와 비밀번호를 확인하세요.');
    }
  };

  return (
    <CommonForm onSubmit={login}>
      <h1>{WordKey.PROJECT_NAME}</h1>
      <CommonInput type="text" id="userId" value={userId} onChange={handleChange} placeholder="아이디" />
      <CommonInput type="password" id="password" value={password} onChange={handleChange} placeholder="비밀번호" />
      <span>{msg}</span>
      <CommonButton type="submit">로그인</CommonButton>
    </CommonForm>
  );
};

export default Login;
