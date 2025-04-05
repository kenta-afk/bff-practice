import { useState } from 'react';
import { sayHello } from '../../services/greeter';

const GreeterForm = () => {
    const [name, setName] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [message, setMessage] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!name) {
            setError('Name is required');
            return;
        }

        setLoading(true);
        setError(null);

        try {
            const response = await sayHello(name);
            setMessage(response.message);
        } catch (err) {
            const errorMessage = err instanceof Error ?
                err.message: 'An unknown error occurred';
            setError(errorMessage);
        } finally {
            setLoading(false);
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit} >
                <label>name</label>
                <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    disabled={loading}
                />
                <button
                    type="submit"
                    disabled={loading}
                >
                    {loading ? 'Loading...' : 'Say Hello'}
                </button>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                {message && <p style={{ color: 'green' }}>{message}</p>}
            </form>
        </div>
    )
}
export default GreeterForm;