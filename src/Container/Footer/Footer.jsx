

const Footer = () => {
  const date = new Date();
  return (
    <div className="footer text-center">      
        <p className="badge bg-dark text-md-start">
          JimDev - {date.getFullYear()}- Todos los derechos reservados
        </p>    
    </div>
  )
}

export default Footer