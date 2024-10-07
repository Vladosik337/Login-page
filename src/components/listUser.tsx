const ListUser = ({userList}) => {
    return (
        <>
            <div>
                {userList.map((user)=>(
                    <div>
                        <p>{user.name}</p>
                        <p>{user.password}</p>
                    </div>
                ))}
            </div>
        </>
    )

};

export default ListUser;
