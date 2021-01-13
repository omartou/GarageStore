package com.codecool.stuffservice.service;

import com.codecool.stuffservice.entity.Stuff;
import com.codecool.stuffservice.repository.StuffRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import java.util.ArrayList;
import java.util.List;

@Component
public class DBInitializer {

    @Autowired
    private StuffRepository stuffRepository;

    private static Logger LOGGER = LoggerFactory.getLogger(DBInitializer.class);

    @PostConstruct
    public void postConstruct() {
        LOGGER.info("Initializing stuff database");
        List<Stuff> stuffList = new ArrayList<>();
        stuffList.add(Stuff.builder().name("Nike shoes").image("https://www.someurl.com").price(10).build());
        stuffList.add(Stuff.builder().name("Elvis's sunglasses").image("https://www.otherurl.com").price(100).build());
        stuffList.add(Stuff.builder().name("Jamie Oliver knife set").image("https://www.newurl.com").price(10).build());
        stuffList.add(Stuff.builder().name("Samurai sword").image("https://www.newurl.com").price(10000).build());
        stuffList.add(Stuff.builder().name("IronMan suit").image("https://www.newurl.com").price(1000).build());
        stuffRepository.saveAll(stuffList);
        LOGGER.info("Initializing stuff finished");
    }
}
