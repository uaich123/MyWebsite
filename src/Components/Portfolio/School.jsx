export default function school({ name, major, graduationDate}) {
    return (
        <div className="school">
            <h3>{name}</h3>
            <p>{major}</p>
            <p>Graduation Date: {graduationDate}</p>
        </div>
    )
}