import animales from "../../animales.json"
const getData = async () => {
  try {
  
    const response = await fetch(animales);
    if (!response.ok) {
      throw new Error("Error al concectarse a la api");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

export default getData;
