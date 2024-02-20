import './App.css';
import Column from './components/Column';
export default function App() {
  return (
    <div className='App'>
      <Column state="PLANNED" />
      <Column state="ONGOING" />
      <Column state="DONE" />
    </div>
  )
}
