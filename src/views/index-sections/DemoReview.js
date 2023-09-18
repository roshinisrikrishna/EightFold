import React, { useState, useRef } from "react";
import Select from "react-select";
import emailjs from "@emailjs/browser";
import countries from "countries-list";

import {
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  Form,
  Button,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/img/logo1.jpg";
import reviewImage from "../../assets/img/review-demo.webp";
import dottedImg from "../../assets/img/dotted_waves.png";

const items = [
  {
    src: require("assets/img/mellon_logo-removebg-preview.png"),
    altText: "img2",
    caption: "img2",
  },
  // {
  //   src: require("assets/img/lg_log-removebg-preview.png"),
  //   altText: "img4",
  //   caption: "img4",
  // },
  {
    src: require("assets/img/Vodaphone_logo.webp"),
    altText: "img10",
    caption: "img10",
  },
  {
    src: require("assets/img/bayer_color-removebg-preview.png"),
    altText: "img2",
    caption: "img2",
  },
];

function Navbars() {
  const form = useRef(); // Create a ref for the form element

  const customStyles = {
    control: (provided) => ({
      ...provided,
      borderColor: "red",
    }),
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_wyejb7i",
        "template_x1q0igm",
        form.current,
        "0_YtEx01a1OusTTDW"
      )
      .then((result) => {
        console.log(result.text);
      })
      .catch((error) => {
        console.log(error.text);
      });
    e.target.reset();
  };
  return (
    <>
      <div id="menu-dropdown" style={{ display: "flex" }}>
      <div
  className="left-sidebar"
  md="6"
  style={{
    width: "50%", // Set the left sidebar to 50% of the screen width
  }}
>
  <div className="space-50"></div>
  <a href="/" style={{ textDecoration: "none", color: "inherit" }}>
    <p className="back-link" style={{ fontSize: "12px" }}>
      <FontAwesomeIcon icon={faArrowLeft} style={{ marginRight: "5px" }} />
      Back to homepage
      <img
        src={logo}
        alt="Logo"
        style={{
          width: "30px",
          height: "auto",
          borderRadius: "20%",
          paddingLeft: "10px",
        }}
      />
    </p>
  </a>

  <div className="space-50"></div>
  <Container
    style={{
      display: "flex",
      flexDirection: "column",
    }}
  >
    <h2
      style={{
        fontFamily: "Museo Sans Rounded, sans-serif",
        fontSize: "38px",
        fontWeight: 600,
        maxWidth: "450px",
      }}
    >
      Transform how you hire and retain a diverse global workforce
    </h2>
    <p style={{ fontSize: "18px", fontWeight: 400 }}>
      See our Talent Intelligence Platform in action​​​.
    </p>
  </Container>

  <div
  style={{
    position: "fixed",
    left: "35%", // Center horizontally
    transform: "translateX(-50%)",
    bottom: "-5%", // Adjust this value to control the distance from the bottom
    width: "50%", // Adjust the width to cover the entire screen width
    maxWidth: "500px", // Limit the maximum width for larger screens
    height: "auto", // Auto-adjust the height
  }}
>
  <img src={reviewImage} alt="Review" style={{ width: "50%" }} />
</div>



</div>


        <div
          md="6"
          style={{
            flex: 1,
            width: "50%", // Set the right content area to 50% of the screen width
          }}
        >
        <img src={dottedImg} alt="Logo" style={{ width: "400px", height: "100px" }} />

        <div style={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: "20px"
}}>
    <h4 style={{
        fontWeight: "bolder",
        fontSize: "32px",
        fontFamily: "Museo Sans Rounded, sans-serif",
    }}>Request a live demo</h4>
    <p style={{ fontSize: "16px", fontWeight: 400, color: "#484B58", maxWidth: "400px" }}>
        Powered by AI, the Eightfold Talent Intelligence Platform empowers
        organizations, over 2,999 employees, to recruit and retain a
        diverse global workforce.
    </p>
    <div className="space-50"></div>

    <form ref={form} onSubmit={sendEmail} action="" className="form" method="">

            
                <InputGroup className="mb-3">
    <Input
        placeholder="First name"
        type="text"
        style={{ maxWidth: "400px" }} 
        name='first_name' required
    />
</InputGroup>

<InputGroup className="mb-3">

                    <Input
                      placeholder="Last name"
                      type="text"
                      name="last_name"
                      style={{ maxWidth: "400px" }}></Input>
                  </InputGroup>
                  <InputGroup
                  >
                    <Input
                      placeholder="Business email"
                      type="text" 
                      name="email_id"
                      style={{ maxWidth: "400px" }}
                    required></Input>
                  </InputGroup>
                  <InputGroup className="mb-3">

                    <Input
                      placeholder="Job title"
                      type="text"
                      name="designation"
                      style={{ maxWidth: "400px" }}
                      required
                    ></Input>
                  </InputGroup>
                  <InputGroup className="mb-3">

                    <Input
                      placeholder="Company name"
                      type="text"
                      name="company_name"
                      style={{ maxWidth: "400px" }}
                      required
                    ></Input>
                  </InputGroup>
                  <InputGroup className="mb-3">

                    <Input
                      placeholder="Phone number"
                      type="text"
                      name="ph_no"
                      style={{ maxWidth: "400px" }}
                      required
                    ></Input>
                  </InputGroup>
                  <InputGroup className="mb-3">

                  
                  <Input type="select" name="employees" id="employees" style={{ maxWidth: "400px" }}>
    <option disabled selected hidden>
        Number of employees
    </option>
    <option>&lt; 500</option>
    <option>500-1000</option>
    <option>1000-10000</option>
    <option>10000-20000</option>
    <option>&gt; 20000</option>
</Input>
</InputGroup>


   <InputGroup className="mb-3">

                  
    <Input type="select" name="country" 
    style={{ maxWidth: "400px" }} >
      <option disabled selected hidden>
            Select a country
        </option>
        <option value="Afghanistan">Afghanistan</option>
                <option value="Åland Islands">Åland Islands</option>
                <option value="Albania">Albania</option>
                <option value="Algeria">Algeria</option>
                <option value="American Samoa">American Samoa</option>
                <option value="Andorra">Andorra</option>
                <option value="Angola">Angola</option>
                <option value="Anguilla">Anguilla</option>
                <option value="Antarctica">Antarctica</option>
                <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                <option value="Argentina">Argentina</option>
                <option value="Armenia">Armenia</option>
                <option value="Aruba">Aruba</option>
                <option value="Australia">Australia</option>
                <option value="Austria">Austria</option>
                <option value="Azerbaijan">Azerbaijan</option>
                <option value="Bahamas">Bahamas</option>
                <option value="Bahrain">Bahrain</option>
                <option value="Bangladesh">Bangladesh</option>
                <option value="Barbados">Barbados</option>
                <option value="Belarus">Belarus</option>
                <option value="Belgium">Belgium</option>
                <option value="Belize">Belize</option>
                <option value="Benin">Benin</option>
                <option value="Bermuda">Bermuda</option>
                <option value="Bhutan">Bhutan</option>
                <option value="Bolivia">Bolivia</option>
                <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
                <option value="Botswana">Botswana</option>
                <option value="Bouvet Island">Bouvet Island</option>
                <option value="Brazil">Brazil</option>
                <option value="British Indian Ocean Territory">British Indian Ocean Territory</option>
                <option value="Brunei Darussalam">Brunei Darussalam</option>
                <option value="Bulgaria">Bulgaria</option>
                <option value="Burkina Faso">Burkina Faso</option>
                <option value="Burundi">Burundi</option>
                <option value="Cambodia">Cambodia</option>
                <option value="Cameroon">Cameroon</option>
                <option value="Canada">Canada</option>
                <option value="Cape Verde">Cape Verde</option>
                <option value="Cayman Islands">Cayman Islands</option>
                <option value="Central African Republic">Central African Republic</option>
                <option value="Chad">Chad</option>
                <option value="Chile">Chile</option>
                <option value="China">China</option>
                <option value="Christmas Island">Christmas Island</option>
                <option value="Cocos (Keeling) Islands">Cocos (Keeling) Islands</option>
                <option value="Colombia">Colombia</option>
                <option value="Comoros">Comoros</option>
                <option value="Congo">Congo</option>
                <option value="Congo, The Democratic Republic of The">Congo, The Democratic Republic of The</option>
                <option value="Cook Islands">Cook Islands</option>
                <option value="Costa Rica">Costa Rica</option>
                <option value="Cote D'ivoire">Cote D'ivoire</option>
                <option value="Croatia">Croatia</option>
                <option value="Cuba">Cuba</option>
                <option value="Cyprus">Cyprus</option>
                <option value="Czech Republic">Czech Republic</option>
                <option value="Denmark">Denmark</option>
                <option value="Djibouti">Djibouti</option>
                <option value="Dominica">Dominica</option>
                <option value="Dominican Republic">Dominican Republic</option>
                <option value="Ecuador">Ecuador</option>
                <option value="Egypt">Egypt</option>
                <option value="El Salvador">El Salvador</option>
                <option value="Equatorial Guinea">Equatorial Guinea</option>
                <option value="Eritrea">Eritrea</option>
                <option value="Estonia">Estonia</option>
                <option value="Ethiopia">Ethiopia</option>
                <option value="Falkland Islands (Malvinas)">Falkland Islands (Malvinas)</option>
                <option value="Faroe Islands">Faroe Islands</option>
                <option value="Fiji">Fiji</option>
                <option value="Finland">Finland</option>
                <option value="France">France</option>
                <option value="French Guiana">French Guiana</option>
                <option value="French Polynesia">French Polynesia</option>
                <option value="French Southern Territories">French Southern Territories</option>
                <option value="Gabon">Gabon</option>
                <option value="Gambia">Gambia</option>
                <option value="Georgia">Georgia</option>
                <option value="Germany">Germany</option>
                <option value="Ghana">Ghana</option>
                <option value="Gibraltar">Gibraltar</option>
                <option value="Greece">Greece</option>
                <option value="Greenland">Greenland</option>
                <option value="Grenada">Grenada</option>
                <option value="Guadeloupe">Guadeloupe</option>
                <option value="Guam">Guam</option>
                <option value="Guatemala">Guatemala</option>
                <option value="Guernsey">Guernsey</option>
                <option value="Guinea">Guinea</option>
                <option value="Guinea-bissau">Guinea-bissau</option>
                <option value="Guyana">Guyana</option>
                <option value="Haiti">Haiti</option>
                <option value="Heard Island and Mcdonald Islands">Heard Island and Mcdonald Islands</option>
                <option value="Holy See (Vatican City State)">Holy See (Vatican City State)</option>
                <option value="Honduras">Honduras</option>
                <option value="Hong Kong">Hong Kong</option>
                <option value="Hungary">Hungary</option>
                <option value="Iceland">Iceland</option>
                <option value="India">India</option>
                <option value="Indonesia">Indonesia</option>
                <option value="Iran, Islamic Republic of">Iran, Islamic Republic of</option>
                <option value="Iraq">Iraq</option>
                <option value="Ireland">Ireland</option>
                <option value="Isle of Man">Isle of Man</option>
                <option value="Israel">Israel</option>
                <option value="Italy">Italy</option>
                <option value="Jamaica">Jamaica</option>
                <option value="Japan">Japan</option>
                <option value="Jersey">Jersey</option>
                <option value="Jordan">Jordan</option>
                <option value="Kazakhstan">Kazakhstan</option>
                <option value="Kenya">Kenya</option>
                <option value="Kiribati">Kiribati</option>
                <option value="Korea, Democratic People's Republic of">Korea, Democratic People's Republic of</option>
                <option value="Korea, Republic of">Korea, Republic of</option>
                <option value="Kuwait">Kuwait</option>
                <option value="Kyrgyzstan">Kyrgyzstan</option>
                <option value="Lao People's Democratic Republic">Lao People's Democratic Republic</option>
                <option value="Latvia">Latvia</option>
                <option value="Lebanon">Lebanon</option>
                <option value="Lesotho">Lesotho</option>
                <option value="Liberia">Liberia</option>
                <option value="Libyan Arab Jamahiriya">Libyan Arab Jamahiriya</option>
                <option value="Liechtenstein">Liechtenstein</option>
                <option value="Lithuania">Lithuania</option>
                <option value="Luxembourg">Luxembourg</option>
                <option value="Macao">Macao</option>
                <option value="Macedonia, The Former Yugoslav Republic of">Macedonia, The Former Yugoslav Republic of</option>
                <option value="Madagascar">Madagascar</option>
                <option value="Malawi">Malawi</option>
                <option value="Malaysia">Malaysia</option>
                <option value="Maldives">Maldives</option>
                <option value="Mali">Mali</option>
                <option value="Malta">Malta</option>
                <option value="Marshall Islands">Marshall Islands</option>
                <option value="Martinique">Martinique</option>
                <option value="Mauritania">Mauritania</option>
                <option value="Mauritius">Mauritius</option>
                <option value="Mayotte">Mayotte</option>
                <option value="Mexico">Mexico</option>
                <option value="Micronesia, Federated States of">Micronesia, Federated States of</option>
                <option value="Moldova, Republic of">Moldova, Republic of</option>
                <option value="Monaco">Monaco</option>
                <option value="Mongolia">Mongolia</option>
                <option value="Montenegro">Montenegro</option>
                <option value="Montserrat">Montserrat</option>
                <option value="Morocco">Morocco</option>
                <option value="Mozambique">Mozambique</option>
                <option value="Myanmar">Myanmar</option>
                <option value="Namibia">Namibia</option>
                <option value="Nauru">Nauru</option>
                <option value="Nepal">Nepal</option>
                <option value="Netherlands">Netherlands</option>
                <option value="Netherlands Antilles">Netherlands Antilles</option>
                <option value="New Caledonia">New Caledonia</option>
                <option value="New Zealand">New Zealand</option>
                <option value="Nicaragua">Nicaragua</option>
                <option value="Niger">Niger</option>
                <option value="Nigeria">Nigeria</option>
                <option value="Niue">Niue</option>
                <option value="Norfolk Island">Norfolk Island</option>
                <option value="Northern Mariana Islands">Northern Mariana Islands</option>
                <option value="Norway">Norway</option>
                <option value="Oman">Oman</option>
                <option value="Pakistan">Pakistan</option>
                <option value="Palau">Palau</option>
                <option value="Palestinian Territory, Occupied">Palestinian Territory, Occupied</option>
                <option value="Panama">Panama</option>
                <option value="Papua New Guinea">Papua New Guinea</option>
                <option value="Paraguay">Paraguay</option>
                <option value="Peru">Peru</option>
                <option value="Philippines">Philippines</option>
                <option value="Pitcairn">Pitcairn</option>
                <option value="Poland">Poland</option>
                <option value="Portugal">Portugal</option>
                <option value="Puerto Rico">Puerto Rico</option>
                <option value="Qatar">Qatar</option>
                <option value="Reunion">Reunion</option>
                <option value="Romania">Romania</option>
                <option value="Russian Federation">Russian Federation</option>
                <option value="Rwanda">Rwanda</option>
                <option value="Saint Helena">Saint Helena</option>
                <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
                <option value="Saint Lucia">Saint Lucia</option>
                <option value="Saint Pierre and Miquelon">Saint Pierre and Miquelon</option>
                <option value="Saint Vincent and The Grenadines">Saint Vincent and The Grenadines</option>
                <option value="Samoa">Samoa</option>
                <option value="San Marino">San Marino</option>
                <option value="Sao Tome and Principe">Sao Tome and Principe</option>
                <option value="Saudi Arabia">Saudi Arabia</option>
                <option value="Senegal">Senegal</option>
                <option value="Serbia">Serbia</option>
                <option value="Seychelles">Seychelles</option>
                <option value="Sierra Leone">Sierra Leone</option>
                <option value="Singapore">Singapore</option>
                <option value="Slovakia">Slovakia</option>
                <option value="Slovenia">Slovenia</option>
                <option value="Solomon Islands">Solomon Islands</option>
                <option value="Somalia">Somalia</option>
                <option value="South Africa">South Africa</option>
                <option value="South Georgia and The South Sandwich Islands">South Georgia and The South Sandwich Islands</option>
                <option value="Spain">Spain</option>
                <option value="Sri Lanka">Sri Lanka</option>
                <option value="Sudan">Sudan</option>
                <option value="Suriname">Suriname</option>
                <option value="Svalbard and Jan Mayen">Svalbard and Jan Mayen</option>
                <option value="Swaziland">Swaziland</option>
                <option value="Sweden">Sweden</option>
                <option value="Switzerland">Switzerland</option>
                <option value="Syrian Arab Republic">Syrian Arab Republic</option>
                <option value="Taiwan">Taiwan</option>
                <option value="Tajikistan">Tajikistan</option>
                <option value="Tanzania, United Republic of">Tanzania, United Republic of</option>
                <option value="Thailand">Thailand</option>
                <option value="Timor-leste">Timor-leste</option>
                <option value="Togo">Togo</option>
                <option value="Tokelau">Tokelau</option>
                <option value="Tonga">Tonga</option>
                <option value="Trinidad and Tobago">Trinidad and Tobago</option>
                <option value="Tunisia">Tunisia</option>
                <option value="Turkey">Turkey</option>
                <option value="Turkmenistan">Turkmenistan</option>
                <option value="Turks and Caicos Islands">Turks and Caicos Islands</option>
                <option value="Tuvalu">Tuvalu</option>
                <option value="Uganda">Uganda</option>
                <option value="Ukraine">Ukraine</option>
                <option value="United Arab Emirates">United Arab Emirates</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="United States">United States</option>
                <option value="United States Minor Outlying Islands">United States Minor Outlying Islands</option>
                <option value="Uruguay">Uruguay</option>
                <option value="Uzbekistan">Uzbekistan</option>
                <option value="Vanuatu">Vanuatu</option>
                <option value="Venezuela">Venezuela</option>
                <option value="Viet Nam">Viet Nam</option>
                <option value="Virgin Islands, British">Virgin Islands, British</option>
                <option value="Virgin Islands, U.S.">Virgin Islands, U.S.</option>
                <option value="Wallis and Futuna">Wallis and Futuna</option>
                <option value="Western Sahara">Western Sahara</option>
                <option value="Yemen">Yemen</option>
                <option value="Zambia">Zambia</option>
                <option value="Zimbabwe">Zimbabwe</option>
    </Input>
</InputGroup>
<InputGroup className="mb-3">

                  
<Input type="select" name="country" 
style={{ maxWidth: "400px" }} >
  <option disabled selected hidden>
        Select a country
    </option>
    <option value="Afghanistan">Afghanistan</option>
            <option value="Åland Islands">Åland Islands</option>
            <option value="Albania">Albania</option>
            <option value="Algeria">Algeria</option>
            <option value="American Samoa">American Samoa</option>
            <option value="Andorra">Andorra</option>
            <option value="Angola">Angola</option>
            <option value="Anguilla">Anguilla</option>
            <option value="Antarctica">Antarctica</option>
            <option value="Antigua and Barbuda">Antigua and Barbuda</option>
            <option value="Argentina">Argentina</option>
            <option value="Armenia">Armenia</option>
            <option value="Aruba">Aruba</option>
            <option value="Australia">Australia</option>
            <option value="Austria">Austria</option>
            <option value="Azerbaijan">Azerbaijan</option>
            <option value="Bahamas">Bahamas</option>
            <option value="Bahrain">Bahrain</option>
            <option value="Bangladesh">Bangladesh</option>
            <option value="Barbados">Barbados</option>
            <option value="Belarus">Belarus</option>
            <option value="Belgium">Belgium</option>
            <option value="Belize">Belize</option>
            <option value="Benin">Benin</option>
            <option value="Bermuda">Bermuda</option>
            <option value="Bhutan">Bhutan</option>
            <option value="Bolivia">Bolivia</option>
            <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
            <option value="Botswana">Botswana</option>
            <option value="Bouvet Island">Bouvet Island</option>
            <option value="Brazil">Brazil</option>
            <option value="British Indian Ocean Territory">British Indian Ocean Territory</option>
            <option value="Brunei Darussalam">Brunei Darussalam</option>
            <option value="Bulgaria">Bulgaria</option>
            <option value="Burkina Faso">Burkina Faso</option>
            <option value="Burundi">Burundi</option>
            <option value="Cambodia">Cambodia</option>
            <option value="Cameroon">Cameroon</option>
            <option value="Canada">Canada</option>
            <option value="Cape Verde">Cape Verde</option>
            <option value="Cayman Islands">Cayman Islands</option>
            <option value="Central African Republic">Central African Republic</option>
            <option value="Chad">Chad</option>
            <option value="Chile">Chile</option>
            <option value="China">China</option>
            <option value="Christmas Island">Christmas Island</option>
            <option value="Cocos (Keeling) Islands">Cocos (Keeling) Islands</option>
            <option value="Colombia">Colombia</option>
            <option value="Comoros">Comoros</option>
            <option value="Congo">Congo</option>
            <option value="Congo, The Democratic Republic of The">Congo, The Democratic Republic of The</option>
            <option value="Cook Islands">Cook Islands</option>
            <option value="Costa Rica">Costa Rica</option>
            <option value="Cote D'ivoire">Cote D'ivoire</option>
            <option value="Croatia">Croatia</option>
            <option value="Cuba">Cuba</option>
            <option value="Cyprus">Cyprus</option>
            <option value="Czech Republic">Czech Republic</option>
            <option value="Denmark">Denmark</option>
            <option value="Djibouti">Djibouti</option>
            <option value="Dominica">Dominica</option>
            <option value="Dominican Republic">Dominican Republic</option>
            <option value="Ecuador">Ecuador</option>
            <option value="Egypt">Egypt</option>
            <option value="El Salvador">El Salvador</option>
            <option value="Equatorial Guinea">Equatorial Guinea</option>
            <option value="Eritrea">Eritrea</option>
            <option value="Estonia">Estonia</option>
            <option value="Ethiopia">Ethiopia</option>
            <option value="Falkland Islands (Malvinas)">Falkland Islands (Malvinas)</option>
            <option value="Faroe Islands">Faroe Islands</option>
            <option value="Fiji">Fiji</option>
            <option value="Finland">Finland</option>
            <option value="France">France</option>
            <option value="French Guiana">French Guiana</option>
            <option value="French Polynesia">French Polynesia</option>
            <option value="French Southern Territories">French Southern Territories</option>
            <option value="Gabon">Gabon</option>
            <option value="Gambia">Gambia</option>
            <option value="Georgia">Georgia</option>
            <option value="Germany">Germany</option>
            <option value="Ghana">Ghana</option>
            <option value="Gibraltar">Gibraltar</option>
            <option value="Greece">Greece</option>
            <option value="Greenland">Greenland</option>
            <option value="Grenada">Grenada</option>
            <option value="Guadeloupe">Guadeloupe</option>
            <option value="Guam">Guam</option>
            <option value="Guatemala">Guatemala</option>
            <option value="Guernsey">Guernsey</option>
            <option value="Guinea">Guinea</option>
            <option value="Guinea-bissau">Guinea-bissau</option>
            <option value="Guyana">Guyana</option>
            <option value="Haiti">Haiti</option>
            <option value="Heard Island and Mcdonald Islands">Heard Island and Mcdonald Islands</option>
            <option value="Holy See (Vatican City State)">Holy See (Vatican City State)</option>
            <option value="Honduras">Honduras</option>
            <option value="Hong Kong">Hong Kong</option>
            <option value="Hungary">Hungary</option>
            <option value="Iceland">Iceland</option>
            <option value="India">India</option>
            <option value="Indonesia">Indonesia</option>
            <option value="Iran, Islamic Republic of">Iran, Islamic Republic of</option>
            <option value="Iraq">Iraq</option>
            <option value="Ireland">Ireland</option>
            <option value="Isle of Man">Isle of Man</option>
            <option value="Israel">Israel</option>
            <option value="Italy">Italy</option>
            <option value="Jamaica">Jamaica</option>
            <option value="Japan">Japan</option>
            <option value="Jersey">Jersey</option>
            <option value="Jordan">Jordan</option>
            <option value="Kazakhstan">Kazakhstan</option>
            <option value="Kenya">Kenya</option>
            <option value="Kiribati">Kiribati</option>
            <option value="Korea, Democratic People's Republic of">Korea, Democratic People's Republic of</option>
            <option value="Korea, Republic of">Korea, Republic of</option>
            <option value="Kuwait">Kuwait</option>
            <option value="Kyrgyzstan">Kyrgyzstan</option>
            <option value="Lao People's Democratic Republic">Lao People's Democratic Republic</option>
            <option value="Latvia">Latvia</option>
            <option value="Lebanon">Lebanon</option>
            <option value="Lesotho">Lesotho</option>
            <option value="Liberia">Liberia</option>
            <option value="Libyan Arab Jamahiriya">Libyan Arab Jamahiriya</option>
            <option value="Liechtenstein">Liechtenstein</option>
            <option value="Lithuania">Lithuania</option>
            <option value="Luxembourg">Luxembourg</option>
            <option value="Macao">Macao</option>
            <option value="Macedonia, The Former Yugoslav Republic of">Macedonia, The Former Yugoslav Republic of</option>
            <option value="Madagascar">Madagascar</option>
            <option value="Malawi">Malawi</option>
            <option value="Malaysia">Malaysia</option>
            <option value="Maldives">Maldives</option>
            <option value="Mali">Mali</option>
            <option value="Malta">Malta</option>
            <option value="Marshall Islands">Marshall Islands</option>
            <option value="Martinique">Martinique</option>
            <option value="Mauritania">Mauritania</option>
            <option value="Mauritius">Mauritius</option>
            <option value="Mayotte">Mayotte</option>
            <option value="Mexico">Mexico</option>
            <option value="Micronesia, Federated States of">Micronesia, Federated States of</option>
            <option value="Moldova, Republic of">Moldova, Republic of</option>
            <option value="Monaco">Monaco</option>
            <option value="Mongolia">Mongolia</option>
            <option value="Montenegro">Montenegro</option>
            <option value="Montserrat">Montserrat</option>
            <option value="Morocco">Morocco</option>
            <option value="Mozambique">Mozambique</option>
            <option value="Myanmar">Myanmar</option>
            <option value="Namibia">Namibia</option>
            <option value="Nauru">Nauru</option>
            <option value="Nepal">Nepal</option>
            <option value="Netherlands">Netherlands</option>
            <option value="Netherlands Antilles">Netherlands Antilles</option>
            <option value="New Caledonia">New Caledonia</option>
            <option value="New Zealand">New Zealand</option>
            <option value="Nicaragua">Nicaragua</option>
            <option value="Niger">Niger</option>
            <option value="Nigeria">Nigeria</option>
            <option value="Niue">Niue</option>
            <option value="Norfolk Island">Norfolk Island</option>
            <option value="Northern Mariana Islands">Northern Mariana Islands</option>
            <option value="Norway">Norway</option>
            <option value="Oman">Oman</option>
            <option value="Pakistan">Pakistan</option>
            <option value="Palau">Palau</option>
            <option value="Palestinian Territory, Occupied">Palestinian Territory, Occupied</option>
            <option value="Panama">Panama</option>
            <option value="Papua New Guinea">Papua New Guinea</option>
            <option value="Paraguay">Paraguay</option>
            <option value="Peru">Peru</option>
            <option value="Philippines">Philippines</option>
            <option value="Pitcairn">Pitcairn</option>
            <option value="Poland">Poland</option>
            <option value="Portugal">Portugal</option>
            <option value="Puerto Rico">Puerto Rico</option>
            <option value="Qatar">Qatar</option>
            <option value="Reunion">Reunion</option>
            <option value="Romania">Romania</option>
            <option value="Russian Federation">Russian Federation</option>
            <option value="Rwanda">Rwanda</option>
            <option value="Saint Helena">Saint Helena</option>
            <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
            <option value="Saint Lucia">Saint Lucia</option>
            <option value="Saint Pierre and Miquelon">Saint Pierre and Miquelon</option>
            <option value="Saint Vincent and The Grenadines">Saint Vincent and The Grenadines</option>
            <option value="Samoa">Samoa</option>
            <option value="San Marino">San Marino</option>
            <option value="Sao Tome and Principe">Sao Tome and Principe</option>
            <option value="Saudi Arabia">Saudi Arabia</option>
            <option value="Senegal">Senegal</option>
            <option value="Serbia">Serbia</option>
            <option value="Seychelles">Seychelles</option>
            <option value="Sierra Leone">Sierra Leone</option>
            <option value="Singapore">Singapore</option>
            <option value="Slovakia">Slovakia</option>
            <option value="Slovenia">Slovenia</option>
            <option value="Solomon Islands">Solomon Islands</option>
            <option value="Somalia">Somalia</option>
            <option value="South Africa">South Africa</option>
            <option value="South Georgia and The South Sandwich Islands">South Georgia and The South Sandwich Islands</option>
            <option value="Spain">Spain</option>
            <option value="Sri Lanka">Sri Lanka</option>
            <option value="Sudan">Sudan</option>
            <option value="Suriname">Suriname</option>
            <option value="Svalbard and Jan Mayen">Svalbard and Jan Mayen</option>
            <option value="Swaziland">Swaziland</option>
            <option value="Sweden">Sweden</option>
            <option value="Switzerland">Switzerland</option>
            <option value="Syrian Arab Republic">Syrian Arab Republic</option>
            <option value="Taiwan">Taiwan</option>
            <option value="Tajikistan">Tajikistan</option>
            <option value="Tanzania, United Republic of">Tanzania, United Republic of</option>
            <option value="Thailand">Thailand</option>
            <option value="Timor-leste">Timor-leste</option>
            <option value="Togo">Togo</option>
            <option value="Tokelau">Tokelau</option>
            <option value="Tonga">Tonga</option>
            <option value="Trinidad and Tobago">Trinidad and Tobago</option>
            <option value="Tunisia">Tunisia</option>
            <option value="Turkey">Turkey</option>
            <option value="Turkmenistan">Turkmenistan</option>
            <option value="Turks and Caicos Islands">Turks and Caicos Islands</option>
            <option value="Tuvalu">Tuvalu</option>
            <option value="Uganda">Uganda</option>
            <option value="Ukraine">Ukraine</option>
            <option value="United Arab Emirates">United Arab Emirates</option>
            <option value="United Kingdom">United Kingdom</option>
            <option value="United States">United States</option>
            <option value="United States Minor Outlying Islands">United States Minor Outlying Islands</option>
            <option value="Uruguay">Uruguay</option>
            <option value="Uzbekistan">Uzbekistan</option>
            <option value="Vanuatu">Vanuatu</option>
            <option value="Venezuela">Venezuela</option>
            <option value="Viet Nam">Viet Nam</option>
            <option value="Virgin Islands, British">Virgin Islands, British</option>
            <option value="Virgin Islands, U.S.">Virgin Islands, U.S.</option>
            <option value="Wallis and Futuna">Wallis and Futuna</option>
            <option value="Western Sahara">Western Sahara</option>
            <option value="Yemen">Yemen</option>
            <option value="Zambia">Zambia</option>
            <option value="Zimbabwe">Zimbabwe</option>
</Input>
</InputGroup>

                  <InputGroup className="mb-3">

                    <Input
                      placeholder="How did you hear about us?"
                      type="textarea"
                      name="message"
        style={{ maxWidth: "400px" }}                     
                    ></Input>
                  </InputGroup>
                  <div style={{ display: 'flex', justifyContent: "center", marginTop: '20px' }}>
            <Button
                className="btn-round"
                type="submit"
                size="sm"
                style={{
                    backgroundColor: "#2f77ba",
                    fontWeight: "bold",
                    fontSize: "16px",
                    padding: "12px 35px",
                }}
            >
                Submit
            </Button>
        </div>
    </form>
</div>
<div className="space-50"></div>
              <div className="space-50"></div>

              <div id="card-two" style={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "20px" }}>
  <div id="card1" style={{ width: "230px", height: "300px", display: "flex", flexDirection: "column", alignItems: "center" }}>
    <h2 style={{
      fontFamily: "Museo Sans Rounded, sans-serif",
      fontSize: "58px",
      fontWeight: "bold",
      background: "-webkit-linear-gradient(45deg, #008BE8, #5B4B6E 85%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent"
    }}>
      33%
    </h2>
    <p style={{ fontSize: "14px", fontWeight: 400 }}>Time saved in interview scheduling for Dexcom</p>
  </div>
  <div id="card2" style={{ marginLeft: "10px", width: "200px", height: "300px", display: "flex", flexDirection: "column", alignItems: "center" }}>
    <h2 style={{
      fontFamily: "Museo Sans Rounded, sans-serif",
      fontSize: "58px",
      fontWeight: "bold",
      background: "-webkit-linear-gradient(45deg, #008BE8, #5B4B6E 85%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent"
    }}>
      120+
    </h2>
    <p style={{ fontSize: "14px", fontWeight: 400, textAlign: "center" }}>Countries deployed at Ericsson with our technology</p>
  </div>
</div>




              <div className="space-50"></div>
              <div style={{
  backgroundColor: "#f7f7f7",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  fontFamily: "Museo Sans Rounded, sans-serif", 
  textAlign: "center",
  width: "100%" /* Set width to 100% to match the container width */
}}>
  <h5 className="mt-5" style={{ fontWeight: 600, color: "rgba(0, 0, 0, 0.7)" }}>
    Organizations <span style={{ background: "-webkit-linear-gradient(45deg, #008BE8, #5B4B6E 85%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent" }}>trust us </span>
    with their talent transformation
  </h5>
  <div className="logos">
    <div className="logos-slide">
      {items.map((item, index) => (
        <img
          key={index}
          src={item.src}
          alt={item.altText}
          className="carousel-image"
          style={{
            maxWidth: "20%", // Ensure the image fits the container width
            height: "auto" // Maintain aspect ratio
          }}
        />
      ))}
    </div>
  </div>
</div>



<div className="space-50"></div>
<div style={{
    display: "flex",
    fontFamily: "Museo Sans Rounded, sans-serif",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center", // Center vertically
    textAlign: "center",
    width: "80%",
    margin: "0 auto",
    height: "100vh", // Make the div take up the full viewport height
}}>
    <h2 style={{
        fontWeight: "bold",
        fontSize: "35px",
        background: "-webkit-linear-gradient(45deg, #008BE8, #5B4B6E 85%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent"
    }}>
        Why customers love us
    </h2>
    <h4 style={{
        fontWeight: "bold",
        fontSize: "28px",
    }}>
        “We’ve been able to lean on the platform to surface the gems already in our system who wanted to work with us but had previously not been 100% qualified for a particular position.”
    </h4>
    <div className="elementor-element color-bar">
        <div className="elementor-testimonial__cite:before" style={{
            content: "",
            width: "240px",
            height: "3px",
            position: "relative",
            top: 0,
            left: "50%",
            transform: "translateX(-50%)",
            marginBottom: "36px",
            background: "linear-gradient(115.67deg, #008FBF 15.9%, #7E3A77 67.54%)",
            borderRadius: "5px",
        }}></div>
    </div>
    <p style={{ fontSize: "18px", fontWeight: "bold" }}>Justin Ghio</p>
    <p style={{ fontSize: "14px", fontWeight: 500 }}>Director of Talent Sourcing, Activision</p>
</div>






<div className="space-50"></div>
<div className="space-50"></div>
<div className="space-50"></div>


            
        </div>
</div>

      {/* </div> */}
      <style>
        {`
        
         @media (max-width: 768px) {
          /* Media query for small screens */
          .left-sidebar,
          div[md="6"] {
            width: 100%;
          }
          .left-sidebar {
            padding-left: 0;
          }
        }
     
.logos {
      overflow: hidden;
      padding: 60px 0;
      background: transparent;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .logos-slide {
      display: flex;
      align-items: center;
      justify-content: center;

      white-space: nowrap;
    }

    .carousel-image {
      height: 50px; // Set a fixed height
    }

        #menu-dropdown {
          /* Your existing styling for #menu-dropdown */
          position: relative;
        }

        /* Default styles for larger screens */
.left-sidebar {
  position: sticky;
  top: 0;
  width: calc(50% - 30px); /* Subtract any desired spacing or padding */
  background: linear-gradient(to bottom, #045d78, #0bb4de);
  padding-left: 90px;
  color: #fff;
  height: 100vh; /* Set the height to 100% of the viewport height */
  /* Other styles for your left sidebar */
}

/* Media query for smaller screens (adjust the breakpoint as needed) */
@media (max-width: 768px) {
  .left-sidebar {
    display: none; /* Hide the left sidebar */
  }
}

      
        .back-link {
          font-size: 14px;
          font-weight: 500;
          text-decoration: none; // To remove the default underline
          transition: text-decoration 0.3s ease; // Adding a smooth transition effect
      }

      .back-link:hover {
          text-decoration: underline; // Applying underline on hover
      }
        `}
      </style>
    </>
  );
}

export default Navbars;
