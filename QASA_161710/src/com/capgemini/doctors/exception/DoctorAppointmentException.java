/**
 * @author Swarup Talukdar
 * @EmployeeID 161710
 */
package com.capgemini.doctors.exception;


public class DoctorAppointmentException extends Exception 
{

	/**
	 * 
	 */
	public DoctorAppointmentException() {
		super();
		
	}

	/**
	 * @param Exception object
	 */
	public DoctorAppointmentException(Exception e) {
		super(e);
		e.getMessage();
		
	}

}
