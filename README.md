<h1>Travel Course Recommendation Program - 'PickCourse'</h1>

<strong>Pick+Course</strong> - http://43.203.69.19:10000/ </br>
<strong>Pick+Course Github Organization</strong> - https://github.com/orgs/PickCourse-project01/repositories
_________________________________________________________________________________
<h2>1. Project Purpose</h2>

<img src="https://github.com/user-attachments/assets/282ff927-1586-4515-a50f-905585aebb8e"/>

Although South Korea boasts a variety of attractive tourist destinations, in reality, <strong>many tourists tend to concentrate on a few well-known spots</strong>. This leads to an imbalance in tourism across regions, leaving many local attractions underutilized.

Additionally, <strong>young travelers often focus on social media validation and consumption</strong>, resulting in travel experiences that are more about one-time consumption than meaningful interactions. This trend prompts a reevaluation of the true value of travel.

Therefore, this project aims to <strong>distribute tourist demand</strong> and <strong>highlight the charm of relatively overlooked local attractions to stimulate regional consumption</strong>. Furthermore, it seeks to propose a new travel culture where young people connect with local communities and contribute to regional vitality through their journeys.

<h2>2. Expected Outcomes</h2>

<img src="https://github.com/user-attachments/assets/f4029e39-9880-41df-9882-e837e2addb8d"/>

Through this project, we aim to <strong>fulfill the meaningful travel desires of the younger generation</strong> and contribute to the <strong>spread of value-centered travel culture</strong>. Additionally, by creating content collaboratively with local residents and travelers, we strive to <strong>restore regional identity</strong>.

Moreover, to <strong>address social issues</strong>, we plan to offer special travel courses that allow users to experience the joy of volunteering, thereby aiming to <strong>enhance civic consciousness</strong>.

<h2>3. Tools Used in the Project</h2>

💻 Languages & Frameworks
  - Java
  - JavaScript
  - Spring Boot
  - MyBatis
  - JSON
  - Thymeleaf

🛠️ Development Environment & IDEs
  - IntelliJ IDEA
  - Visual Studio Code
  - Sourcetree
  - Git, GitHub
  - Apache Tomcat
  - JDK 11.0.15

🗄️ Databases & DB Tools
  - Oracle Database
  - DBeaver

🌐 APIs & External Services
  - Kakao Developers (Map API, Login API)
  - CoolSMS API
  - Bootpay API

📦 Build & Dependency Management
  - Gradle

🔔 Collaboration & Communication
  - Slack

🎨 Design & Publishing
  - HTML / CSS

📷 Other Tools
  - Thumbnailator
  - Lombok

🧪 Testing & Debugging
  - Postman

<h2>4. ERD</h2>
<img src="https://github.com/Jakej92/TeamProject-Pick-Course/blob/master/assets/pickcourse-erd.png?raw=true">

<h2>5. Responsibilities</h2>
5-1 Publishing
<img src="https://github.com/Jakej92/TeamProject-Pick-Course/blob/master/assets/publishing-progress.png?raw=true">

▶ Admin Page
- Admin Main Page
- Admin List
- Admin Registration
- Member List
- Report List
- Report Details
- Notice List
- Notice Details
- Notice Registration
- Notice Editing
- Course List
- Course Details
- Course Registration
- Course Editing

▶ Customer Center
- Frequently Asked Questions
- 1:1 Inquiry

▶ Rankings
- Ranking List

▶ Site Introduction
- About the Site

5-2 Backend

<img src="https://github.com/user-attachments/assets/2bd23b9d-fedc-4ae7-9c18-4018f43463cb">

▶ My Page
- My Main Page / Badges
    - If there is no login user information in the session, display a warning and redirect to the login page
    - Retrieve and display badge information of the logged-in member
    - Display summary of recent activities (feeds, reviews, courses, etc.)
- Account Deletion
    - Upon request, delete member from DB and terminate session
- Wishlist
    - Clicking the heart in the course plan inserts into DB; clicking again deletes it
    - Retrieve list of favorited courses (with pagination)
- Edit My Information
    - Process member information update requests and update DB
    - Support profile picture upload and editing (default image displayed if not set)
- Applicant List (for recruiters only)
    - Retrieve list of users who applied to courses I created
- Messaging Feature (Inbox/Sent/Compose/Delete/Reply)
    - Retrieve inbox and sent messages
    - Verify recipient information and save when sending messages
    - Soft delete messages upon deletion
    - Automatically set recipient when replying
    - Support image file attachments
- My Courses / Reviews / Feeds
    - Retrieve activity history per member
    - Include pagination and sorting for each category
- My Comments
    - Retrieve all comments written by the member
- Change Password
    - Verify current password
    - Prevent reuse of the same password
- Payment History
    - Retrieve and display member's payment history

▶ Member
- Sign Up / Login (Kakao, Email)
    - Check for duplicate email and nickname during email registration
    - Implement social login via Kakao Login API
- Admin Login
    - Process admin-specific login and distinguish permissions
- Identity Verification
    - Integrate with CoolSMS API
    - Temporarily store entered phone number in session, generate 6-digit verification code using Java Random class, and send
- Logout (Email / Kakao / Admin)
    - Terminate session and redirect to login page upon logout

▶ Main Page
- Notice List / Notice Details
    - Retrieve list of notices (with pagination)
    - Display individual notice information on detail page

<h2>6. Troubleshooting</h2>

<h3>1. NoSuchFileException Occurs During File Upload</h3>

[Issue]<br>
Encountered NoSuchFileException when calling file.transferTo() during file upload.<br>
<br>
[Cause]<br>
Attempted to save file in /upload/yyyy/MM/dd directory that did not exist, leading to exception.<br>
Missing logic to create directory.<br>
<br>
  💥 Problematic Code

        file.transferTo(new File(rootPath, uuid.toString() + "_" + file.getOriginalFilename()));

[Solution]<br>
Check if the directory exists using File object, and create it with mkdirs() if it doesn't.<br>
<br>
  ✅ Updated Code
  
        File directory = new File(rootPath);
        if (!directory.exists()) {
            directory.mkdirs(); // Create upload path if it doesn't exist
        }
        
        file.transferTo(new File(rootPath, uuid.toString() + "_" + file.getOriginalFilename()));

[Lesson Learned]<br>
It's crucial to verify the existence of directories before file uploads.<br>
In real server environments, system factors like disk paths and permissions can also cause errors.<br>
Hence, it's important to habitually check directories before calling transferTo().<br>

<h3>2. NullPointerException When Sending Message Without File Attachment</h3>

[Issue]<br>
Encountered NullPointerException at file.getOriginalFilename().equals("") when sending a message without a file.<br>
<br>
[Cause]<br>
When MultipartFile is null or not attached, getOriginalFilename() can return null, leading to exception when .equals("") is called.<br>
<br>
   💥 Problematic Code
    
        if (file.getOriginalFilename().equals("")) {
        // Handle no file
        }

file or file.getOriginalFilename() being null can cause NPE<br>
<br>
[Solution]<br>
Safely handle conditions by checking MultipartFile's isEmpty() and null or empty getOriginalFilename().<br>
<br>
  ✅ Updated Code

          if (file == null || file.isEmpty()) {
          log.warn("File is empty.");
          } else {
              log.info("File name: {}", file.getOriginalFilename());
          }

[Lesson Learned]<br>
Always assume that externally received objects can be incomplete,<br>
and write defensive code considering null safety.<br>
Especially for input-based features like file uploads, avoid directly calling methods like .equals() or .get() without prior checks.<br>

<h3>3. Message Sending Fails Due to Missing Recipient Email Information</h3>

[Issue]<br>
Attempting to send a message to a non-existent email could lead to NoSuchElementException due to direct call to Optional.get().<br>
<br>
[Cause]<br>
memberDAO.findIdByEmail() may return Optional.empty, but the code directly calls .get() without exception handling.<br>
<br>
  💥 Problematic Code

        Long receiverId = memberDAO.findIdByEmail(sendMessageDTO.getReceiverEmail()).get();

If findIdByEmail() doesn't return a result, calling get() causes exception<br>
<br>
[Solution]<br>
First check if Optional is empty or present, and display error message to user if no result.<br>
<br>
  ✅ Updated Code

        Optional<Long> receiverId = memberDAO.findIdByEmail(sendMessageDTO.getReceiverEmail());
        if (receiverId.isEmpty()) {
            redirectAttributes.addFlashAttribute("error", "Recipient email not found.");
            return "redirect:/my-page/messageWrite";
        }
        
        sendMessageDTO.setReceiverId(receiverId.get());

[Lesson Learned]<br>
Optional is not just a tool to hide nulls,<br>
but a means for safe and explicit value handling.<br>
Instead of always using .get(), learn to use isEmpty(), orElseThrow(), orElseGet(), ifPresent(), etc., as appropriate.<br>

<h3>4. Distinguishing Sessions Between Kakao and Email Logins</h3>

[Issue]<br>
In the early stages of implementing the login feature,<br>
both Kakao social login and regular email login were handled using the same session structure,<br>
making it difficult to distinguish user authentication status.<br>

[Cause]<br>
Both login methods stored user information in the session like this:

        session.setAttribute("member", memberDTO);
  
However, the logout process needed to differ depending on the login method.<br>
For example:<br>
- Regular login was completed by simply ending the session,<br>
- While Kakao login required a separate logout call to the Kakao API,<br>
which made it necessary to explicitly identify the login type.<br><br>

  💥 Initial code (no session distinction)

       session.setAttribute("member", memberDTO); // Common for email & Kakao login

<br>
[Solution]<br>
Improved by storing an additional session value to distinguish the login type.<br>
For example, saving "email" for email login and "kakao" for Kakao login:<br><br>

  ✅ Updated code

        session.setAttribute("member", memberDTO);
    
        // Add login type status
        session.setAttribute("memberStatus", "email"); // Email login
        // or
        session.setAttribute("memberStatus", "kakao"); // Kakao login

Afterward, conditions can be handled using the memberStatus value.<br><br>
  
[Lesson Learned]<br>
At first, I thought storing only the user object in the session was enough,<br>
but I realized that distinguishing state information such as login method, permissions, and user flow is very important.<br>
Social and email logins have different authentication flows,<br>
and I learned the importance of customizing session structure and logic accordingly.<br>

<h3>5. SMS Verification Code Reuse & Security Vulnerability</h3>

[Issue]<br>
After implementing SMS verification, I found that<br>
users could reuse the same verification code multiple times, even after successful verification.<br><br>

[Cause]<br>
- Every time a code was issued, it just overwrote the session using session.setAttribute("verificationCode", code),<br>
  so the old code became invalid, but was never deleted after verification success.<br>
- As a result, users could keep using the same code within the same session.<br>
- Also, there was no format check for phone numbers on the client side, so even "123" could trigger a request.<br><br>

💥 Problem code

      // Issue code without removing old one
      session.setAttribute("verificationCode", verificationCode);
<br>
[Solution]<br>
After successful verification, immediately remove the code from the session:<br><br>

✅ Updated code

      if (savedVerificationCode != null && savedVerificationCode.equals(verificationCode)) {
          session.removeAttribute("verificationCode"); // Remove the code
          session.setAttribute("isVerified", true);
          return ResponseEntity.ok(Map.of("success", true));
      }

- Also added front-end (JavaScript) validation to only enable the send button when the phone number is 10-11 digits:

      phoneInput.addEventListener("keyup", (e) => {
          if (phoneInput.value.length >= 10 && phoneInput.value.length <= 11) {
              sendButton.classList.add("buttonBlack");
              // Enable button style
          } else {
              sendButton.classList.remove("buttonBlack");
              sendButton.classList.add("gsRKCU");
              // Show error message
          }
      });

[Lesson Learned]<br>
When using sessions, it’s not just about saving data—<br>
you must also plan when and under what conditions to clear it.<br>
For sensitive features like authentication, validation and session control are key to security.<br>
Although I haven’t implemented code expiration yet, it’s now on my improvement list.<br>

<h2>7. Reflections</h2>

✨ <strong>The Importance of Structured Planning</strong><br>
Through this project, I truly realized how solid planning determines the overall flow of development. In the beginning, I approached the work mainly from an implementation perspective. However, as I progressed with feature development, I encountered repeated confusion in areas such as detailed workflows, screen transitions, and data structures—elements that hadn't been clearly organized beforehand. I learned that well-defined planning is essential for seamless collaboration between publishing and backend development, and it also significantly reduces unnecessary communication overhead during the development process.

✨ <strong>Solving Problems Together: The Power of Effective Communication</strong><br>
When I encountered unexpected issues during development, I initially spent a lot of time trying to solve them on my own. However, I realized that asking for help at the right moment is actually much more efficient. Especially when dealing with unfamiliar technologies or logic, discussing with the instructor or teammates led to faster and more accurate solutions. Moving forward, I intend to actively communicate and take a collaborative approach to problem-solving.

✨ <strong>A Project Is Built Together</strong><br>
No one can complete a project alone. Through this team project, I experienced the value of collaboration—leveraging each other's strengths and supporting each other's weaknesses. Thanks to a shared sense of responsibility for our individual roles, we were able to complete the project smoothly. I learned a lot through the process of thinking and making decisions together. In the end, this reaffirmed that great results come not only from technical skills, but also from strong teamwork.

✨ <strong>Growth Through New Challenges and Unfamiliar Structures</strong><br>
One of the most memorable aspects of this project was how we divided roles—my publishing work was connected to a teammate’s server, and I also integrated my backend into another teammate’s publishing code. It wasn’t easy to interpret unfamiliar code structures and understand the original intent, but the process helped me develop the ability to comprehend others’ code and collaborate more flexibly. Through this experience, I learned the importance of respecting and embracing diverse development styles, and significantly improved my adaptability in real-world collaborative environments.

✨ <strong>A Sense of Accomplishment Through Completion</strong><br>
This project gave me a deep sense of accomplishment—not just from implementing individual features, but from experiencing the entire process firsthand, including planning, publishing, backend development, and collaboration, to complete a fully functioning web service. Although many parts were unfamiliar and challenging at first, solving each issue step by step and creating a finished product with my team became a meaningful experience and a source of confidence. Based on the experience and lessons gained through this project, I’m motivated to continue growing into a more skilled and capable developer.


 
