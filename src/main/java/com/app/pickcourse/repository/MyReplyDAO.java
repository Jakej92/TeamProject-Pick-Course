package com.app.pickcourse.repository;

import com.app.pickcourse.mapper.MyFeedMapper;
import com.app.pickcourse.mapper.MyReplyMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

@Repository
@RequiredArgsConstructor
public class MyReplyDAO {
    private final MyReplyMapper myReplyMapper;

    public int getMyReplyCount(Long memberId){
        return myReplyMapper.getMyReplyCount(memberId);
    }
}
