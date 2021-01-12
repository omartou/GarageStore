package com.codecool.stuffservice.service;

import com.codecool.stuffservice.entity.Stuff;
import com.codecool.stuffservice.repository.StuffRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class DBInitializer {

    @Autowired
    private StuffRepository stuffRepository;

    public void initDB() {
        List<Stuff> stuffList = new ArrayList<>();

        stuffList.add(
                Stuff.builder()
                .name("Nike shoes")
                .image("https://www.someurl.com")
                .price(10)
                .build()
        );

        stuffList.add(
                Stuff.builder()
                        .name("Elvis's sunglasses")
                        .image("https://www.otherurl.com")
                        .price(100)
                        .build()
        );

        stuffList.add(
                Stuff.builder()
                        .name("Jamie Oliver knife set")
                        .image("https://www.newurl.com")
                        .price(10)
                        .build()
        );

        stuffRepository.saveAll(stuffList);
    }
}
