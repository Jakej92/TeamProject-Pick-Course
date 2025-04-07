package com.app.pickcourse.mapper;

import com.app.pickcourse.domain.dto.ReplyListDTO;
import com.app.pickcourse.domain.vo.ReplyVO;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface GeneralReplyMapper {

    void postReplyList(ReplyVO replyVO);

    List<ReplyListDTO> getReplyList(Long feedId);

    void deleteReplyList(Long id);
}
