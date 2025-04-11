export const BasicTypes = () => {
    const name: string = 'Eduardo';
    const age: number = 30;
    const isActive: boolean = true;
    const languages: string[] = ["JavaScript", "TypeScript", "Swift"]
    languages.push("C")
  return (
    <>
    <h2>Tipos de datos básicos</h2>
    Nombre: {name} <br/>
    Edad: {age} <br/>
    Lenguajes: {languages.join(', ')} <br/>
    Conectado: {isActive ? 'true' : 'false'}
    </>
  )
}
