/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable no-shadow */
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useNewsStore } from '../..';
import APIs from '../../apis';
import { CommonButton, CommonTitle } from '../../styles/common.style';
import { NewsComment } from '../../types/newFeed.type';

const Comment: React.FC<{ comment: NewsComment }> = ({ comment }) => (
  <div style={{ paddingLeft: `${comment.level * 40}px`, marginTop: '16px' }}>
    <div style={{ color: '#86868b', fontSize: '14px', marginBottom: '8px' }}>
      <strong>{comment.user}</strong> · {comment.time_ago}
    </div>
    <div
      style={{
        padding: '16px',
        backgroundColor: '#f5f5f7',
        borderRadius: '12px',
        fontSize: '15px',
        lineHeight: '1.6',
        color: '#1d1d1f',
      }}
      dangerouslySetInnerHTML={{ __html: comment.content }}
    />
    {comment.comments.length > 0 && (
      <div style={{ marginTop: '10px' }}>
        {comment.comments.map((child) => (
          <Comment key={child.id} comment={child} />
        ))}
      </div>
    )}
  </div>
);

const FreeBoardDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const store = useNewsStore();

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [comments, setComments] = useState<NewsComment[]>([]);

  useEffect(() => {
    const fetchDetail = async () => {
      if (id) {
        const api = new APIs.Freeboard.NewsDetailApi(id);
        const { title, content, comments } = await api.getData();

        setTitle(title);
        setContent(content);
        setComments(comments);

        store.makeRead(Number(id));
      }
    };

    fetchDetail();
  }, [id, store]);

  return (
    <div>
      <CommonTitle>자유게시판 상세보기</CommonTitle>

      <div style={{ borderBottom: '1px solid #eee', paddingBottom: '20px', marginBottom: '20px', marginTop: '30px' }}>
        <h2 style={{ fontSize: '24px', fontWeight: '600', color: '#1d1d1f' }}>{title}</h2>
      </div>

      <div
        style={{
          minHeight: '100px',
          lineHeight: '1.8',
          fontSize: '16px',
          color: '#1d1d1f',
          padding: '20px 0',
        }}
        dangerouslySetInnerHTML={{ __html: content }}
      />

      <div style={{ marginTop: '40px', borderTop: '1px solid #eee', paddingTop: '30px' }}>
        <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '20px' }}>댓글 {comments.length}개</h3>
        {comments.map((comment) => (
          <Comment key={comment.id} comment={comment} />
        ))}
      </div>

      <div style={{ marginTop: '40px', display: 'flex', justifyContent: 'flex-end' }}>
        <CommonButton
          onClick={() => navigate(-1)}
          style={{ width: 'auto', padding: '10px 24px', backgroundColor: '#86868b' }}
        >
          목록
        </CommonButton>
      </div>
    </div>
  );
};

export default FreeBoardDetail;
