import { useDispatch } from 'react-redux';
import { JobPosition } from './JobPosition';
import { useSelector } from 'react-redux';
import { selectFilters } from '../store/filters/filter-selector';
import { selectVisiblePosition } from '../store/positions/position-selector';
import { addFilter } from '../store/filters/filter-action';

const JobList = () => {
    const currentFilters = useSelector(selectFilters) || [];
    const positionVisile = useSelector((state) =>
        selectVisiblePosition(state, currentFilters)
    );
    const dispatch = useDispatch();

    const handleAddFilter = (filter) => {
        dispatch(addFilter(filter));
    };
    return (
        <div className="job-list">
            {positionVisile.map((item) => (
                <JobPosition
                    key={item.id}
                    {...item}
                    handleAddFilter={handleAddFilter}
                />
            ))}
        </div>
    );
};

export { JobList };
