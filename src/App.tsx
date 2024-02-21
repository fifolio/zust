import Increment from './Increment'
import useStore from './store'

export default function App() {
  const { year, day } = useStore()
  return (
    <div>
      <span>The Year number is: {year}. /This is the App component/</span>
      <span>The Day number is: {day}. /This is the App component/</span>
      <Increment />
    </div>
  )
}