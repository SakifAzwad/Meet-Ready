'use client'
import Input from '@/components/JobSeekerDashboard/Input/Input'
import { cartContext } from '@/utils/Cart/CartContext'
import { useContext, useState } from 'react'

const countries = [
  "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria",
  "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan",
  "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia",
  "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo", "Costa Rica",
  "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt",
  "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", "Finland", "France", "Gabon",
  "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana",
  "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland",
  "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Kosovo", "Kuwait", "Kyrgyzstan",
  "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar",
  "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia",
  "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal",
  "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea", "North Macedonia", "Norway", "Oman", "Pakistan",
  "Palau", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar",
  "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia",
  "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa",
  "South Korea", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria", "Taiwan",
  "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan",
  "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States of America", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City",
  "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
]

const telephoneCode = [
  {"Afghanistan": "+93"},
  {"Albania": "+355"},
  {"Algeria": "+213"},
  {"Andorra": "+376"},
  {"Angola": "+244"},
  {"Antigua and Barbuda": "+1"},
  {"Argentina": "+54"},
  {"Armenia": "+374"},
  {"Australia": "+61"},
  {"Austria": "+43"},
  {"Azerbaijan": "+994"},
  {"Bahamas": "+1"},
  {"Bahrain": "+973"},
  {"Bangladesh": "+880"},
  {"Barbados": "+1"},
  {"Belarus": "+375"},
  {"Belgium": "+32"},
  {"Belize": "+501"},
  {"Benin": "+229"},
  {"Bhutan": "+975"},
  {"Bolivia": "+591"},
  {"Bosnia and Herzegovina": "+387"},
  {"Botswana": "+267"},
  {"Brazil": "+55"},
  {"Brunei": "+673"},
  {"Bulgaria": "+359"},
  {"Burkina Faso": "+226"},
  {"Burundi": "+257"},
  {"Cabo Verde": "+238"},
  {"Cambodia": "+855"},
  {"Cameroon": "+237"},
  {"Canada": "+1"},
  {"Central African Republic": "+236"},
  {"Chad": "+235"},
  {"Chile": "+56"},
  {"China": "+86"},
  {"Colombia": "+57"},
  {"Comoros": "+269"},
  {"Congo": "+242"},
  {"Costa Rica": "+506"},
  {"Croatia": "+385"},
  {"Cuba": "+53"},
  {"Cyprus": "+357"},
  {"Czech Republic": "+420"},
  {"Denmark": "+45"},
  {"Djibouti": "+253"},
  {"Dominica": "+1"},
  {"Dominican Republic": "+1"},
  {"Ecuador": "+593"},
  {"Egypt": "+20"},
  {"El Salvador": "+503"},
  {"Equatorial Guinea": "+240"},
  {"Eritrea": "+291"},
  {"Estonia": "+372"},
  {"Eswatini": "+268"},
  {"Ethiopia": "+251"},
  {"Fiji": "+679"},
  {"Finland": "+358"},
  {"France": "+33"},
  {"Gabon": "+241"},
  {"Gambia": "+220"},
  {"Georgia": "+995"},
  {"Germany": "+49"},
  {"Ghana": "+233"},
  {"Greece": "+30"},
  {"Grenada": "+1"},
  {"Guatemala": "+502"},
  {"Guinea": "+224"},
  {"Guinea-Bissau": "+245"},
  {"Guyana": "+592"},
  {"Haiti": "+509"},
  {"Honduras": "+504"},
  {"Hungary": "+36"},
  {"Iceland": "+354"},
  {"India": "+91"},
  {"Indonesia": "+62"},
  {"Iran": "+98"},
  {"Iraq": "+964"},
  {"Ireland": "+353"},
  {"Israel": "+972"},
  {"Italy": "+39"},
  {"Jamaica": "+1"},
  {"Japan": "+81"},
  {"Jordan": "+962"},
  {"Kazakhstan": "+7"},
  {"Kenya": "+254"},
  {"Kiribati": "+686"},
  {"Kosovo": "+383"},
  {"Kuwait": "+965"},
  {"Kyrgyzstan": "+996"},
  {"Laos": "+856"},
  {"Latvia": "+371"},
  {"Lebanon": "+961"},
  {"Lesotho": "+266"},
  {"Liberia": "+231"},
  {"Libya": "+218"},
  {"Liechtenstein": "+423"},
  {"Lithuania": "+370"},
  {"Luxembourg": "+352"},
  {"Madagascar": "+261"},
  {"Malawi": "+265"},
  {"Malaysia": "+60"},
  {"Maldives": "+960"},
  {"Mali": "+223"},
  {"Malta": "+356"},
  {"Marshall Islands": "+692"},
  {"Mauritania": "+222"},
  {"Mauritius": "+230"},
  {"Mexico": "+52"},
  {"Micronesia": "+691"},
  {"Moldova": "+373"},
  {"Monaco": "+377"},
  {"Mongolia": "+976"},
  {"Montenegro": "+382"},
  {"Morocco": "+212"},
  {"Mozambique": "+258"},
  {"Myanmar": "+95"},
  {"Namibia": "+264"},
  {"Nauru": "+674"},
  {"Nepal": "+977"},
  {"Netherlands": "+31"},
  {"New Zealand": "+64"},
  {"Nicaragua": "+505"},
  {"Niger": "+227"},
  {"Nigeria": "+234"},
  {"North Korea": "+850"},
  {"North Macedonia": "+389"},
  {"Norway": "+47"},
  {"Oman": "+968"},
  {"Pakistan": "+92"},
  {"Palau": "+680"},
  {"Palestine": "+970"},
  {"Panama": "+507"},
  {"Papua New Guinea": "+675"},
  {"Paraguay": "+595"},
  {"Peru": "+51"},
  {"Philippines": "+63"},
  {"Poland": "+48"},
  {"Portugal": "+351"},
  {"Qatar": "+974"},
  {"Romania": "+40"},
  {"Russia": "+7"},
  {"Rwanda": "+250"},
  {"Saint Kitts and Nevis": "+1"},
  {"Saint Lucia": "+1"},
  {"Saint Vincent and the Grenadines": "+1"},
  {"Samoa": "+685"},
  {"San Marino": "+378"},
  {"Sao Tome and Principe": "+239"},
  {"Saudi Arabia": "+966"},
  {"Senegal": "+221"},
  {"Serbia": "+381"},
  {"Seychelles": "+248"},
  {"Sierra Leone": "+232"},
  {"Singapore": "+65"},
  {"Slovakia": "+421"},
  {"Slovenia": "+386"},
  {"Solomon Islands": "+677"},
  {"Somalia": "+252"},
  {"South Africa": "+27"},
  {"South Korea": "+82"},
  {"South Sudan": "+211"},
  {"Spain": "+34"},
  {"Sri Lanka": "+94"},
  {"Sudan": "+249"},
  {"Suriname": "+597"},
  {"Sweden": "+46"},
  {"Switzerland": "+41"},
  {"Syria": "+963"},
  {"Taiwan": "+886"},
  {"Tajikistan": "+992"},
  {"Tanzania": "+255"},
  {"Thailand": "+66"},
  {"Timor-Leste": "+670"},
  {"Togo": "+228"},
  {"Tonga": "+676"},
  {"Trinidad and Tobago": "+1"},
  {"Tunisia": "+216"},
  {"Turkey": "+90"},
  {"Turkmenistan": "+993"},
  {"Tuvalu": "+688"},
  {"Uganda": "+256"},
  {"Ukraine": "+380"},
  {"United Arab Emirates": "+971"},
  {"United Kingdom": "+44"},
  {"United States of America": "+1"},
  {"Uruguay": "+598"},
  {"Uzbekistan": "+998"},
  {"Vanuatu": "+678"},
  {"Vatican City": "+379"},
  {"Venezuela": "+58"},
  {"Vietnam": "+84"},
  {"Yemen": "+967"},
  {"Zambia": "+260"},
  {"Zimbabwe": "+263"}
]


const CreateProfile = () => {
  const {isClicked} = useContext(cartContext)
  const [emailProvider, setEmailProvider] = useState('')
  const [email, setEmail] = useState('')
  const [country, setCountry] = useState('')
  const [address, setAddress] = useState('')

  const TelephoneCodeDisplay = ({ country }) => {
    // Find the telephone code for the provided country
    const codeObj = telephoneCode.find(entry => Object.keys(entry)[0] === country);
    const code = codeObj ? Object.values(codeObj)[0] : 'Code not found';
  
    return <select className=' px-2 py-[10px] rounded-lg text-gray-700 bg-white border focus:border-purple-400 dark:focus:border-purple-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-purple-300'> <option value={code}>{code}</option></select>;
  };


  return (
    <div className={`pt-10 pl-20 pr-5 ${isClicked ? 'lg:pl-24' : 'lg:pl-80'}`}>
      <h1 className='text-center text-3xl font-bold text-black'>Create your profile</h1>
   
      {/* Input field for name, skill, email, address, dist, country, phone */}
      <div className='mt-4 space-y-4'>
        {/* Name input field */}
      <Input placeholder={'Your Name'}
      name='name'
      type='text'
      className='w-full md:w-3/4 lg:w-full'
      />
      {/* email */}
      <div>
        <span className='font-semibold text-base  text-black'>Select Email Provider:   </span> <select name="emailProvider" id=""
        required
        onChange={(e) => setEmailProvider(e.target.value)}
        value={emailProvider}
        className=' p-2 rounded-lg text-gray-700 bg-white border focus:border-purple-400 dark:focus:border-purple-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-purple-300'
        >
          <option disabled value="">Select Email Provider</option>
          <option value="@gmail.com">Gmail</option>
          <option value="@yahoo.com">Yahoo</option>
          <option value="@outlook.com">Outlook</option>
        </select>

        {
          emailProvider && (<div className='flex flex-col space-y-2 pt-2'>
            <Input
            type='text'
            name='email'
            placeholder='Type your email here'
            onKeyPress={(e) => {
              if (e.key === '@') {
                e.preventDefault();
              }
            }}
            onChange={(e) => {
              setEmail(e.target.value + emailProvider)}}
            />
            {email && <span className='font-semibold text-base  text-purple-700 pl-2'>{email}</span>}
          </div>)  
        }
      </div>
      {/* skill */}
      <Input
      name='skill'
      type='text'
      placeholder='Your Skill'
      className='w-full md:w-3/4 lg:w-full'
      />
      {/* address */}
        <div>
          {/* country */}
        <span className='font-semibold text-base  text-black'>Select Your Country:   </span> <select name="emailProvider" id=""
        required
        onChange={(e) => setCountry(e.target.value)}
        value={country}
        className=' p-2 rounded-lg text-gray-700 bg-white border focus:border-purple-400 dark:focus:border-purple-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-purple-300'
        >
          <option disabled value="">Select Country</option>
          {
            countries.map(country => <option key={country} value={country}>{country}</option>)
          }
        </select>
        {
          country && (<div className='flex flex-col space-y-2 pt-2'>
            <Input
            type='text'
            name='country'
            placeholder='Type your address here'
            onChange={(e) => {
              setAddress(e.target.value + ', ' + country)}}
            />
            {address && <span className='font-semibold text-base  text-purple-700 pl-2'>{address}</span>}
          </div>)  
        }
        </div>
        {/* phone */}
        <div>
          {
            country && (
             <div className='flex items-end gap-2'>
               <div><TelephoneCodeDisplay country={country}/></div>
               <Input 
               type='tel'
               name='phone'
               placeholder='Type your phone number'
               className='flex-1'
               />
             </div>
              
            )
          }
        </div>
      </div>
    </div>
  )
}

export default CreateProfile

