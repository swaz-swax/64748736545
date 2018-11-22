package com.cg.trg.NewDemo;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class Stepdef2 {
	@Given("^I entered user and pass$")
	public void i_entered_user_and_pass() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    System.out.println("I entered user and pass");
	}

	@And("^I entered mobile and email$")
	public void i_entered_mobile_and_email() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		System.out.println("I entered mobile and email");
	}

	@Then("^User should be registered successfully$")
	public void user_should_be_registered_successfully() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		System.out.println("User should be registered successfully");
	}
}
