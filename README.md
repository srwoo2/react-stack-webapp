# react-stack-webapp

## 초기 설정
### 공통
1. Node.js 환경 구성
```
$ npm install -g nvm
$ nvm install 18.19.0
$ nvm use 18.19.0
```
2. 개발용 인증서 생성
```
$ mkdir cert
$ openssl req -nodes -new -x509 -keyout cert/key.pem -out cert/cert.pem -days 365 -config cert/openssl.cnf
```

### Project 개발 모드 실행
```
$ npm run local
$ npm run dev
# https://192.168.2.95:4002/
```

### Project 운영 모드 실행
```
$ npm run prod
# https://192.168.2.95:4000/
```

## 파일 구조
/front
/server
/test

## 서버 구성
- 웹서버
- 웹소켓서버
- 데이터베이스

## 사용자 기능
1. 로그인
- 사용자, 관리자 역할 구분
- 인증 토큰 관리
2. 게시판
3. 채팅
