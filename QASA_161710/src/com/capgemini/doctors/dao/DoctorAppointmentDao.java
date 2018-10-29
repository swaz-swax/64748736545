
/**
 * @author Swarup Talukdar
 * @EmployeeID 161710
 */package com.capgemini.doctors.dao;

import java.util.HashMap;
import java.util.Map;

import com.capgemini.doctors.bean.DoctorAppointment;
import com.capgemini.doctors.exception.DoctorAppointmentException;


public class DoctorAppointmentDao implements IDoctorAppointmentDao 
{

	Map<Integer, DoctorAppointment> appointments=new HashMap<Integer, DoctorAppointment>();
	
	DoctorAppointment beandoctor=new DoctorAppointment();
	
	@Override
	public int addDoctorAppointmentDetails(DoctorAppointment bean)
			throws DoctorAppointmentException 
	{
		
		appointments.put(beandoctor.getAppointmentID(), bean);
		return 1;
	}

	
	@Override
	public DoctorAppointment getDoctorAppointmentDetails(int appointmentId)
			throws DoctorAppointmentException 
	{
		DoctorAppointment appointment=null;
		for(DoctorAppointment bean:appointments.values())
		{
			if((bean.getAppointmentID() == appointmentId))
			{
				appointment=bean;
				System.out.println("Patient Name\t\t: " + bean.getPatientName()+"\nAppointment Status\t:" + bean.getAppointmentStatus() +"\nDoctor Name\t\t: " + bean.getDoctorName());
			}
		}
		return appointment;
	}

}
