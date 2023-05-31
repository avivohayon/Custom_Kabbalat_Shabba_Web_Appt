import { View, Text, Image, Document, Page, PDFViewer, PDFDownloadLink } from "@react-pdf/renderer";
import {styles} from './PDFStyles.style'
import React, {useState, useEffect} from "react";

export const Profile = ({ profile }) => {
    return (
      <View style={styles.profile_container}>
        <Image style={styles.profile_img} src={profile.profileImageURL} />
  
        <View
          style={{
            justifyContent: 'center',
          }}
        >
          <Text style={styles.name_text}>{profile.name}</Text>
        </View>
        <Text style={styles.family_text}>{profile.family}</Text>
        <View style={styles.profile_line} />
      </View>
    )
  }

export const LeftSection = ({ profile, design}) => {

    return (
      <View style={design}>
        <Profile profile={profile} />
      </View>
    )
  }

export const RightSection = ({ profile }) => {
    return (
    <View style={[styles.section_right]}>
        <View style={{display:"flex",alignItems:'center', borderRadius:'10px',minHeight:'50svh', maxHeight:'130svh',border:'2px solid blue'}}>
          <Text style={{paddingTop:'10px', paddingLeft:'5px'}}>{profile.header}</Text>
        </View>
      <View>
        <View style={{display:'flex', alignItems:"center",maxHeight:"350px", maxWidth:'100%'}}>
          <Image  src={profile.mainImageURL}/>
        </View>
      </View>
 
       <View style={{alignItems:"flex-start",borderRadius:'10px' , maxHeight:'600svh',minHeight:'200svh',border:'2px solid yellow'}}> 
        <Text style={{paddingTop:'10px',  paddingLeft:'5px'}}>{profile.about}</Text>
        </View>
        <View>
        <Image src={profile.bodyImageURL}/>
       </View>
        
    </View>
    )
  }

export const FourLeftSections = ({profile}) => {
  return (
  <>
    <View style={[styles.section_mid , {flexDirection:'row', justifyContent:'space-around'}]}>
      <View>
      <View style={{display:"flex",alignItems:'center', borderRadius:'10px',maxHeight:'100svh'}}>
          <Text style={{paddingTop:'19px', paddingLeft:'12px'}}>{profile.name}</Text>
          
        </View>
        <View style={{display:"flex",alignItems:'center', borderRadius:'10px',maxHeight:'100svh'}}>
          <Text style={{paddingTop:'19px', paddingLeft:'12px'}}>{profile.header}</Text>
          
        </View>
        <View style={{alignItems:"center",borderRadius:'10px' ,maxHeight:'450svh'}}> 
        <Text style={{paddingTop:'10px',  paddingLeft:'12px'}}>{profile.about}</Text>
        </View>
      </View>


      <View style={{display:'flex',alignItems:"flex-end"}}>
        <View style={{display:'flex',maxHeight:"200px", maxWidth:'70%'}}>
          <Image  src={profile.mainImageURL}/>
        </View>
      </View>
 
     
   
        
    </View>
         <View style={{maxHeight:'300px', maxWidth:'100%'}}>
         <Image src={profile.bodyImageURL}/>
        </View>
        </>


  )

}