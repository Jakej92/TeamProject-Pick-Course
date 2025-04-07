# Jake - Pick+Course

<h1>청년문화 통합 플랫폼 프로젝트 - '도담도담'</h1>


<h2>1. 기획 의도</h2>
<img src="https://github.com/dev-sein/study-jpa/assets/122762143/d640309c-79ce-4883-ac88-a484ddc245dd">

현재 우리나라는 1인가구가 늘어나고 있으며, 1인가구의 핵심세대인 2030 청년들로 하여금 <strong>청년문제가 발생</strong>하고 있다는 사실에 주목하였다. 코로나나 비혼 등의 이유로 현재 청년들은 '혼자' 생활을 하는 경우가 많으며, 문화생활 역시 혼자 즐기는 경우가 많다. <strong>청년 우울감 해소와 함께 사회적 커뮤니티 형성</strong>을 위하여 도담도담에서는 <strong>청년 문화 생활 통합 플랫폼</strong>을 기획하여 청년들이 보다 더 <strong>문화공간에 쉽게 접근하고 함께하는 공동체적 가치</strong>를 만들 수 있도록 하였다.

</div>

<h2>2. 기대 효과</h2>
<img src="https://github.com/dev-sein/study-jpa/assets/122762143/213261a1-31e2-4e81-9330-a3449b83a311">

청년층 문화생활 독려를 통하여 청년들의 삶의 질, 자존감 향상들을 이끌어낸다.<br><Br>

서울시 공공데이터광장의 서울시 문화공간 정보 공공데이터를 활용하여 문화공간을 소개한다. 홈페이지 내에서 쉽게 접근하여 청년들이 보다 더 문화공간에 쉽게 접근할 수 있도록 한다.<br>
도담 모집 게시판을 통하여 청년들이 혼자여서 도전하지 못했던 취미 생활등을 즐길 수 있도록 한다. <Br><br><br>



<h2>3. 프로젝트 사용 툴</h2>
- Java<br>
- Java Spring Data<br>
- QueryDSL<br>
- Java Script<br>
- tomcat<br>
- jQuery<br>
- ORACLE<br>
- Spring Boot<br>
- Visual Studio Code<br>
- DBeaver<br>
- Sourcetree<br>
- git, github<br>
- JSON<br>
- Ajax<br>
- JDK 11.0.15<br>
- Naver DEVELOPER API<br>
- Kakao DEVELOPER API<br>
- SMTP Gmail API<br>
- Slack<br>

<h2>4. ERD</h2>
<img src="https://github.com/Jakej92/TeamProject-Pick-Course/blob/master/assets/pickcourse-erd.png?raw=true">

 
<h2>5. 담당 업무</h2>
5-1 프론트엔드<br>
<img src="https://github.com/dev-sein/dev-sein/assets/122762143/248e4def-c7fb-4f6f-a391-d38e4fcfb608">

▶ 문화공간 정보
- 문화공간 정보 출력
- 카카오맵 API 활용 지도 출력

▶ 모집 게시판
- 모집 게시판 작성
- 모집 게시판 수정
- 모집 게시판 상세
- 모집 게시판 목록

▶ 이벤트 게시판
- 이벤트 게시판 작성
- 이벤트 게시판 수정
- 이벤트 게시판 상세
-  게시판 목록

<br>
5-2 백엔드<br>
<img src="https://github.com/dev-sein/dev-sein/assets/122762143/fe6adb96-e884-49a1-a8e8-a1baec2352fa">
<img src="https://github.com/dev-sein/dev-sein/assets/122762143/b61f98f8-b23a-46c3-bf3d-0b0983e4213b">


▶ 메인
- 헤더에 세션 삽입, 로그인 시 세션 유지
- 헤더와 메인 페이지에 각각의 게시판 링크 연결
- 각 게시판의 최신글 3개 출력과 각 항목 선택 시 상세 페이지 이동
- 사진 대표 이미지 썸네일과 글 제목, 작성일자 등 출력

▶ 고객센터
- 문의사항 폼 작성 시 문의 사항 등록
- Gmail SMTP API를 활용하여 답변 등록 

▶ 관리자 페이지 : 회원 목록
- 최신 회원 목록 10명 단위로 조회하여 페이징 처리(Restful)
- 회원 목록: 이름, 이메일, 휴대폰 번호 검색 처리(Restful)
- 회원 삭제: 삭제버튼 선택시 회원 상태 변경(Restful)
- 회원 각 항목 선택 시 모달팝업으로 회원 상세 정보 출력(Restful)
- 등급에 따른 등급 이미지 출력

▶ 관리자 페이지 : 모집 게시판
- 최신 모집게시글 목록 10 단위로 조회하여 페이징 처리(Restful)
- 모집 게시글 목록: 제목, 작성자, 모집 장소 검색 처리(Restful)
- 게시글 삭제: 모집 게시글 삭제(Restful)
- 게시글 각 항목 선택 시 상세 페이지 이동하여 출력
- 게시글 내 상세 이미지 다수일 경우 슬라이드 처리하여 출력

▶ 관리자 페이지 : 자유 게시판
- 최신 자유게시글 목록 10 단위로 조회하여 페이징 처리(Restful)
- 자유 게시글 목록: 제목, 작성자, 글 내용 검색 처리(Restful)
- 게시글 삭제: 자유 게시글 삭제(Restful)
- 게시글 각 항목 선택 시 상세 페이지 이동하여 출력
- 게시글 내 상세 이미지 다수일 경우 슬라이드 처리하여 출력

▶ 관리자 페이지 : 문의 게시판
- 최신 자유게시글 목록 10 단위로 조회하여 페이징 처리(Restful)
- 문의글 목록: 문의내용, 휴대폰 번호, 이메일 검색 처리(Restful)
- 문의글 삭제: 문의 게시글 삭제(Restful)
- 문의글 각 항목 선택 시 상세 페이지 이동하여 출력
- 문의글 답변 시 문의상태 변경
- 문의글 답변 시 SMTP Gmail을 사용하여 답변 내용 이메일 발송 처리 


<h2>6. 느낀점</h2>
<h3>6-1. 어려웠던 부분</h3>


<h3>6-2. 문제를 해결했던 부분</h3>
<h4>📌Z-index로 해결한 카카오맵 슬라이드</h4>


<br><br>

<h4>📌Truble</h4>


<h4>📌Trubleshooting</h4>

<br><br>

<h3>5-4. 총평</h3>
<h4>🌟 기획: 유지·보수를 생각하자!  </h4>


 <h4>🌟 협업: <strong>프로젝트는 '내'가 아니라 '팀'이 하는 것</strong> </h4>

 
<h4>🌟 미래: 보완하는 개발자! </h4>



