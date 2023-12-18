# NETFLIX GPT

- Create React App
- Configured TailwindCSS
  -Login page
  -Routing of pages
  -Sign Up form
  -Sign In form
  -Form validations
  -useref hook
  -Firebase setup
  -Deploying our app to production.
  -Create SignUp user accounts.
  -Implement Sign in user api
  -Implemented sign out
  -Update Profile
  -Bugfix:Sign Up,user displayname and profile picture update.
  - BugFix:if the user is not logged in Redirect/browse to login Page and vice-versa.
  - Unsubcribed to the onAuthStateChanged callback.
  - Add hardcoded files inside urls or contants file.
  - Register TMDB API & create an API & get access token
  - Get data from TMDB now playing movies list API.
    -Custom hooks for now playing movies.
    -Create movie slice
    -Update Store with movie data
    -Update store with trailer video data.
    -Embedded the youtube video and make it autoplay and mute.
    -Tailwind classes to make main container looks awesome.
    -Make second portion.

#Features

-Login/Sign Up

- Sign In/Signup Form
  after valid authenication redirected to browse page.
- Browse(after authenication)
  => Header
  => Main Movie
  -Trailer in Background
  -Title and Description
  =>Movie Suggestions

  - Movie list x n

  =>NETFLIX GPT
  -Search Bar
  -Movie Suggestions

  #Formik
  -If form containing n no. of fields using formik.

  //Here some things need to store.
  const data = languages[0]["en"];
  const [stat, setStatic] = useState(data);
  const dispatch = useDispatch();
  useAllLang();
  const lang = useSelector((item) => item.lang.allLanguages);
  const handleChange = (e) => {
  lang &&
  lang
  .map((item) => item)
  .filter((store) => setStatic(store[e.target.value]));
  };
  dispatch(addLanguage(stat));
  useEffect(() => {
  !languages && handleChange();
  }, []);
  const store = useSelector((store) => store.lang);
  const {
  signIn,
  description,
  priceStatics,
  memberShipStatics,
  placeHolder,
  btnName,
  } = store.languages[0].homePage;
