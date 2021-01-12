package com.codecool.stuffdetailsservice.service;

import com.codecool.stuffdetailsservice.entity.StuffDetails;
import com.codecool.stuffdetailsservice.repository.StuffDetailsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class DBInitializer {

    @Autowired
    private StuffDetailsRepository stuffDetailsRepository;

    public void initDB() {
        List<StuffDetails> stuffDetailsList = new ArrayList<>();

        stuffDetailsList.add(
                StuffDetails.builder()
                  .purchaseYear("2019")
                  .description("Beleive me it is original, but I have more than 10 pairs!")
                  .youtubeVideoUrl("https://www.youtube.com/watch?.....")
                  .stuffId(1L)
                  .build()
        );

        stuffDetailsList.add(
                StuffDetails.builder()
                        .purchaseYear("2018")
                        .description("No UV filter, but who cares? This was owned by Elvis once!")
                        .youtubeVideoUrl("https://www.youtube.com/watch?.....")
                        .stuffId(2L)
                        .build()
        );

        stuffDetailsList.add(
                StuffDetails.builder()
                        .purchaseYear("2020")
                        .description("Knife set of 12pcs. So Sharp so Good!")
                        .youtubeVideoUrl("https://www.youtube.com/watch?.....")
                        .stuffId(3L)
                        .build()
        );

        stuffDetailsRepository.saveAll(stuffDetailsList);
    }
}
