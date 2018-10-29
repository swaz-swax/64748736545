/**
 * @author Swarup Talukdar
 * @EmployeeID 161710
 */
package com.capgemini.doctors.dao;

import com.capgemini.doctors.bean.DoctorAppointment;
import com.capgemini.doctors.exception.DoctorAppointmentException;

/**
 * @author swtalukd
 *
 */
public interface IDoctorAppointmentDao {

	public int addDoctorAppointmentDetails(DoctorAppointment doctorAppointment) throws DoctorAppointmentException;
	public DoctorAppointment getDoctorAppointmentDetails(int appointmentId)throws DoctorAppointmentException;
}
