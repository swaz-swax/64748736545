package com.cg.trg.NewDemo;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class StepdefBack {
	@Given("^entered userb and passb$")
	public void entered_userb_and_passb() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    System.err.println("entered userb and passb");
	}

	@When("^valid userb and passb$")
	public void valid_userb_and_passb() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	  System.err.println("valid userb and passb");
	}

	@Then("^executed in background$")
	public void executed_in_background() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    System.err.println("executed in background");
	}
	@Given("^I entered two numbers (\\d+) and (\\d+)$")
	public void i_entered_two_numbers_and(int arg1, int arg2) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    System.out.println(arg1 +" "+ arg2);
	}

	@When("^multiply two numbers (\\d+)$")
	public void multiply_two_numbers(int arg1) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    System.out.println("product= "+arg1);
	}

	@Then("^show the result in (\\d+)$")
	public void show_the_result_in(int arg1) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		System.out.println("result= "+arg1);
	}
}
