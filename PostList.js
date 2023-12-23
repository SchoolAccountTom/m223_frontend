import React, { useState, useEffect } from 'react';
import { getPosts } from '../services/api';
import CommentForm from './CommentForm';
import { Link } from 'react-router-dom';

const PostList = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetchPosts(); // Beim Initialisieren der Komponente die Posts abrufen
    }, []);

    const fetchPosts = async () => {
        try {
            const response = await getPosts();
            setPosts(response.data);
        } catch (error) {
            console.error('Fehler beim Abrufen der Beiträge:', error);
            // Fehlerbehandlung hier einfügen
        }
    };

    const handleCommentAdded = () => {
        fetchPosts(); // Posts erneut laden, um neue Kommentare anzuzeigen
    };

    return (
        <div>
            {posts.map(post => (
                <div key={post.id} className="post">
                    <h2>
                    <Link to={`/posts/${post.id}`}>{post.title}</Link>
                    </h2>
                    <h2>{post.title}</h2>
                    <p>{post.content}</p>
                    {/* Kommentarliste anzeigen */}
                    <div className="comments">
                        {post.comments && post.comments.map(comment => (
                            <div key={comment.id} className="comment">
                                <p>{comment.text}</p>
                                {/* Weitere Kommentardetails hier */}
                            </div>
                        ))}
                    </div>
                    {/* Kommentarformular hinzufügen */}
                    <CommentForm postId={post.id} onCommentAdded={handleCommentAdded} />
                </div>
            ))}
        </div>
    );
};

export default PostList;
