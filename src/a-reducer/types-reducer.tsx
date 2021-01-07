import { ISetVisibilityFilterAction } from '../a-actions/types';
import { SET_VISIBILITY_FILTER } from '../a-constants';
import { VisibilityFilters } from '../a-types';


const visibilityFilter = (state = VisibilityFilters.SHOW_ALL, action: ISetVisibilityFilterAction): VisibilityFilters => {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter
        default:
            return state;
    }
}

export default visibilityFilter;
