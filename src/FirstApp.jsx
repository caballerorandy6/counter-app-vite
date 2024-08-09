import PropTypes from "prop-types"; //Esto se debe de instalar con "npm install prop-types"

//const newMessage = { message: "Hello World!", title: "Randy" };
// const getResult = (a, b) => a + b;

export const FirstApp = ({ title, subtitle, name }) => {
  //console.log(title, subtitle);

  return (
    <>
      {/* <h1>{getResult(1, 2)}</h1> */}
      {/* <code>{JSON.stringify(newMessage)}</code> */}
      <h1>{title}</h1>
      <p>{subtitle}</p>
      <p>{name}</p>
    </>
  );
};

//Tipado de las props
FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
};

//Valores por defecto de las props
FirstApp.defaultProps = {
  title: "No hay título",
  subtitle: "No hay subtítulo",
  name: "Randy",
};
