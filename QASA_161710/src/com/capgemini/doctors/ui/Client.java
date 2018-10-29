/**
 * @author Swarup Talukdar
 * @EmployeeID 161710
 */
package com.capgemini.doctors.ui;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.Date;
import java.util.Locale;
import java.util.Scanner;

import com.capgemini.doctors.bean.DoctorAppointment;
import com.capgemini.doctors.exception.DoctorAppointmentException;
import com.capgemini.doctors.service.DoctorAppointmentService;
import com.capgemini.doctors.service.IDoctorAppointmentService;



public class Client {

	/**
	 * @param args
	 */
	public static void main(String[] args) 
	{
		// TODO Auto-generated method stub
		DoctorAppointment bean= new DoctorAppointment();
		DoctorAppointmentService service=new DoctorAppointmentService();
		int appointmentId;
		
		while(true)
		{
			
		
		System.out.println("\n----------------------------------------------------------------");
		System.out.println("|           QUICK APPINTMENT SERVICE APPLICATION                |");
		System.out.println("----------------------------------------------------------------");
		System.out.println("\n\tMENU...\n\t1. Book Doctor Appointment\n\t2. View Doctor Appointment\n\t3. Exit");
		System.out.println("\n----------------------------------------------------------------\n\n");
		System.out.println("\nEnter your choice : ");
		
		Scanner scanner=new Scanner(System.in);
		int choice=scanner.nextInt();
		
		switch(choice)
		{
		case 1:
			boolean temp=false;
			bean.setAppointmentStatus(" DISAPPROVED ");
			DateTimeFormatter format=DateTimeFormatter.ofPattern("DD/MM/YYYY");
			LocalDate date = LocalDate.now();
			//bean.setAppointmentDate(date.format(format));
			
			do
			{
			System.out.print("\nEnter Name of the patient\t:");
			String patientName=scanner.next();
					if (service.validateName(patientName)) 
					{
						temp = true;
						bean.setPatientName(patientName);
					}
					else
					{
						System.err.println("\nInvalid... Only InitCap alphabets allowed !!!");
						temp=false;
					}
			}while (temp == false);
			
			do
			{	
			System.out.print("\nEnter Phone Number\t\t:");
			String phoneNumber=scanner.next();
				if (service.validatePhoneNumber(phoneNumber)) 
				{
					temp = true;
					bean.setPhoneNumber(phoneNumber);
				}
				else
				{
					System.err.println("\nInvalid... Only 10 digits are allowed !!!");
					temp=false;
				}
			}while (temp == false);
			
			do
			{
			System.out.print("\nEnter Email\t\t\t:");
			String email=scanner.next();
					if (service.validateEmail(email)) 
					{
						temp = true;
						bean.setEmail(email);
					}
					else 
					{
						System.err.println("\nInvalid... email should be in this ' xxxxxx.xxxx000@.xxx ' format !!!");
						temp = false;
					}
			}while (temp == false);
		
			do
			{
				System.out.print("\nEnter Age\t\t\t:");
				int age=scanner.nextInt();
					if (service.validateAge(age)) 
					{
						temp = true;
						bean.setAge(age);
					}

					else 
					{
						System.err.println("\nInvalid... Age must be between 1 to 100 !!!");
						temp = false;
					}
			}while (temp == false);
			
			do 
			{
				System.out.print("\nEnter Gender\t\t\t:");
				String gender = scanner.next();
					if (service.validateGender(gender)) 
					{
						temp = true;
						bean.setGender(gender);
					}
					else 
					{
						System.err.println("\nInvalid... Gender should be either M/F or female/male or Male/Female !!!");
						temp = false;
					}
			} while (temp == false);
			
			do
			{

			System.out.print("\nEnter Problem Name\t\t:");
			String problemName=scanner.next();
					if (service.validateProblemName(problemName)) 
					{
						if(problemName.equals("Heart"))
						{
							bean.setDoctorName("Dr. Brijesh Kumar");
							bean.setAppointmentStatus(" APPROVED ");
						}
						if(problemName.equals("Gynecology"))
						{
							bean.setDoctorName("Dr. Sharda Singh");
							bean.setAppointmentStatus(" APPROVED ");
						}
						if(problemName.equals("Diabetes"))
						{
							bean.setDoctorName("Dr. Heena Khan");
							bean.setAppointmentStatus(" APPROVED ");
						}
						if(problemName.equals("ENT"))
						{
							bean.setDoctorName("Dr. Paras mal");
							bean.setAppointmentStatus(" APPROVED ");
						}
						if(problemName.equals("Bone"))
						{
							bean.setDoctorName("Dr. Renuka Kher");
							bean.setAppointmentStatus(" APPROVED ");
						}
						if(problemName.equals("Dermatology"))
						{
							bean.setDoctorName("Dr. Kanika Kapoor");
							bean.setAppointmentStatus(" APPROVED ");
						}
						
						temp = true;
						bean.setProblemName(problemName);
					} 
					else 
					{
						System.err.println("\nInvalid... Either AllCaps or InitCaps are allowed !!!");
						temp = false;
					}
			} while (temp == false);
			
			double ap = Math.random() * Math.pow(10, 4);
			appointmentId = (int) ap;
			bean.setAppointmentID(appointmentId);
			System.out.println("Your Appointment ID :"+ bean.getAppointmentID());
			
			int isAdded;
			try {
				isAdded = service.addDoctorAppointmentDetails(bean);
				if(isAdded == 1)
				{
					System.err.println("\nRecord added successfully...\n");
					//System.out.println(bean);
				}
				else
				{
					System.out.println("Record not added successfully...");
				}
			} catch (DoctorAppointmentException e) {
				// TODO Auto-generated catch block
				e.getMessage();
			}
				
			
			
			
			break;
			
		case 2:
			System.out.println("Enter the appointment Id\t:");
			int appointmentID=scanner.nextInt();
			try {
				service.getDoctorAppointmentDetails(appointmentID);
				bean.setAppointmentID(appointmentID);
				System.out.println("\n**Appointment Date and time, along with doctor's phone number will be shared shortly with you.");
			
			} catch (DoctorAppointmentException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			
			break;
		
		case 3:
			
			System.exit(0);
			break;
		default:
			
		}
		
		}

	}

}
