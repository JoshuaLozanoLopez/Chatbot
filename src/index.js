const { router, route,text,payload} = require('bottender/router');
const fetch = require('node-fetch');
const google = require('./google/google');

let loop = false;

async function xylocopa(context){

    
	
	var items = ['Hello welcome to CCA chatbot hopefully we could help you...', 'Hi welcome to our chatbot project...', 'Welcome user ^^ feel free to ask...','Hi welcome this is chatbot you can try to send\n\nshow help\n\nif you want to know more...'];
    var item = items[Math.floor(Math.random() * items.length)];

    await context.sendText(item);
  
	
	
	return frutescence;
       


}

async function frutescence(context){
  await context.sendButtonTemplate('Is there something i can help you with?', [
    {
      type: 'postback',
      title: 'Yes',
      payload: 'payload1',
    },
    {
      type: 'postback',
      title: 'No',
      payload: 'payload2',
    },
	 
	
	
  ]);
}

async function latipes1(context){
	
	await context.sendText("Command examples\n\nFirst see 'common questions' to see if your questions is there\n\n<COURSE ACRONYM> all about\n<COURSE ACRONYM> career path\n\nshow institutes\n\nTo see how to download available forms of a institute just type\n\nshow form download help\n\n<institute> all about\n\n'difference of bscs and bsis?'\n\n'developer'");
    
	
}

async function latipes2(context){
	
	
	await context.sendText("Goodbye take care...");

}


async function latipes3(context){
	await context.sendText("latipes3 working");
}	
async function commandlist(context){
	await context.sendText("command list help working");
}
async function switchon(context){
	//let loop = false;
	
}

async function switchoff(){
	//let loop = true;
	
}

async function errorcatch(context){
	await context.sendButtonTemplate('Error something went wrong...\nDo you want to see help command list?', [
    {
      type: 'postback',
      title: 'Yes',
      payload: 'payload1',
    },
    {
      type: 'postback',
      title: 'No',
      payload: 'payload2',
    },
	 
	
	
  ]);

}
bsalist = {
	"course info": "What is BS Accountancy course all about\n\nAccountancy is the practice of recording, classifying,and reporting on business transactions for a business.It provides feedback to management regarding the financialresults and status of an organization.",
	
	"career path": "BS Accounting Career Path\n\nPublic Accountant\nTax Accountant\nForensic Accountant\nFinancial Accountant\nManagerial Accountant\nFinancial Planner\nInternal Auditor\nGovernment Accountant\nAccounting Career Path Planning",
	
	"all about": "What is BS Accountancy course all about\n\nAccountancy is the practice of recording, classifying,and reporting on business transactions for a business.It provides feedback to management regarding the financialresults and status of an organization.",
	
	"job career": "BS Accounting Career Path\n\nPublic Accountant\nTax Accountant\nForensic Accountant\nFinancial Accountant\nManagerial Accountant\nFinancial Planner\nInternal Auditor\nGovernment Accountant\nAccounting Career Path Planning",
}



bsaislist = {
	"all about": "BS Accounting Information System all about\n\nAn accounting information system (AIS) is a structure that a business uses to collect,store, manage, process, retrieve, and report its financial data so it can be used by accountants,consultants, business analysts, managers, chief financial officers (CFOs), auditors, regulators,and tax agencies.",
	
	"course info": "BS Accounting Information System all about\n\nAn accounting information system (AIS) is a structure that a business uses to collect,store, manage, process, retrieve, and report its financial data so it can be used by accountants,consultants, business analysts, managers, chief financial officers (CFOs), auditors, regulators,and tax agencies.",
	
	"job career": "AccountingInformation System Career Path\n\nAccountant\nFinancial Auditors\nSystems Analyst\nConsultants\nFinancial Manager\nUpper Management",
	
	"career path": "AccountingInformation System Career Path\n\nAccountant\nFinancial Auditors\nSystems Analyst\nConsultants\nFinancial Manager\nUpper Management",
	
}

bselist = {
	"all about": "BS Entrepreneurship all about\n\nThe Bachelor of Science in Entrepreneurship is a four-year degree program that centers on how to start and manage a business by combining management,accounting, finance, and marketing principles.",
	
	"course info": "BS Entrepreneurship all about\n\nThe Bachelor of Science in Entrepreneurship is a four-year degree program that centers on how to start and manage a business by combining management,accounting, finance, and marketing principles.",
	
	"job career": "BS Entrepreneurship Career Path\n\nMid-level Management for an Entrepreneurship Degree Holder\nBusiness Consultant\nSales\nResearch and Development\nNot-for-Profit Fundraiser\nTeacher\nRecruiter\nBusiness Reporter",
	
	"career path": "BS Entrepreneurship Career Path\n\nMid-level Management for an Entrepreneurship Degree Holder\nBusiness Consultant\nSales\nResearch and Development\nNot-for-Profit Fundraiser\nTeacher\nRecruiter\nBusiness Reporter",
	
}

bstmlist = {
	"all about": "BS Tourism Management all about\n\nThe Bachelor of Science in Tourism (BS Tourism) is a 4-year multidisciplinary degree that trains students in becoming leaders, managers, entrepreneurs, and qualified personnel in the tourism industry. It focuses on cultural aspects such as travel, language, and history.",
	
	"course info": "BS Tourism Management all about\n\nThe Bachelor of Science in Tourism (BS Tourism) is a 4-year multidisciplinary degree that trains students in becoming leaders, managers, entrepreneurs, and qualified personnel in the tourism industry. It focuses on cultural aspects such as travel, language, and history.",
	
	"job career": "BS Tourism Management\n\nTourism officer\nHotel and Restaurant Manager\nSpa Manager\nTour Operator\nEvent and Conference Organiser\nTour Guide\nExecutive Chef\nSommelier\nFlight Attendant\nTour Manager\nTravel Agency Manager",
	
	"career path": "BS Tourism Management\n\nTourism officer\nHotel and Restaurant Manager\nSpa Manager\nTour Operator\nEvent and Conference Organiser\nTour Guide\nExecutive Chef\nSommelier\nFlight Attendant\nTour Manager\nTravel Agency Manager",
	
}
actlist = {
	"all about": "Associate in Computer Technology all about\n\nThe Associate in Computer Technology (ACT) is a 2-year degree program that provides specialized tracks on application development, networking, multimedia development where software testing, analytics, computer security, User Interface/User Experience (UI/UX) are enhanced. ACT can be a ladderized program for BS Computer Science, BS Information Technology and BS Entertainment and Multimedia Computing.",
	
	"course info": "Associate in Computer Technology all about\n\nThe Associate in Computer Technology (ACT) is a 2-year degree program that provides specialized tracks on application development, networking, multimedia development where software testing, analytics, computer security, User Interface/User Experience (UI/UX) are enhanced. ACT can be a ladderized program for BS Computer Science, BS Information Technology and BS Entertainment and Multimedia Computing.",
	
	"job career": "Associate in Computer Technology Career Path\n\nProgrammer\nSystems Integration Personnel\nIT Audit Personnel\nTechnical Support Specialist\nQuality Assurance Specialist",
	
	"career path": "Associate in Computer Technology Career Path\n\nProgrammer\nSystems Integration Personnel\nIT Audit Personnel\nTechnical Support Specialist\nQuality Assurance Specialist",
	
}
bscslist = {
	"all about": "BS Computer Science all about\n\nBachelor of Science in Computer Science (BSCS) is a four-year program that includes the study of computing concepts and theories, algorithmic foundations, and new developments in computing.",
	
	"course info": "BS Computer Science all about\n\nBachelor of Science in Computer Science (BSCS) is a four-year program that includes the study of computing concepts and theories, algorithmic foundations, and new developments in computing.",
	
	"job career": "BS Computer Science Career Path\n\nApplication analyst\nApplications developer\nCyber security analyst\nData analyst\nDatabase administrator\nForensic computer analyst\nGame designer\nGames developer\nInformation\nsystems manager\nIT consultant\nSoftware engineer\nSystems analyst\nUX designer\nWeb designer\nWeb developer",
	
	"career path": "BS Computer Science Career Path\n\nApplication analyst\nApplications developer\nCyber security analyst\nData analyst\nDatabase administrator\nForensic computer analyst\nGame designer\nGames developer\nInformation\nsystems manager\nIT consultant\nSoftware engineer\nSystems analyst\nUX designer\nWeb designer\nWeb developer",
	
}
bsislist = {
	"all about": "BS Information System all about\n\nBachelor of Science in Information System (BSIS) is a four year degree program that deals with the design and implementation of solutions that integrate information technology with business processes. The program teaches students all about hardware and software applications and how they can use them to collect, filter, process, create and distribute data.",
	
	"course info": "BS Information System all about\n\nBachelor of Science in Information System (BSIS) is a four year degree program that deals with the design and implementation of solutions that integrate information technology with business processes. The program teaches students all about hardware and software applications and how they can use them to collect, filter, process, create and distribute data.",
	
	"job career": "BS Information System Career Path\n\nApplication analyst\nCyber security analyst\nData analyst\nData scientist\nDatabase administrator\nInformation systems manager\nIT consultant\nIT technical support officer\nPenetration tester\nSoftware engineer\nSystems analyst",
	
	"career path": "BS Information System Career Path\n\nApplication analyst\nCyber security analyst\nData analyst\nData scientist\nDatabase administrator\nInformation systems manager\nIT consultant\nIT technical support officer\nPenetration tester\nSoftware engineer\nSystems analyst",
	
}
blislist = {
	"all about": "Bachelor of Library and Information Science all about\n\nThe Bachelor of Library and Information Science is a four-year degree program designed to provide knowledge and skills in the management of library operations, the systematic organization, conservation, preservation and restoration of books, historical and cultural documents, and other intellectual properties.",
	
	"course info": "Bachelor of Library and Information Science all about\n\nThe Bachelor of Library and Information Science is a four-year degree program designed to provide knowledge and skills in the management of library operations, the systematic organization, conservation, preservation and restoration of books, historical and cultural documents, and other intellectual properties.",
	
	"job career": "Bachelor of Library and Information Science Career Path\n\nBibliographer\nDocumentation Officer\nCopy Cataloger\nLibrary Applications Developer\nAbstractor\nCataloger\nGeographic Information Systems Librarian\nAcademic Librarian\nConservator\nIndexer\nAcquisitions Librarian\nCorporate Librarian\nInformation Librarian / Specialist\nArchivist\nDatabase Librarian\nLaw Librarian",
	
	"career path": "Bachelor of Library and Information Science Career Path\n\nBibliographer\nDocumentation Officer\nCopy Cataloger\nLibrary Applications Developer\nAbstractor\nCataloger\nGeographic Information Systems Librarian\nAcademic Librarian\nConservator\nIndexer\nAcquisitions Librarian\nCorporate Librarian\nInformation Librarian / Specialist\nArchivist\nDatabase Librarian\nLaw Librarian",
	
}
bpelist = {
	"all about": "Bachelor of Physical Education all about\n\nThe Bachelor of Physical Education (BPEd) is a four-year course which allows for focused study in physical education, and yet includes other areas like health education and music.",
	
	"course info": "Bachelor of Physical Education all about\n\nThe Bachelor of Physical Education (BPEd) is a four-year course which allows for focused study in physical education, and yet includes other areas like health education and music.",
	
	"job career": "Bachelor of Physical Education Career Path\n\nFitness and Recreation Manager / Consultant\nSports Tourism Officer\nSports, Fitness, and Wellness Facilities Manager\nGym Membership Sales Consultant\nSports, Fitness, and Recreational Events Manager \nClub Operations Specialist\nSports Brand Manager\nFitness, Sports, and Recreation Entrepreneur\nSports/Fitness Marketing Officer\nLocal Government Sport Development Program Coordinator/Consultant",
	
	"career path": "Bachelor of Physical Education Career Path\n\nFitness and Recreation Manager / Consultant\nSports Tourism Officer\nSports, Fitness, and Wellness Facilities Manager\nGym Membership Sales Consultant\nSports, Fitness, and Recreational Events Manager \nClub Operations Specialist\nSports Brand Manager\nFitness, Sports, and Recreation Entrepreneur\nSports/Fitness Marketing Officer\nLocal Government Sport Development Program Coordinator/Consultant",
	
}
btvtedlist = {
	"all about": "Bachelor of Technical-Vocational Teacher Education all about\n\nThe Bachelor in Technical-Vocational Teacher Education (BTVTEd) program is a four-year teacher education program designed to equip future teachers with adequate and relevant competencies in the area of technical and vocational teacher education.",
	
	"course info": "Bachelor of Technical-Vocational Teacher Education all about\n\nThe Bachelor in Technical-Vocational Teacher Education (BTVTEd) program is a four-year teacher education program designed to equip future teachers with adequate and relevant competencies in the area of technical and vocational teacher education.",
	
	"job career": "Bachelor of Technical-Vocational Teacher Education Career Path\n\nTeacher in Basic Education\nEntrepreneurs\nGrade 9-10 TLE teachers.\nSenior High School Tech-Voc Livelihood Track teachers.\nTVET Trainers/Instructors.\nHigher Education Institutions Faculty Members.\nTESDA Training Centers Trainers.\nTESDA Training Centers Assessors",
	
	"career path": "Bachelor of Technical-Vocational Teacher Education Career Path\n\nTeacher in Basic Education\nEntrepreneurs\nGrade 9-10 TLE teachers.\nSenior High School Tech-Voc Livelihood Track teachers.\nTVET Trainers/Instructors.\nHigher Education Institutions Faculty Members.\nTESDA Training Centers Trainers.\nTESDA Training Centers Assessors",
	
}
baelslist = {
	"all about": "Bachelor of Arts in English Language Studies all about\n\nThe Bachelor of Arts in English provides a strong background in the study of English. The program stresses literary analysis, diversity, critical thinking, and written and oral communication skills through a rigorous curriculum of literature, composition, language and linguistics, and communication studies.",
	
	"course info": "Bachelor of Arts in English Language Studies all about\n\nThe Bachelor of Arts in English provides a strong background in the study of English. The program stresses literary analysis, diversity, critical thinking, and written and oral communication skills through a rigorous curriculum of literature, composition, language and linguistics, and communication studies.",
	
	"job career": "Bachelor of Arts in English Language Studies Career Path\n\nDigital copywriter\nEditorial assistant\nEnglish as a foreign language teacher\nLexicographer\nMagazine journalist\nNewspaper journalist\nPrivate tutor\nPublishing copy-editor/proofreader\nSecondary school teacher\nWeb content manager\nWriter",
	
	"career path": "Bachelor of Arts in English Language Studies Career Path\n\nDigital copywriter\nEditorial assistant\nEnglish as a foreign language teacher\nLexicographer\nMagazine journalist\nNewspaper journalist\nPrivate tutor\nPublishing copy-editor/proofreader\nSecondary school teacher\nWeb content manager\nWriter",
	
}
bpalist = {
	"all about": "Bachelor of Performing Arts all about\n\nPerforming arts degrees are generally either practice-based (involving a great deal of actual performance) or academic, which combines practical work with analysis of the background of the subject.Teaching is therefore likely to be delivered through a mix of practical workshops and lectures.",
	
	"course info": "Bachelor of Performing Arts all about\n\nPerforming arts degrees are generally either practice-based (involving a great deal of actual performance) or academic, which combines practical work with analysis of the background of the subject.Teaching is therefore likely to be delivered through a mix of practical workshops and lectures.",
	
	"job career": "Bachelor of Performing Arts Career Path\n\nBack-up dancer\nBallet dancer\nChoreographer\nDance studio manager\nDance teacher\nDance therapist\nModern dancer\nOpera dancer\nPersonal trainer\nPhysical therapist\nTheme park dancer\nYoga or Pilates instructor",
	
	"career path": "Bachelor of Performing Arts Career Path\n\nBack-up dancer\nBallet dancer\nChoreographer\nDance studio manager\nDance teacher\nDance therapist\nModern dancer\nOpera dancer\nPersonal trainer\nPhysical therapist\nTheme park dancer\nYoga or Pilates instructor",
	
}
bsnelist = {
	"all about": "Bachelor of Special Needs Education all about\n\nThe Bachelor of Special Needs Education (BSNEd) is an undergraduate degree program which specializes in special needs education. It prepares teachers who will instruct and manage students with additional needs in inclusive and segregated educational settings.",
	
	"course info": "Bachelor of Special Needs Education all about\n\nThe Bachelor of Special Needs Education (BSNEd) is an undergraduate degree program which specializes in special needs education. It prepares teachers who will instruct and manage students with additional needs in inclusive and segregated educational settings.",
	
	"job career": "Bachelor of Special Needs Education Career Path\n\nSpecial Education Teacher(both Elementary and High School)\nLearning Disabilities Specialist\nAcademic Advisor\nSpecial Education Teacher in special education centers/clinics\nTherapist or Clinician in special education centers/clinics\nRegular classroom teacher\nIntervention Specialist in center-/home/community-based educational settings\nJob tutor in center-/home/community-based educational settings\nBehavior coach in center-/home/community-based educational settings\nCurriculum Developer\nResearcher\nCollege Professor\nSchool Administrator\nTutorial Center Owner\nManager\nPrincipal\nWork opportunities abroad",
	
	"career path": "Bachelor of Special Needs Education Career Path\n\nSpecial Education Teacher(both Elementary and High School)\nLearning Disabilities Specialist\nAcademic Advisor\nSpecial Education Teacher in special education centers/clinics\nTherapist or Clinician in special education centers/clinics\nRegular classroom teacher\nIntervention Specialist in center-/home/community-based educational settings\nJob tutor in center-/home/community-based educational settings\nBehavior coach in center-/home/community-based educational settings\nCurriculum Developer\nResearcher\nCollege Professor\nSchool Administrator\nTutorial Center Owner\nManager\nPrincipal\nWork opportunities abroad",
	
}
bsplist = {
	"all about": "BS Psychology all about\n\nThe Bachelor of Science in Psychology (BS Psych) is a four-year program designed to help you observe human behavior through the scientific method, allowing you to gain access to the human psyche and fathom its depths. ... The curriculum focuses on human behavior, literature, education, politics, liberal arts, and society.",
	
	"course info": "BS Psychology all about\n\nThe Bachelor of Science in Psychology (BS Psych) is a four-year program designed to help you observe human behavior through the scientific method, allowing you to gain access to the human psyche and fathom its depths. ... The curriculum focuses on human behavior, literature, education, politics, liberal arts, and society.",
	
	"job career": "BS Psychology Career Path\n\nAdvertising Agents\nCareer Counselor\nCase Manager\nChild Care Worker\nLaboratory Assistant\nMarket Researcher\nPsychiatric Technician\nProbation and Parole Officer\nRehabilitation Specialist\nSales Representative\nSocial Service Specialists\nTeachers\nWriter",
	
	"career path": "BS Psychology Career Path\n\nAdvertising Agents\nCareer Counselor\nCase Manager\nChild Care Worker\nLaboratory Assistant\nMarket Researcher\nPsychiatric Technician\nProbation and Parole Officer\nRehabilitation Specialist\nSales Representative\nSocial Service Specialists\nTeachers\nWriter",
	
}
bsmlist = {
	"all about": "BS Mathematics all about\n\nA Bachelor's degree in Mathematics is an undergraduate degree that provides theory and training in both applied and core mathematics. A BS in Mathematics provides broad knowledge of mathematics topics with depth in certain areas, while a BA in Mathematics provides a solid mathematics core within a flexible curriculum.",
	
	"course info": "BS Mathematics all about\n\nA Bachelor's degree in Mathematics is an undergraduate degree that provides theory and training in both applied and core mathematics. A BS in Mathematics provides broad knowledge of mathematics topics with depth in certain areas, while a BA in Mathematics provides a solid mathematics core within a flexible curriculum.",
	
	"job career": "BS Mathematics Career Path\n\nCareers in accountancy and finance\nCareers in banking\nActuarial careers\nStatistician careers\nCareers in academia and research\nEngineering\nMeteorology\nTeaching",
	
	"career path": "BS Mathematics Career Path\n\nCareers in accountancy and finance\nCareers in banking\nActuarial careers\nStatistician careers\nCareers in academia and research\nEngineering\nMeteorology\nTeaching",
	
}

ibmform = {
	"approval form": "I'm sorry there is no current available form at the moment...",
	"letter of intent": "I'm sorry there is no current available form at the moment...",
	"practicum application form": "I'm sorry there is no current available form at the moment...",
	"undertaking form": "I'm sorry there is no current available form at the moment...",
	"all about": "Institute of Business and Management(IBM)\n\nis the study about business and accounting...",
	"available forms": "Here are the available forms to download under this institute...\n\napproval form\n\nletter of intent\n\npracticum application form\n\nundertaking form\n\n to see and download forms just type for example:\n\nIBM approval form",
}
icslisform = {
	

	"all about": "Institute of Computing Studies and Library Information Science(ICSLIS)\n\nis the study of related to technologies...",
	
	"available forms": "Here are the available forms to download under this institute...\n\napproval form\n\nletter of intent\n\npracticum application form\n\nundertaking form\n\n to see and download forms just type for example:\n\nICSLIS approval form",
	
}
ieasform = {
	"approval form": "I'm sorry there is no current available form at the moment...",
	"letter of intent": "I'm sorry there is no current available form at the moment...",
	"practicum application form": "I'm sorry there is no current available form at the moment...",
	"undertaking form": "I'm sorry there is no current available form at the moment...",
	"all about": "Institute of Education, Arts and Sciences(IEAS)\n\nis the study about physical, tech-voc, language studies and sciences...",
	"available forms": "Here are the available forms to download under this institute...\n\napproval form\n\nletter of intent\n\npracticum application form\n\nundertaking form\n\n to see and download forms just type for example:\n\nIEAS approval form",
}

shawtylist = {
	"institutes": "There are three institutes in the City College of Angeles\n\nInstitute of Business and Management(IBM)\n\nInstitute of Computing Studies and Library Information Science(ICSLIS)\n\nInstitute of Education, Arts and Sciences(IEAS)\n\nTo see all the courses under a institute just type for example:\n\nshow ICSLIS courses",
	
	"institute": "There are three institutes in the City College of Angeles\n\nInstitute of Business and Management(IBM)\n\nInstitute of Computing Studies and Library Information Science(ICSLIS)\n\nInstitute of Education, Arts and Sciences(IEAS)\n\nTo see all the courses under a institute just type for example:\n\nshow ICSLIS courses",
	
	"ibm course": "Institute of Business and Management(IBM)\n\nBS Accountancy(BSA)\n\nBS Accounting Information System(BSAIS)\n\nBS Entrepreneurship(BSE)\n\nBS Tourism Management(BSTM)\n\nTo see the details of a specific course just type for example:\n\nBSCS all about\nBSTM career path\nor\nBTVTED job career",
	
	"ibm courses": "Institute of Business and Management(IBM)\n\nBS Accountancy(BSA)\n\nBS Accounting Information System(BSAIS)\n\nBS Entrepreneurship(BSE)\n\nBS Tourism Management(BSTM)\n\nTo see the details of a specific course just type for example:\n\nBSCS all about\nBSTM career path\nor\nBTVTED job career",
	
	"icslis course": "Institute of Computing Studies and Library Information Science(ICSLIS)\n\nAssociate in Computer Technology(ACT)\n\nBS Computer Science(BSCS)\n\nBS Information Systems(BSIS)\n\nBachelor of Library and Information Science(BLIS)\n\nTo see the details of a specific course just type for example:\n\nBSCS all about\nBSTM career path\nor\nBTVTED job career",
	
	"icslis courses": "Institute of Computing Studies and Library Information Science(ICSLIS)\n\nAssociate in Computer Technology(ACT)\n\nBS Computer Science(BSCS)\n\nBS Information Systems(BSIS)\n\nBachelor of Library and Information Science(BLIS)\n\nTo see the details of a specific course just type for example:\n\nBSCS all about\nBSTM career path\nor\nBTVTED job career",
	
	"ieas courses": "Institute of Education, Arts and Sciences(IEAS)\n\nBachelor of Physical Education(BPE)\n\nBachelor of Technical-Vocational Teacher Education(BTVTED)\n\nBachelor of Arts in English Language Studies(BAELS)\n\nBachelor of Performing Arts(BPA)\n\nBachelor in Special Needs Education(BSNE)\n\nBS Psychology(BSP)\n\nBS Mathematics(BSM)\n\nTo see the details of a specific course just type for example:\n\nBSCS all about\nBSTM career path\nor\nBTVTED job career",
	
	"ieas course": "Institute of Education, Arts and Sciences(IEAS)\n\nBachelor of Physical Education(BPE)\n\nBachelor of Technical-Vocational Teacher Education(BTVTED)\n\nBachelor of Arts in English Language Studies(BAELS)\n\nBachelor of Performing Arts(BPA)\n\nBachelor in Special Needs Education(BSNE)\n\nBS Psychology(BSP)\n\nBS Mathematics(BSM)\n\nTo see the details of a specific course just type for example:\n\nBSCS all about\nBSTM career path\nor\nBTVTED job career",
	
	"help": "Command examples\n\nFirst see 'common questions' to see if your questions is there\n\n<COURSE ACRONYM> all about\n<COURSE ACRONYM> career path\n\nshow institutes\n\nTo see how to download available forms of a institute just type\n\nshow form download help\n\n<institute> all about\n\n'difference of bscs and bsis?'\n\n'developer'",
	
	"form download help": "To download available forms of a institute for example:\n\nICSLIS approval form\nIBM letter of intent\nIEAS practicum application form\nor\nICSLIS undertaking form",
	
	"courses": "To see courses first see 'show institutes' to see more info info about it",
	"course": "To see courses first see 'show institutes' to see more info info about it",
	
	"commands": "Command examples\n\nFirst see 'common questions' to see if your questions is there\n\n<COURSE ACRONYM> all about\n<COURSE ACRONYM> career path\n\nshow institutes\n\nTo see how to download available forms of a institute just type\n\nshow form download help\n\n<institute> all about\n\n'difference of bscs and bsis?'\n\n'developer'",
	
	"command": "Command examples\n\nFirst see 'common questions' to see if your questions is there\n\n<COURSE ACRONYM> all about\n<COURSE ACRONYM> career path\n\nshow institutes\n\nTo see how to download available forms of a institute just type\n\nshow form download help\n\n<institute> all about\n\n'difference of bscs and bsis?'\n\n'developer'",
}


async function fun1(context){
	
	var parseString = context.event.text
    var splittedString = parseString.split(" ") 
    var eq = splittedString.slice(1, splittedString.length)  
    var converted = eq.join(" ");
	var conv = converted.toLowerCase();
    await context.sendText(bsalist[conv])
}


async function fun2(context){
	
	var parseString = context.event.text
    var splittedString = parseString.split(" ") 
    var eq = splittedString.slice(1, splittedString.length)  
    var converted = eq.join(" ");
	var conv = converted.toLowerCase();
    await context.sendText(bsaislist[conv])
}

async function fun3(context){
	
	var parseString = context.event.text
    var splittedString = parseString.split(" ") 
    var eq = splittedString.slice(1, splittedString.length)  
    var converted = eq.join(" ");
	var conv = converted.toLowerCase();
    await context.sendText(bselist[conv])
}

async function fun4(context){
	
	var parseString = context.event.text
    var splittedString = parseString.split(" ") 
    var eq = splittedString.slice(1, splittedString.length)  
    var converted = eq.join(" ");
	var conv = converted.toLowerCase();
    await context.sendText(bstmlist[conv])
}

async function fun5(context){
	
	var parseString = context.event.text
    var splittedString = parseString.split(" ") 
    var eq = splittedString.slice(1, splittedString.length)  
    var converted = eq.join(" ");
	var conv = converted.toLowerCase();
    await context.sendText(actlist[conv])
}

async function fun6(context){
	
	var parseString = context.event.text
    var splittedString = parseString.split(" ") 
    var eq = splittedString.slice(1, splittedString.length)  
    var converted = eq.join(" ");
	var conv = converted.toLowerCase();
    await context.sendText(bscslist[conv])
}

async function fun7(context){
	
	var parseString = context.event.text
    var splittedString = parseString.split(" ") 
    var eq = splittedString.slice(1, splittedString.length)  
    var converted = eq.join(" ");
	var conv = converted.toLowerCase();
    await context.sendText(bsislist[conv])
}

async function fun8(context){
	
	var parseString = context.event.text
    var splittedString = parseString.split(" ") 
    var eq = splittedString.slice(1, splittedString.length)  
    var converted = eq.join(" ");
	var conv = converted.toLowerCase();
    await context.sendText(blislist[conv])
}

async function fun9(context){
	
	var parseString = context.event.text
    var splittedString = parseString.split(" ") 
    var eq = splittedString.slice(1, splittedString.length)  
    var converted = eq.join(" ");
	var conv = converted.toLowerCase();
    await context.sendText(bpelist[conv])
}

async function fun10(context){
	
	var parseString = context.event.text
    var splittedString = parseString.split(" ") 
    var eq = splittedString.slice(1, splittedString.length)  
    var converted = eq.join(" ");
	var conv = converted.toLowerCase();
    await context.sendText(btvtedlist[conv])
}

async function fun11(context){
	
	var parseString = context.event.text
    var splittedString = parseString.split(" ") 
    var eq = splittedString.slice(1, splittedString.length)  
    var converted = eq.join(" ");
	var conv = converted.toLowerCase();
    await context.sendText(baelslist[conv])
}
async function fun12(context){
	
	var parseString = context.event.text
    var splittedString = parseString.split(" ") 
    var eq = splittedString.slice(1, splittedString.length)  
    var converted = eq.join(" ");
	var conv = converted.toLowerCase();
    await context.sendText(bpalist[conv])
}
async function fun13(context){
	
	var parseString = context.event.text
    var splittedString = parseString.split(" ") 
    var eq = splittedString.slice(1, splittedString.length)  
    var converted = eq.join(" ");
	var conv = converted.toLowerCase();
    await context.sendText(bsnelist[conv])
}

async function fun14(context){
	
	var parseString = context.event.text
    var splittedString = parseString.split(" ") 
    var eq = splittedString.slice(1, splittedString.length)  
    var converted = eq.join(" ");
	var conv = converted.toLowerCase();
    await context.sendText(bsplist[conv])
}
async function fun15(context){
	
	var parseString = context.event.text
    var splittedString = parseString.split(" ") 
    var eq = splittedString.slice(1, splittedString.length)  
    var converted = eq.join(" ");
	var conv = converted.toLowerCase();
    await context.sendText(bsmlist[conv])
}

async function ibmdownform(context){
	
	var parseString = context.event.text
    var splittedString = parseString.split(" ") 
    var eq = splittedString.slice(1, splittedString.length)  
    var converted = eq.join(" ");
	var conv = converted.toLowerCase();
    await context.sendText(ibmform[conv])
}

async function icslisdownform(context){
	
	var parseString = context.event.text
    var splittedString = parseString.split(" ") 
    var eq = splittedString.slice(1, splittedString.length)  
    var converted = eq.join(" ");
	var conv1 = converted.toLowerCase();
	
	if(conv1 == "approval form"){
		
        icslisbtn1(context);
		
	}else if(conv1 == "letter of intent"){
		
		icslisbtn2(context);
		
	}else if(conv1 == "practicum application form"){
		
		icslisbtn13(context);
			
	}else if(conv1 == "undertaking form"){
		
		icslisbtn4(context);
		
	}else{
		 await context.sendText(icslisform[conv1])
	}
} 

async function icslisbtn1(context){
	await context.sendButtonTemplate('Approval form', [
    {
      type: 'web_url',
      title: 'Download form',
      url: 'https://docs.google.com/document/d/1rTBp_YTO6xFt4QVGrh-eg47IyaCJ2hOc/edit?usp=sharing&ouid=100234731583718205917&rtpof=true&sd=true'
    }
  ]);
	
}

async function icslisbtn2(context){
	await context.sendButtonTemplate('Letter of intent', [
    {
      type: 'web_url',
      title: 'Download form',
      url: 'https://docs.google.com/document/d/1_eLU1Q8lmE6Lv-PVfzpLtCYJljES2ZiR/edit?usp=sharing&ouid=100234731583718205917&rtpof=true&sd=true'
    }
  ]);
	
}

async function icslisbtn3(context){
	await context.sendButtonTemplate('Practicum application form', [
    {
      type: 'web_url',
      title: 'Download form',
      url: 'https://docs.google.com/document/d/1v65saFOUR4955A4I1VY_OCtA0GCUEJAV/edit?usp=sharing&ouid=100234731583718205917&rtpof=true&sd=true'
    }
  ]);
	
}

async function icslisbtn4(context){
	await context.sendButtonTemplate('Undertaking form', [
    {
      type: 'web_url',
      title: 'Download form',
      url: 'https://docs.google.com/document/d/1uX6Mk7YRa3yS8dRQHyhONNkp32A9axVx/edit?usp=sharing&ouid=100234731583718205917&rtpof=true&sd=true'
    }
  ]);
	
}


async function ieasdownform(context){
	
	var parseString = context.event.text
    var splittedString = parseString.split(" ") 
    var eq = splittedString.slice(1, splittedString.length)  
    var converted = eq.join(" ");
	var conv = converted.toLowerCase();
    await context.sendText(ieasform[conv])
}

async function shawty(context){
	
	var parseString = context.event.text
    var splittedString = parseString.split(" ") 
    var eq = splittedString.slice(1, splittedString.length)  
    var converted = eq.join(" ");
	var conv = converted.toLowerCase();
	if(conv=="common questions"){
		await context.sendText(testButton)
	}else{
    await context.sendText(shawtylist[conv])
	}
}

async function testButton(context){
  // punta ka dito para makita mo pa yung ibang template https://bottender.js.org/docs/channel-messenger-sending-messages
  await context.sendButtonTemplate('Common Questions', [
    {
      type: 'postback',
      title: 'Course Available',
      payload: 'payload4',
    },
    {
      type: 'postback',
      title: 'School location',
      payload: 'payload5',
    },
	 {
       type: 'postback',
      title: 'Scholarship',
      payload: 'payload6',
    },
	
	
  ]);
}
async function latipes6(context){
    
    await context.sendText("Yo should see the ched for this scholarship matter...")
}

async function latipes7(context){
    
    await context.sendText(shawtylist["ibm course"])
}
async function latipes8(context){
	await context.sendText(shawtylist["icslis course"])
}
async function latipes9(context){
	await context.sendText(shawtylist["ieas course"])
}

async function latipes4(context){
  
  await context.sendButtonTemplate('Courses', [
    {
      type: 'postback',
      title: 'IBM',
      payload: 'payload7',
    },
    {
      type: 'postback',
      title: 'ICSLIS',
      payload: 'payload8',
    },
	 {
       type: 'postback',
      title: 'IEAS',
      payload: 'payload9',
    },
	
	
  ]);
}
 
 async function latipes5(context){
	await context.sendButtonTemplate('CCA is located at Arayat Boulevard, Barangay Pampang', [
    {
      type: 'web_url',
      title: 'Get Directions',
      url: 'https://www.google.com/maps/dir//15.1498105,120.5779072/@15.1499546,120.5076041,12z/data=!3m1!4b1!4m4!4m3!1m1!4e2!1m0',
    },
  ]);
}

async function dev1(context){
  await context.sendText("Main Dev:\nLopez Joshua L\n\nFb: Polyglot Josh");
  
}

async function gratis(context){
var items = ['It was the least I could do. ^^', 'It’s my pleasure', 'Glad to help.', 'You’re very welcome.','No problem.','Don’t mention it.','No worries.','You’re welcome.','Anything for you. ^^'];
var item = items[Math.floor(Math.random() * items.length)];

await context.sendText(item);
  
}


async function paasa(context){
var items = ['Maganda kase yung daan kaya kumaliwa', 'ang hirap kase yung part na ikaw nag build up sakanya tapos sa iba lang sumaya', 'Minsan may mga friend request na bumabalik hinde para makipag ayos ulet kundi ipakita na sumasaya na sya sa iba at ikaw mag isa masaya paren sa mga dating alala nyong dalwa','Masaya na ako sakanya eh di ko alam na sa iba pala sya sumasaya that time...', 'Matuto kang sumuko kapag nasasaktan kana. Minsan kasi inu uto kana lang kinikilig ka pa owshie'];
var item = items[Math.floor(Math.random() * items.length)];

await context.sendText(item);
  
}

async function aboutinfo1(context){
	
	await context.sendText("You may directly contact the Registrar’s and Admissions Office to discuss your specific query. You may contact them at aro@cca.edu.ph or at their FB page.");
	 await context.sendText("Please note that office works in the College are  in work from home scheme until further notice. All transactions are done online.\n\nThank you.");
	await context.sendButtonTemplate('Page link', [
    {
      type: 'web_url',
      title: 'Go to the page',
      url: 'https://m.facebook.com/CCAAdmissionsAndRegistrarsOffice/',
    },
  ]);
	
 
	 
}

differlist = {
	"of bscs and bsis?": "Information Technology(BSIS) deals with the development, implementation, support, and management of computers and information systems. Information Technology involves working both with hardware (e.g. CPUs, RAM, hard-disks) and software (e.g. operating systems, web browsers, mobile applications).\n\nComputer Science(BSCS) deals with the development and testing of software and software systems. Computer Science involves working with mathematical models, data analysis and security, algorithms, and computational theory.",
	
	"of bsis and bscs?": "Information Technology(BSIS) deals with the development, implementation, support, and management of computers and information systems. Information Technology involves working both with hardware (e.g. CPUs, RAM, hard-disks) and software (e.g. operating systems, web browsers, mobile applications).\n\nComputer Science(BSCS) deals with the development and testing of software and software systems. Computer Science involves working with mathematical models, data analysis and security, algorithms, and computational theory.",
	
	"of bscs and bsis": "Information Technology(BSIS) deals with the development, implementation, support, and management of computers and information systems. Information Technology involves working both with hardware (e.g. CPUs, RAM, hard-disks) and software (e.g. operating systems, web browsers, mobile applications).\n\nComputer Science(BSCS) deals with the development and testing of software and software systems. Computer Science involves working with mathematical models, data analysis and security, algorithms, and computational theory.",
	
	"of bscs and bsis": "Information Technology(BSIS) deals with the development, implementation, support, and management of computers and information systems. Information Technology involves working both with hardware (e.g. CPUs, RAM, hard-disks) and software (e.g. operating systems, web browsers, mobile applications).\n\nComputer Science(BSCS) deals with the development and testing of software and software systems. Computer Science involves working with mathematical models, data analysis and security, algorithms, and computational theory.",
	
}

async function differ1(context){
	var parseString = context.event.text
    var splittedString = parseString.split(" ") 
    var eq = splittedString.slice(1, splittedString.length)  
    var converted = eq.join(" ");
	var conv = converted.toLowerCase();
    await context.sendText(differlist[conv])
}


module.exports = async function App(context) {
 
  return router(
    [     
	 
	 text('hugot', paasa),
	 text('Hugot', paasa),
	 text('HUGOT', paasa),
	 text(/common questions+/,testButton),
	 text(/COMMON QUESTIONS+/,testButton),
	 text(/Common questions+/,testButton),
	 
	 text('hi', xylocopa),
	 text('hello', xylocopa),
	 text('Hello', xylocopa),
	 text('HELLO', xylocopa),
	 text('Hi', xylocopa),
	 text('hey', xylocopa),
	 text('Hey', xylocopa),
	 text('HEY', xylocopa),
	 text('HI', xylocopa),
	 
	 text('Are you accepting new students?', aboutinfo1),
	 text('are you accepting new students?', aboutinfo1),
	 text('ARE YOU ACCEPTING NEW STUDENTS?', aboutinfo1),
	 text('Are you accepting new students', aboutinfo1),
	 text('are you accepting new students', aboutinfo1),
	 text('ARE YOU ACCEPTING NEW STUDENTS', aboutinfo1),
	 
	  text('Thank you', gratis),
	  text('Thanks', gratis),
	  text('thanks', gratis),
	   text('thank you', gratis),
	   text('THANK YOU', gratis),
	   text('developer', dev1),
	   text('Developer', dev1),
	 
	 text(/Difference[]?\s+/,differ1),
	 text(/difference[]?\s+/,differ1),
	 text(/DIFFERENCE[]?\s+/,differ1),
	 
	 text(/show[]?\s+/,shawty),
	 text(/SHOW[]?\s+/,shawty),
	 text(/Show[]?\s+/,shawty),
	 
	 text(/icslis[]?\s+/,icslisdownform),
	 text(/ICSLIS[]?\s+/,icslisdownform),
	 text(/Icslis[]?\s+/,icslisdownform),
	 
	 text(/ibm[]?\s+/,ibmdownform),
	 text(/IBM[]?\s+/,ibmdownform),
	  text(/Ibm[]?\s+/,ibmdownform),
	 
	 text(/ieas[]?\s+/,ieasdownform),
	 text(/IEAS[]?\s+/,ieasdownform),
	 text(/Ieas[]?\s+/,ieasdownform),
	 
	 text(/BSA[]?\s+/,fun1),
	 text(/bsa[]?\s+/, fun1),
	 text(/Bsa[]?\s+/, fun1),
	 
	 text(/BSAIS[]?\s+/,fun2),
	 text(/bsais[]?\s+/,fun2),
	 text(/Bsais[]?\s+/,fun2),
	   
     text(/BSE[]?\s+/,fun3),
	 text(/bse[]?\s+/,fun3),
	 text(/Bse[]?\s+/,fun3),
	  
	 text(/BSTM[]?\s+/,fun4),
	 text(/bstm[]?\s+/,fun4),
	 text(/Bstm[]?\s+/,fun4),
		
	 text(/ACT[]?\s+/,fun5),
     text(/act[]?\s+/,fun5),
	 text(/Act[]?\s+/,fun5),
		  
	 text(/BSCS[]?\s+/,fun6),
	 text(/bscs[]?\s+/,fun6),
	 text(/Bscs[]?\s+/,fun6),
	 
	 text(/BSIS[]?\s+/,fun7),
	 text(/bsis[]?\s+/,fun7),
	 text(/Bsis[]?\s+/,fun7),
	 
	 text(/BLIS[]?\s+/,fun8),
	 text(/blis[]?\s+/,fun8),
	 text(/Blis[]?\s+/,fun8),
	 
	 text(/BPE[]?\s+/,fun9),
	 text(/bpe[]?\s+/,fun9),
	 text(/Bpe[]?\s+/,fun9),
	 
	 text(/BTVTED[]?\s+/,fun10),
	 text(/btvted[]?\s+/,fun10),
	 text(/Btvted[]?\s+/,fun10),
	 
	 text(/BAELS[]?\s+/,fun11),
	 text(/baels[]?\s+/,fun11),
	  text(/Baels[]?\s+/,fun11),
	 
	 text(/BPA[]?\s+/,fun12),
	 text(/bpa[]?\s+/,fun12),
	 text(/Bpa[]?\s+/,fun12),
	 
	 text(/BSNE[]?\s+/,fun13),
	 text(/bsne[]?\s+/,fun13),
	 text(/Bsne[]?\s+/,fun13),
	 
	 text(/BSP[]?\s+/,fun14),
	 text(/bsp[]?\s+/,fun14),
	 text(/Bsp[]?\s+/,fun14),
	 
	 text(/BSM[]?\s+/,fun15),
	 text(/bsm[]?\s+/,fun15),
	 text(/Bsm[]?\s+/,fun15),
	  
      payload('payload1', latipes1), 
	   payload('payload2', latipes2), 
	  payload('payload3', latipes3), 
	   
	   payload('payload4',latipes4),   
	  payload('payload5',latipes5), 	  
	  payload('payload6',latipes6), 
	  
	  payload('payload7',latipes7), 
      payload('payload8',latipes8), 
      payload('payload9',latipes9), 	
	  
	  route('*', errorcatch),
	  
    ]
  );
  
};
