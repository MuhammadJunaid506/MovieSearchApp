export const generateYears = (number) => {
    const date = new Date()
    let year = date.getFullYear()
    let years = [year]
    for (var i = 0; i < number; i++) {
      year = year - 1
      years.push(year)
    }
    return years
  }
  
  export const getStatesWithCities = () => {
    const statesWithCities = [
      {
        stateName: 'Islamabad',
        cities: ['Islamabad'],
      },
      {
        stateName: 'Punjab',
        cities: [
          'Ahmed Nager Chatha',
          'Ahmadpur East',
          'Ali Khan Abad',
          'Alipur',
          'Arifwala',
          'Attock',
          'Bhera',
          'Bhalwal',
          'Bahawalnagar',
          'Bahawalpur',
          'Bhakkar',
          'Burewala',
          'Chillianwala',
          'Chakwal',
          'Chichawatni',
          'Chiniot',
          'Chishtian',
          'Daska',
          'Darya Khan',
          'Dera Ghazi Khan',
          'Dhaular',
          'Dina',
          'Dinga',
          'Dipalpur',
          'Faisalabad',
          'Ferozewala',
          'Fateh Jhang',
          'Ghakhar Mandi',
          'Gojra',
          'Gujranwala',
          'Gujrat',
          'Gujar Khan',
          'Hafizabad',
          'Haroonabad',
          'Hasilpur',
          'Haveli Lakha',
          'Jatoi',
          'Jalalpur',
          'Jattan',
          'Jampur',
          'Jaranwala',
          'Jhang',
          'Jhelum',
          'Kalabagh',
          'Karor Lal Esan',
          'Kasur',
          'Kamalia',
          'Kamoke',
          'Khanewal',
          'Khanpur',
          'Kharian',
          'Khushab',
          'Kot Addu',
          'Jauharabad',
          'Lahore',
          'Lalamusa',
          'Layyah',
          'Liaquat Pur',
          'Lodhran',
          'Malakwal',
          'Mamoori',
          'Mailsi',
          'Mandi Bahauddin',
          'Mian Channu',
          'Mianwali',
          'Multan',
          'Murree',
          'Muridke',
          'Mianwali Bangla',
          'Muzaffargarh',
          'Narowal',
          'Nankana Sahib',
          'Okara',
          'Renala Khurd',
          'Pakpattan',
          'Pattoki',
          'Pir Mahal',
          'Qaimpur',
          'Qila Didar Singh',
          'Rabwah',
          'Raiwind',
          'Rajanpur',
          'Rahim Yar Khan',
          'Rawalpindi',
          'Sadiqabad',
          'Safdarabad',
          'Sahiwal',
          'Sangla Hill',
          'Sarai Alamgir',
          'Sargodha',
          'Shakargarh',
          'Sheikhupura',
          'Sialkot',
          'Sohawa',
          'Soianwala',
          'Siranwali',
          'Talagang',
          'Taxila',
          'Toba Tek Singh',
          'Vehari',
          'Wah Cantonment',
          'Wazirabad',
        ],
      },
      {
        stateName: 'Sindh',
        cities: [
          'Badin',
          'Bhirkan',
          'Rajo Khanani',
          'Chak',
          'Dadu',
          'Digri',
          'Diplo',
          'Dokri',
          'Ghotki',
          'Haala',
          'Hyderabad',
          'Islamkot',
          'Jacobabad',
          'Jamshoro',
          'Jungshahi',
          'Kandhkot',
          'Kandiaro',
          'Karachi',
          'Kashmore',
          'Keti Bandar',
          'Khairpur',
          'Kotri',
          'Larkana',
          'Matiari',
          'Mehar',
          'Mirpur Khas',
          'Mithani',
          'Mithi',
          'Mehrabpur',
          'Moro',
          'Nagarparkar',
          'Naudero',
          'Naushahro Feroze',
          'Naushara',
          'Nawabshah',
          'Nazimabad',
          'Qambar',
          'Qasimabad',
          'Ranipur',
          'Ratodero',
          'Rohri',
          'Sakrand',
          'Sanghar',
          'Shahbandar',
          'Shahdadkot',
          'Shahdadpur',
          'Shahpur Chakar',
          'Shikarpaur',
          'Sukkur',
          'Tangwani',
          'Tando Adam Khan',
          'Tando Allahyar',
          'Tando Muhammad Khan',
          'Thatta',
          'Umerkot',
          'Warah',
        ],
      },
      {
        stateName: 'KPK',
        cities: [
          'Abbottabad',
          'Adezai',
          'Alpuri',
          'Akora Khattak',
          'Ayubia',
          'Banda Daud Shah',
          'Bannu',
          'Batkhela',
          'Battagram',
          'Birote',
          'Chakdara',
          'Charsadda',
          'Chitral',
          'Daggar',
          'Dargai',
          'Darya Khan',
          'Dera Ismail Khan',
          'Doaba',
          'Dir',
          'Drosh',
          'Hangu',
          'Haripur',
          'Karak',
          'Kohat',
          'Kulachi',
          'Lakki Marwat',
          'Latamber',
          'Madyan',
          'Mansehra',
          'Mardan',
          'Mastuj',
          'Mingora',
          'Nowshera',
          'Paharpur',
          'Pabbi',
          'Peshawar',
          'Saidu Sharif',
          'Shorkot',
          'Shewa Adda',
          'Swabi',
          'Swat',
          'Tangi',
          'Tank',
          'Thall',
          'Timergara',
          'Tordher',
        ],
      },
      {
        stateName: 'Balochistan',
        cities: [
          'Awaran',
          'Barkhan',
          'Chagai',
          'Dera Bugti',
          'Gwadar',
          'Harnai',
          'Jafarabad',
          'Jhal Magsi',
          'Kacchi',
          'Kalat',
          'Kech',
          'Kharan',
          'Khuzdar',
          'Killa Abdullah',
          'Killa Saifullah',
          'Kohlu',
          'Lasbela',
          'Lehri',
          'Loralai',
          'Mastung',
          'Musakhel',
          'Nasirabad',
          'Nushki',
          'Panjgur',
          'Pishin Valley',
          'Quetta',
          'Sherani',
          'Sibi',
          'Sohbatpur',
          'Washuk',
          'Zhob',
          'Ziarat',
        ],
      },
    ]
    return statesWithCities
  }
  
  export const getPrograms = () => {
    const degrees = [
      'Matriculation in Science',
      'Matriculation in Computer Science',
      'Intermediate Pre Engineering',
      'Intermediate Medical',
      'Intermediate Computer Science',
      'Intermediate Arts',
      'Intermediate Commerce',
      'Associate Degree in Accounting Finance',
      'Associate Degree in Business Administration',
      'Associate Degree in Commerce',
      'Associate Degree in Computer Networking',
      'Associate Degree in Computer Science',
      'Associate Degree in Database Management System',
      'Associate Degree in Early Childhood Care and Education',
      'Associate Degree in Education',
      'Associate Degree in Education (in-service) 1-year',
      'Associate Degree in Human Resource Management',
      'Associate Degree in Islamic Banking',
      'Associate Degree in Mass Communication',
      'Associate Degree in Operations Management',
      'Associate Degree in Psychology',
      'Associate Degree in Sales and Marketing',
      'Associate Degree in Supply Chain Management',
      'Associate Degree in Web Design and Development',
      'B.Ed. (Hons) Elementary',
      'B.Ed. (Hons.) Early Childhood Care and Education',
      'Bachelor of Business Information Technology (BBIT)',
      'BS Bioinformatics',
      'BS Biotechnology',
      'BS Business Administration',
      'BS Commerce',
      'BS Computer Science',
      'BS Economics',
      'BS English (Applied Linguistics)',
      'BS Information Technology',
      'BS Mass Communication',
      'BS Mathematics',
      'BS Psychology',
      'BS Public Administration',
      'BS Sociology',
      'BS Software Engineering',
      'BS Zoology',
      'B.Ed. Elementary (2.5-Year)',
      'B.Ed. Secondary (1.5-Year Program)',
    ]
  
    return degrees
  }
  
  export const getBloodGroups = () => {
    return ['A+', 'A-', 'B-', 'O+', 'O-', 'AB+', 'AB-', 'B+']
  }
  
  export const getGreetingTime = (m) => {
    var g = null //return g
  
    if (!m || !m.isValid()) {
      return
    } //if we can't find a valid or filled moment, we return.
  
    var split_afternoon = 12 //24hr time to split the afternoon
    var split_evening = 17 //24hr time to split the evening
    var currentHour = parseFloat(m.format('HH'))
  
    if (currentHour >= split_afternoon && currentHour <= split_evening) {
      g = 'Afternoon'
    } else if (currentHour >= split_evening) {
      g = 'Evening'
    } else {
      g = 'Morning'
    }
  
    return g
  }
  
  const asyncLocalStorage = {
    setItem: async function (key, value) {
      await Promise.resolve()
      localStorage.setItem(key, value)
    },
    getItem: async function (key) {
      await Promise.resolve()
      return localStorage.getItem(key)
    }
  };
  
  export const getUser = async () => {
    const user = await asyncLocalStorage.getItem("user")
    return JSON.parse(user)
    // return JSON.parse(localStorage.getItem("user"));
  };
  
  export const setUser = async (userData) => {
    await asyncLocalStorage.setItem("user", JSON.stringify(userData))
    return true
    // localStorage.setItem("user", JSON.stringify(userData));
  };
  
  export const deleteUser = () => {
    localStorage.removeItem("user");
  };
  
  export const addToStorage = function (key, data) {
    data = JSON.stringify(data)
    localStorage.setItem(key, data)
  }
  
  export const getFromStorage = function (key) {
    return JSON.parse(localStorage.getItem(key))
  }
  
  export const removeFromStorage = function (key) {
    localStorage.removeItem(key)
  }
  
  export const LocalStorageKeys = Object.freeze({
    User: "user",
    Token: "token"
  })