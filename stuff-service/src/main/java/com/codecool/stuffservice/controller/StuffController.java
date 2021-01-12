package com.codecool.stuffservice.controller;

import com.codecool.stuffservice.entity.Stuff;
import com.codecool.stuffservice.model.StuffWithDetails;
import com.codecool.stuffservice.service.StuffProvider;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
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

    @PostMapping("/{stuff_id}")
    public void setSoldStatusByStuffId(@PathVariable("stuff_id") Long stuffId) {
        stuffProvider.setSoldStatusByStuffId(stuffId);
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

    @PostMapping("/add")
    public ResponseEntity addNewStuffWithDetails(@RequestBody StuffWithDetails stuffWithDetails) {
        if (stuffWithDetails.getStuff().getName() == null) {
            return ResponseEntity.badRequest().body("Stuff' name should be provided");
        }
        if (stuffWithDetails.getStuff().getPrice() == 0) {
            return ResponseEntity.badRequest().body("Stuff' price should be provided");
        }
        stuffProvider.addNewStuffWithDetails(stuffWithDetails);
        return ResponseEntity.ok("Stuff with details successfully created");

    }
}
