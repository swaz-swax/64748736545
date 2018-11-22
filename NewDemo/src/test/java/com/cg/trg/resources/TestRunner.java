package com.cg.trg.resources;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(plugin= {"usage","html:htmlop/html-output"}, glue= {"com.cg.trg.NewDemo"})
public class TestRunner {

}
