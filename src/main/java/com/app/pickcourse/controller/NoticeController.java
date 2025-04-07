package com.app.pickcourse.controller;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/main-page/*")
public class NoticeController {

    @GetMapping("notice")
    public void notice(){}

}
