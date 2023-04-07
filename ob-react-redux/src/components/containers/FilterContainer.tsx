import { connect } from 'react-redux'
import Filter from '../pure/Filter'
import { setVisibilityFilter } from '../../store/actions/actions'
import { Dispatch } from 'redux'

type OwnProps = { filter: string }
type State = { filterState: string }

const mapStateToProps = (state: State, ownProps: OwnProps) => {
    return {
        active: ownProps.filter === state.filterState
    }
}

const mapDispatchToProps = (dispatch: Dispatch, ownProps: OwnProps) => {
    return {
        onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
    }
}

const FilterContainer = connect(mapStateToProps, mapDispatchToProps)(Filter)

export default FilterContainer