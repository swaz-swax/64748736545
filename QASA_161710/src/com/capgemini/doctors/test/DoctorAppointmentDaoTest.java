/**
 * @author Swarup Talukdar
 * @EmployeeID 161710
 */
package com.capgemini.doctors.test;

import static org.junit.Assert.*;

import org.junit.Test;

import com.capgemini.doctors.bean.DoctorAppointment;

public class DoctorAppointmentDaoTest 
{
	DoctorAppointment bean=new DoctorAppointment();
	@Test
	public void testAddDoctorAppointmentDetails() 
	{
		assertNotNull(bean);
		//fail("Not yet implemented");
	}

	@Test
	public void testGetDoctorAppointmentDetails() 
	{
		assertNotNull(bean.getAppointmentID());
				//fail("Not yet implemented");
	}

}
