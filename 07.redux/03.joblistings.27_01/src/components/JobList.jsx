import data from '../mock/data.json';
import { JobPosition } from './JobPosition';
import { useSelector } from 'react-redux';
import { selectAllPosition } from '../store/positions/position-selector';

const JobList = () => {
    // const positionVisile = useSelector(selectAllPosition);
    const positionVisile = data;
    return (
        <div className="job-list">
            {positionVisile.map((item) => (
                <JobPosition
                    key={item.id}
                    {...item}
                />
            ))}
        </div>
    );
};

export { JobList };
