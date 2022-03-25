import Button from '../../elements/Button'
import Container from '../../elements/Container'
import TopTitle from '../../elements/TopTitle'

const notifications = [
    {
        id: 1,
        date: '12/12/2019',
        title: 'Congrats! Your bonus was approved!',
        price: "£60.00",
    },
    {
        id: 2,
        date: '12/12/2019',
        title: 'Congrats! Your bonus was approved!',
        price: "£60.00",
    },
    {
        id: 3,
        date: '12/12/2019',
        title: 'Congrats! Your bonus was approved!',
        price: "£60.00",
    },
    {
        id: 4,
        date: '12/12/2019',
        title: 'Congrats! Your bonus was approved!',
        price: "£60.00",
    },
    {
        id: 5,
        date: '12/12/2019',
        title: 'Congrats! Your bonus was approved!',
        price: "£60.00",
    },
    {
        id: 6,
        date: '12/12/2019',
        title: 'Congrats! Your bonus was approved!',
        price: "£60.00",
    },
    {
        id: 7,
        date: '12/12/2019',
        title: 'Congrats! Your bonus was approved!',
        price: "£60.00",
    },
    {
        id: 8,
        date: '12/12/2019',
        title: 'Congrats! Your bonus was approved!',
        price: "£60.00",
    },
    {
        id: 9,
        date: '12/12/2019',
        title: 'Congrats! Your bonus was approved!',
        price: "£60.00",
    },
]

export default function Notifications() {
    return (
        <section className='py-8'>
            <Container>
                <div className='flex items-center justify-between'>
                    <TopTitle title="Notifications" />
                    <Button>
                        <i className="fa-solid fa-eye"></i>
                        <span className='md:block hidden'>Mark as Read</span>
                    </Button>
                </div>
                <div className='mt-14'>
                    {notifications.map(notification => (
                        <div className='flex items-center flex-wrap justify-between mb-4 py-4 border-b-[1px] border-b-gray-200' key={notification.id}>
                            <div className='flex items-center sm:gap-14 gap-5 sm:flex-nowrap flex-wrap'>
                                <h2 className='text-sm font-bold'>{notification.date}</h2>
                                <h2 className='text-sm font-bold'>{notification.title}</h2>
                            </div>
                            <div className='flex items-center flex-wrap'>
                                <h2 className='text-sm font-bold'>{notification.price}</h2>
                            </div>
                            <div className='flex gap-4 sm:w-auto w-full mt-6 sm:mt-0'>
                                <Button fullCircle>
                                    <i className="fa-solid fa-eye"></i>
                                </Button>
                                <Button>
                                    <i className="fa-solid fa-trash"></i>
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    )
}
