import Title from "../components/title/Title";
import GreeterForm from "../components/form/GreeterForm";

const GreeterPage = () => {
    return (
        <div>
            <Title title="Greeter Page" description="This is the greeter page." />
            <GreeterForm />
        </div>
    )
}
export default GreeterPage;