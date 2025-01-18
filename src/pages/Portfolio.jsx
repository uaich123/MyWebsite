import Education from "../Components/Portfolio/Education"
import Experience from "../Components/Portfolio/Experience"
import Projects from "../Components/Portfolio/Projects"
import Skills from "../Components/Portfolio/Skills"
export default function Portfolio() {
    const pStyles = {
        marginTop: "60px"
    }
    return (
        <div>
            <h1 style={pStyles}>Portfolio</h1>
            <Education/>
            <Experience/>
            <Projects/>
            <Skills/>
        </div>
    )
}