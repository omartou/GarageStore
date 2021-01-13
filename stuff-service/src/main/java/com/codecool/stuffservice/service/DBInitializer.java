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

        stuffList.add(Stuff.builder()
                .name("Nike shoes")
                .image("https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8c2hvZXN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60")
                .price(10)
                .build());

        stuffList.add(Stuff.builder()
                .name("Elvis's sunglasses")
                .image("https://m.media-amazon.com/images/I/61ia597d0kL.jpg")
                .price(100)
                .build());

        stuffList.add(Stuff.builder()
                .name("Jamie Oliver knife set")
                .image("https://cdn77.online-textil.com/upload/images/73/d2/73d26837059aa00a2be3530c00fff00ap9890-1280x1280.jpg")
                .price(10).build());

        stuffList.add(Stuff.builder()
                .name("Samurai sword")
                .image("https://media.istockphoto.com/photos/samurai-sword-katana-picture-id535334763")
                .price(10000).build());

        stuffList.add(Stuff.builder()
                .name("IronMan suit")
                .image("https://mk47.buyfullbodyarmors.com/media/iron_man_suit_mark_47_armor_costume_buyfullbodyarmors_com_review3.jpg")
                .price(1000).build());

        stuffRepository.saveAll(stuffList);
        LOGGER.info("Initializing stuff finished");
    }
}
