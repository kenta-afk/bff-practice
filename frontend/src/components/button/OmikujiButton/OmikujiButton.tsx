import { GetOmikujiResult } from "../../../services/omikuji";
import { useState } from "react";
import "./OmikujiButton.css";

const OmikujiButton = () => {
    const [result, setResult] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleClick = async () => {
        setLoading(true);
        setError(null);
        setResult(null);

        try {
            const response = await GetOmikujiResult();
            setResult(response.result);
        } catch (err) {
            const errorMessage = err instanceof Error ?
                err.message : 'An unknown error occurred';
            setError(errorMessage);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="omikuji-container">
            <button onClick={handleClick} className="omikuji-button" disabled={loading}>
                おみくじを引く
            </button>

            {loading && <div className="loading-indicator"></div>}

            {result && <div className="omikuji-result">{result}</div>}

            {error && <div className="error-message">{error}</div>}
        </div>
    )
}

export default OmikujiButton;