
import { useNavigate } from 'react-router-dom';
import '../Styles/Landingpage.css'
import { useEffect } from 'react';
import { useState } from 'react';
const Landingpage = () => {
  let navigate = useNavigate()

  let [fullname,setfullname]=useState("")
  let [phone,setphone]=useState("")
  let [state,setstate]=useState("")
  let [email,setemail]=useState("")
  let [support,setsupport]=useState("")
  let [country,setcoutry]=useState("")
  let [message,setmessage]=useState("")
  function information(){
    if(fullname.length>0 && phone.length>0  &&email.length>0 && email.length>0 && support.length>0 && country.length>0 ){
      alert("data saved successfully")
     }
     else{
      alert("invalid")
     }
  }

  function login() {
    navigate("/loginpage")
  }
  function signup() {
    navigate("/signuppage")
  }
  function register() {
    navigate("/register")
  }
  function enroll(){
    navigate("/enroll")
  }
  
   
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const [selectedOption, setSelectedOption] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!selectedOption) {
            alert("Please select an option.");
        } else {
            alert("Option selected: " + selectedOption);
            // You can perform further actions here, like submitting the form data
        }
    };

  return (
    <div className="parent">
      <div className="Navbar">
        <div className="icon"><img src="https://cdn.icon-icons.com/icons2/1152/PNG/512/1486506220-list-multimedia-player-music-list-music_81485.png" alt="" height="60" width="60" ></img></div>
        <div className="logo"><img src="https://consiliumeducation.com/itm/wp-content/uploads/sites/4/2016/11/listen-2973319_1280-geralt-Pixabay.jpg" alt="" height="60" width="100" ></img></div>
        <div className="button">  <button id="amlogin" onClick={login}>  Login</button> <button id="amsign" onClick={signup}>SignUp</button>   </div>
      </div>
      <div className="heropage">
        <div className="content"><h1>Grief Support  <br />Group</h1>  <br /> <br /> <br /> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.    <br /> Cumque, vel  Lorem ipsum dolor sit amet consectetur adipisicing elit..</p> </div>
        <div className="image"><img src="https://clipground.com/images/people-discussing-clipart-png-9.png" alt="" height="500" width="600" /></div>
      </div>
      <button id="register" onClick={register}>Register Now</button>
      <div className="subhero">
        <div className="timing">
          <div className="april"><h1 id="april">April16th,2024</h1></div>
          <div className="may">      <h1 id="may">At 15:00 Pm</h1></div>
        </div>
        <div className="circle"><h2 id="r1">Get Grief <br />Support  <br />on</h2></div>
      
        <div className="parent">
          <div className="time">
            <div className="hour">
              <h1 id="hour">{(time.getHours())}</h1>
            </div>
            <h1>:</h1>
            <div className="minute">
              <h1 id="minute">{(time.getMinutes())}</h1>
            </div>
            <h1>:</h1>
            <div className="sec">
              <h1 id="sec">{(time.getSeconds())}</h1>
            </div>
            <div className="am_pm">
              <h1 id="am_pm">{time.getHours() < 12 ? 'AM' : 'PM'}</h1>
            </div>
          </div>
        </div>
        <div className="thirdpage">
          <h1 id="topic">Topics to be  <br />Discussed</h1>
          <div className="boxes">
            <div className="box1"> <img id="hands" src="https://cdn.icon-icons.com/icons2/1358/PNG/512/if-advantage-teamwork-1034367_88840.png" alt="" height="90" width="90" />
              <h1>welcome to active Listeners</h1> <br /> <p>Lorem ipsum dolor sit amet consectetur  Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quia recusandae ab amet facere quos quaerat dolore magni mollitia neque!  adipisicing elit. Nulla, itaque!</p></div>
            <div className="box2"><img id="hands" src="https://cdn.icon-icons.com/icons2/1358/PNG/512/if-advantage-teamwork-1034367_88840.png" alt="" height="90" width="90" />
              <h1>welcome to active Listeners</h1>   <br /><p>Lorem ipsum dolor sit amet consectetur  Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quia recusandae ab amet facere quos quaerat dolore magni mollitia neque!  adipisicing elit. Nulla, itaque!</p></div>
            <div className="box3"><img id="hands" src="https://cdn.icon-icons.com/icons2/1358/PNG/512/if-advantage-teamwork-1034367_88840.png" alt="" height="90" width="90" />
              <h1>welcome to active Listeners</h1>   <br /><p>Lorem ipsum dolor sit amet consectetur  Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quia recusandae ab amet facere quos quaerat dolore magni mollitia neque!  adipisicing elit. Nulla, itaque!</p></div>
            <div className="box4"><img id="hands" src="https://cdn.icon-icons.com/icons2/1358/PNG/512/if-advantage-teamwork-1034367_88840.png" alt="" height="90" width="90" />
              <h1>welcome to active Listeners</h1>   <br /><p>Lorem ipsum dolor sit amet consectetur  Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quia recusandae ab amet facere quos quaerat dolore magni mollitia neque!  adipisicing elit. Nulla, itaque!</p></div>
          </div>

        </div>
        <div className="btn"><button   onClick={enroll} id="enroll">Enroll now</button></div>
        <div className="fourthpage"> <h1>What you will gain <br />from this meetup</h1>
          <div className="main">
            <div className="first">
              <img src="https://cdn.icon-icons.com/icons2/1358/PNG/512/if-advantage-teamwork-1034367_88840.png" alt="" height="80" width="80" />
              <h3>welcome to active listening</h3><p>Lorem ipsum dolor sit amet consectetur  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi quaerat vel neque illum. Eius sunt fugiat nostrum illo saepe similique.adipisicing elit. Suscipit quis porro, vel repellendus a odit nobis!</p>
            </div>
            <div className="second"><img src="https://cdn.icon-icons.com/icons2/1358/PNG/512/if-advantage-teamwork-1034367_88840.png" alt="" height="80" width="80" />
              <h3>welcome to active listening</h3><p>Lorem ipsum dolor sit amet consectetur  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi quaerat vel neque illum. Eius sunt fugiat nostrum illo saepe similique.adipisicing elit. Suscipit quis porro, vel repellendus a odit nobis!</p></div>
            <div className="third"><img src="https://cdn.icon-icons.com/icons2/1358/PNG/512/if-advantage-teamwork-1034367_88840.png" alt="" height="80" width="80" />
              <h3>welcome to active listening</h3><p>Lorem ipsum dolor sit amet consectetur  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi quaerat vel neque illum. Eius sunt fugiat nostrum illo saepe similique.adipisicing elit. Suscipit quis porro, vel repellendus a odit nobis!</p></div>
          </div>

          <div className="main2">
            <div className="firstt">
              <img src="https://cdn.icon-icons.com/icons2/1358/PNG/512/if-advantage-teamwork-1034367_88840.png" alt="" height="80" width="80" />
              <h3>welcome to active listening</h3><p>Lorem ipsum dolor sit amet consectetur  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi quaerat vel neque illum. Eius sunt fugiat nostrum illo saepe similique.adipisicing elit. Suscipit quis porro, vel repellendus a odit nobis!</p>
            </div>
            <div className="secondd"><img src="https://cdn.icon-icons.com/icons2/1358/PNG/512/if-advantage-teamwork-1034367_88840.png" alt="" height="80" width="80" />
              <h3>welcome to active listening</h3><p>Lorem ipsum dolor sit amet consectetur  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi quaerat vel neque illum. Eius sunt fugiat nostrum illo saepe similique.adipisicing elit. Suscipit quis porro, vel repellendus a odit nobis!</p></div>
            <div className="thirdd"><img src="https://cdn.icon-icons.com/icons2/1358/PNG/512/if-advantage-teamwork-1034367_88840.png" alt="" height="80" width="80" />
              <h3>welcome to active listening</h3><p>Lorem ipsum dolor sit amet consectetur  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi quaerat vel neque illum. Eius sunt fugiat nostrum illo saepe similique.adipisicing elit. Suscipit quis porro, vel repellendus a odit nobis!</p></div>
          </div>

          <h1>Get acknowledgement by <br /> Psycologist</h1>
          <div className="divisions">
            {/* <h1>Get Acknowledged by <br />Psycologist</h1> */}
            <div className="divisionone">
              <div className="image"> <img src="https://www.pngfind.com/pngs/m/691-6914326_ben-jones-cartoon-hd-png-download.png" alt="" height="100" width="100" /></div>
              <div className="text"><h1>Jennifer Kale</h1><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis corrupti aspernatur suscipit? A consequuntur omnis vel inventore porro pariatur modi.</p></div>
            </div>

            <div className="divisionsecond">
              <div className="image"> <img src="https://www.pngfind.com/pngs/m/691-6914326_ben-jones-cartoon-hd-png-download.png" alt="" height="100" width="100" /></div>
              <div className="text"><h1>Jennifer Kale</h1><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis corrupti aspernatur suscipit? A consequuntur omnis vel inventore porro pariatur modi.</p></div>
            </div>

            <div className="divisionthird">
              <div className="image"> <img src="https://www.pngfind.com/pngs/m/691-6914326_ben-jones-cartoon-hd-png-download.png" alt="" height="100" width="100" /></div>
              <div className="text"><h1>Jennifer Kale</h1><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis corrupti aspernatur suscipit? A consequuntur omnis vel inventore porro pariatur modi.</p></div>
            </div>
          </div>

          <div className="opportunity">
            <div className="heading"><h1>Grab The Opportunity  <br />for this month</h1>  <br /> <br /> <br /> <br /> <p>Lorem ipsum dolor sit amet reprehenderit, rerum cupiditate  <br />necessitatibus odio! Quis, totam.</p></div>
            <div className="logo"><img src="https://thumbs.dreamstime.com/b/register-now-label-register-now-isolated-seal-register-now-register-now-label-160023802.jpg" alt="" height="300" width="300" /></div>
          </div>
          <div className="options">
            <div className="available">
              <div className="symbol_available"></div>
              <div className="available_seats"><h4>  :Available</h4></div>
            </div>
            <div className="booked">
              <div className="symbol_booked"></div>
              <div className="booked_seats"><h4>Booked</h4></div>
            </div>

          </div>
          <div className="seat_display">
            <div className="seat_one"></div>
            <div className="seat_two"></div>
            <div className="seat_three"></div>
            <div className="seat_four"></div>
            <div className="seat_five"></div>
            <div className="seat_six"></div>
            <div className="seat_seven"></div>
            <div className="seat_eight"></div><div className="seat_nine"></div>
          </div>
          <div className="Enroll"><h1>Enroll now in <br />Grief Gruop support</h1> <br /> <br />
            <div className="enroll_as">
            <form id="formtag" >
            <input type="radio" name="option" value="option1" onChange={(e) => setSelectedOption(e.target.value)} checked={selectedOption === "option1"} /> Option 1 <br />
            <input type="radio" name="option" value="option2" onChange={(e) => setSelectedOption(e.target.value)} checked={selectedOption === "option2"} /> Option 2 <br />
            <input type="radio" name="option" value="option3" onChange={(e) => setSelectedOption(e.target.value)} checked={selectedOption === "option3"} /> Option 3 <br />
            <input type="submit" onClick={ handleSubmit} value="Submit" />
            </form>
               
          </div>
              <div className="input_tags">
              <div className="leftinput">
                FullName <br /><input value={fullname} onChange={(e)=>{setfullname(e.target.value)}} id="input" type="text" placeholder='Enter the name' /> <br />
                Phone <br /> <input value={phone} onChange={(e)=>{setphone(e.target.value)}} id="input" type="tel" placeholder='enter the number' /> <br />
                State <br /> <input  value={state} onChange={(e)=>{setstate(e.target.value)}} id="input" type="text" placeholder='state' />
                <select name="State" id="selector">
                  
                  <option value=""></option>
                  <option value="">Andhra Pradesh</option>
                  <option value="">Assam</option>
                  <option value="">Karnataka</option>
                  <option value="">Bihar</option>
                 

                </select>
              </div>
              <div className="rightinput">
                Email <br /><input  value={email} onChange={(e)=>{setemail(e.target.value)}} id="input" type="text" placeholder='enter email' /> <br />
                Country <br /> <input value={country} onChange={(e)=>{setcoutry(e.target.value)}} id="input" type="text" placeholder='enter the country' /> <br />
                Support in <br /> <input  value={support} onChange={(e)=>{setsupport(e.target.value)}} id="input" type="text" placeholder='support' />
              </div>

            </div>
            <div className="message"> Message   <br /><input   value={message} onChange={(e)=>{setmessage(e.target.value)}} id="messageinput" type="text" placeholder='message' /></div>
            <div className="checkbox_lable">
              <div className="label"><form action=""> <input id="checkbox" type="checkbox" /> Lorem ipsum dolor sit amet consectetur.</form></div>
              <div className="inputsubmit"> <button  onClick={information}  id="enrollsubmit">Submit</button></div>
            </div>
          </div>
        </div>
        <div className="additionaldata">
          <div className="links">
            <div className="navigation"><img src="https://cdn.icon-icons.com/icons2/1152/PNG/512/1486506220-list-multimedia-player-music-list-music_81485.png" alt="" height="50" width="50" /> <br />
              <p id="ampara">Lorem ipsum dolor sit amet, sequi molestias, eveniet cum necessitatibs non similique odit, repudiandae, aliquid vel.</p></div>
            <div className="navigation">
              <a href="">Navigation</a>  <ol>Home</ol><ol>Blog</ol> <ol>Engage</ol>  <ol>Podcast</ol> <ol>Login/Signup</ol>

            </div>
            <div className="navigation">
              <a href="">Legal</a><ol>Get in Touch</ol>
              <ol>Testimonial</ol>
              <ol>FAQ's</ol>
              <ol>Help</ol>
              <ol>Privacy Policy</ol>
              <ol>Terms&Conditions</ol>

            </div>
            <div className="navigation">
              <a href="">Contact Us</a><ol>📞 123456778</ol>
              <ol>dfghjkl</ol>

            </div>

          </div>

        </div>
      </div>
    </div>
  );
}

export default Landingpage;