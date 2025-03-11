const { router, route,text,payload } = require('bottender/router');
const fetch = require('node-fetch');
const google = require('./google/google');

//var subs = { sub1 : "7INFOSEC", sub2 : "7COMPARC", sub3 : "7THESIS", sub4 : "7PDCOM", sub5 : "ARTAPP"};

studentID = {
  "18-0166": "7INFOSEC:99,\n7COMPARC:963,\n7THESIS:90,\n7PDCOM:91,\nARTAPP:93",
  "18-0130": "7INFOSEC:75,\n7COMPARC:75,\n7THESIS:75,\n7PDCOM:75,\nARTAPP:75",
  "18-0045": "7INFOSEC:83,\n7COMPARC:80,\n7THESIS:81,\n7PDCOM:85,\nARTAPP:87",
  "18-0728": "7INFOSEC:85,\n7COMPARC:84,\n7THESIS:82,\n7PDCOM:86,\nARTAPP:89",
  "18-0046": "7INFOSEC:85,\n7COMPARC:86,\n7THESIS:87,\n7PDCOM:86,\nARTAPP:89",
  "18-0129": "7INFOSEC:83,\n7COMPARC:83,\n7THESIS:85,\n7PDCOM:85,\nARTAPP:90",
}

studidreq = {
	"lopez joshua l": "18-0130",
	"sangalang raizen jhon": "18-0185",
	"cayabyab miguel": "18-0045",
	"napao ana marie": "18-0728",
	"razon lance denzel": "18-0046",
        "karl angelo juarez": "18-0129",
}
mysec = {
	"18-0130": "BSCS-C401",
	"18-0185": "BSCS-C401",
	"18-0045": "BSCS-C401",
	"18-0728": "BSCS-C401",
	"18-0046": "BSCS-C401",
	"18-0129": "BSCS-C401",
	
}


async function gradeRequest(context){
  var parseString = context.event.text

  // this will split the string by space 
  var splittedString = parseString.split(" ") 

  // this get the whole equation 
  var eq = splittedString.slice(1, splittedString.length)  
  var studentIDParsed = eq.join(" ");
 
  await context.sendText(studentID[studentIDParsed])
    
}

async function botGradeRequest(context){
  var parseString = context.event.text

  // this will split the string by space 
  var splittedString = parseString.split(" ") 

  // this get the whole equation 
  var eq = splittedString.slice(1, splittedString.length)  
  var studentIDParsed = eq.join(" ");
  var encodedUrl = encodeURIComponent(studentIDParsed)
  try {
    // dito ang NGROK
    var response = await fetch(`https://13e0-111-125-123-147.ngrok.io/bot/${encodedUrl}`)
    var jsonBlocks = await response.json()
    await context.sendText(`result: ${jsonBlocks.data}`)
  }  
  catch (e) {    
    await context.sendText("try again /help") 
    console.error(e)    
  }
}


async function getStudentID(context){
  
   var parseString = context.event.text

  // this will split the string by space 
  var splittedString = parseString.split(" ") 

  // this get the whole equation 
  var eq = splittedString.slice(1, splittedString.length)  
  var studentIDParsed = eq.join(" ");
 
  await context.sendText(studidreq[studentIDParsed])
    
}
async function getStudentID3(context){
  
   var parseString = context.event.text

  // this will split the string by space 
  var splittedString = parseString.split(" ") 

  // this get the whole equation 
  var eq = splittedString.slice(1, splittedString.length)  
  var studentIDParsed = eq.join(" ");
 
  await context.sendText(mysec[studentIDParsed])
    
}

async function greetingsInstruction(context){
  await context.sendText("Hi! welcome to CCA bot you can use these following commands\n\n#commonquestions\n#developers\n#graderequest <student-number>\n#mysection <student-number>\n#ask <your question>\n#studentidrequest <last first middle>\n\nif you think your question is not here or cannot be answered by our chatbot you can contact us:\n0453225801\nor\nsupport@cca.edu.ph");
  
}

questions = {
  "is there a scholarship?": "Once you passed the entrance exam you are already a scholar so you only need to pay for the school I.D and uniforms...",
  "is there a tuition fee?": "Once you passed the entrance exam you are already a scholar so you only need to pay for the school I.D and uniforms...",
  "what are the course available?": "BS Accountancy,\nBS AccountingInformation System,\nBS Entrepreneurship,\nBS Tourism Management,\nAssociate in Computer Technology,\nBS Computer Science,\nBS Information System,\nBachelor of Library and Information Science,\nBachelor of Physical Education,\nBachelor of Technical-Vocational Teacher Education,\nBachelor of Arts in English Language Studies,\nBachelor of Performing Arts,\nBachelor of Special Needs Education,\nBS Psychology,\nBS Mathematics",
  "how much is the tuition fee?": "Once you passed the entrance exam you are already a scholar so you only need to pay for the school I.D and uniforms...",
  "what are the requirements?": "You will need to bring your card grade, transcript of records, PSA and also bring a pen with you...",
  "where are you located?": "CCA is located at Arayat Boulevard, Barangay Pampang, Angeles City.\n\nPlease note that all transactions in the college are online.\n\nThank you.",
  "how much does this school cost?": "CCA offers free education to its students with the following exemptions.\n\n1. Those who have already attained a bachelor’s degree or comparable undergraduate degree from any higher education institution, private or public;\n\n2. Those who fail to comply with the admission and retention policies of the College; or\n\n3. Students who fail to complete their bachelor’s degree or comparable undergraduate degree within a year after the period prescribed in their program.", 	
  "are you accepting new students?": "You may directly contact the Registrar’s and Admissions Office to discuss your specific query. You may contact them at aro@cca.edu.ph or at their FB page https://m.facebook.com/CCAAdmissionsAndRegistrarsOffice/ \n\nPlease note that office works in the College are  in work from home scheme until further notice. All transactions are done online.\n\nThank you.", 
  "cost?": "CCA offers free education to its students with the following exemptions.\n\n1. Those who have already attained a bachelor’s degree or comparable undergraduate degree from any higher education institution, private or public;\n\n2. Those who fail to comply with the admission and retention policies of the College; or\n\n3. Students who fail to complete their bachelor’s degree or comparable undergraduate degree within a year after the period prescribed in their program.",
  "price?": "CCA offers free education to its students with the following exemptions.\n\n1. Those who have already attained a bachelor’s degree or comparable undergraduate degree from any higher education institution, private or public;\n\n2. Those who fail to comply with the admission and retention policies of the College; or\n\n3. Students who fail to complete their bachelor’s degree or comparable undergraduate degree within a year after the period prescribed in their program.",	
  "enrollment requirements?": "You will need to bring your card grade, transcript of records, PSA and also bring a pen with you...",
  "scholarship?": "Once you passed the entrance exam you are already a scholar so you only need to pay for the school I.D and uniforms...",
  "location?": "CCA is located at Arayat Boulevard, Barangay Pampang, Angeles City.\n\nPlease note that all transactions in the college are online.\n\nThank you.",	
  "school location?": "CCA is located at Arayat Boulevard, Barangay Pampang, Angeles City.\n\nPlease note that all transactions in the college are online.\n\nThank you.",	
  "course?": "BS Accountancy,\nBS AccountingInformation System,\nBS Entrepreneurship,\nBS Tourism Management,\nAssociate in Computer Technology,\nBS Computer Science,\nBS Information System,\nBachelor of Library and Information Science,\nBachelor of Physical Education,\nBachelor of Technical-Vocational Teacher Education,\nBachelor of Arts in English Language Studies,\nBachelor of Performing Arts,\nBachelor of Special Needs Education,\nBS Psychology,\nBS Mathematics", 
  "course available?": "BS Accountancy,\nBS AccountingInformation System,\nBS Entrepreneurship,\nBS Tourism Management,\nAssociate in Computer Technology,\nBS Computer Science,\nBS Information System,\nBachelor of Library and Information Science,\nBachelor of Physical Education,\nBachelor of Technical-Vocational Teacher Education,\nBachelor of Arts in English Language Studies,\nBachelor of Performing Arts,\nBachelor of Special Needs Education,\nBS Psychology,\nBS Mathematics",	
  "requirements?": "You will need to bring your card grade, transcript of records, PSA and also bring a pen with you...",
}
async function askque(context){
 var parseString = context.event.text

  // this will split the string by space  
  var splittedString = parseString.split(" ") 

  // this get the whole equation 
  var eq = splittedString.slice(1, splittedString.length)  
  var questionparsed = eq.join(" ");
 
  await context.sendText(questions[questionparsed])
    
}
async function testButton(context){
  // punta ka dito para makita mo pa yung ibang template https://bottender.js.org/docs/channel-messenger-sending-messages
  await context.sendButtonTemplate('Common Questions', [
    {
      type: 'postback',
      title: 'Course Available',
      payload: 'payload1',
    },
    {
      type: 'postback',
      title: 'Enrollment Requirements',
      payload: 'payload2',
    },
	 {
       type: 'postback',
      title: 'Scholarship',
      payload: 'payload3',
    },
	
	
  ]);
}
//test
async function comque1(context){
  await context.sendText("BS Accountancy,\nBS Accounting Information System,\nBS Entrepreneurship,\nBS Tourism Management,\nAssociate in Computer Technology,\nBS Computer Science,\nBS Information System,\nBachelor of Library and Information Science,\nBachelor of Physical Education,\nBachelor of Technical-Vocational Teacher Education,\nBachelor of Arts in English Language Studies,\nBachelor of Performing Arts,\nBachelor of Special Needs Education,\nBS Psychology,\nBS Mathematics");
  
}
async function comque2(context){
  await context.sendText("You will need to bring your card grade, transcript of records, PSA and also bring a pen with you...");
  
}
async function comque3(context){
  await context.sendText("Once you passed the entrance exam you are already a scholar so you only need to pay for the school I.D and uniforms...");
  
}
async function dev1(context){
  await context.sendText("Main Dev:\nLopez Joshua L");
  
}

async function zButton(context){
  await context.sendText("Main Dev:\nSan");
}


module.exports = async function App(context) {
 
  return router(
    [     text(/^\#commonquestions+/,testButton),
	  
      //text(/^\#graderequest[]?\s+/,gradeRequest), 
      text(/^\#graderequest[]?\s+/,botGradeRequest),  
      text(/^\#ask[]?\s+/,askque),
      text(/^\#studentidrequest[]?\s+/,getStudentID),  
      text(/^\#mysection[]?\s+/,getStudentID3),
      
      text(/^\#developers+/,dev1),
           
      payload('payload1',comque1),   
	  
	   payload('payload2',comque2), 	  
	   payload('payload3',comque3),    
      route('*',greetingsInstruction),
    ]
  );
  
};
