import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import {
  CommonButton,
  CommonForm,
  CommonInput,
  CommonSubTitle,
  CommonTextarea,
  CommonTitle,
} from '../../styles/common.style';
import { RouteLink, UserRole } from '../../utils/constants';
import { formatDate } from '../../utils/utils';

interface Post {
  id: number;
  title: string;
  content: string;
  author: string;
  createdAt: string;
}

const BoardForm: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { userId, userRole } = useAuth();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    if (id) {
      setIsEdit(true);
      const savedPosts = localStorage.getItem('board_posts');
      if (savedPosts) {
        const posts = JSON.parse(savedPosts);
        const post = posts.find((p: Post) => p.id === Number(id));
        if (post) {
          if (userId !== post.author && userRole !== UserRole.ADMIN) {
            alert('권한이 없습니다.');
            navigate(RouteLink.BOARD);
            return;
          }
          setTitle(post.title);
          setContent(post.content);
        }
      }
    } else {
      setIsEdit(false);
      setTitle('');
      setContent('');
    }
  }, [id, userId, userRole, navigate]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !content) return;

    const savedPosts = localStorage.getItem('board_posts');
    const posts = savedPosts ? JSON.parse(savedPosts) : [];

    if (isEdit) {
      const updatedPosts = posts.map((p: Post) => (p.id === Number(id) ? { ...p, title, content } : p));
      localStorage.setItem('board_posts', JSON.stringify(updatedPosts));
      navigate(RouteLink.BOARD_DETAIL.replace(':id', id || ''));
    } else {
      const newPost = {
        id: posts.length > 0 ? Math.max(...posts.map((p: any) => p.id)) + 1 : 1,
        title,
        content,
        author: userId || '익명',
        createdAt: formatDate(new Date()),
      };
      const updatedPosts = [newPost, ...posts];
      localStorage.setItem('board_posts', JSON.stringify(updatedPosts));
      navigate(RouteLink.BOARD);
    }
  };

  return (
    <div>
      <CommonTitle>자유게시판 {isEdit ? '수정' : '등록'}</CommonTitle>

      <CommonForm onSubmit={handleSubmit} style={{ marginTop: '30px' }}>
        <CommonInput
          placeholder="제목을 입력하세요"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <CommonTextarea
          placeholder="내용을 입력하세요"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />

        <div
          style={{ marginTop: '40px', display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '10px' }}
        >
          <CommonButton
            type="button"
            onClick={() =>
              isEdit ? navigate(RouteLink.BOARD_DETAIL.replace(':id', id || '')) : navigate(RouteLink.BOARD)
            }
            style={{ width: 'auto', padding: '10px 24px', backgroundColor: '#86868b' }}
          >
            취소
          </CommonButton>
          <CommonButton type="submit" style={{ width: 'auto', padding: '10px 24px' }}>
            {isEdit ? '수정완료' : '등록'}
          </CommonButton>
        </div>
      </CommonForm>
    </div>
  );
};

export default BoardForm;
