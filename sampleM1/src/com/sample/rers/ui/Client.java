package com.sample.rers.ui;

import java.util.Scanner;

import com.sample.rers.bean.Flat;
import com.sample.rers.service.FlatServiceImp;

public class Client 
{

	public static void main(String[] args) 
	{
		Scanner scanner=new Scanner(System.in);
		Flat bean=new Flat();
		FlatServiceImp service=new FlatServiceImp();
		System.out.println("\tADD OWNER ID:");
		
		
		System.out.println("\n-----------------------------------------------------------------------");
		System.out.println("|                         WELCOME TO RERS                             |");
		System.out.println("-----------------------------------------------------------------------");
		System.out.println("\n\tMenu....");
		System.out.println("\t1.REGISTER FLAT");
		System.out.println("\t2.Display Details");
		System.out.println("\t3.Exit");
		System.out.println("\n-----------------------------------------------------------------------");
		System.out.println("Enter your choice:");
		
		
		int choice=scanner.nextInt();
		while(true)
		{
			switch (choice) 
			{
			case 1:
				System.out.println("Existing Owner IDS Are:-  ");
				System.out.print("\nPlease enter your owner id from above list: ");
				bean.setOwnerID(scanner.nextInt());
				System.out.print("\nSelect Flat Type (1-1BHK, 2-2BHK): ");
				bean.setFlatType(scanner.nextInt());
				System.out.print("\nEnter Flat Area in sq. ft.: ");
				bean.setFlatArea(scanner.nextDouble());
				System.out.print("\nEnter desired rent amount Rs: ");
				bean.setRent(scanner.nextDouble());
				System.out.print("\nEnter desired deposit amount Rs: ");
				bean.setDeposit(scanner.nextDouble());

				double id = Math.random() * Math.pow(10, 3);
				bean.setFlatID((int) id);

				System.out.print("\nYour Flat Id is : " + bean.getFlatID());

				/*
				 * boolean isValid=service.validateDeposit(bean);
				 * System.out.println(isValid); if(isValid){ boolean
				 * isAdded=service.registerFlat(bean); if(isAdded){
				 * System.err.println("\nRecord added successfully.... \n");
				 * System.out.println(bean); } else {
				 * System.err.println("Invalid data. Please enter valid data.");
				 * } }
				 */
				break;
			case 2:
				System.out.println("Enter  FLat ID: ");
				Flat f = service.showDetails(scanner.nextInt());
				System.out.println(f);

				break;
			case 3:
				System.exit(0);
				break;

			}
		}
	}

}
