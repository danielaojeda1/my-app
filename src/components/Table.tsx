const Table = () => {
  return (
    <table className="table stack-table">
      <thead>
        <tr>
          <th>#</th>
          <th>Technology</th>
          <th>Level</th>
          <th>Projects Done</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <th>1</th>
          <td>Python</td>
          <td><span className="level advanced">Advanced</span></td>
          <td>4</td>
        </tr>

        <tr>
          <th>2</th>
          <td>Rust</td>
          <td><span className="level intermediate">Intermediate</span></td>
          <td>2</td>
        </tr>

        <tr>
          <th>3</th>
          <td>C</td>
          <td><span className="level intermediate">Intermediate</span></td>
          <td>1</td>
        </tr>

        <tr>
          <th>4</th>
          <td>Pandas</td>
          <td><span className="level intermediate">Intermediate</span></td>
          <td>3</td>
        </tr>

        <tr>
          <th>5</th>
          <td>Spark</td>
          <td><span className="level basic">Basic</span></td>
          <td>1</td>
        </tr>

        <tr>
          <th>6</th>
          <td>FastAPI</td>
          <td><span className="level intermediate">Intermediate</span></td>
          <td>3</td>
        </tr>

        <tr>
          <th>7</th>
          <td>Agile</td>
          <td><span className="level intermediate">Intermediate</span></td>
          <td>4</td>
        </tr>

        <tr>
          <th>8</th>
          <td>React</td>
          <td><span className="level basic">Basic</span></td>
          <td>1</td>
        </tr>

        <tr>
          <th>9</th>
          <td>TypeScript</td>
          <td><span className="level basic">Basic</span></td>
          <td>1</td>
        </tr>

        <tr>
          <th>10</th>
          <td>Postgres</td>
          <td><span className="level intermediate">Intermediate</span></td>
          <td>3</td>
        </tr>

        <tr>
          <th>11</th>
          <td>MongoDB</td>
          <td><span className="level intermediate">Intermediate</span></td>
          <td>1</td>
        </tr>
      </tbody>
    </table>
  )
}

export default Table