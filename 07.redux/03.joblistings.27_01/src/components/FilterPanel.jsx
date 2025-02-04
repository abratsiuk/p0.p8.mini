import { useSelector, useDispatch } from 'react-redux';
import { selectFilters } from '../store/filters/filter-selector';
import { removeFilter, clearFilter } from '../store/filters/filter-action';
import { Badge } from 'UI/Badge';
import { Card } from 'UI/Card';
import { Stack } from 'UI/Stack';

const FilterPanel = () => {
    const dispatch = useDispatch();
    const currentFilters = useSelector(selectFilters) || [];
    if (currentFilters.length === 0) {
        return null;
    }
    return (
        <Card className="filter-panel">
            <div className="filter-panel-wrapper">
                <Stack>
                    {currentFilters.map((filter) => {
                        return (
                            <Badge
                                variant="clearable"
                                onClick={() => dispatch(removeFilter(filter))}
                            >
                                {filter}
                            </Badge>
                        );
                    })}
                </Stack>

                <button
                    className="link"
                    onClick={() => dispatch(clearFilter())}
                >
                    Clear
                </button>
            </div>
        </Card>
    );
};

export { FilterPanel };
