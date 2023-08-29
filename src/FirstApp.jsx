// const newMessage = {
//     message: "Hola Mundo",
//     title: "Jhoana",
// };

// const myFunction = () => {
//     return 4 + 4;
// };
import PropTypes from "prop-types";
export const FirstApp = ({ title, subTitle }) => {
    return (
        <>
            {/* <h1>{myFunction()}</h1> */}
            {/* <code>{JSON.stringify(newMessage)}</code> */}
            <h1>{title}</h1>
            <p>{subTitle}</p>
        </>
    );
};
FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.number.isRequired,
};
