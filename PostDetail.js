import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getPost } from '../services/api'; // Angenommen, Sie haben eine Methode, um einzelne Posts zu holen

const PostDetail = () => {
  const [post, setPost] = useState(null);
  const { postId } = useParams(); // Post-ID aus URL extrahieren

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await getPost(postId);
        setPost(response.data);
        } catch (error) {
        console.error('Fehler beim Abrufen der Beiträge:', error);
        setError('Beim Abrufen der Beiträge ist ein Fehler aufgetreten.');
        }
    };

    fetchPost();
  }, [postId]);

  if (!post) return <div>Laden...</div>;

  return (
    
    <div>
        {error && <p className="error">{error}</p>}
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      {/* Weitere Post-Details und Kommentare hier anzeigen */}
    </div>
  );
};

export default PostDetail;
