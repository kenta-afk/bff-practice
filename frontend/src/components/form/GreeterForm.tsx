import { useState } from 'react';
import { useLazyQuery, gql } from '@apollo/client';

const GET_GREETING = gql`
  query GetGreeting($name: String) {
    greeting(name: $name)
  }
`;

const GreeterForm = () => {
    const [name, setName] = useState('');
    const [error, setError] = useState<string | null>(null);
    const [response, setResponse] = useState<string | null>(null);

    const [getGreeting, { loading }] = useLazyQuery(GET_GREETING, {
        onCompleted: (data) => {
            const parsedData = JSON.parse(data.greeting);
            setResponse(parsedData);
        },
        onError: (error) => {
            setError(error.message);
        }
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!name) {
            setError('Name is required');
            return;
        }

        setError(null);

        getGreeting({ variables: { name } });
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
                {response && <p style={{ color: 'green' }}>Message: {response.message}</p>}
            </form>
        </div>
    )
}

export default GreeterForm;