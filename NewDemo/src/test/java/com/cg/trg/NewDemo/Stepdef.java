package com.cg.trg.NewDemo;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Stepdef {
	@Given("^entered user and pass$")
	public void entered_user_and_pass() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		System.out.println("entered user and pass");
	}

	@When("^valid user and pass$")
	public void valid_user_and_pass() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		System.out.println("valid user and pass");
	}

	@Then("^navigate to login successful page$")
	public void navigate_to_login_successful_page() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		 System.out.println("login successful");
	}

	@When("^invalid user and pass$")
	public void invalid_user_and_pass() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		System.out.println("invalid user and pass");
	}

	@Then("^navigate to error page$")
	public void navigate_to_error_page() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	   System.out.println("error page");
	}

}
