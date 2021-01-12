package com.codecool.stuffservice.service;

import com.codecool.stuffservice.entity.Stuff;
import com.codecool.stuffservice.repository.StuffRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StuffProvider {

    @Autowired
    private StuffRepository stuffRepository;

    public List<Stuff> getAllStuff() {
        return stuffRepository.findAll();
    }
}
