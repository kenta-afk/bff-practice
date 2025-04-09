import { useState } from "react";
import { useLazyQuery, gql } from '@apollo/client';

const GET_POSTING = gql`
  query GetPosting($title: String, $message: String) {
    posting(
        title: $title, 
        message: $message
    )
  }
`;

const PostingForm = () => {
    const [title, setTitle] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState<string | null>(null);

    const [getPosting, { loading }] = useLazyQuery(GET_POSTING, {
            onCompleted: (data) => {
                setMessage(data.posting);
            },
            onError: (error) => {
                setError(error.message);
            }
        });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!title || !message) {
            setError("Title and message are required");
            return;
        }

        setError(null);

        getPosting({ variables: { title, message }})
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Title</label>
                <input
                    id="title"
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Enter title"
                    disabled={loading}
                />
                <label>Message</label>
                <input
                    id="message"
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Enter message"
                    disabled={loading}
                />
                <button
                    type="submit"
                    disabled={loading}
                >
                    {loading ? 'Loading...' : 'Create Post'}
                </button>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                {message && <p style={{ color: 'green' }}>Post title: {message.title}</p>}
                {message && <p style={{ color: 'green' }}>Post message: {message.message}</p>}
            </form>
        </div>
    )
}

export default PostingForm;