package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Bond;
import com.example.demo.service.BondService;

@RestController
@RequestMapping("/api")
public class BondController {
    @Autowired
    private BondService bondService;

    @GetMapping("/bonds")
    public List<Bond> getAllBonds() {
        return bondService.getAllBonds();
    }

    @GetMapping("/bonds/{id}")
    public Bond getBondById(@PathVariable Long id) {
        return bondService.getBondById(id);
    }
}