package com.jxust.btcexplorer.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class IndexController {

    @RequestMapping("/")
    public String index() {
        System.out.println("index page");
        return "layout-fullscreen.html";
    }

    @RequestMapping("/layout-fullscreen.html")
    public String fullscreen() {
        return "layout-fullscreen.html";
    }
}
