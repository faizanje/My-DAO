export default function PersonInfo({ info }) {
    return (
        <div className='flex items-start gap-24 mt-10 sm:flex-nowrap flex-wrap sm:justify-start justify-center'>
            <div className='rounded-xl md:w-[320px] w-full overflow-hidden'>
                <img src="https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60" alt="person" />
            </div>
            <div>
                {
                    Object.keys(info).map((key, index) => {
                        return (
                            <p key={index} className='text-sm sm:text-base text-gray-700'>
                                <b className='inline-block w-[80px] capitalize font-bold sm:mr-24 mr-0 mb-4'>{key}:</b> <span>{info[key]}</span>
                            </p>
                        )
                    })
                }
            </div>
        </div>
    )
}
