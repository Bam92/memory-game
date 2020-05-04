import React from 'react'
import PropTypes from 'prop-types'

import './HallOfFame.css'

const HallOfFame = ({ entries }) => (
  <table className="hallOfFame">
    <tbody>
    {entries.map(({ date, guesses, id, player, name }) => (
          <tr key={id}>
            <td className='date'>{date}</td>
            <td className='guesses'>{guesses}</td>
            <td className='player'>{player}</td>
          </tr>
      ))}
    </tbody>
  </table>
)

HallOfFame.propType = {
  entries: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string.isRequired,
      guesses: PropTypes.number.isRequired,
      id: PropTypes.number.isRequired,
      player: PropTypes.string.isRequired
    })
  ).isRequired
}
export default HallOfFame

// == Internal helpers ==============================================

export const FAKE_HOF = [
  { id: 3, guesses: 18, date: '10/10/2017', player: 'Sarah' },
  { id: 2, guesses: 23, date: '11/10/2017', player: 'Patience' },
  { id: 1, guesses: 31, date: '06/10/2017', player: 'Angel' },
  { id: 0, guesses: 48, date: '14/10/2017', player: 'Yves' },
]