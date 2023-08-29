// const newMessage = {
//     message: "Hola Mundo",
//     title: "Jhoana",
// };

// const myFunction = () => {
//     return 4 + 4;
// };

export const FirstApp = ({ title, subTitle }) => {
    // console.log(props);
    return (
        <>
            {/* <h1>{myFunction()}</h1> */}
            {/* <code>{JSON.stringify(newMessage)}</code> */}
            <h1>{title}</h1>
            <p>{subTitle}</p>
        </>
    );
};
