let myResume={
    "details" : {                       //Create My Resume in JSON Format
        "name"   : "Saranya",
        "email"  : "msaranyanirmala@gmail.com",
        "phone"  : 6383359881 ,
        "address" : {
            "doorNo" : 14/932,
            "street" : "kamarajnagar Street",
            "place"  : "Pavoorchatram",
           " district" : "Tenkasi",
           "pinCode"  : 627808
        },
        "profiles":[
            {
            "link" : "https://www.linkedin.com/in/saranya-m-3ab48125b/",
            "gitHub" :"https://github.com/SaranNirmala"
            }
        ]

    },

    "work" : [  
        {
        "company" : "HITP",
    "designation": "Recruiter",
    "startDate" :"August-2022",
    "summary" : " recruiting IT people for contract in USA"
        },
    ],

    "education" : [
        {
            "instituition": "Tamilnadu College of Engineering",
            "degree"      : "B.tech",
            "department"  : " Information Technology",
            "GCPA"        : 7.5
        },
        {
            "instituition" : "Av Hr Sec School",
            "std"    : "HSU/Indermediate",
            "percentage" : 80
        },
    ],
    "skils" : [
        {
            "programmingLanguage" :" Core JAVA",
            "webTechnologies" :"HTML,CSS,JS",
            "Level" : "Beginner"

        }
    ],
    "coCurricularActivities" :[
        {
           "treasurer"  :  " Hand 2 Other club(H2O)",
           "member"      : "NGC"
             
        }
    ],
    "hobbies" :[
        {
            "activities" : "Reading Books, Writing, Travel"
        }
    ]
}


console.log(myResume);
