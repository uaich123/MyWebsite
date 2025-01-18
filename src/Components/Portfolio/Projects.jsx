import './Projects.css'
export default function Projects() {
    return (
        <div className="project-section">
            <h2>Projects</h2>
            <hr />
            <ul>
                <li className='projectName'><strong className='projectBold'>Stock Market Prediction App</strong></li>
                <p className='Date'>August 2023 - March 2024</p>
                <ul className="project-points">
                    <li>Research and build an app that predicts the future price of a stock.</li>
                    <li>Utilize a LSTM model alongside mathematical analysis.</li>
                    <li>Code the application using HTML, CSS, and Javascript</li>
                    <li>Accuracy of model was approximately 70-80%.</li>
                    <li>Present the application to over 100 people and give a live demo</li>
                </ul>
            </ul>
        </div>
    )
}