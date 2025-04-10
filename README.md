<h1>여행코스 추천 프로그램 - 'PickCourse'</h1>

<Strong>Pick+Course</Strong> - http://43.203.69.19:10000/ </br>
<Strong>Pick+Course Github Organization</Strong> - https://github.com/orgs/PickCourse-project01/repositories
_________________________________________________________________________________
<h2>1. 기획 의도</h2>

<img src="https://github.com/user-attachments/assets/282ff927-1586-4515-a50f-905585aebb8e"/>

국내에는 다양한 매력을 지닌 관광지가 존재하지만, 실제로 <strong>많은 관광 수요가 일부 유명 관광지에만 집중</strong>되어 있습니다. 이로 인해 지역 간 관광 불균형이 심화되고, 많은 지역 관광 자원이 충분히 활용되지 못하고 있는 실정입니다.

또한, <strong>청년 세대의 여행은 SNS 인증과 소비 중심</strong>에 치우치는 경향이 있어, 여행의 본질적인 가치인 경험과 교류보다는 일회성 소비에 그치는 경우가 많습니다. 이는 여행 문화의 방향성을 다시 한 번 고민하게 만드는 지점입니다.

이에 본 프로젝트는 <strong>관광 수요를 분산</strong>시키고, 상대적으로 <strong> 소외된 지역 관광지의 매력을 재조명하여 지역 소비를 촉진</strong>하고자 합니다. 아울러 청년 세대가 여행을 통해 지역과 연결되고, 더 나아가 지역의 활력에 기여할 수 있도록 새로운 여행 문화를 제안하고자 합니다.

<h2>2. 기대 효과</h2>

<img src="https://github.com/user-attachments/assets/f4029e39-9880-41df-9882-e837e2addb8d"/>

이 프로젝트를 통해 <strong>청년 세대의 의미 있는 여행 수요를 충족</strong>시키고, <strong>가치 중심의 여행 문화 확산</strong>에 기여하고자 합니다. 또한, 지역 주민과 여행자가 함께 만드는 콘텐츠를 통해 <strong>지역 정체성 회복을 도모</strong>합니다.
아울러, <strong>사회 문제 해결에도 기여</strong>할 수 있도록 이 사이트를 이용하는 이용자들이 봉사의 즐거움도 경험할 수 있는 특별한 여행 코스를 마련하여 <strong>시민의식 향상</strong>도 함께 목표로 하고 있습니다.

<h2>3. 프로젝트 사용 툴</h2>

💻 언어 & 프레임워크
  - Java
  - Javascript
  - Spring Boot
  - MyBatis
  - JSON
  - Thymeleaf

🛠️ 개발 환경 & IDE
  - IntelliJ IDEA
  - Visual Studio Code
  - Sourcetree
  - Git, Github
  - Apache Tomcat
  - JDK 11.0.15

🗄️ 데이터베이스 & DB 툴
  - Oracle Database
  - DBeaver

🌐 API & 외부 서비스
  - Kakao Deverlopers (지도 API, 로그인 API)
  - CoolSMS API
  - Bootpay API

📦 빌드 & 의존성 관리
  - Gradle

🔔 협업 & 커뮤니케이션
  - Slack

🎨 디자인 & 퍼블리싱
  - HTML / CSS

📷 기타 도구
  - Thumbnailator
  - Lombok

🧪 테스트 & 디버깅
  - Postman

<h2>4. ERD</h2>
<img src="https://github.com/Jakej92/TeamProject-Pick-Course/blob/master/assets/pickcourse-erd.png?raw=true">

<h2>5. 담당 업무</h2>
5-1 publishing
<img src="https://github.com/Jakej92/TeamProject-Pick-Course/blob/master/assets/publishing-progress.png?raw=true">

▶ 관리자 페이지
- 관리자 메인 페이지
- 관리자 목록
- 관리자 등록
- 회원 목록
- 신고 목록
- 신고 상세
- 공지 목록
- 공지 상세
- 공지 등록
- 공지 수정
- 코스 목록
- 코스 상세
- 코스 등록
- 코스 수정

▶ 고객 센터
- 자주 묻는 질문
- 1:1 문의

▶ 랭킹
- 랭킹 목록
  
▶ 사이트 소개
- 사이트 소개


5-2 백엔드

<img src="https://github.com/user-attachments/assets/2bd23b9d-fedc-4ae7-9c18-4018f43463cb">

▶ 마이 페이지
- 마이 메인 페이지 / 뱃지
    - 세션에 로그인 유저의 정보가 없다면 경고창 출력 후 로그인 화면으로 이동하도록 링크 연결
    - 로그인한 회원의 뱃지 정보 조회 및 출력
    - 최근 활동(피드, 후기, 코스 등) 요약 정보 표시
- 회원 탈퇴
    - 회원 탈퇴 요청 시 DB에서 Delete 및 세션 종료 처리
- 찜한 목록
    - 코스 플랜에서 하트를 클릭하면 DB에 Insert, 다시 누르면 Delete 처리
    - 사용자가 찜한 코스 리스트 조회 (페이징 처리 포함)
- 내 정보 수정
    - 회원 정보 수정 요청 처리 및 DB 업데이트
    - 프로필 사진 등록 및 수정 기능 지원 (설정 전에는 기본 이미지 노출)
- 신청자 목록 (모집자만)
    - 내가 만든 코스에 지원한 사용자 목록 조회
- 쪽지 기능 (받은/보낸/쓰기/삭제/답장)
    - 받은/보낸 쪽지 목록 조회
    - 쪽지 전송 시 수신자 정보 확인 및 저장
    - 쪽지 삭제 시 soft delete 처리
    - 답장 기능 시 자동 수신자 설정 처리
    - 이미지 파일 첨부 기능 지원
- 내가 진행한 코스 / 작성한 후기 / 작성한 피드
    - 회원별 활동 내역 조회
    - 각 항목별 페이징 및 정렬 기능 포함
- 내 댓글 목록
    - 회원이 작성한 댓글 전체 조회
- 비밀번호 변경
    - 기존 비밀번호 검증
    - 기존과 동일한 비밀번호는 사용 불가 처리
- 결제 내역
    - 회원의 결제 이력 조회 및 출력

▶ 회원
- 회원 가입 / 로그인 (카카오, 이메일)
    - 이메일 가입 시 중복 확인 / 닉네임 중복확인
    - Kakao 로그인 API 연동을 통한 소셜 로그인 구현
- 로그인(관리자)
    - 관리자 전용 로그인 처리 및 권한 구분
- 본인 인증
    - CoolSMS API 연동
    - 입력한 핸드폰 번호를 세션에 임시 저장하고, Java Random 클래스를 이용해 6자리 인증번호 생성 및 전송
- 로그아웃 (이메일 / 카카오 / 관리자)
    - 로그아웃 시 세션 종료 후 로그인페이지로 redirect

▶ 메인 페이지
- 공지 목록 / 공지 상세
    - 공지사항 리스트 조회 (페이징 포함)
    - 상세 페이지에서 개별 공지 정보 출력

<h2>6. Trubleshooting</h2>

1. 파일 업로드 중 NoSuchFileException 발생

    문제<br>
      파일 업로드 기능 구현 중, file.transferTo() 호출 시 NoSuchFileException이 발생함.<br>
      <br>
      원인<br>
      업로드 경로인 /upload/yyyy/MM/dd 디렉토리가 존재하지 않는 상태에서 파일 저장을 시도해 예외가 발생.<br>
      디렉토리 생성 로직이 누락되어 있었음.<br>
      <br>
  💥 오류 발생 코드

        file.transferTo(new File(rootPath, uuid.toString() + "_" + file.getOriginalFilename()));

    해결 방법<br>
      File 객체를 통해 해당 경로가 존재하는지 확인한 후,<br>
      존재하지 않을 경우 mkdirs()를 통해 디렉토리를 먼저 생성하도록 처리.<br>
      <br>
  ✅ 수정된 코드
  
        File directory = new File(rootPath);
        if (!directory.exists()) {
            directory.mkdirs(); // 업로드 경로 없을 경우 생성
        }
        
        file.transferTo(new File(rootPath, uuid.toString() + "_" + file.getOriginalFilename()));


    배운 점<br>
      파일 업로드 시 디렉토리 생성 여부를 사전에 확인하는 것이 중요하며, <br>
      실제 서버 환경에서는 디스크 경로나 권한 등 시스템적인 요소도 오류를 유발할 수 있다는 점을 인식하게 되었다. <br>
      앞으로는 transferTo() 호출 전에 반드시 디렉토리 체크를 습관화하려고 한다. <br>

2. 파일 첨부 없이 메시지 전송 시 NullPointerException 발생

   문제<br>
     파일 없이 메시지를 전송할 때, <br>
     file.getOriginalFilename().equals("") 조건에서 NullPointerException이 발생함. <br>
        <br>
   원인<br>
     MultipartFile이 null이거나, 첨부되지 않은 상태일 경우<br>
     getOriginalFilename()이 null을 반환할 수 있음에도 불구하고<br>
     바로 .equals("")를 호출하여 예외가 발생함.<br>
   <br>
   💥 오류 발생 코드
    
        if (file.getOriginalFilename().equals("")) {
        // 파일 없음 처리
        }
   
    file 또는 file.getOriginalFilename()이 null인 경우 NPE 발생 가능성 있음 <br>
    <br>
    해결 방법<br>
        MultipartFile의 isEmpty() 체크와 getOriginalFilename()에 대한 null 및 공백 체크를 통해 안전하게 조건을 처리함.<br>
  <br>
  ✅ 수정된 코드

          if (file == null || file.isEmpty()) {
          log.warn("파일이 비어있습니다.");
          } else {
              log.info("파일 이름: {}", file.getOriginalFilename());
          }

     <br>
     배운 점<br>
      외부에서 입력받는 객체의 상태는 항상 불완전할 수 있다는 전제 하에,<br>
      null 안전성을 고려한 방어적 코드 작성이 필수적임을 배웠다.<br>
      특히 파일 업로드와 같은 입력 기반 기능에서는 .equals()나 .get()과 같은 메서드를<br>
      바로 호출하지 않고, 항상 선행 조건을 점검하는 습관이 필요하다는 점을 체감했다.<br>
    
3. 쪽지 전송 시 수신자 이메일 정보가 존재하지 않아 전송 실패

    문제<br>
      존재하지 않는 이메일로 메시지를 전송하려 할 때<br>
      Optional.get()을 바로 호출하여 NoSuchElementException이 발생할 수 있었음.<br>
      <br>
    원인<br>
      memberDAO.findIdByEmail() 호출 결과가 Optional.empty일 수 있음에도 불구하고<br>
      예외 처리를 하지 않고 .get()으로 직접 ID를 꺼내는 방식으로 구현함.<br>
      <br>
  💥 오류 발생 코드

        Long receiverId = memberDAO.findIdByEmail(sendMessageDTO.getReceiverEmail()).get();
   
      findIdByEmail()이 결과를 반환하지 못한 경우, get() 호출 시 예외 발생<br>
    <br>
    해결 방법<br>
      Optional에 대해 isEmpty() 또는 isPresent() 체크를 먼저 수행하고,<br>
      결과가 없을 경우 사용자에게 오류 메시지를 출력하도록 개선함.<br>
    <br>
  ✅ 수정된 코드

        Optional<Long> receiverId = memberDAO.findIdByEmail(sendMessageDTO.getReceiverEmail());
        if (receiverId.isEmpty()) {
            redirectAttributes.addFlashAttribute("error", "받는 사람 이메일을 찾을 수 없습니다.");
            return "redirect:/my-page/messageWrite";
        }
        
        sendMessageDTO.setReceiverId(receiverId.get());

     <br>  
     배운 점<br>
      Optional은 단순히 null을 숨기기 위한 도구가 아닌,<br>
      안전하고 명시적인 값 처리 방식을 위한 도구라는 점을 깨달았다.<br>
      앞으로는 무조건 .get()을 사용하는 방식이 아닌,<br>
      isEmpty(), orElseThrow(), orElseGet(), ifPresent() 등 상황에 맞는 안전한 접근 방식을 사용해야 함을 배웠다.<br>
 
4. 카카오 로그인과 이메일 로그인의 사용자 세션 구분 문제

    문제<br>
      로그인 기능 구현 초기에,<br>
      카카오 소셜 로그인과 일반 이메일 로그인을 동일한 세션 구조로 처리하면서<br>
      사용자 인증 상태를 구분하기 어려웠음.<br>
  
    원인<br>
      두 로그인 방식 모두 로그인 시 아래와 같이 동일하게 사용자 정보를 세션에 저장함:

        session.setAttribute("member", memberDTO);
  
      하지만 로그아웃 처리 방식은 로그인 유형에 따라 달라야 했음.<br>
      예를 들어,<br>
      - 일반 로그인은 세션 종료로 로그아웃이 완료되지만,<br>
      - 카카오 로그인은 카카오 API를 통해 로그아웃 처리를 따로 해줘야 했기 때문에<br>
      로그인 유형을 명시적으로 구분할 수 있는 상태 값이 필요했음.<br>
      <br>
  💥 초기 코드 (세션 구분 없음)

       session.setAttribute("member", memberDTO); // 이메일 & 카카오 로그인 공통 처리

   <br>
   해결 방법<br>
     로그인 방식에 따라 별도의 상태 값을 세션에 함께 저장하도록 개선함.<br>
     예를 들어, 이메일 로그인 시 "email", 카카오 로그인 시 "kakao"라는 값을 추가 저장:<br>
     <br>
  ✅ 수정된 코드

        session.setAttribute("member", memberDTO);
    
        // 로그인 방식에 따른 상태 구분 추가
        session.setAttribute("memberStatus", "email"); // 일반 로그인
        // 또는
        session.setAttribute("memberStatus", "kakao"); // 카카오 로그인

      이후 기능 조건문에서 memberStatus 값을 통해 분기 처리 가능<br>
    <br>
  
    배운 점<br>
      처음에는 세션에 사용자 객체 하나만 저장해도 충분하다고 생각했지만,<br>
      실제로는 로그인 방식, 접근 권한, 사용자 경험 등의 관점에서 구분된 상태 정보가 매우 중요하다는 것을 배움.<br>
      특히 소셜 로그인과 일반 로그인은 인증 흐름이 다르고,<br>
      이에 맞춘 세션 설계와 조건 분기 로직이 필요하다는 점을 실감했다.<br>
        
5. SMS 인증번호 재사용 및 보안 취약 문제

        문제
        SMS 인증 기능을 구현한 뒤 테스트하는 과정에서,
        인증번호를 여러 번 입력하거나 인증에 성공한 후에도 같은 인증번호로 계속 인증이 가능한 문제가 발생했다.
   
<img src="https://github.com/user-attachments/assets/e5273ba6-78ee-4155-99ba-5cc44fce87f4">

       원인
       인증번호를 발급할 때마다 세션에 덮어쓰는 방식으로 저장하여, 이전 인증번호는 무효화됨
       인증에 성공하더라도 세션에서 인증번호를 제거하지 않아, 동일 세션 내에서 인증번호 재사용이 가능했음
       전화번호에 대한 형식 검증도 없어 "123" 같은 숫자로도 인증번호 전송이 가능했음
        
<img src="https://github.com/user-attachments/assets/eb1662b7-853c-470d-906a-718023c29fdc">

        해결 방법
        인증에 성공한 경우 session.removeAttribute("verificationCode")를 사용하여 인증번호를 즉시 세션에서 제거
        잘못된 형식의 전화번호를 방지하기 위해 정규식을 사용한 유효성 검증 추가

        배운 점
        세션을 사용할 경우 단순히 저장하는 것뿐만 아니라, 언제 제거할지까지 고려한 설계가 필요하다는 것을 알게 되었다.
        또한 인증과 같은 민감한 기능일수록 입력값 검증 및 상태 관리의 중요성을 실감할 수 있었다.
        비록 유효시간 제한 기능은 현재 적용되어 있지 않지만, 추후 보완이 필요한 개선 포인트로 인식하게 되었다.

<h2>7. 느낀점</h2>

✨ <Strong>체계적인 기획의 중요성</Strong>

이번 프로젝트를 통해 기획의 탄탄함이 개발 전체의 흐름을 좌우한다는 점을 깊이 느꼈습니다. 초반에는 단순히 구현 위주로 접근했지만, 
실제로 기능을 개발하면서 세부 흐름, 화면 전환, 데이터 구조 등 사전에 정리되지 않은 부분에서 여러 차례 혼선이 발생했습니다.
기획이 명확하게 잡혀 있어야 퍼블리싱과 서버 개발 모두 자연스럽게 이어지고, 개발 중 발생할 수 있는 커뮤니케이션의 불필요한 소모도 줄일 수 있다는 점을 체감했습니다.

✨ <Strong>함께 푸는 문제, 효과적인 소통의 힘</Strong>

개발 도중 예상치 못한 문제에 마주했을 때, 처음에는 스스로 해결하려고 많은 시간을 투자했지만, 
오히려 적절한 시점에 도움을 요청하는 것이 훨씬 효율적이라는 것을 깨달았습니다.
특히 익숙하지 않은 기술이나 로직에서는 강사님 또는 팀원들과 의견을 나누며 해결 방안을 찾는 과정이 훨씬 빠르고 정확했습니다. 
앞으로는 적극적으로 소통하며 협업을 통해 문제를 해결해 나가는 자세를 가져가고자 합니다.

✨ <Strong>프로젝트는 ‘함께’ 만드는 것</Strong>

프로젝트를 혼자서 완성할 수는 없습니다. 이번 팀 프로젝트를 통해 서로의 강점을 살리고 약점을 보완하며 만들어가는 협업의 가치를 느꼈습니다.
각자의 역할에 책임감을 갖고 임하는 분위기 덕분에 프로젝트를 안정적으로 마무리할 수 있었고, 함께 고민하고 결정해 나가는 과정에서 많은 배움을 얻었습니다.
결국 좋은 결과는 기술뿐 아니라 좋은 팀워크에서 비롯된다는 사실을 다시 한 번 확인할 수 있었습니다.

✨ <Strong>새로운 시도와 낯선 구조 속에서의 성장</Strong>

이번 프로젝트에서 특히 인상 깊었던 경험은 내가 작업한 퍼블리싱을 다른 팀원이 서버와 연결하고, 반대로 다른 팀원의 퍼블리싱에 내가 서버를 붙이는 방식으로 역할을 나누어 작업한 점입니다.
익숙하지 않은 코드 구조를 해석하고, 의도를 파악하면서 작업하는 과정은 쉽지 않았지만, 그만큼 타인의 코드를 이해하고 유연하게 협업하는 능력을 키울 수 있었습니다.
이러한 경험을 통해 다양한 개발 스타일을 존중하고 흡수하는 태도의 중요성을 배웠으며, 실제 협업 환경에서의 적응력도 크게 향상되었습니다.

✨ <Strong>완성을 통한 성취감</Strong>

이번 프로젝트는 단순히 기능 구현에 그치지 않고, 기획부터 퍼블리싱, 서버 개발, 협업까지 전 과정을 직접 경험하며 하나의 웹 서비스를 완성해냈다는 점에서 큰 성취감을 느꼈습니다.
처음에는 생소하고 어려운 부분도 많았지만, 과정을 차근차근 해결해나가며 팀과 함께 결과물을 만들어낸 그 자체가 저에게는 소중한 경험이자 자신감이 되었습니다.
이 프로젝트를 통해 얻은 경험과 배움을 바탕으로, 앞으로 더 발전된 개발자로 성장해 나가고 싶습니다.
