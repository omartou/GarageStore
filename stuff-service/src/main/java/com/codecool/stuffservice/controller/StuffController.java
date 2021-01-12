package com.codecool.stuffservice.controller;

import com.codecool.stuffservice.entity.Stuff;
import com.codecool.stuffservice.model.StuffWithDetails;
import com.codecool.stuffservice.service.StuffProvider;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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

    @GetMapping("/{stuff_id}")
    public StuffWithDetails getStuffWithDetailsByStuffId(@PathVariable("stuff_id") Long stuffId) {
        return stuffProvider.getStuffWithDetailsByStuffId(stuffId);
    }

    // maybe we can ignore this method, because the method above is doing the same ?!?!
    @GetMapping("/{stuff_id}/update")
    public StuffWithDetails getStuffForUpdateById(@PathVariable("stuff_id") Long stuffId) {
        return stuffProvider.getStuffWithDetailsByStuffId(stuffId);
    }

    @PutMapping("/{stuff_id}/update")
    public void updateStuffById(@PathVariable("stuff_id") Long stuffId,
            @RequestBody StuffWithDetails stuffWithDetails) {
        stuffProvider.updateStuffById(stuffId, stuffWithDetails);
    }

}
