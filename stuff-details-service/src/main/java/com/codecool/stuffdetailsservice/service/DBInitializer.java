package com.codecool.stuffdetailsservice.service;

import com.codecool.stuffdetailsservice.entity.StuffDetails;
import com.codecool.stuffdetailsservice.repository.StuffDetailsRepository;
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
    private StuffDetailsRepository stuffDetailsRepository;

    private static Logger LOGGER = LoggerFactory.getLogger(DBInitializer.class);

    @PostConstruct
    public void postConstruct() {
        LOGGER.info("Initializing stuff details database");
        List<StuffDetails> stuffDetailsList = new ArrayList<>();
        stuffDetailsList.add(StuffDetails.builder()
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

        stuffDetailsList.add(
                StuffDetails.builder()
                        .purchaseYear("1980")
                        .description("Sword of Uma Turman from the famous movie Kill Bill! Yeees... of course made by Hattori Hanso!")
                        .youtubeVideoUrl("https://www.youtube.com/watch?.....")
                        .stuffId(4L)
                        .build()
        );

        stuffDetailsList.add(
                StuffDetails.builder()
                        .purchaseYear("1990")
                        .description("TODO OMAR")
                        .youtubeVideoUrl("https://www.youtube.com/watch?.....")
                        .stuffId(5L)
                        .build()
        );

        stuffDetailsRepository.saveAll(stuffDetailsList);
        LOGGER.info("Initializing stuff details finished");
    }
}
