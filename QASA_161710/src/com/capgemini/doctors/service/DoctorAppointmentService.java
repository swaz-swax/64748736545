/**
 * @author Swarup Talukdar
 * @EmployeeID 161710
 */

package com.capgemini.doctors.service;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

import com.capgemini.doctors.bean.DoctorAppointment;
import com.capgemini.doctors.dao.DoctorAppointmentDao;
import com.capgemini.doctors.dao.IDoctorAppointmentDao;
import com.capgemini.doctors.exception.DoctorAppointmentException;

public class DoctorAppointmentService implements IDoctorAppointmentService 
{
	IDoctorAppointmentDao dao=new DoctorAppointmentDao();
	
	
	@Override
	public int addDoctorAppointmentDetails(DoctorAppointment doctorAppointment)
			throws DoctorAppointmentException 
	{
		
		return dao.addDoctorAppointmentDetails(doctorAppointment);
	}

	
	@Override
	public DoctorAppointment getDoctorAppointmentDetails(int appointmentId)
			throws DoctorAppointmentException 
	{
		
		return dao.getDoctorAppointmentDetails(appointmentId);
	}
	
	public boolean validateName(String patientName) 
	{
		boolean flag=false;
		Pattern vName=Pattern.compile("^[A-Z][A-Za-z\\s]*$");
		Matcher match = vName.matcher(patientName);
		
		if(match.matches())
		{
			flag=true;
		}
		return flag;
	}
	
	public boolean validatePhoneNumber(String phoneNumber) 
	{
		boolean flag=false;
		Pattern vPhNo=Pattern.compile("\\d{10}");
		Matcher match = vPhNo.matcher(phoneNumber);
		
		if(match.matches())
		{
			flag=true;
		}
		return flag;
	}
	
	public boolean validateEmail(String email) 
	{
		boolean flag=false;
		Pattern vEmail=Pattern.compile("[a-z.0-9]+@[a-z]+.[a-z]+");
		Matcher match = vEmail.matcher(email);
		
		if(match.matches())
		{
			flag=true;
		}
		return flag;
	}
	
	public boolean validateAge(int age) 
	{
		boolean flag=false;
		
		if(age>=0 && age<=100)
		{
			flag=true;
		}
		return flag;
	}
	
	
	public boolean validateGender(String gender) 
	{
		boolean flag=false;
		Pattern vGender=Pattern.compile("^(?:m|M|male|Male|f|F|female|Female)$");
		Matcher match = vGender.matcher(gender);
		
		if(match.matches())
		{
			flag=true;
		}
		return flag;
	}
	
	public boolean validateProblemName(String problemName) 
	{
		boolean flag=false;
		Pattern vProblemName=Pattern.compile("[A-Z][A-Za-z]+");
		Matcher match = vProblemName.matcher(problemName);
		
		if(match.matches())
		{
			flag=true;
		}
		return flag;
	}

}
