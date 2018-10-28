package com.sample.rers.dao;

import java.util.ArrayList;

import java.util.List;
import com.sample.rers.bean.Flat;

public class FlatDaoImp implements IFlatDao {
	static List<Flat> flatList=new ArrayList<Flat>();
	@Override
	public boolean registerFlat(Flat f) {
		// TODO Auto-generated method stub
		return flatList.add(f);
	}

	@Override
	public Flat showDetails(int flatId) {
		Flat flat=null;
		for(Flat f:flatList)
		{
			if(flat.getFlatID() == flatId)
			{
				flat=f;
			}
		}
		return flat;
	}

}
