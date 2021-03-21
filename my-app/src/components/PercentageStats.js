import React from 'react'

export const PercentageStats = ({percentageStats}) => {
    if (percentageStats.length === 0) return null

    const percentageStatsRow = (percentageStat,index) => {

        return(
              <tr key = {index} className={index%2 === 0?'odd':'even'}>
                  <td>{percentageStat.parent_id}</td>
                  <td>{percentageStat.parent_id_name}</td>
                  <td>{percentageStat.earlierDate}</td>
                  <td>{percentageStat.laterDate}</td>
                  <td>{percentageStat.percentageDifference}</td>
              </tr>
          )
    }

    const percentageStatsTable = percentageStats.map((percentageStat,index) => percentageStatsRow(percentageStat,index))

    return(
        <div className="container">
            <h2>Percentage Differences Per Parent Transaction</h2>
            <table className="table table-bordered">
                <thead>
                <tr>
                    <th>Parent ID</th>
                    <th>Parent ID Name</th>
                    <th>Earlier Date</th>
                    <th>Later Date</th>
                    <th>Percentage Difference</th>
                </tr>
                </thead>
                <tbody>
                    {percentageStatsTable}
                </tbody>
            </table>
        </div>
    )
}