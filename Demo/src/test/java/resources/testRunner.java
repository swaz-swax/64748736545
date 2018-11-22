package resources;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(plugin= {"usage","json:jsonop/json-output","html:htmlop/html-output"}, glue= {"com.cg.trg.demo"})
public class testRunner {
}
