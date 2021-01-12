package com.codecool.stuffdetailsservice.controller;

import com.codecool.stuffdetailsservice.entity.StuffDetails;
import com.codecool.stuffdetailsservice.service.StuffDetailsProvider;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@CrossOrigin
@RequestMapping("/detail")
public class StuffDetailsController {

    @Autowired
    private StuffDetailsProvider stuffDetailsProvider;

    @GetMapping("/{stuff_id}")
    public StuffDetails getStuffDetailsByStuffId(@PathVariable("stuff_id") Long stuffId) {
        return stuffDetailsProvider.getStuffDetailsByStuffId(stuffId);
    }

    @PostMapping("/add/{stuff_id}")
    public ResponseEntity addNewStuffDetails(@PathVariable("stuff_id") Long stuffId, @RequestBody StuffDetails stuffDetails) {
        if(stuffDetails.getDescription() == null) {
            return ResponseEntity.badRequest().body("Description should be provided");
        }
        if (stuffDetails.getPurchaseYear() == null) {
            return ResponseEntity.badRequest().body("Purchased year should be provided");
        }
        stuffDetailsProvider.addNewStuffDetails(stuffId, stuffDetails);
        return ResponseEntity.ok("Details successfully created");
    }

}
