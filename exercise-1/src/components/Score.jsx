function Score({courseName, courseResults}){
    const scores = courseResults.map(student => student.score);
    const averageScore = Math.floor(scores.reduce((acc, curr) => acc + curr, 0) / scores.length);
    const minScore = Math.min(...scores);
    const maxScore = Math.max(...scores);
    return (
        <div className="scores">
            <h1>{courseName}</h1>
            <table>
                <thead>
                    <tr>
                        <th>First name</th>
                        <th>Last name</th>
                        <th>Score</th>
                    </tr>
                </thead>
                <tbody>
                    {courseResults.map((student, index) => (
                        <tr key={index}>
                            <td>{student.firstName}</td>
                            <td>{student.lastName}</td>
                            <td className={student.score < 50 ? "warning" : ""}>{student.score}</td>
                        </tr>
                    ))}
                </tbody>
          </table>
          <div className="Statistic">
            <table>
                <thead>
                    <tr>
                        <td>Average</td>
                        <td>Min</td>
                        <td>Max</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{averageScore}</td>
                        <td>{minScore}</td>
                        <td>{maxScore}</td>
                    </tr>
                </tbody>
            </table>
          </div>
        </div>
    )
}
export default Score;