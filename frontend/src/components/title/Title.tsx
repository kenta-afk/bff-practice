interface TitleProps {
    title: string;
    description: string;
}

const Title = ({ title, description }: TitleProps) => {
    return (
        <div>
            <h1 className="title">{title}</h1>
            <p className="description">{description}</p>
        </div>
    )
}

export default Title;