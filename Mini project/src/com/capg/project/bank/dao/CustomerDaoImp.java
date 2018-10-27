package com.capg.project.bank.dao;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.Iterator;

import java.util.List;
import com.capg.project.bank.bean.Customer;

public class CustomerDaoImp implements ICustomerDao {

	static HashMap<Long, Customer> hashMap=new HashMap<Long, Customer>();
	static List<String> tList=new ArrayList<String>();
	
	Customer bean=new Customer();
	
	@Override
	public boolean createAccount(long accountNumber, Customer bean) 
	{
		long a  = bean.getAccountNumber();
		hashMap.put(a, bean);
		return true;
		
	}

	@Override
	public Customer showBalance(long accountNumber, int pin) 
	{
		Customer cust=null;
		for(Customer c:hashMap.values())
		{
			if((c.getAccountNumber() == accountNumber) && (c.getPin()==pin))
			{
				cust=c;
				System.out.println("Balance = " + c.getBalance());
			}
		}
		return cust;
	}
	

	@Override
	public boolean deposit(long accountNumber, int pin, double dAmount) 
	{	
		boolean flag=false;
	
		DateFormat dateFormat = new SimpleDateFormat("yyyy/MM/dd HH:mm:ss");
		Date date = new Date();
		for(Customer c:hashMap.values())
		{
		if((c.getAccountNumber() == accountNumber) && (c.getPin()==pin))
		{	
			flag=true;
		
			double bal=c.getBalance();
			System.out.println("Previous Balance = "+ bal );
			bal=bal+dAmount;
			c.setBalance(bal);
	
			tList.add(dateFormat.format(date) +" : "+ accountNumber + "\tdeposited Rs. " + dAmount + " \t\t\t\t\t\t" + bal);
			System.out.println("New Balance = " + c.getBalance());
			
		}
		}
		System.out.println("hashmap is " + hashMap);
		return flag;			
	}

	@Override
	public boolean withdraw(long accountNumber, int pin, double wAmount) 
	{
		boolean flag= false;
		Customer cust = null;
		
		DateFormat dateFormat = new SimpleDateFormat("yyyy/MM/dd HH:mm:ss");
		Date date = new Date();
		
		for(Customer c:hashMap.values()){
		if((c.getAccountNumber() == accountNumber) && (c.getPin()==pin) && (c.getBalance()>wAmount))
		{
			
			flag=true;
			
			double bal=c.getBalance();
			System.out.println("Previous Balance = "+ bal );

				bal=bal-wAmount;
				System.out.println("New Balance = "+bal);
				c.setBalance(bal);
	
			tList.add(dateFormat.format(date) +" : "+accountNumber + "\twithdrawn Rs. " + wAmount + " \t\t\t\t\t\t" + bal);
			
			cust=c;
		}
		}
			return flag;	
	}

	@Override
	public boolean fundTransfer(long dAccountNumber, int dpin,
			long cAccountNumber, double dAmount) 
	{
		boolean flag=false;
		double deb=0.0;
		double cred=0.0;
		
		for(Customer c:hashMap.values())
		{
			if((c.getAccountNumber() == dAccountNumber) && (c.getPin()==dpin))
			{
				flag=true;
	
				DateFormat dateFormat = new SimpleDateFormat("yyyy/MM/dd HH:mm:ss");
				Date date = new Date();

				deb=c.getBalance();
				deb=deb-dAmount;
				c.setBalance(deb);
				System.out.println(deb+" bal after debit transaction from" + dAccountNumber);

				tList.add(dateFormat.format(date) +" : "+dAccountNumber + "\tTransferred Rs. " + dAmount +" to " + cAccountNumber + "\t\t\t\t\t" + deb);
				
				for(Customer c1:hashMap.values())
				{
					if(c1.getAccountNumber() == cAccountNumber)
					{
						flag=true;
	
						DateFormat dateFormat1 = new SimpleDateFormat("yyyy/MM/dd HH:mm:ss");
						Date date1 = new Date();
	
						cred=c1.getBalance();
						cred=cred+dAmount;
						c1.setBalance(cred);	
						System.out.println(cred+" bal after credited transaction to" + cAccountNumber);
						tList.add(dateFormat1.format(date1) +" : "+cAccountNumber + "\tCredited on Fund Transfer by Rs. " + dAmount +" from A/C " + dAccountNumber + " \t\t" + cred);
					
					}
					else
					{
						flag=false;
					}
					
				}
			}
		}
		
		return flag;
	}

	@Override
	public boolean printTansaction(long accountNumber, int pin) 
	{						
					Iterator<String> itr = tList.iterator();
					while (itr.hasNext()) 
					{
						Object element = itr.next();
						System.out.println(element + "\n");
						
						
					}
	return true;
	
	}
}

