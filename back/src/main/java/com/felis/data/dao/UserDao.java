package com.felis.data.dao;

import com.felis.data.entity.User;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserDao extends MongoRepository<User,String> {
    public User findByUsername(String username);
}
