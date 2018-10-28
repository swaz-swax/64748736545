package com.sample.rers.dao;

import com.sample.rers.bean.Flat;

public interface IFlatDao {

	public boolean registerFlat(Flat f);
	public Flat showDetails(int flatId);
	

}
