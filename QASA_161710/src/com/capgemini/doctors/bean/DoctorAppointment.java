/**
 * @author Swarup Talukdar
 * @EmployeeID 161710
 */
package com.capgemini.doctors.bean;

import java.time.LocalDate;

public class DoctorAppointment 
{
	private int appointmentID;
	private String patientName;
	private String phoneNumber;
	private String email;
	private String gender;
	private LocalDate appointmentDate;
	private int age;
	private String problemName;
	private String doctorName;
	private String appointmentStatus;
	
	/**
	 * Default Constructor
	 */
	public DoctorAppointment() {
		super();
		// TODO Auto-generated constructor stub
	}

	/**
	 * @param appointmentID
	 * @param patientName
	 * @param phoneNumber
	 * @param email
	 * @param gender
	 * @param appointmentDate
	 * @param age
	 * @param problemName
	 * @param doctorName
	 * @param appointmentStatus
	 */
	public DoctorAppointment(int appointmentID, String patientName,
			String phoneNumber, String email, String gender,
			LocalDate appointmentDate, int age, String problemName,
			String doctorName, String appointmentStatus) {
		super();
		this.appointmentID = appointmentID;
		this.patientName = patientName;
		this.phoneNumber = phoneNumber;
		this.email = email;
		this.gender = gender;
		this.appointmentDate = appointmentDate;
		this.age = age;
		this.problemName = problemName;
		this.doctorName = doctorName;
		this.appointmentStatus = appointmentStatus;
	}

	public int getAppointmentID() {
		return appointmentID;
	}

	public void setAppointmentID(int appointmentID) {
		this.appointmentID = appointmentID;
	}

	public String getPatientName() {
		return patientName;
	}

	public void setPatientName(String patientName) {
		this.patientName = patientName;
	}

	public String getPhoneNumber() {
		return phoneNumber;
	}

	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public LocalDate getAppointmentDate() {
		return appointmentDate;
	}

	public void setAppointmentDate(LocalDate appointmentDate) {
		this.appointmentDate = appointmentDate;
	}

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}

	public String getProblemName() {
		return problemName;
	}

	public void setProblemName(String problemName) {
		this.problemName = problemName;
	}

	public String getDoctorName() {
		return doctorName;
	}

	public void setDoctorName(String doctorName) {
		this.doctorName = doctorName;
	}

	public String getAppointmentStatus() {
		return appointmentStatus;
	}

	public void setAppointmentStatus(String appointmentStatus) {
		this.appointmentStatus = appointmentStatus;
	}

	@Override
	public String toString() {
		return "\n DoctorAppointment [appointmentID= " + appointmentID
				+ ", patientName= " + patientName + ", phoneNumber= "
				+ phoneNumber + ", email= " + email + ", gender= " + gender
				+ ", appointmentDate= " + appointmentDate + ", age= " + age
				+ ", problemName= " + problemName + ", doctorName= " + doctorName
				+ ", appointmentStatus= " + appointmentStatus + "]";
	}
	
	

}
