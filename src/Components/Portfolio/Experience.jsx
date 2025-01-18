import './Experience.css'
export default function Experience() {

    return (
        <div className="experience-section"> 
            <h2>Experience</h2>
            <hr />
            <ul>
                <li className="listElm"><strong className="company">The Data Mine-Purdue University</strong></li>
                <p className="position"><strong>Undergraduate Researcher</strong></p>
                <p className="date"><strong>August 2024 - Present</strong></p>
                    <ul className="points">
                        <li>Work with a team of 6 undergraduate students and 2 graduate students in partnership with Corteva Agriscience on a project to analyze agricultural patents.</li>
                        <li>Use Python to extract important data from agricultural patents.</li>
                        <li>Reduce the time done analyzing patents from hours to seconds, heavily enhancing agricultural research.</li>
                        <li>Utilize natural language processing to create a chatbot for information in agricultural patents</li>
                    </ul>
                <li className="listElm"><strong className="company">Colorado School of Mines</strong></li>
                <p className="position"><strong>Software Engineer Intern</strong></p>
                <p className="date"> August 2024 - Present</p>
                    <ul className="points">
                        <li>Work in a team of 5 to create an application that gives internship and volunteer opportunities to anyone in Colorado based on location and preference.</li>
                        <li>Design and work on frontend of application with 1 other team member.</li>
                        <li>Present application to over 50 people and give a live demo</li>
                    </ul>
            </ul>
        </div>
    )
}