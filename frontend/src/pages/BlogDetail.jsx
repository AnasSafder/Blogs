import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Input, Button, message,Typography } from 'antd';
import api from '../api/axios';

export default function BlogDetail() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [edit, setEdit] = useState(false);
  const [formData, setFormData] = useState({ title: '', content: '' });

  useEffect(() => {
  const userId = Math.floor(id / 10);
  api.get(`/users/${userId}/posts`).then((res) => {
    const found = res.data.posts.find((p) => p.id === parseInt(id));
    setPost(found);
    setFormData(found);
  });
}, [id]);

  const handleSave = async () => {
  try {
    const response = await api.put(`https://jsonplaceholder.typicode.com/posts/${id}`, formData);
    setPost(response.data);
    setEdit(false);
    message.success('Post updated');
  } catch (error) {
    console.error('Failed to update post:', error);
    message.error('Failed to update post');
  }
};


  if (!post) return <p>Loading...</p>;

  return (
    <div style={{ padding: '16px' }}>
       {edit ? (
    <>
      <Input
        value={formData.title}
        onChange={e => setFormData({ ...formData, title: e.target.value })}
        style={{ marginBottom: '8px' }}
      />
      <Input.TextArea
        rows={4}
        value={formData.content}
        onChange={e => setFormData({ ...formData, content: e.target.value })}
      />
      <Button type="primary" onClick={handleSave} style={{ marginTop: '8px' }}>
        Save
      </Button>
    </>
  ) : (
    <div
      style={{
        display: 'flex',
        backgroundColor: '#f9f9f9',
        borderRadius: '8px',
        padding: '16px',
        alignItems: 'flex-start',
        gap: '16px',
      }}
    >
      <img
        src={post.image}
        alt="Blog"
        style={{
          width: 100,
          height: 100,
          borderRadius: 8,
          objectFit: 'cover',
          marginRight: 16,
        }}
      />
      <div style={{ flex: 1 }}>
        <Typography.Title style={{margin:0}} level={5}>
          {post.title}
        </Typography.Title>
        <Typography.Paragraph >
          {post.content}
        </Typography.Paragraph>
        <div style={{ marginTop: 8 }}>
          <Button type="primary" onClick={() => setEdit(true)}>Edit</Button>
          <Button danger style={{ marginLeft: '8px' }}>Delete</Button>
        </div>
      </div>
    </div>
  )}
    </div>
  );
}
