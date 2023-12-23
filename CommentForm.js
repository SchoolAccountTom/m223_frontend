import React, { useState } from 'react';
import { createComment } from '../services/api';

const CommentForm = ({ postId, onCommentAdded }) => {
    const [text, setText] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createComment(postId, { text });
            setText('');
            if(onCommentAdded) {
                onCommentAdded();
            }
        } catch (error) {
            console.error('Fehler beim Erstellen des Kommentars', error);
            // Fehlerbehandlung
        }
    };



    return (
        <form onSubmit={handleSubmit}>
            <textarea value={text} onChange={(e) => setText(e.target.value)} />
            <button type="submit">Kommentar absenden</button>
        </form>
    );

    
};

export default CommentForm;
