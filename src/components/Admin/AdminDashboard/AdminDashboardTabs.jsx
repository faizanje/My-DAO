import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import BonusTable from './BonusTable';

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
        currentBonus: "720",
        newRequest: true,
        voting: false,
        finished: false,
        declined: false,
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
        currentBonus: "720",
        newRequest: false,
        voting: true,
        finished: false,
        declined: false,

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
        currentBonus: "720",
        newRequest: false,
        voting: true,
        finished: false,
        declined: false,
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
        currentBonus: "720",
        newRequest: false,
        voting: true,
        finished: false,
        declined: false,
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
        currentBonus: "720",
        newRequest: false,
        voting: true,
        finished: false,
        declined: false,
    },
    {
        id: 6,
        name: 'Jane Cooper',
        title: 'Regional Paradigm Technician',
        team: 'Optimization',
        image:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
        bonus: "50%",
        votes: "7",
        currentBonus: "720",
        newRequest: false,
        voting: false,
        finished: true,
        declined: false,
    },
    {
        id: 7,
        name: 'Jane Cooper',
        title: 'Regional Paradigm Technician',
        team: 'Optimization',
        image:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
        bonus: "50%",
        votes: "7",
        currentBonus: "720",
        newRequest: false,
        voting: false,
        finished: false,
        declined: true,
    },
]

export default function SwitchTabs() {
    return (
        <Tabs className="mt-14">
            <TabList className="flex border-b-[1px] border-gray-300 overflow-auto">
                <Tab className="px-10 py-3 cursor-pointer text-[16px]">All</Tab>
                <Tab className="px-10 py-3 cursor-pointer text-[16px]">New</Tab>
                <Tab className="px-10 py-3 cursor-pointer text-[16px]">Voting</Tab>
                <Tab className="px-10 py-3 cursor-pointer text-[16px]">Finished</Tab>
                <Tab className="px-10 py-3 cursor-pointer text-[16px]">Declined</Tab>
            </TabList>
            <TabPanel>
                <BonusTable people={people} />
            </TabPanel>
            <TabPanel>
                <BonusTable people={people} filterNew />
            </TabPanel>
            <TabPanel>
                <BonusTable people={people} voting />
            </TabPanel>
            <TabPanel>
                <BonusTable people={people} finished />
            </TabPanel>
            <TabPanel>
                <BonusTable people={people} declined />
            </TabPanel>
        </Tabs>
    )
}
