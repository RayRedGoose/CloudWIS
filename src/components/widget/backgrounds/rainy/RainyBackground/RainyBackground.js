import React from 'react'
import './RainyBackground.scss'
import Drop from '../Drop/Drop'

const RainyBackground = () => {
  const repeatDrops = (dropName, row) => {
    const DropName = dropName
    let drops = new Array(20).fill(undefined)
    let increment = 0

    drops = drops.map((drop, index) => {
      let randomHundred = (Math.floor(Math.random() * (98 - 1 + 1) + 1))
      let randomFive = (Math.floor(Math.random() * (5 - 2 + 1) + 2))
      increment += randomFive
      return <DropName key={index} increment={increment} randomHundred={randomHundred} randomFive={randomFive} row={row} />
    })

    return drops;
  }

  return (
    <main className="rainy">
      <div className="rain front-row">
        { repeatDrops(Drop, 'front') }
      </div>
      <div className="rain back-row">
        { repeatDrops(Drop, 'back') }
      </div>
    </main>
  )
}

export default RainyBackground;
