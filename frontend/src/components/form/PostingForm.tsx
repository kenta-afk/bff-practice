// import { useState } from "react";


// const PostingForm = () => {
//     const [title, setTitle] = useState("");
//     const [message, setMessage] = useState("");
//     const [response, setResponse] = useState<{ title: string; message: string } | null>(null);
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState<string | null>(null);

//     const handleSubmit = async (e: React.FormEvent) => {
//         e.preventDefault();

//         if (!title || !message) {
//             setError("Title and message are required");
//             return;
//         }

//         setLoading(true);
//         setError(null);
//         setResponse(null);

//         try {
//             const response = await createPost(title, message);
//             setResponse(response);
//         } catch (err) {
//             const errorMessage = err instanceof Error ?
//                 err.message : 'An unknown error occurred';
//             setError(errorMessage);
//         } finally {
//             setLoading(false);
//         }
//     }

//     return (
//         <div>
//             <form onSubmit={handleSubmit}>
//                 <label>Title</label>
//                 <input
//                     id="title"
//                     type="text"
//                     value={title}
//                     onChange={(e) => setTitle(e.target.value)}
//                     placeholder="Enter title"
//                     disabled={loading}
//                 />
//                 <label>Message</label>
//                 <input
//                     id="message"
//                     type="text"
//                     value={message}
//                     onChange={(e) => setMessage(e.target.value)}
//                     placeholder="Enter message"
//                     disabled={loading}
//                 />
//                 <button
//                     type="submit"
//                     disabled={loading}
//                 >
//                     {loading ? 'Loading...' : 'Create Post'}
//                 </button>
//                 {error && <p style={{ color: 'red' }}>{error}</p>}
//                 {response && <p style={{ color: 'green' }}>Post title: {response.title}</p>}
//                 {response && <p style={{ color: 'green' }}>Post message: {response.message}</p>}
//             </form>
//         </div>
//     )
// }

// export default PostingForm;