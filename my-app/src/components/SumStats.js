import React from 'react'

export const SumStats = ({sumStats}) => {
    if (sumStats.length === 0) return null

    const sumStatsRow = (sumStat,index) => {

        return(
              <tr key = {index} className={index%2 === 0?'odd':'even'}>
                  <td>{sumStat.parent_id}</td>
                  <td>{sumStat.the_year}</td>
                  <td>{sumStat.yearly_sum}</td>
              </tr>
          )
    }

    const sumStatsTable = sumStats.map((sumStat,index) => sumStatsRow(sumStat,index))

    return(
        <div className="container">
            <h2>Sums Per Parent Per Year (in Descending Order)</h2>
            <table className="table table-bordered">
                <thead>
                <tr>
                    <th>Parent ID</th>
                    <th>The Year</th>
                    <th>Yearly Sum</th>
                </tr>
                </thead>
                <tbody>
                    {sumStatsTable}
                </tbody>
            </table>
        </div>
    )
}