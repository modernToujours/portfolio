# 🙏 **Portfolio**

<br>

## 👋 **Overview**

- 개요
- 기술 및 라이브러리
- 배포

---

<br>

## **개요**

<br>

취업을 위해 개인적으로 제작한 포트폴리오 프로젝트입니다.

**기획 및 제작 :** 최영원

**제작 기간 :** 2022-12

**배포일 :** 2022-12-14

<br>

<img iwdth="100%" alt="포트폴리오 메인 페이지" src="https://forus-s3.s3.ap-northeast-2.amazonaws.com/next-s3-uploads/portfolio/portfolio-main.gif"/>

배포 사이트는 [portfolio.moderntoujours.dev](http://portfolio.moderntoujours.dev) 를 통해 확인하실 수 있습니다.

---

<br>

## **사용 기술 및 라이브러리**

<br>

![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![MUI](https://img.shields.io/badge/MUI-%230081CB.svg?style=for-the-badge&logo=mui&logoColor=white)
![Swiper.js](https://img.shields.io/badge/swiper-333333?style=for-the-badge&logo=swiper)
![Threejs](https://img.shields.io/badge/threejs-black?style=for-the-badge&logo=three.js&logoColor=white)
![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)
![Firebase](https://img.shields.io/badge/firebase-%23039BE5.svg?style=for-the-badge&logo=firebase)
![AWS-S3](https://img.shields.io/badge/S3-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white)
![AWS-ROUTE53](https://img.shields.io/badge/ROUTE53-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white)
![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)

---

<br>

## 간단 기능 소개

<br>

- 이쁜 배경화면을 위해서 [Three.js](https://threejs.org/)를 사용하였습니다.
- 제 포트폴리오의 스크롤을 내릴 때 프레젠테이션 느낌이 날 수 있도록 메뉴버튼을 제외한 화면 전체적으로 [Swiper.js](https://swiperjs.com/)를 사용하였습니다. 그리고 이는 [프로젝트 페이지](https://portfolio.moderntoujours.dev/#Projects)에서 프로젝트들, 프로젝트 이미지들에서도 사용되었습니다.

<br>

---

## 배포

<br>

- 프론트 부분은 [Vercel](https://vercel.com/)을 통해서 배포중 입니다.
- 도메인은 [개인 블로그](https://www.moderntoujours.dev/)를 만들기 위해 [가비아](https://www.gabia.com/)에서 구입하고 [Route53](https://aws.amazon.com/ko/route53/)에서 호스팅 중인 주소의 서브도메인을 사용중입니다.
- 전체적인 이미지들의 주소와 [프로필 페이지](https://portfolio.moderntoujours.dev/#Projects), [프로젝트 페이지](https://portfolio.moderntoujours.dev/#Projects)에서 보여지는 정보들은 [firebase](https://firebase.google.com/) 에 저장되어 불러와집니다.
- 사용하는 이미지 및 기타 파일들은 [AWS S3](https://aws.amazon.com/ko/s3/)에 업로드 되어있어 이로부터 불러와집니다.
