package com.example.demo.config;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import com.example.demo.model.Bond;
import com.example.demo.repository.BondRepository;

import org.springframework.beans.factory.annotation.Autowired;

@Component
public class DataLoader implements CommandLineRunner {

    @Autowired
    private BondRepository bondRepository;

    @Override
    public void run(String... args) throws Exception {
        bondRepository.save(new Bond("Bond A", "2025-12-31", false, "Details about Bond A"));
        bondRepository.save(new Bond("Bond B", "2023-06-30", true, "Details about Bond B"));
        bondRepository.save(new Bond("Bond C", "2024-11-15", false, "Details about Bond C"));
    }
}