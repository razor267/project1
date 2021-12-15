import React from "react";
import {connect} from "react-redux";
import {follow, requestUsers, toggleFollowUnfollowInProgress, unfollow} from "../../redux/usersReducer";
import Loading from "../common/loading/loading";
import {compose} from "redux";
import Users from "./Users";
import {
    getUsers,
    getCurrentPage,
    getFollowUnfollowInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount
} from "../../redux/usersSelectors";

class UsersAPIComponent extends React.Component {

    componentDidMount() {
        const {currentPage,pageSize} = this.props;
        this.props.requestUsers(currentPage, pageSize);
    }

    onPageChanged = (pageNumber) => {
        const {pageSize} = this.props;
        this.props.requestUsers(pageNumber, pageSize);
    }

    render() {
        return <>
            {this.props.isFetching ? <Loading/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   followUnfollowInProgress={this.props.followUnfollowInProgress}
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followUnfollowInProgress: getFollowUnfollowInProgress(state)
    }
}

/*let mapDispatchToProps = (dispatch) => {
    return {
        follow: (usersId) => {
            dispatch(follow(usersId));
        },
        unfollow: (usersId) => {
            dispatch(unfollow(usersId));
        },
        setUsers: (users) => {
            dispatch(setUsers(users));
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPage(pageNumber))
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setTotalUsersCount(totalCount))
        },
        toggleIsFetching: (isFetching) => {
            dispatch(toggleIsFetching(isFetching))
        }
    }
}*/

// export default connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent)

/*
export default withAuthRedirect(connect(mapStateToProps, {
    follow,
    unfollow,
    // setCurrentPage,
    toggleFollowUnfollowInProgress,
    requestUsers
})(UsersAPIComponent))*/

export default compose(
    // withAuthRedirect,
    connect(mapStateToProps, {
        follow,
        unfollow,
        // setCurrentPage,
        toggleFollowUnfollowInProgress,
        requestUsers
    })
)(UsersAPIComponent);
