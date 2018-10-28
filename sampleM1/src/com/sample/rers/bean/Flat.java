package com.sample.rers.bean;

public class Flat {
	private int ownerID;
	private int flatType;
	private double flatArea;
	private double rent;
	private double deposit;
	private int flatID;
	
	
	public Flat() {
		super();
		
	}

	public Flat(int ownerID, int flatType, double flatArea, double rent, double deposit, int flatID) {
		super();
		this.ownerID = ownerID;
		this.flatType = flatType;
		this.flatArea = flatArea;
		this.rent = rent;
		this.deposit = deposit;
		this.flatID = flatID;
	}




	public int getFlatID() {
		return flatID;
	}

	public void setFlatID(int flatID) {
		this.flatID = flatID;
	}

	public int getOwnerID() {
		return ownerID;
	}
	public void setOwnerID(int ownerID) {
		this.ownerID = ownerID;
	}
	public int getFlatType() {
		return flatType;
	}
	public void setFlatType(int flatType) {
		this.flatType = flatType;
	}
	public double getFlatArea() {
		return flatArea;
	}
	public void setFlatArea(double flatArea) {
		this.flatArea = flatArea;
	}
	public double getRent() {
		return rent;
	}
	public void setRent(double rent) {
		this.rent = rent;
	}
	public double getDeposit() {
		return deposit;
	}
	public void setDeposit(double deposit) {
		this.deposit = deposit;
	}
	
	
	
	@Override
	public String toString() {
		return "Flat [ownerID=" + ownerID + ", flatType=" + flatType + ", flatArea=" + flatArea + ", rent=" + rent
				+ ", deposit=" + deposit + "]";
	}
	
	
	
	
	
}
