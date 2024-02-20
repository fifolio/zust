import './task.css';

const STATUS = 'PLANNED';

export default function Task({ title }: { title: string }) {
  return (
    <div className='task'>
      <div>
        {title}
      </div>
      <div className='bottomWrapper'>
        <div></div>
        <div className={`status ${STATUS}`}>{STATUS}</div>
      </div>
    </div>
  )
}
