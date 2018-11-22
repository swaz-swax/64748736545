package com.cg.trg.NewDemo;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class StepDefCalculator {
	@Given("^entered two numbers (\\d+) and (\\d+)$")
	public void entered_two_numbers_and(int arg1, int arg2) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    System.out.println(arg1 +" "+arg2);
	}

	@When("^added two numbers (\\d+)$")
	public void added_two_numbers(int arg1) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	   System.out.println(arg1);
	}

	@Then("^show the add result (\\d+)$")
	public void show_the_add_result(int arg1) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		System.out.println("sum result: "+" "+arg1);
	}

	@When("^subtracted two numbers (\\d+)$")
	public void subtracted_two_numbers(int arg1) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		System.out.println(arg1);
	}

	@Then("^show the sub result (\\d+)$")
	public void show_the_sub_result(int arg1) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		System.out.println("subtraction result: "+" "+arg1);
	}

	@When("^multiplied two numbers (\\d+)$")
	public void multiplied_two_numbers(int arg1) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		System.out.println(arg1);
	}

	@Then("^show the prod result (\\d+)$")
	public void show_the_prod_result(int arg1) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		System.out.println("product result: "+" "+arg1);
	}

	@When("^divided two numbers (\\d+)$")
	public void divided_two_numbers(int arg1) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		System.out.println(arg1);
	}

	@Then("^show the div result (\\d+)$")
	public void show_the_div_result(int arg1) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		System.out.println("division result: "+" "+arg1);
	}


}
