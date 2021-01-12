package com.codecool.stuffservice.repository;

import com.codecool.stuffservice.entity.Stuff;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StuffRepository extends JpaRepository<Stuff, Long> {

}
