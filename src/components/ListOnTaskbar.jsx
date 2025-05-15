import '../App.css';

function ListOnTaskbar() {
    return (
        <div className='flex space-x-6 items-center'>
            <a 
                href='#About' 
                className='text-3xl !mr-32 text-amber-100 border-4 border-[rgb(175,124,88)] px-20 py-3 rounded hover:bg-[rgb(175,124,88)] hover:border-[rgb(175,124,88)] hover:!text-black transition duration-300'>
                About
            </a>
            <a 
                href='#Art' 
                className='text-3xl !mr-96 text-amber-100 border-4 border-[rgb(175,124,88)] px-24 py-3 rounded hover:bg-[rgb(175,124,88)] hover:border-[rgb(175,124,88)] hover:!text-black transition duration-300'>
                Art
            </a>
            <a 
                href='#Portfolio' 
                className='text-3xl !ml-48 !mr-32 text-amber-100 border-4 border-[rgb(175,124,88)] px-16 py-3 rounded hover:bg-[rgb(175,124,88)] hover:border-[rgb(175,124,88)] hover:!text-black transition duration-300'>
                Portfolio
            </a>
            <a 
                href='#Schedule' 
                className='text-3xl text-amber-100 border-4 border-[rgb(175,124,88)] px-16 py-3 rounded hover:bg-[rgb(175,124,88)] hover:border-[rgb(175,124,88)] hover:!text-black transition duration-300'>
                Schedule
            </a>
        </div>
    );
}

export default ListOnTaskbar;
