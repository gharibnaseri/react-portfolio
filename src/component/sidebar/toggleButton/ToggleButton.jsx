// import './ToggleButton.scss'
import {motion} from 'framer-motion'

function ToggleButton({ setOpen }) {
  return (
    <button onClick={() => setOpen((prev) => !prev)}>
      {/* <svg width="23" height="23" viewBox="0 0 23 23">
        <path strokeWidth='3' stroke='black' strokeLinecap='round' />
        <path strokeWidth='3' stroke='black' strokeLinecap='round' />
        <path strokeWidth='3' stroke='black' strokeLinecap='round' />
      </svg> */}
      <svg viewBox="0 0 126 80" width="35" height="35">
        <motion.rect width="100" height="17" rx="10"></motion.rect>
        <motion.rect y="30" width="100" height="17" rx="10"></motion.rect>
        <motion.rect y="60" width="100" height="17" rx="10"></motion.rect>
      </svg>
    </button>
  )
}

export default ToggleButton