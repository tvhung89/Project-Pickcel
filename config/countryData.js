const countries = [ 
    { 
       name:"Afghanistan",
       code:"AF",
       phoneCode: "93"
    },
    { 
       name:"Åland Islands",
       code:"AX",
       phoneCode: "358"
    },
    { 
       name:"Albania",
       code:"AL",
       phoneCode: "355"
    },
    { 
       name:"Algeria",
       code:"DZ",
       phoneCode: "213"
    },
    { 
       name:"American Samoa",
       code:"AS",
       phoneCode: "1684"
    },
    { 
       name:"Andorra",
       code:"AD",
       phoneCode: "376"
    },
    { 
       name:"Angola",
       code:"AO",
       phoneCode: "244"
    },
    { 
       name:"Anguilla",
       code:"AI",
       phoneCode: "1264"
    },
    { 
       name:"Antarctica",
       code:"AQ",
       phoneCode: "672"
    },
    { 
       name:"Antigua and Barbuda",
       code:"AG",
       phoneCode: "1268"
    },
    { 
       name:"Argentina",
       code:"AR",
       phoneCode: "54"
    },
    { 
       name:"Armenia",
       code:"AM",
       phoneCode: "374"
    },
    { 
       name:"Aruba",
       code:"AW",
       phoneCode: "297"
    },
    { 
       name:"Australia",
       code:"AU",
       phoneCode: "61"
    },
    { 
       name:"Austria",
       code:"AT",
       phoneCode: "43"
    },
    { 
       name:"Azerbaijan",
       code:"AZ",
       phoneCode: "994"
    },
    { 
       name:"Bahamas",
       code:"BS",
       phoneCode: "1242"
    },
    { 
       name:"Bahrain",
       code:"BH",
       phoneCode: "973"
    },
    { 
       name:"Bangladesh",
       code:"BD",
       phoneCode: "880"
    },
    { 
       name:"Barbados",
       code:"BB",
       phoneCode: "1246"
    },
    { 
       name:"Belarus",
       code:"BY",
       phoneCode: "375"
    },
    { 
       name:"Belgium",
       code:"BE",
       phoneCode: "32"
    },
    { 
       name:"Belize",
       code:"BZ",
       phoneCode: "501"
    },
    { 
       name:"Benin",
       code:"BJ",
       phoneCode: "229"
    },
    { 
       name:"Bermuda",
       code:"BM",
       phoneCode: "1441"
    },
    { 
       name:"Bhutan",
       code:"BT",
       phoneCode: "975"
    },
    { 
       name:"Bolivia (Plurinational State of)",
       code:"BO",
       phoneCode: "591"
    },
    { 
       name:"Bonaire, Sint Eustatius and Saba",
       code:"BQ",
       phoneCode: "5997"
    },
    { 
       name:"Bosnia and Herzegovina",
       code:"BA",
       phoneCode: "387"
    },
    { 
       name:"Botswana",
       code:"BW",
       phoneCode: "267"
    },
    { 
       name:"Bouvet Island",
       code:"BV",
       phoneCode: ""
    },
    { 
       name:"Brazil",
       code:"BR",
       phoneCode: "55"
    },
    { 
       name:"British Indian Ocean Territory",
       code:"IO",
       phoneCode: "246"
    },
    { 
       name:"United States Minor Outlying Islands",
       code:"UM",
       phoneCode: ""
    },
    { 
       name:"Virgin Islands (British)",
       code:"VG",
       phoneCode: "1284"
    },
    { 
       name:"Virgin Islands (U.S.)",
       code:"VI",
       phoneCode: "1 340"
    },
    { 
       name:"Brunei Darussalam",
       code:"BN",
       phoneCode: "673"
    },
    { 
       name:"Bulgaria",
       code:"BG",
       phoneCode: "359"
    },
    { 
       name:"Burkina Faso",
       code:"BF",
       phoneCode: "226"
    },
    { 
       name:"Burundi",
       code:"BI",
       phoneCode: "257"
    },
    { 
       name:"Cambodia",
       code:"KH",
       phoneCode: "855"
    },
    { 
       name:"Cameroon",
       code:"CM",
       phoneCode: "237"
    },
    { 
       name:"Canada",
       code:"CA",
       phoneCode: "1"
    },
    { 
       name:"Cabo Verde",
       code:"CV",
       phoneCode: "238"
    },
    { 
       name:"Cayman Islands",
       code:"KY",
       phoneCode: "1345"
    },
    { 
       name:"Central African Republic",
       code:"CF",
       phoneCode: "236"
    },
    { 
       name:"Chad",
       code:"TD",
       phoneCode: "235"
    },
    { 
       name:"Chile",
       code:"CL",
       phoneCode: "56"
    },
    { 
       name:"China",
       code:"CN",
       phoneCode: "86"
    },
    { 
       name:"Christmas Island",
       code:"CX",
       phoneCode: "61"
    },
    { 
       name:"Cocos (Keeling) Islands",
       code:"CC",
       phoneCode: "61"
    },
    { 
       name:"Colombia",
       code:"CO",
       phoneCode: "57"
    },
    { 
       name:"Comoros",
       code:"KM",
       phoneCode: "269"
    },
    { 
       name:"Congo",
       code:"CG",
       phoneCode: "242"
    },
    { 
       name:"Congo (Democratic Republic of the)",
       code:"CD",
       phoneCode: "243"
    },
    { 
       name:"Cook Islands",
       code:"CK",
       phoneCode: "682"
    },
    { 
       name:"Costa Rica",
       code:"CR",
       phoneCode: "506"
    },
    { 
       name:"Croatia",
       code:"HR",
       phoneCode: "385"
    },
    { 
       name:"Cuba",
       code:"CU",
       phoneCode: "53"
    },
    { 
       name:"Curaçao",
       code:"CW",
       phoneCode: "599"
    },
    { 
       name:"Cyprus",
       code:"CY",
       phoneCode: "357"
    },
    { 
       name:"Czech Republic",
       code:"CZ",
       phoneCode: "420"
    },
    { 
       name:"Denmark",
       code:"DK",
       phoneCode: "45"
    },
    { 
       name:"Djibouti",
       code:"DJ",
       phoneCode: "253"
    },
    { 
       name:"Dominica",
       code:"DM",
       phoneCode: "1767"
    },
    { 
       name:"Dominican Republic",
       code:"DO",
       phoneCode: ["1809","1829","1849"]
    },
    { 
       name:"Ecuador",
       code:"EC",
       phoneCode: "593"
    },
    { 
       name:"Egypt",
       code:"EG",
       phoneCode: "20"
    },
    { 
       name:"El Salvador",
       code:"SV",
       phoneCode: "503"
    },
    { 
       name:"Equatorial Guinea",
       code:"GQ",
       phoneCode: "240"
    },
    { 
       name:"Eritrea",
       code:"ER",
       phoneCode: "291"
    },
    { 
       name:"Estonia",
       code:"EE",
       phoneCode: "372"
    },
    { 
       name:"Ethiopia",
       code:"ET",
       phoneCode: "251"
    },
    { 
       name:"Falkland Islands (Malvinas)",
       code:"FK",
       phoneCode: "500"
    },
    { 
       name:"Faroe Islands",
       code:"FO",
       phoneCode: "298"
    },
    { 
       name:"Fiji",
       code:"FJ",
       phoneCode: "679"
    },
    { 
       name:"Finland",
       code:"FI",
       phoneCode: "358"
    },
    { 
       name:"France",
       code:"FR",
       phoneCode: "33"
    },
    { 
       name:"French Guiana",
       code:"GF",
       phoneCode: "594"
    },
    { 
       name:"French Polynesia",
       code:"PF",
       phoneCode: "689"
    },
    { 
       name:"French Southern Territories",
       code:"TF",
       phoneCode: ""
    },
    { 
       name:"Gabon",
       code:"GA",
       phoneCode: "241"
    },
    { 
       name:"Gambia",
       code:"GM",
       phoneCode: "220"
    },
    { 
       name:"Georgia",
       code:"GE",
       phoneCode: "995"
    },
    { 
       name:"Germany",
       code:"DE",
       phoneCode: "49"
    },
    { 
       name:"Ghana",
       code:"GH",
       phoneCode: "233"
    },
    { 
       name:"Gibraltar",
       code:"GI",
       phoneCode: "350"
    },
    { 
       name:"Greece",
       code:"GR",
       phoneCode: "30"
    },
    { 
       name:"Greenland",
       code:"GL",
       phoneCode: "299"
    },
    { 
       name:"Grenada",
       code:"GD",
       phoneCode: "1473"
    },
    { 
       name:"Guadeloupe",
       code:"GP",
       phoneCode: "590"
    },
    { 
       name:"Guam",
       code:"GU",
       phoneCode: "1671"
    },
    { 
       name:"Guatemala",
       code:"GT",
       phoneCode: "502"
    },
    { 
       name:"Guernsey",
       code:"GG",
       phoneCode: "44"
    },
    { 
       name:"Guinea",
       code:"GN",
       phoneCode: "224"
    },
    { 
       name:"Guinea-Bissau",
       code:"GW",
       phoneCode: "245"
    },
    { 
       name:"Guyana",
       code:"GY",
       phoneCode: "592"
    },
    { 
       name:"Haiti",
       code:"HT",
       phoneCode: "509"
    },
    { 
       name:"Heard Island and McDonald Islands",
       code:"HM",
       phoneCode: ""
    },
    { 
       name:"Holy See",
       code:"VA",
       phoneCode: "379"
    },
    { 
       name:"Honduras",
       code:"HN",
       phoneCode: "504"
    },
    { 
       name:"Hong Kong",
       code:"HK",
       phoneCode: "852"
    },
    { 
       name:"Hungary",
       code:"HU",
       phoneCode: "36"
    },
    { 
       name:"Iceland",
       code:"IS",
       phoneCode: "354"
    },
    { 
       name:"India",
       code:"IN",
       phoneCode: "91"
    },
    { 
       name:"Indonesia",
       code:"ID",
       phoneCode: "62"
    },
    { 
       name:"Côte d'Ivoire",
       code:"CI",
       phoneCode: "225"
    },
    { 
       name:"Iran (Islamic Republic of)",
       code:"IR",
       phoneCode: "98"
    },
    { 
       name:"Iraq",
       code:"IQ",
       phoneCode: "964"
    },
    { 
       name:"Ireland",
       code:"IE",
       phoneCode: "353"
    },
    { 
       name:"Isle of Man",
       code:"IM",
       phoneCode: "44"
    },
    { 
       name:"Israel",
       code:"IL",
       phoneCode: "972"
    },
    { 
       name:"Italy",
       code:"IT",
       phoneCode: "39"
    },
    { 
       name:"Jamaica",
       code:"JM",
       phoneCode: "1876"
    },
    { 
       name:"Japan",
       code:"JP",
       phoneCode: "81"
    },
    { 
       name:"Jersey",
       code:"JE",
       phoneCode: "44"
    },
    { 
       name:"Jordan",
       code:"JO",
       phoneCode: "962"
    },
    { 
       name:"Kazakhstan",
       code:"KZ",
       phoneCode: ["76","77"]
    },
    { 
       name:"Kenya",
       code:"KE",
       phoneCode: "254"
    },
    { 
       name:"Kiribati",
       code:"KI",
       phoneCode: "686"
    },
    { 
       name:"Kuwait",
       code:"KW",
       phoneCode: "965"
    },
    { 
       name:"Kyrgyzstan",
       code:"KG",
       phoneCode: "996"
    },
    { 
       name:"Lao People's Democratic Republic",
       code:"LA",
       phoneCode: "856"
    },
    { 
       name:"Latvia",
       code:"LV",
       phoneCode: "371"
    },
    { 
       name:"Lebanon",
       code:"LB",
       phoneCode: "961"
    },
    { 
       name:"Lesotho",
       code:"LS",
       phoneCode: "266"
    },
    { 
       name:"Liberia",
       code:"LR",
       phoneCode: "231"
    },
    { 
       name:"Libya",
       code:"LY",
       phoneCode: "218"
    },
    { 
       name:"Liechtenstein",
       code:"LI",
       phoneCode: "423"
    },
    { 
       name:"Lithuania",
       code:"LT",
       phoneCode: "370"
    },
    { 
       name:"Luxembourg",
       code:"LU",
       phoneCode: "352"
    },
    { 
       name:"Macao",
       code:"MO",
       phoneCode: "853"
    },
    { 
       name:"Macedonia (the former Yugoslav Republic of)",
       code:"MK",
       phoneCode: "389"
    },
    { 
       name:"Madagascar",
       code:"MG",
       phoneCode: "261"
    },
    { 
       name:"Malawi",
       code:"MW",
       phoneCode: "265"
    },
    { 
       name:"Malaysia",
       code:"MY",
       phoneCode: "60"
    },
    { 
       name:"Maldives",
       code:"MV",
       phoneCode: "960"
    },
    { 
       name:"Mali",
       code:"ML",
       phoneCode: "223"
    },
    { 
       name:"Malta",
       code:"MT",
       phoneCode: "356"
    },
    { 
       name:"Marshall Islands",
       code:"MH",
       phoneCode: "692"
    },
    { 
       name:"Martinique",
       code:"MQ",
       phoneCode: "596"
    },
    { 
       name:"Mauritania",
       code:"MR",
       phoneCode: "222"
    },
    { 
       name:"Mauritius",
       code:"MU",
       phoneCode: "230"
    },
    { 
       name:"Mayotte",
       code:"YT",
       phoneCode: "262"
    },
    { 
       name:"Mexico",
       code:"MX",
       phoneCode: "52"
    },
    { 
       name:"Micronesia (Federated States of)",
       code:"FM",
       phoneCode: "691"
    },
    { 
       name:"Moldova (Republic of)",
       code:"MD",
       phoneCode: "373"
    },
    { 
       name:"Monaco",
       code:"MC",
       phoneCode: "377"
    },
    { 
       name:"Mongolia",
       code:"MN",
       phoneCode: "976"
    },
    { 
       name:"Montenegro",
       code:"ME",
       phoneCode: "382"
    },
    { 
       name:"Montserrat",
       code:"MS",
       phoneCode: "1664"
    },
    { 
       name:"Morocco",
       code:"MA",
       phoneCode: "212"
    },
    { 
       name:"Mozambique",
       code:"MZ",
       phoneCode: "258"
    },
    { 
       name:"Myanmar",
       code:"MM",
       phoneCode: "95"
    },
    { 
       name:"Namibia",
       code:"NA",
       phoneCode: "264"
    },
    { 
       name:"Nauru",
       code:"NR",
       phoneCode: "674"
    },
    { 
       name:"Nepal",
       code:"NP",
       phoneCode: "977"
    },
    { 
       name:"Netherlands",
       code:"NL",
       phoneCode: "31"
    },
    { 
       name:"New Caledonia",
       code:"NC",
       phoneCode: "687"
    },
    { 
       name:"New Zealand",
       code:"NZ",
       phoneCode: "64"
    },
    { 
       name:"Nicaragua",
       code:"NI",
       phoneCode: "505"
    },
    { 
       name:"Niger",
       code:"NE",
       phoneCode: "227"
    },
    { 
       name:"Nigeria",
       code:"NG",
       phoneCode: "234"
    },
    { 
       name:"Niue",
       code:"NU",
       phoneCode: "683"
    },
    { 
       name:"Norfolk Island",
       code:"NF",
       phoneCode: "672"
    },
    { 
       name:"Korea (Democratic People's Republic of)",
       code:"KP",
       phoneCode: "850"
    },
    { 
       name:"Northern Mariana Islands",
       code:"MP",
       phoneCode: "1670"
    },
    { 
       name:"Norway",
       code:"NO",
       phoneCode: "47"
    },
    { 
       name:"Oman",
       code:"OM",
       phoneCode: "968"
    },
    { 
       name:"Pakistan",
       code:"PK",
       phoneCode: "92"
    },
    { 
       name:"Palau",
       code:"PW",
       phoneCode: "680"
    },
    { 
       name:"Palestine, State of",
       code:"PS",
       phoneCode: "970"
    },
    { 
       name:"Panama",
       code:"PA",
       phoneCode: "507"
    },
    { 
       name:"Papua New Guinea",
       code:"PG",
       phoneCode: "675"
    },
    { 
       name:"Paraguay",
       code:"PY",
       phoneCode: "595"
    },
    { 
       name:"Peru",
       code:"PE",
       phoneCode: "51"
    },
    { 
       name:"Philippines",
       code:"PH",
       phoneCode: "63"
    },
    { 
       name:"Pitcairn",
       code:"PN",
       phoneCode: "64"
    },
    { 
       name:"Poland",
       code:"PL",
       phoneCode: "48"
    },
    { 
       name:"Portugal",
       code:"PT",
       phoneCode: "351"
    },
    { 
       name:"Puerto Rico",
       code:"PR",
       phoneCode: ["1787","1939"]
    },
    { 
       name:"Qatar",
       code:"QA",
       phoneCode: "974"
    },
    { 
       name:"Republic of Kosovo",
       code:"XK",
       phoneCode: "383"
    },
    { 
       name:"Réunion",
       code:"RE",
       phoneCode: "262"
    },
    { 
       name:"Romania",
       code:"RO",
       phoneCode: "40"
    },
    { 
       name:"Russian Federation",
       code:"RU",
       phoneCode: "7"
    },
    { 
       name:"Rwanda",
       code:"RW",
       phoneCode: "250"
    },
    { 
       name:"Saint Barthélemy",
       code:"BL",
       phoneCode: "590"
    },
    { 
       name:"Saint Helena, Ascension and Tristan da Cunha",
       code:"SH",
       phoneCode: "290"
    },
    { 
       name:"Saint Kitts and Nevis",
       code:"KN",
       phoneCode: "1869"
    },
    { 
       name:"Saint Lucia",
       code:"LC",
       phoneCode: "1758"
    },
    { 
       name:"Saint Martin (French part)",
       code:"MF",
       phoneCode: "590"
    },
    { 
       name:"Saint Pierre and Miquelon",
       code:"PM",
       phoneCode: "508"
    },
    { 
       name:"Saint Vincent and the Grenadines",
       code:"VC",
       phoneCode: "1784"
    },
    { 
       name:"Samoa",
       code:"WS",
       phoneCode: "685"
    },
    { 
       name:"San Marino",
       code:"SM",
       phoneCode: "378"
    },
    { 
       name:"Sao Tome and Principe",
       code:"ST",
       phoneCode: "239"
    },
    { 
       name:"Saudi Arabia",
       code:"SA",
       phoneCode: "966"
    },
    { 
       name:"Senegal",
       code:"SN",
       phoneCode: "221"
    },
    { 
       name:"Serbia",
       code:"RS",
       phoneCode: "381"
    },
    { 
       name:"Seychelles",
       code:"SC",
       phoneCode: "248"
    },
    { 
       name:"Sierra Leone",
       code:"SL",
       phoneCode: "232"
    },
    { 
       name:"Singapore",
       code:"SG",
       phoneCode: "65"
    },
    { 
       name:"Sint Maarten (Dutch part)",
       code:"SX",
       phoneCode: "1721"
    },
    { 
       name:"Slovakia",
       code:"SK",
       phoneCode: "421"
    },
    { 
       name:"Slovenia",
       code:"SI",
       phoneCode: "386"
    },
    { 
       name:"Solomon Islands",
       code:"SB",
       phoneCode: "677"
    },
    { 
       name:"Somalia",
       code:"SO",
       phoneCode: "252"
    },
    { 
       name:"South Africa",
       code:"ZA",
       phoneCode: "27"
    },
    { 
       name:"South Georgia and the South Sandwich Islands",
       code:"GS",
       phoneCode: "500"
    },
    { 
       name:"Korea (Republic of)",
       code:"KR",
       phoneCode: "82"
    },
    { 
       name:"South Sudan",
       code:"SS",
       phoneCode: "211"
    },
    { 
       name:"Spain",
       code:"ES",
       phoneCode: "34"
    },
    { 
       name:"Sri Lanka",
       code:"LK",
       phoneCode: "94"
    },
    { 
       name:"Sudan",
       code:"SD",
       phoneCode: "249"
    },
    { 
       name:"Suriname",
       code:"SR",
       phoneCode: "597"
    },
    { 
       name:"Svalbard and Jan Mayen",
       code:"SJ",
       phoneCode: "4779"
    },
    { 
       name:"Swaziland",
       code:"SZ",
       phoneCode: "268"
    },
    { 
       name:"Sweden",
       code:"SE",
       phoneCode: "46"
    },
    { 
       name:"Switzerland",
       code:"CH",
       phoneCode: "41"
    },
    { 
       name:"Syrian Arab Republic",
       code:"SY",
       phoneCode: "963"
    },
    { 
       name:"Taiwan",
       code:"TW",
       phoneCode: "886"
    },
    { 
       name:"Tajikistan",
       code:"TJ",
       phoneCode: "992"
    },
    { 
       name:"Tanzania, United Republic of",
       code:"TZ",
       phoneCode: "255"
    },
    { 
       name:"Thailand",
       code:"TH",
       phoneCode: "66"
    },
    { 
       name:"Timor-Leste",
       code:"TL",
       phoneCode: "670"
    },
    { 
       name:"Togo",
       code:"TG",
       phoneCode: "228"
    },
    { 
       name:"Tokelau",
       code:"TK",
       phoneCode: "690"
    },
    { 
       name:"Tonga",
       code:"TO",
       phoneCode: "676"
    },
    { 
       name:"Trinidad and Tobago",
       code:"TT",
       phoneCode: "1868"
    },
    { 
       name:"Tunisia",
       code:"TN",
       phoneCode: "216"
    },
    { 
       name:"Turkey",
       code:"TR",
       phoneCode: "90"
    },
    { 
       name:"Turkmenistan",
       code:"TM",
       phoneCode: "993"
    },
    { 
       name:"Turks and Caicos Islands",
       code:"TC",
       phoneCode: "1649"
    },
    { 
       name:"Tuvalu",
       code:"TV",
       phoneCode: "688"
    },
    { 
       name:"Uganda",
       code:"UG",
       phoneCode: "256"
    },
    { 
       name:"Ukraine",
       code:"UA",
       phoneCode: "380"
    },
    { 
       name:"United Arab Emirates",
       code:"AE",
       phoneCode: "971"
    },
    { 
       name:"United Kingdom of Great Britain and Northern Ireland",
       code:"GB",
       phoneCode: "44"
    },
    { 
       name:"United States of America",
       code:"US",
       phoneCode: "1"
    },
    { 
       name:"Uruguay",
       code:"UY",
       phoneCode: "598"
    },
    { 
       name:"Uzbekistan",
       code:"UZ",
       phoneCode: "998"
    },
    { 
       name:"Vanuatu",
       code:"VU",
       phoneCode: "678"
    },
    { 
       name:"Venezuela (Bolivarian Republic of)",
       code:"VE",
       phoneCode: "58"
    },
    { 
       name:"Viet Nam",
       code:"VN",
       phoneCode: "84"
    },
    { 
       name:"Wallis and Futuna",
       code:"WF",
       phoneCode: "681"
    },
    { 
       name:"Western Sahara",
       code:"EH",
       phoneCode: "212"
    },
    { 
       name:"Yemen",
       code:"YE",
       phoneCode: "967"
    },
    { 
       name:"Zambia",
       code:"ZM",
       phoneCode: "260"
    },
    { 
       name:"Zimbabwe",
       code:"ZW",
       phoneCode: "263"
    }
]

export default countries