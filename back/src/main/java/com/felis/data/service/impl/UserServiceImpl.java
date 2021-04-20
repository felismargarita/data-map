package com.felis.data.service.impl;


import com.felis.data.dao.UserDao;
import com.felis.data.entity.User;
import com.felis.data.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements IUserService {

    @Autowired
    private UserDao userDao;

    @Override
    public User getUserByUsername(String username){
        return userDao.findByUsername(username);
    }
}
