import React , {useState, useEffect, useRef}from 'react'
import {Page, Text,  View, Document, Image,PDFViewer,StyleSheet, PDFDownloadLink } from '@react-pdf/renderer'
import items from '../../Data/items.json'
// Create styles
const styles = StyleSheet.create({
    page: {
      flexDirection: 'row',
      // backgroundColor: '#E4E4E4',
    //   border:'9px solid red',
      // maxHeight:"100%"
      display:"flex",
      flexDirection:"column",
      // backgroundImage: 'url("/images/MainPageImg/Bible/הללויה.png")'
    },
    section: {
      margin: 10,
      padding: 10,
      flexGrow: 1,
      display: "flex",
    //   flexDirection:"column",
    },
    body: {
        paddingTop:35,
        paddingBottom:35,
        paddingHorizontal:35,
    },
    title: {
        fontSize:25,
        textAlign:"center",
    },
    text: {
        margin: 12,
        fontSize: 14,
        textAlign: "justify",
        fontFamily: "Times-Roman",
    },
    image: {
        marginVertical: 15,
        marginHorizontal:100,
    },
    header: {
        fontSize: 12,
        marginBottom: 20,
        textAlign: "center",
        color: "grey",
        fontFamily: "AntonFamily",
      },
      pageNumber: {
        position: "absolute",
        fontSize: 12,
        bottom: 30,
        left: 0,
        right: 0,
        textAlign: "center",
        color: "grey",
        fontFamily: "AntonFamily",
      },
      viewer: {
        width: window.innerWidth - (window.innerWidth / 2), //the pdf viewer will take up all of the width and height
        height: window.innerHeight,
      },
      backgroundImage: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        opacity: 0.5, // Adjust the opacity as needed
        zIndex:0
      },
      content: {
        position: 'absolute',
        top: 50,
        left: 50,
      },
  });

const PdfGenerator = () => {

    const testItem = items.find(item => item.id === 2)
    const testImg = testItem.imgUrl
    // const testImg = items.find(item => item.id === 2).imgUrl
    // console.log(testImg)
  return (

    // <PDFViewer>
        <Document>
            <Page size="A4" style={styles.page }>
           
                <View style={[styles.section, {border :"3px solid green"}]}>
                    <Text>Section #1 asdasdasdasd</Text>
                    <Image src={testImg} style={styles.image} alt="LALALA"/>
                    <Text style={styles.text}> text test </Text>

                </View>
                <View style={styles.section}>
                    <Text>Section #2</Text>
                    <Text style={styles.text}> text test </Text>

                </View>
                <Text 
                styles={styles.pageNumber}
                render={({pageNumber, totalPages}) => `${pageNumber} / ${totalPages}`}
                />
             
            </Page >

         </Document>
    // </PDFViewer>


  )
}

export default PdfGenerator

export const ViewPdf = () => {
    const testItem = items.find(item => item.id === 2)
    const testImg = testItem.imgUrl
    return (
      <PDFViewer style={styles.viewer}>
        {/* Start of the document*/}
        <Document>
          {/*render a single page*/}
          <Page size="A4" style={styles.page}>
          <Image 
              src="/images/MainPageImg/Bible/הללויה.png"
              style={styles.backgroundImage}
              />
           
            <View style={styles.section}>
              <Text>Hello</Text>
            </View>
            <View style={styles.section}>
              <Text>World</Text>
            </View>
          {/* </Page> */}
          {/* <Page size="A4" style={styles.page}> */}
              <View style={[styles.section, {border :"3px solid green"}]}>
                  <Text>Section #1 asdasdasdasd</Text>
                  <Image src={testImg} style={styles.image} alt="LALALA"/>
                  <Text style={styles.text}> text test </Text>

              </View>
              <View style={[styles.section, {border :"3px solid green"}]}>
                  <Text>Section #1 asdasdasdasd</Text>
                  <Image src={testImg} style={styles.image} alt="LALALA"/>
                  <Text style={styles.text}> text test </Text>

              </View>
              <View style={styles.section}>
                  <Text>Section 22</Text>
                  <Text style={styles.text}> text test </Text>

              </View>
              <Text 
              styles={styles.pageNumber}
              render={({pageNumber, totalPages}) => `${pageNumber} / ${totalPages}`}
              />
              <View style={styles.section}>
                  <Text>Section 22</Text>
                  <Text style={styles.text}> text test </Text>

              </View>
              <Text 
              styles={styles.pageNumber}
              render={({pageNumber, totalPages}) => `${pageNumber} / ${totalPages}`}
              />
             
            </Page >
        </Document>

      </PDFViewer>
    );
    
}


// export const PDFTemplate = ({userData}) => {

//   const [title, setTitle] = useState('');
//   const [image1, setImage1] = useState('');
//   const [body, setBody] = useState('');
//   const [image2, setImage2] = useState('');

//   const handleTitleChange = (event) => {
//     setTitle(event.target.value);
//   };
  
//   const handleImage1Change = (event) => {
//     setImage1(event.target.value);
//   };
  
//   const handleBodyChange = (event) => {
//     setBody(event.target.value);
//   };
  
//   const handleImage2Change = (event) => {
//     setImage2(event.target.value);
//   };
//   return(

//     <Document>
//       <Page>
//         <Text>{userData.title}</Text>
//         <Image src={userData.image1} />
//         <Text>{userData.body}</Text>
//         <Image src={userData.image2} />
//       </Page>
//     </Document>

//   );
// };

////////////////////////////////////////////////////////////////////////////////////////////////////////////

//FormComponent receives a prop called onUserInput, which is a callback function.
//  When the form is submitted, the handleFormSubmit function is triggered,
//  and it calls onUserInput with the inputValue as an argument.
export const FormComponent = ({ onUserInput }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputValue((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }
    
    ));

  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onUserInput(inputValue);
  };
  return (
    <form onSubmit={    onUserInput(inputValue)
    }>
    <label>
      Title:
      <input type="text" name="title" value={inputValue.title} onChange={handleInputChange} />
    </label>
    {/* <br /> */}
    <label>
      Image URL 1:
      <input
        type="text"
        name="imageUrl1"
        value={inputValue.imageUrl1}
        onChange={handleInputChange}
      />
    </label>
    {/* <br /> */}
    <label>
      Body:
      <textarea name="body" value={inputValue.body} onChange={handleInputChange} />
    </label>
    {/* <br /> */}
    <label>
      Image URL 2:
      <input
        type="text"
        name="imageUrl2"
        value={inputValue.imageUrl2}
        onChange={handleInputChange}
      />
    </label>
    {/* <br /> */}
    <button type="submit">Generate PDF</button>
  </form>
);
};


export const PDFTemplate = ({ userInputData }) => {
  // Use the userInputData to render the PDF template
  // ...

  return (
  <PDFViewer style={styles.viewer} >

    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text>{userInputData.title}</Text>
          <Image src={userInputData.imageUrl1} style={styles.image} />
          <Text style={styles.text}>{userInputData.body}</Text>
          <Image src={userInputData.imageUrl2} style={styles.image} />
        </View>
      </Page>
    </Document>
  </PDFViewer>
);
};

export const PDFgenerator2  = () => {
  // const [userInputData, setUserInputData] = useState(null);
  const [userData, setUserData] = useState({
    title: '',
    imageUrl1: '',
    body: '',
    imageUrl2: '',
  });


  const handleUserInput = (data) => {
    setUserData(data);
  };

  return (
    <div>
      <FormComponent onUserInput={handleUserInput} />
      <PDFTemplate userInputData={userData} />
    </div>
  );
}






///trash that might be needed 

// export const InputForm = () => {
//   const [userData, setUserData] = useState({
//     title: '',
//     imageUrl1: '',
//     body: '',
//     imageUrl2: '',
//   });

//   // Handle input changes
//   const handleInputChange = (event) => {
//     const {name, value} = event.target;
//     setUserData((prevData) => ({...prevData, [name] : value}))
//   };

//   // Handle form submission
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Perform any additional actions (e.g., generating the PDF) based on the user input
//   };
  
//   return (
//     <form onSubmit={handleSubmit} style={{display:"flex", flexDirection:"column"}}>
//       <input
//         type="text"
//         name="title"
//         value={userData.title}
//         onChange={handleInputChange}
//         placeholder="Enter title"
//       />
//       <input
//         type="text"
//         name="image1"
//         value={userData.image1}
//         onChange={handleInputChange}
//         placeholder="Enter image URL"
//       />
//       <textarea
//         style={{inlineSize:'1'}}
//         type="text"
//         name="body"
//         value={userData.body}
//         onChange={handleInputChange}
//         placeholder="Enter body text"
//       />
//       <input
//         type="text"
//         name="image2"
//         value={userData.image2}
//         onChange={handleInputChange}
//         placeholder="Enter image URL"
//       />
//       <button type="submit">Generate PDF</button>
//     </form>
//   );
// };



/// that works before try to chage to useREf for not re-render the PDF file:
// export const FormComponent = ({ onUserInput }) => {
//   const [inputValue, setInputValue] = useState('');

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setInputValue((prevFormData) => ({
//       ...prevFormData,
//       [name]: value,
//     }
    
//     ));

//   };

//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     onUserInput(inputValue);
//   };
//   return (
//     <form onSubmit={console.log("submited")}>
//     <label>
//       Title:
//       <input type="text" name="title" value={inputValue.title} onChange={handleInputChange} />
//     </label>
//     {/* <br /> */}
//     <label>
//       Image URL 1:
//       <input
//         type="text"
//         name="imageUrl1"
//         value={inputValue.imageUrl1}
//         onChange={handleInputChange}
//       />
//     </label>
//     {/* <br /> */}
//     <label>
//       Body:
//       <textarea name="body" value={inputValue.body} onChange={handleInputChange} />
//     </label>
//     {/* <br /> */}
//     <label>
//       Image URL 2:
//       <input
//         type="text"
//         name="imageUrl2"
//         value={inputValue.imageUrl2}
//         onChange={handleInputChange}
//       />
//     </label>
//     {/* <br /> */}
//     {/* <button type="submit">Generate PDF</button> */}
//   </form>
// );
// };


// export const PDFTemplate = ({ userInputData }) => {
//   // Use the userInputData to render the PDF template
//   // ...

//   return (
//   <PDFViewer style={styles.viewer}>

//     <Document>
//       <Page size="A4" style={styles.page}>
//         <View style={styles.section}>
//           <Text>{userInputData.title}</Text>
//           <Image src={userInputData.imageUrl1} style={styles.image} />
//           <Text style={styles.text}>{userInputData.body}</Text>
//           <Image src={userInputData.imageUrl2} style={styles.image} />
//         </View>
//       </Page>
//     </Document>
//   </PDFViewer>
// );
// };

// export const PDFgenerator2  = () => {
//   // const [userInputData, setUserInputData] = useState(null);
//   const [userData, setUserData] = useState({
//     title: '',
//     imageUrl1: '',
//     body: '',
//     imageUrl2: '',
//   });
//   const handleUserInput = (data) => {
//     setUserData(data);
//   };

//   return (
//     <div>
//       <FormComponent onUserInput={handleUserInput} />
//       <PDFTemplate userInputData={userData} />
//     </div>
//   );
// }
