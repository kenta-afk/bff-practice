import PageButton from "../components/button/PageButton/PageButton";
import Title from "../components/title/Title";

const HomePage = () => {
    return (
        <div>
            <Title title="Home Page" description="This is the home page of our application." />
            <PageButton to="/greeter" label="Greeter" />
            <PageButton to="/posting" label="Posting" variant="secondary" />
            <PageButton to="/omikuji" label="Omikuji" variant="secondary" />
        </div>
    );
}
export default HomePage;