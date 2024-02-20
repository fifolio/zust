import './Column.css';
import Task from './Task';

export default function Column({ state }: { state: string }) {
    return (
        <div className="column">
            <p>{state}</p>
            <Task title="Todo" />
        </div>
    )
}
