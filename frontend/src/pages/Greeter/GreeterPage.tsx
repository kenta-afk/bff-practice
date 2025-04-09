import Title from "../../components/title/Title";
import GreeterForm from "../../components/form/GreeterForm";
import "./GreeterPage.css";

const GreeterPage = () => {
    return (
        <div className="greeter-page">
            <Title title="Greeter Page" description="This is the greeter page." />
            <div className="greeter-form-container">
                <GreeterForm />
            </div>
        </div>
    )
}
export default GreeterPage;