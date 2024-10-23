const Watch = ({watch}) => {

    const {id, name, price} = watch;

    return (
        <div className="w-1/2 border-2 border-solid border-red-500 p-4 m-4 rounded-lg">
            <p>Id: {id}</p>
            <h2>Watches: {name}</h2>
            <p>Price: {price}</p>
        </div>
    );
};

export default Watch;