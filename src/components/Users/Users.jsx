import React from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

let Users = ({currentPage, pageSize, totalItemsCount, onPageChanged, portionSize, users, ...props}) => {
    return (
        <div>
            <Paginator currentPage={currentPage} pageSize={pageSize}
            totalItemsCount={totalItemsCount} onPageChanged={onPageChanged} portionSize={portionSize} />
            <div>
            {
                users.map(u => <User key={u.id} user={u}
                    followingInProgress={props.followingInProgress}
                unfollow={props.unfollow} follow={props.follow} />)
            }
            </div>
        </div>
    )
}

export default Users;
