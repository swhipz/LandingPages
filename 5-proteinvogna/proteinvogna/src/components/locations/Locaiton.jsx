import './landing.css';



const Location = () => {
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
              <tr>
                <td>Mars</td>
                <td>Bestill til et senter nær deg!</td>
              </tr>
              <tr>
                <td>April</td>
                <td>Bestill til et senter nær deg!</td>
              </tr>
              <tr>
                <td>Mai</td>
                <td>Bestill til et senter nær deg!</td>
              </tr>
            </table>
          </div>



        </div>
    </div>
    </>
  )

}
export default Location;