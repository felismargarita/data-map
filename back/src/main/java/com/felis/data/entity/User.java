package com.felis.data.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "user")
public class User {
    @Id
    private String _id;
    private String username;
    private String password;
    private String salt;
    private String nickname;
    private Date createdTime;
    private Date updatedTime;
    private Integer status;
}
