package com.codecool.stuffservice.controller;

import com.codecool.stuffservice.entity.Stuff;
import com.codecool.stuffservice.service.StuffProvider;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/stuff")
public class StuffController {

    @Autowired
    private StuffProvider stuffProvider;

    @GetMapping("/all")
    public List<Stuff> getAllStuff() {
        return stuffProvider.getAllStuff();
    }
}
