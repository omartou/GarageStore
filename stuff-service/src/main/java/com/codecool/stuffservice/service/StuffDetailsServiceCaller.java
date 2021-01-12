package com.codecool.stuffservice.service;

import com.codecool.stuffservice.model.StuffDetailsResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class StuffDetailsServiceCaller {

    @Value("${stuffdetailsservice.url}")
    private String baseURL;

    @Autowired
    private RestTemplate restTemplate;

    public StuffDetailsResult getStuffDetailsResultByStuffId(Long stuffId) {
        return restTemplate
                .getForEntity(baseURL + "/detail/" + stuffId, StuffDetailsResult.class)
                .getBody();
    }
}