package main.api;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/")
public class RestMainController {

    @GetMapping("test")
    public String testEndpoint() {
        return "Test Endpoint Response";
    }
}
