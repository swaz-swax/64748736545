package com.sample.rers.service;

import com.sample.rers.bean.Flat;

public interface IFlatService {
	public boolean registerFlat(Flat f);
	public Flat showDetails(int flatId);
}
