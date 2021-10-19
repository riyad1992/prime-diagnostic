import React from 'react';
import { Row } from 'react-bootstrap';
import useEffects from '../../hooks/useEffects';
import Team from '../Team/Team';

const Teams = () => {
    const [services, teams] = useEffects()
    return (
        <div className='mt-5'>
            <div className='container'>
                <h2 className='mb-2'>Our Best Team</h2>
                <Row xs={1} md={2} lg={3} className="g-4">
                    {
                        teams.map(team => <Team
                            key={team.id}
                            team={team}
                        ></Team>)
                    }
                </Row>
            </div>
        </div>
    );
};

export default Teams;