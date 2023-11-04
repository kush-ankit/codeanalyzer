
function Display(props) {
    if (props.id % 2 == 0) {
        return (
            <div>
                <section className="w-full flex items-center justify-around">
                    <div className='w-[40%] p-12 space-y-4 backdrop-brightness-125'>
                        <h2 className='text-3xl font-semibold'>{props.title}</h2>
                        <p>{props.desc}</p>
                    </div>
                    <div className='w-[50%] p-12'>
                        <img src={props.image} alt="img" />
                    </div>
                </section>
            </div >
        )
    } else
        return (
            <div>
                <section className="w-full flex flex-row-reverse items-center justify-around">
                    <div className='w-[40%] p-12 space-y-4 backdrop-brightness-125'>
                        <h2 className='text-3xl font-semibold'>{props.title}</h2>
                        <p>{props.desc}</p>
                    </div>
                    <div className='w-[50%] p-12'>
                        <img src={props.image} alt='img' />
                    </div>
                </section>
            </div>
        )
}

export default Display
