package com.felis.data;

import com.felis.data.dao.UserDao;
import com.felis.data.entity.User;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class DataApplicationTests {

    @Autowired
    private UserDao userDao;

    @Test
    void contextLoads() {
        User user = userDao.findByUsername("admin");
        System.out.println(user.toString());
    }

}
