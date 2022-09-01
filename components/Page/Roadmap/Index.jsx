import { Timeline } from 'flowbite-react'

const Roadmap = () => (
    <div className='bg-dark_bg text-white flex justify-center py-12 font-exo '>


        <Timeline >
            <Timeline.Item>
                <Timeline.Point />
                <Timeline.Content>
                    <Timeline.Time style={{
                        color: '#fff',
                        fontSize: '16px',
                        fontFamily: 'Exo 2, sans-serif'
                    }}>
                        February 2022
                    </Timeline.Time>
                    <Timeline.Body style={{
                        color: '#ECF7FD',
                        fontSize: '18px',
                        padding: '1rem 0'
                    }}>
                        Researched the best country to start the Palmverse project.
                    </Timeline.Body>
                </Timeline.Content>
            </Timeline.Item>
            <Timeline.Item>
                <Timeline.Point />
                <Timeline.Content>
                    <Timeline.Time style={{
                        color: '#fff',
                        fontSize: '16px',
                        fontFamily: 'Exo 2, sans-serif'
                    }}>
                        March 2022
                    </Timeline.Time>
                    <Timeline.Body style={{
                        color: '#ECF7FD',
                        fontSize: '18px',
                        padding: '1rem 0'
                    }}>
                        Part of the team relocated to Costa Rica.  beginning of April 2022
                    </Timeline.Body>
                </Timeline.Content>
            </Timeline.Item>
            <Timeline.Item>
                <Timeline.Point />
                <Timeline.Content>
                    <Timeline.Time style={{
                        color: '#fff',
                        fontSize: '16px',
                        fontFamily: 'Exo 2, sans-serif'
                    }}>
                        April 2022
                    </Timeline.Time>
                    <Timeline.Body style={{
                        color: '#ECF7FD',
                        fontSize: '18px',
                        padding: '1rem 0'
                    }}>
                        Started working on the booking platform. Functional demo.
                    </Timeline.Body>
                </Timeline.Content>
            </Timeline.Item>
            <Timeline.Item>
                <Timeline.Point />
                <Timeline.Content>
                    <Timeline.Time style={{
                        color: '#fff',
                        fontSize: '16px',
                        fontFamily: 'Exo 2, sans-serif'
                    }}>
                        May 2022
                    </Timeline.Time>
                    <Timeline.Body style={{
                        color: '#ECF7FD',
                        fontSize: '18px',
                        padding: '1rem 0'
                    }}>
                        3 weeks in SAN JOSE, In-person meetings with ECIJA, a leading international law firm
                    </Timeline.Body>
                </Timeline.Content>
            </Timeline.Item>
            <Timeline.Item>
                <Timeline.Point />
                <Timeline.Content>
                    <Timeline.Time style={{
                        color: '#fff',
                        fontSize: '16px',
                        fontFamily: 'Exo 2, sans-serif'
                    }}>
                        June 2022
                    </Timeline.Time>
                    <Timeline.Body style={{
                        color: '#ECF7FD',
                        fontSize: '18px',
                        padding: '1rem 0'
                    }}>
                        Searched and checked possible buildings with local real estate agents in different locations across the Pacific Coast that might suit Palmverse.
                    </Timeline.Body>
                </Timeline.Content>
            </Timeline.Item>
            <Timeline.Item>
                <Timeline.Point />
                <Timeline.Content>
                    <Timeline.Time style={{
                        color: '#fff',
                        fontSize: '16px',
                        fontFamily: 'Exo 2, sans-serif'
                    }}>
                        July 2022
                    </Timeline.Time>
                    <Timeline.Body style={{
                        color: '#ECF7FD',
                        fontSize: '18px',
                        padding: '1rem 0'
                    }}>
                        Found the perfect location and building for the 1st Palmverse Hotel & Hostel. 20 May 2022

                        This was a harder task than it seems.
                    </Timeline.Body>
                </Timeline.Content>
            </Timeline.Item>
        </Timeline>
    </div>
)

export default Roadmap