package com.codecool.stuffservice;

import com.codecool.stuffservice.service.DBInitializer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.loadbalancer.LoadBalanced;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.context.annotation.Bean;
import org.springframework.web.client.RestTemplate;

@SpringBootApplication
@EnableEurekaClient
public class StuffServiceApplication {

	@Autowired
	private DBInitializer dbInitializer;

	public static void main(String[] args) {
		SpringApplication.run(StuffServiceApplication.class, args);
	}

	@Bean
	public CommandLineRunner init() {
		return args -> {
			dbInitializer.initDB();
		};
	}

	@Bean
	@LoadBalanced
	public RestTemplate restTemplate() {
		return new RestTemplate();
	}

}
