import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { FilterPanel } from 'components/FilterPanel';
import { JobList } from 'components/JobList';
import { TheHeader } from 'components/TheHeader';
import data from './mock/data.json';
import { addPosition } from './store/positions/position-action';

function App() {
    const dispatcher = useDispatch();
    useEffect(() => {
        dispatcher(addPosition(data));
    });

    return (
        <>
            <TheHeader />
            <div className="container">
                <FilterPanel />
                <JobList />
            </div>
        </>
    );
}

export default App;
