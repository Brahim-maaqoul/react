const   user = {
    name : 'Hedy Lamarr',
    imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
    imageSize: 90
};

function Profile(){
    return (
        <>
            <h1>{user.name}</h1>
            <img
                src={user.imageUrl}
                alt={'Photo of ' + user.name}
                style={
                    {
                        width: user.imageSize,
                        height:user.imageSize
                    }
                }
            />
        </>
    )
}

ReactDOM.render(<Profile/>, document.querySelector("body"));
