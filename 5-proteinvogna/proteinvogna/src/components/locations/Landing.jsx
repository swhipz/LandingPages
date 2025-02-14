import './landing.css';



const Landing = () => {
  return (
    <>
      <div className="locations-wrapper">
        <div className="locations-header">Finn oss her</div>
        
        <div className="locations-left">
        <div className="locations-yap"><p></p></div>
          <iframe src="https://datawrapper.dwcdn.net/6wTRk/1/" className='location-map' title='dagensplassering'></iframe>
          <div className="locations-info">
            <h3>Planlagte oppstillinger</h3>
            <table className='lokasjon-table'>
              <tr>
                <th>Dato</th>
                <th>Lokasjon</th>
              </tr>
              <tr>
                <td>Februar</td>
                <td>Terningen Arena, Elverum</td>
              </tr>
            </table>
          </div>



        </div>
    </div>
    </>
  )

}
export default Landing;