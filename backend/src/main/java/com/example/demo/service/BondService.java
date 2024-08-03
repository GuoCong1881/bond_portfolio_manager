package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Bond;
import com.example.demo.repository.BondRepository;

@Service
public class BondService {
    @Autowired
    private BondRepository bondRepository;

    public List<Bond> getAllBonds() {
        return bondRepository.findAll();
    }

    public Bond getBondById(Long id) {
        return bondRepository.findById(id).orElse(null);
    }
}