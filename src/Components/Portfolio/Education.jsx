import './Education.css';
import School from './School';


export default function Education() {
    const schools = [
        {
            id: 1,
            name: 'Purdue University',
            major: 'B.S. in Computer Science',
            graduationDate: 'May 2028'
        },
        {
            id: 2,
            name: 'Grandview High School',
            major: 'High School Diploma',
            graduationDate: 'May 2024'
        }
    ]
    const schoolsList = schools.map((school) => {
        return(
            <School key={school.id} name={school.name} major={school.major} graduationDate={school.graduationDate} />
        )
    })
    return (
        <div className="schools">
            <h2>Education</h2>
            <hr />
            <ul>
                <li>{schoolsList[0]}</li>
                <li>{schoolsList[1]}</li>
            </ul>
        </div>
    );
}