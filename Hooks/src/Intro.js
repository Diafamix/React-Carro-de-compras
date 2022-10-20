const impura = () => new Date().toLocaleDateString()

console.log(impura())

const MiComponente = ({ miProp }) => {
  return(
    <div>
      Nombre: {miProp}
    </div>
  )
}

const App = () => {
  return (
    <MiComponente miProp = {'Hola'} />
  )
}

export default Intro;