import Button from "../../../elements/Button"

const people = [
    {
        id: 1,
        name: 'Jane Cooper',
        title: 'Regional Paradigm Technician',
        team: 'Optimization',
        image:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
        bonus: "30%",
        votes: "5",
    },
    {
        id: 2,
        name: 'Jane Cooper',
        title: 'Regional Paradigm Technician',
        team: 'Optimization',
        image:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
        bonus: "30%",
        votes: "5",
    },
    {
        id: 3,
        name: 'Jane Cooper',
        title: 'Regional Paradigm Technician',
        team: 'Optimization',
        image:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
        bonus: "50%",
        votes: "7",
    },
    {
        id: 4,
        name: 'Jane Cooper',
        title: 'Regional Paradigm Technician',
        team: 'Optimization',
        image:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
        bonus: "50%",
        votes: "7",
    },
    {
        id: 5,
        name: 'Jane Cooper',
        title: 'Regional Paradigm Technician',
        team: 'Optimization',
        image:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
        bonus: "50%",
        votes: "7",
    }
]

export default function EmployeesTable() {
    return (
        <div className="flex flex-col mt-8">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="overflow-hidden border-b border-gray-200 sm:rounded-sm">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th
                                        scope="col"
                                        className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        #
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Customer
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Team
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Votes
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Bonus%
                                    </th>
                                    <th scope="col" className="relative px-6 py-3">
                                        <span className="sr-only">Edit</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200 text-xs">
                                {people.map((person) => (
                                    <tr key={person.id}>
                                        <td className="px-4 whitespace-nowrap">
                                            {person.id}
                                        </td>
                                        <td className="px-6 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <div className="flex-shrink-0 h-10 w-10">
                                                    <img className="h-10 w-10 rounded-full" src={person.image} alt="" />
                                                </div>
                                                <div className="ml-4">
                                                    <div className="font-medium text-gray-900">{person.name}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 whitespace-nowrap ">
                                            {person.team}
                                        </td>
                                        <td className="px-6 whitespace-nowrap">
                                            <div className="text-gray-500">{person.votes}</div>
                                        </td>
                                        <td className="px-6 whitespace-nowrap text-gray-500">{person.bonus}</td>
                                        <td className="px-0 py-5 whitespace-nowrap text-right font-medium flex items-center gap-2">
                                            <Button>
                                                <i className="fa-solid fa-xmark mr-2"></i> <span className='sm:block hidden'>No</span>
                                            </Button>
                                            <Button>
                                                <i className="fa-solid fa-check-double mr-2"></i> <span className='sm:block hidden'>Yes</span>
                                            </Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
