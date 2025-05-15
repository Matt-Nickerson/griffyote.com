import '../App.css';
import griff from '../GriffCircleHead.png';
import ListOnTaskbar from './ListOnTaskbar';
import TaskbarLine from './TaskbarLine';

function Taskbar() {
    return (
        <div className="bg-[rgb(124,72,35)] p-16 rounded-b-[30px] flex flex-col items-center">
            <img src={griff} alt="GriffYote" />
            <p className='text-5xl text-orange-950 py-2 font-bold font-sans'>Griff</p>
            <div className='flex flex-col'>
                <TaskbarLine />

                <div className=' mt-2'>
                <ListOnTaskbar />
                </div>
            </div>
        </div>
    );
}

export default Taskbar;
