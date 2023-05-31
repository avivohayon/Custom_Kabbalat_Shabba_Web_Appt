import React from 'react'
import { Document, Page, PDFViewer, PDFDownloadLink, View, Text , Svg, Line, Image, Path} from '@react-pdf/renderer'
import { LeftSection, RightSection , FourLeftSections} from './SkeletionPDF'
import {styles} from './PDFStyles.style'
// import doveSvg from './images/SVGs/dove.svg';
import doveSvg from '../../asset/SVGs/dove.svg'
import { DoveSVG, RainbowSVG , CandelsSVG} from './SVGcomponentsPDF'
const PreviewPDF = ({ profile }) => {
  console.log('user data in PreviewPDF tamplateID: ', profile.tamplate)

  let templateComponent;

  switch (profile.tamplate) {
    
    case 1:
      templateComponent = <Template profile={profile} />;
      console.log("PreviewPDF case 1 picked")
      break;
    case 2:
      templateComponent = <Template2 profile={profile} />;
      console.log("PreviewPDF case 2 picked")

      break;
    case 3:
      templateComponent = <Template3 profile={profile} />;
      console.log("PreviewPDF case 3 picked")

      break;
    default:
      templateComponent = null;
      console.log("PreviewPDF case NULL picked")

      break;
  }

    return (
      <>

        <div style={{ flexGrow: 1 }}>
          
            <PDFDownloadLink
            document={templateComponent}
            fileName='somename.pdf'
          >
            {({ loading }) => (loading ? 'Loading document...' : 'Download now!')}
          </PDFDownloadLink>
          <PDFViewer
            showToolbar={false}
            style={{
              width: '100%',
              height: '95%',
            }}
          >

           {templateComponent} 
          </PDFViewer>
    
        </div>
      </>
      )
}

// Create Document Component
const Template = ({ profile }) => {


    return (
      <Document >
        <Page size='A4' style={{backgroundColor:'#f3fafd'}}>
          <View style={{display:'flex', flexDirection:'row',justifyContent:'space-between', maxHeight:'100%'}}>
          <RainbowSVG/>  

          <DoveSVG />
          <RainbowSVG/>  
          </View>

          <FourLeftSections profile={profile} />

          <View style={{display:"flex", flexDirection:'row'}}>
            <CandelsSVG/>
            <CandelsSVG/>
            <CandelsSVG/>
            <CandelsSVG/>
          </View>
        </Page>
      </Document>
    )
  }

  // Create Document Component
  const Template2 = ({ profile }) => {
    const design = styles.section_left2
    return (
      <Document>
        <Page size='A4' style={styles.page}>
          // We will divide our document into 2 columns
          <LeftSection profile={profile} design={design} />
          <RightSection profile={profile} />
          <LeftSection profile={profile} design={design} />

        </Page>
      </Document>
    )
  }

  const Template3 = ({profile}) => {
    return (
    <Document>
      <Page size='A4'>
      <View style={{display:'flex', alignItems:"center",maxHeight:"150ox", minHeight:'30px', maxWidth:'100%'}}>
          <Text style={{padding:'10vh'}}>{profile.name}</Text>
        </View>
      <View style={{ paddingBottom:'2rem'}}>
        <View style={{display:'flex', alignItems:"center",maxHeight:"350px", minHeight:'200px', maxWidth:'100%'}}>
          <Text style={{padding:'10vh'}}>{profile.header}</Text>
        </View>
       <View style={{display:'flex', alignItems:"center",maxHeight:"350px", minHeight:'200px', maxWidth:'100%'}}> 
        <Text >{profile.about}</Text>
        </View>
        <View style={{display:'flex', alignItems:"center",maxHeight:"350px", maxWidth:'100%'}}>
        <Image  src={profile.mainImageURL}/>
        <Image src={profile.bodyImageURL}/>
       </View>
        
    </View>
      </Page>

    </Document>
    )
  }

export default PreviewPDF



