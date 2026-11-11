import { Screen } from './Screen.jsx'

export const Home = () => {
    const name = 'Sebastian';
    const profession = 'Front-End Developer';
    return (
        <Screen title="Welcome to my Portfolio">
            <section className="hero">
                <div className="avatar">SO</div>
                <h2 className="hero-name">{name}</h2>
                <p className="hero-profession">{profession}</p>
            </section>
        </Screen>
    )
}