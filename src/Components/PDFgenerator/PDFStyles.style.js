import {StyleSheet} from '@react-pdf/renderer';

export const styles = StyleSheet.create({
    page: {
      display: 'flex',
      flexDirection: 'row',
    },
    section_right: {
      margin: 10,
      padding: 10,
      // paddingTop: 20,
      width: '75%',
      // border:"3px solid red",
      borderRadius:'10px',
      color:'#1352CB',
      backgroundColor:'#FDF8E2',
      // alignSelf:'center',

    },
    section_mid: {
      // margin: 10,
      // padding: 10,
      // paddingTop: 20,
      width: '100%',
      // border:"3px solid red",
      borderRadius:'10px',
      color:'#1352CB',
      // backgroundColor:'#FDF8E2',
      // alignSelf:'center',

    },

    section_left_bot: {
      display:"flex",
      flexDirection:'column',
      width: '100%',
      height: '10%',
      // alignContent:'flex-start',
      backgroundColor: '#b8f2ea',
      // border:"3px solid purple",
      borderRadius:'10px',
      marginTop: "auto"
      

    },
    section_left_top: {
      display:"flex",
      flexDirection:'column',
      width: '15%',
      height: '10%',
      // alignContent:'flex-start',
      backgroundColor: '#b8f2ea',
      // border:"3px solid purple",
      borderRadius:'10px',
      marginBottom: "auto"
      

    },

    section_left2 :{
      width:'15%',
      backgroundColor: '#FFDDD3',
      // border:'5px solid red',
      // borderRadius: "20 20 20"

    },
    profile_container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginTop: '20',
      marginBottom: '20px',
      height: '150',
      fontFamily: 'Helvetica-Bold',
    },
    name_text: {
      paddingTop: '10px',
      paddingBottom: '5px',
      fontSize: '14px',
      fontWeight: '900',
      color: 'white',
    },
    family_text: {
      color: '#d1d5db',
      fontSize: '11px',
    },
    profile_img: {
      width: '60px',
      height: '60px',
      borderRadius: '90',
    },
    profile_line: {
      marginTop: '10px',
      width: '10%',
      height: '1px',
      backgroundColor: '#FFF',
      textAlign: 'center',
      
    },
  })