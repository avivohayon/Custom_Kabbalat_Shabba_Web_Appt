import React, {useState} from 'react'
import PreviewPDF from './PreviewPDF'


const GeneratePDF = ({title, imgURL, tamplateID }) => {
  const defaultProfileImageURL = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG4AnWRGlJ9M5EO1dxeqkyHOiy_EUARDzcBw&usqp=CAU';
  const defaultBodyImageURL = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVTBdkwwnSYp9efjqJwKAkQ1j2ylDaEmKodg&usqp=CAU';

    const [profile, setProfile] = useState({
        type: 'Profile',
        name: (title? title: ''),
        family: 'Ohayon',
        profileImageURL: 'https://www.yo-yoo.co.il/coolpics/images/uploads/fa6153.jpg',
        mainImageURL:  imgURL && imgURL[0] ? imgURL[0] : defaultProfileImageURL,
        display: true,
        header: "This is my Israeli Shabbat",
        about: 'About...',
        bodyImageURL :   imgURL && imgURL[1] ? imgURL[1] : defaultBodyImageURL,
        tamplate : tamplateID !== undefined ? tamplateID : 2

      })
      
      console.log("GeneratePDF profile is: ",profile )
      const handleChange = (name, value) => {
        setProfile({ ...profile, [name]: value })
      }
    
      return (
        <div
          style={{
            width: '100%',
            height: '100vh',
            display: 'flex',
          }}
        >
          <div style={{ width: '50%', paddingTop:'1.3rem'}}>
            <div style={{ padding:'0.5rem 1rem'}}>
              <label style={{marginRight:' 1rem'}}>Name  </label>
              <input
                name='name'
                defaultValue={profile.name}
                onChange={(e) => {
                  handleChange(e.target.name, e.target.value)
                }}
              />
            </div>
            <div style={{ padding:'0.5rem 1rem'}}>
              <label style={{marginRight:' 1rem ' }}>Family  </label>
              <input
                name='family'
                defaultValue={profile.family}
                onChange={(e) => {
                  handleChange(e.target.name, e.target.value)
                }}
              />
            </div>
            <div style={{ padding:'0.5rem 1rem'}}>
              <label style={{marginRight:' 1rem'}}>mainImageURL  </label>
              <input
                name='mainImageURL'
                defaultValue={profile.mainImageURL}
                onChange={(e) => {
                  handleChange(e.target.name, e.target.value)
                }}
              />
            </div>
            <div style={{ padding:'0.5rem 1rem'}}>
              <label style={{marginRight:' 1rem'}}> Body Image  </label>
              <input
                name='bodyImageURL'
                defaultValue={profile.bodyImageURL}
                onChange={(e) => {
                  handleChange(e.target.name, e.target.value)
                }}
              />
            </div>
            <div style={{ padding:'0.5rem 1rem',  display: 'flex', flexDirection: 'column'}}>
              <label style={{marginRight:' 1rem'}}>Header  </label>

              <textarea
                name='header'
                defaultValue={profile.header}
                style={{ height: '8rem', width: '30rem', resize: 'none' }}
                onChange={(e) => {
                  handleChange(e.target.name, e.target.value)
                }}
              />
            </div>
            <div style={{ padding:'0.5rem 1rem',  display: 'flex', flexDirection: 'column'}}>
              <label style={{marginRight:' 1rem'}}> About  </label>

              <textarea
                name='about'
                defaultValue={profile.about}
                style={{ height: '18rem', width: '30rem', resize: 'none' }}
                onChange={(e) => {
                  handleChange(e.target.name, e.target.value)
                }}
              />
            </div>
          </div>
          <PreviewPDF profile={profile} />
        </div>
      )
    }


export default GeneratePDF