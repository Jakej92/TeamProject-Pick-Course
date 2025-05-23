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


 
