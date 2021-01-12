package com.codecool.stuffservice.service;

import com.codecool.stuffservice.entity.Stuff;
import com.codecool.stuffservice.model.StuffDetailsResult;
import com.codecool.stuffservice.model.StuffWithDetails;
import com.codecool.stuffservice.repository.StuffRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;
import java.util.Optional;

@Service
public class StuffProvider {

    @Autowired
    private StuffRepository stuffRepository;

    @Autowired
    private StuffDetailsServiceCaller stuffDetailsServiceCaller;

    public List<Stuff> getAllStuff() {
        return stuffRepository.findAll();
    }

    public StuffWithDetails getStuffWithDetailsByStuffId(Long stuffId) {
        StuffWithDetails stuffWithDetails = StuffWithDetails.builder().build();
        Optional<Stuff> stuff = stuffRepository.findById(stuffId);

        if (stuff.isPresent()) {
            StuffDetailsResult stuffDetailsResult = stuffDetailsServiceCaller
                    .getStuffDetailsResultByStuffId(stuffId);
            stuffWithDetails.setStuff(stuff.get());
            stuffWithDetails.setStuffDetailsResult(stuffDetailsResult);
        }

        return stuffWithDetails;
    }

    public void updateStuffById(Long stuffId, StuffWithDetails stuffWithDetails) {
        Stuff updatedStuff = stuffWithDetails.getStuff();
        updatedStuff.setId(stuffId);
        stuffRepository.save(updatedStuff);
        stuffDetailsServiceCaller.updateStuffDetailsByStuffId(stuffId, stuffWithDetails.getStuffDetailsResult());
    }
}
