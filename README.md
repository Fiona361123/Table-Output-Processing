@startuml
' ===========================
' Tutoring Session Booking
' ===========================

skinparam classAttributeIconSize 0
skinparam roundcorner 20
skinparam backgroundColor #FEFECE

package domain {
  class User {
    - userID : String
    - name : String
    - email : String
    - password : String
    - isLoggedIn : boolean
    + getUserID() : String
    + setLoggedIn(boolean) : void
  }

  class Student {
    - bookings : List<Booking>
    - courseEnrolled : List<Course>
  }

  class Tutor {
    - tutorCourses : List<Course>
    - availableSession : List<Session>
  }

  class Admin {
    - adminID : String
  }

  class Course {
    - courseID : String
    - courseName : String
    - assignedUsers : List<User>
  }

  class Session {
    - sessionID : String
    - date : LocalDate
    - startTime : LocalTime
    - endTime : LocalTime
    - availableSeat : int
    - course : Course
    - tutor : Tutor
  }

  class Booking {
    - bookingID : String
    - bookingDate : LocalDate
    - bookingTime : LocalTime
    - bookingStatus : String
    - sessionID : String
  }

  class Report {
    - reportID : String
    - type : String
    - generatedDate : LocalDate
    - generatedBy : String
    - content : String
    - startDate : LocalDate
    - endDate : LocalDate
  }

  User <|-- Student
  User <|-- Tutor
  User <|-- Admin

  Session "1" *-- "1" Course
  Session "1" *-- "1" Tutor
  Student "1" -- "0..*" Booking
  Booking "0..*" -- "1" Session
  Course "1" *-- "0..*" User : assigned
  Tutor "1" -- "0..*" Session : creates
}

package service <<Rectangle>> {
  interface ReportGenerator {
    + generateReport(User,String,LocalDate,LocalDate) : Report
  }
  ReportGenerator <|.. AdminReportGenerator
  ReportGenerator <|.. TutorReportGenerator
}

note right of ReportGenerator
  Strategy pattern:
  Admin vs Tutor reports
end note

@enduml
