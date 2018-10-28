package com.sample.rers.db;

import java.util.HashMap;
import java.util.Map;

import com.sample.rers.bean.Flat;

public class FlatDB {
	static Map<Integer,Flat> hashMap=new HashMap<Integer,Flat>();
	static{
	hashMap.put(1,new Flat());
	hashMap.put(2,new Flat());
	hashMap.put(3,new Flat());
	}

}
