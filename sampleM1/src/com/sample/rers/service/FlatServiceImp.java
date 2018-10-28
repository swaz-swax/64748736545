package com.sample.rers.service;

import com.sample.rers.bean.Flat;
import com.sample.rers.dao.FlatDaoImp;

public class FlatServiceImp implements IFlatService {
   FlatDaoImp dao=new FlatDaoImp();
	@Override
	public boolean registerFlat(Flat f) {
		
		return dao.registerFlat(f);
	}

	@Override
	public Flat showDetails(int flatId) {
		return dao.showDetails(flatId);
	}

	
	/*public boolean validateDeposit(Flat f)
	{	boolean flag=false;
		if(f.getDeposit()>=f.getRent())
		{
			flag=true;
		}
		return flag;	
	}*/
	
}
