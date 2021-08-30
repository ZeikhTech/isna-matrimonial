export default function EditProfile() {
  return (
    <main className="pt-80 page-waper">
      <section className="container manage_profile_page" role="main-content">
        <div className="mt-30 nofl">
          <div className="row">
            <div className="col-lg-8">
              <h3>
                Profile Setting
                <small className="ml-30">Post/Edit your profile details.</small>
              </h3>
              <div style={{ display: "none" }}> </div>
              <form
                className="form-horizontal card manage_profile"
                name="manage_profile"
                id="manage_profile"
                action="/profile/manage"
                method="post"
                enctype="multipart/form-data"
              >
                <div>
                  <fieldset className="form-check-inline required">
                    <label
                      className="control-label col-sm-4  col-lg-4"
                      for="Dname"
                    >
                      Display Name
                    </label>
                    <input
                      readonly=""
                      type="text"
                      id="nick_name"
                      name="nick_name"
                      placeholder="Display Name"
                      value="Awais Karamat"
                    />
                    <input
                      type="text"
                      id="nick_name"
                      name="nick_name"
                      placeholder="Display Name"
                      className="col-sm-8 col-lg-8 form-control"
                      value="Awais Karamat"
                    />{" "}
                  </fieldset>
                  <fieldset className="form-check-inline">
                    <label
                      className="control-label col-sm-4  col-lg-4"
                      for="image"
                    >
                      Profile Image
                    </label>
                    <div className="input-group mb-3 col-sm-8 col-lg-8  px-0">
                      <div className="custom-file">
                        <input
                          type="file"
                          className="custom-file-input"
                          id="inputGroupFile02"
                        />
                        <label
                          className="custom-file-label"
                          for="inputGroupFile02"
                        >
                          Choose file
                        </label>
                      </div>
                    </div>
                  </fieldset>
                  <div className="mx-auto">
                    {" "}
                    <img
                      id="member_image"
                      src="/assets/images/2/profile_images/thumb/awais-karamat.jpg"
                      className="media-object img-polaroid"
                    />
                    <a className="btn-remove">Remove</a>{" "}
                  </div>
                </div>
                <div className="mt-30">
                  <h4 className="hbb">Account Information</h4>
                  <fieldset className="form-check-inline required">
                    <label
                      className="control-label col-sm-4     col-lg-4"
                      for="first_name"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id="first_name"
                      className="col-sm-8 col-lg-8 form-control"
                      name="first_name"
                      placeholder="First Name"
                      value="Awais"
                    />{" "}
                  </fieldset>
                  <fieldset className="form-check-inline  required">
                    <label
                      className="control-label col-sm-4  col-lg-4"
                      for="last_name"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="last_name"
                      className="col-sm-8 col-lg-8 form-control"
                      id="last_name"
                      placeholder="Last Name"
                      value="Karamat"
                    />{" "}
                  </fieldset>
                  <fieldset className="form-check-inline ">
                    <label
                      for="gender"
                      className="control-label col-sm-4  col-lg-4"
                    >
                      Gender
                      <small style={{ color: "red", fontSize: "12px" }}>
                        &nbsp;*
                      </small>
                    </label>
                    <select
                      id="gender"
                      name="gender"
                      className="form-control col-sm-8 col-lg-8 "
                    >
                      <option value="0">Select One</option>
                      <option value="1" selected>
                        Male
                      </option>
                      <option value="2">Female</option>
                    </select>
                  </fieldset>
                  <fieldset className="form-check-inline  required d_o_b">
                    <label
                      for="DB"
                      className="control-label col-sm-4  col-lg-4"
                    >
                      Date of Birth
                    </label>
                    <input
                      type="text"
                      id="d_o_b"
                      name="d_o_b"
                      className="col-sm-8 col-lg-8 form-control"
                      value="06/15/1995"
                    />{" "}
                    <i
                      className="add-on icon-calendar"
                      id="dobPick"
                      data-date-format="mm/dd/yyyy"
                      data-date="06/15/1995"
                    ></i>{" "}
                  </fieldset>
                  <fieldset className="form-check-inline  required">
                    <label
                      for="country"
                      className="control-label col-sm-4  col-lg-4"
                    >
                      Country
                    </label>
                    <select
                      id="country"
                      name="country"
                      className="col-sm-8 col-lg-8 form-control"
                    >
                      <option value="0"> Please Select Country</option>
                      <option value="223" selected="selected">
                        {" "}
                        UNITED STATES{" "}
                      </option>
                      <option value="36"> CANADA </option>
                    </select>
                  </fieldset>
                  <fieldset className="form-check-inline  required">
                    <label
                      for="state"
                      className="control-label col-sm-4  col-lg-4"
                    >
                      State
                    </label>
                    <select
                      className="col-sm-8 col-lg-8 form-control"
                      name="state"
                      id="state"
                      required
                    >
                      <option value="0"> Please Select State</option>
                      <option value="2"> Alabama </option>
                      <option value="1"> Alaska </option>
                      <option value="3"> American Samoa </option>
                      <option value="4"> Arizona </option>
                      <option value="5"> Arkansas </option>
                      <option value="60"> Armed Forces Africa </option>
                      <option value="61">
                        {" "}
                        Armed Forces Americas (except Canada){" "}
                      </option>
                      <option value="62"> Armed Forces Canada </option>
                      <option value="63"> Armed Forces Europe </option>
                    </select>
                    <span id="text_s_span"></span>
                  </fieldset>
                  <fieldset className="form-check-inline  required">
                    <label
                      for="city"
                      className="control-label col-sm-4  col-lg-4"
                    >
                      City
                    </label>

                    <input
                      type="text"
                      maxlength="50"
                      name="city"
                      className="col-sm-8 col-lg-8 form-control"
                      value="New York"
                      id="city"
                      placeholder=""
                    />
                  </fieldset>
                  <fieldset className="form-check-inline  required">
                    <label
                      for="zip"
                      className="control-label col-sm-4  col-lg-4"
                    >
                      Zip Code
                    </label>

                    <input
                      type="text"
                      maxlength="20"
                      className="col-sm-8 col-lg-8 form-control"
                      name="zip_code"
                      value="10001"
                      id="zip_code"
                      style={{ width: "60px" }}
                    />
                  </fieldset>
                  <fieldset className="form-check-inline  required">
                    <label
                      for="phone"
                      className="control-label col-sm-4  col-lg-4"
                    >
                      Phone
                    </label>
                    <div className="controls controls-row">
                      <input
                        type="text"
                        name="mobile_phone"
                        value="3074743022"
                        id="user_contact"
                        placeholder="xxx xxx xxxx"
                      />{" "}
                      <small className="ml-10 mt-10">(XXX.XXX.XXXX)</small>{" "}
                    </div>
                  </fieldset>
                </div>
                <div className="mt-30">
                  <h4 className="hbb">Personal Information</h4>
                  <fieldset className="form-check-inline  required">
                    <label
                      for="height"
                      className="control-label col-sm-4  col-lg-4"
                    >
                      Height
                    </label>

                    <select
                      name="height"
                      id="height"
                      className="col-sm-8 col-lg-8 form-control"
                    >
                      <option value="0">Select One</option>
                      <option value="1">3'0"(91cm)</option>
                      <option value="2">3'1"(93cm)</option>
                      <option value="3">3'2"(96cm)</option>
                      <option value="4">3'3"(99cm)</option>
                      <option value="5">3'4"(101cm)</option>
                      <option value="6">3'5"(104cm)</option>
                      <option value="7">3'6"(106cm)</option>
                    </select>
                  </fieldset>
                  <fieldset className="form-check-inline  required">
                    <label
                      for="Ecolor"
                      className="control-label col-sm-4  col-lg-4"
                    >
                      Eye Color
                    </label>

                    <select
                      name="eye_color"
                      id="eye_color"
                      className="col-sm-8 col-lg-8 form-control"
                    >
                      <option value="0">Select One</option>
                      <option value="1">Black</option>
                      <option value="2">Blue</option>
                      <option value="3">Brown</option>
                      <option value="4">Colored contacts</option>
                      <option value="5">Green</option>
                      <option value="6">Grey</option>
                      <option value="7">Hazel</option>
                    </select>
                  </fieldset>
                  <fieldset className="form-check-inline  required">
                    <label
                      for="Hcolor"
                      className="control-label col-sm-4  col-lg-4"
                    >
                      Hair Color
                    </label>

                    <select
                      name="hair_color"
                      id="hair_color"
                      className="col-sm-8 col-lg-8 form-control"
                    >
                      <option value="0">Select One</option>
                      <option value="1">Auburn/Red</option>
                      <option value="2">Bald</option>
                      <option value="3">Black</option>
                      <option value="4">Blonde</option>
                      <option value="5">Dark blonde</option>
                      <option value="6">Dark brown</option>
                      <option value="7">Grey</option>
                      <option value="8">Indescribable</option>
                      <option value="9">Light brown</option>
                      <option value="10">Platinum</option>
                      <option value="11">Salt and Pepper</option>
                      <option value="12">Silver</option>
                    </select>
                  </fieldset>
                  <fieldset className="form-check-inline  required">
                    <label
                      for="bType"
                      className="control-label col-sm-4  col-lg-4"
                    >
                      Body Type
                    </label>

                    <select
                      name="body_type"
                      id="body_type"
                      className="col-sm-8 col-lg-8 form-control"
                    >
                      <option value="0">Select One</option>
                      <option value="1">Slim</option>
                      <option value="2">Athletic</option>
                      <option value="3">About average</option>
                      <option value="4">Few extra pounds</option>
                      <option value="5">Full Figured</option>
                    </select>
                  </fieldset>
                </div>
                <div className="mt-30">
                  <h4 className="hbb">Professional Information</h4>
                  <fieldset className="form-check-inline  required">
                    <label
                      for="profession"
                      className="control-label col-sm-4  col-lg-4"
                    >
                      Profession
                    </label>

                    <select
                      name="profession"
                      id="profession"
                      className="col-sm-8 col-lg-8 form-control"
                    >
                      <option value="0">Select One</option>
                      <option value="1">Medical Doctor</option>
                      <option value="2">Dentist</option>
                      <option value="3">Computer Scientist</option>
                      <option value="4">Engineer</option>
                      <option value="5">Lawyer</option>
                      <option value="6">Business Management</option>
                      <option value="7">Teacher</option>
                      <option value="8">Student</option>
                      <option value="9">Accounting</option>
                      <option value="10">Own Business</option>
                      <option value="11">Community Leader</option>
                      <option value="12">Other</option>
                    </select>
                  </fieldset>
                  <fieldset
                    className="form-check-inline  required"
                    id="other_profession_area"
                  >
                    <label
                      for="other_profession"
                      className="control-label col-sm-4  col-lg-4"
                    >
                      Other Profession
                    </label>

                    <input
                      type="text"
                      id="other_profession"
                      name="other_profession"
                      value=""
                      className="col-sm-8 col-lg-8 form-control"
                      placeholder="Other Profession"
                      readonly
                    />
                  </fieldset>
                  <fieldset className="form-check-inline  required">
                    <label
                      for="aIncome"
                      className="control-label col-sm-4  col-lg-4"
                    >
                      Annual Income
                    </label>

                    <select
                      name="annual_income"
                      id="annual_income"
                      className="col-sm-8 col-lg-8 form-control"
                    >
                      <option value="0">Select One</option>
                      <option value="1">Less Than $25,000</option>
                      <option value="2">$25,001 to $35,000</option>
                      <option value="3">$35,001 to $50,000</option>
                      <option value="4">$50,001 to $75,000</option>
                      <option value="5">$75,001 to $100,000</option>
                      <option value="6">$100,001 to $150,000</option>
                      <option value="7">$150,000+</option>
                    </select>
                  </fieldset>
                  <fieldset className="form-check-inline  required">
                    <label
                      for="education"
                      className="control-label col-sm-4  col-lg-4"
                    >
                      Education
                    </label>

                    <select
                      name="education"
                      id="education"
                      className="col-sm-8 col-lg-8 form-control"
                    >
                      <option value="0">Select One</option>
                      <option value="1">High School</option>
                      <option value="2">Bachelors</option>
                      <option value="3">Masters</option>
                      <option value="4">Ph.D.</option>
                      <option value="5">M.D.</option>
                      <option value="6">D.D.S.</option>
                      <option value="7">J.D.</option>
                      <option value="9">D.O</option>
                      <option value="8">Other</option>
                    </select>
                  </fieldset>
                  <fieldset
                    className="form-check-inline  required"
                    id="other_education_area"
                  >
                    <label
                      for="other_education"
                      className="control-label col-sm-4  col-lg-4"
                    >
                      Other Education
                    </label>

                    <input
                      type="text"
                      id="other_education"
                      name="other_education"
                      placeholder="Other Education"
                      className="col-sm-8 col-lg-8 form-control"
                      value=""
                      readonly
                    />
                  </fieldset>
                </div>
                <div className="mt-30">
                  <h4 className="hbb">Background Information</h4>
                  <fieldset className="form-check-inline  required">
                    <label
                      for="origin"
                      className="control-label col-sm-4  col-lg-4"
                    >
                      Country of Origin
                    </label>

                    <select
                      name="origin"
                      id="origin"
                      className="col-sm-8 col-lg-8 form-control"
                      required
                    >
                      <option value="0"> Please Select Country</option>
                      <option value="AFGHANISTAN"> AFGHANISTAN </option>
                      <option value="ALBANIA"> ALBANIA </option>
                      <option value="ALGERIA"> ALGERIA </option>
                      <option value="AMERICAN SAMOA"> AMERICAN SAMOA </option>
                      <option value="ANDORRA"> ANDORRA </option>
                      <option value="ANGOLA"> ANGOLA </option>
                    </select>
                  </fieldset>
                  <fieldset className="form-check-inline  required">
                    <label
                      for="religion"
                      className="control-label col-sm-4  col-lg-4"
                    >
                      Religion
                    </label>

                    <select
                      name="religion"
                      id="religion"
                      className="col-sm-8 col-lg-8 form-control"
                    >
                      <option value="0">Select One</option>
                      <option value="1">Muslim</option>
                    </select>
                  </fieldset>
                  <fieldset className="form-check-inline  required">
                    <label
                      for="usa_status"
                      className="control-label col-sm-4  col-lg-4"
                    >
                      Status in USA
                    </label>

                    <select
                      name="usa_status"
                      id="usa_status"
                      className="col-sm-8 col-lg-8 form-control"
                    >
                      <option value="0">Select One</option>
                      <option value="1">Citizen</option>
                      <option value="2">Resident Alien</option>
                      <option value="3">Student Visa</option>
                      <option value="4">Other</option>
                    </select>
                  </fieldset>
                  <fieldset
                    className="form-check-inline  required"
                    id="other_status_usa_area"
                  >
                    <label
                      for="other_status_usa"
                      className="control-label col-sm-4  col-lg-4"
                    >
                      Other Status in USA
                    </label>

                    <input
                      type="text"
                      id="other_status_usa"
                      name="other_status_usa"
                      className="col-sm-8 col-lg-8 form-control"
                      placeholder="Other Status in USA"
                      value=""
                      readonly
                    />
                  </fieldset>
                  <fieldset className="form-check-inline">
                    <label
                      for="color"
                      className="control-label col-sm-4  col-lg-4 message"
                    >
                      My Language<span style={{ color: "red" }}> *</span>
                      <br />{" "}
                      <small className="lable_caption">
                        (Choose all that aply)
                      </small>
                    </label>
                    <div className="row d-flex justify-content-between">
                      <div className="i-agree inline text_13 span3">
                        <input type="checkbox" name="Arabic" id="Arabic" />
                        <label for="Arabic">
                          {" "}
                          <a href="">Arabic </a>{" "}
                        </label>
                      </div>
                      <div className="i-agree inline text_13 span3">
                        <input type="checkbox" name="Hebrew" id="Hebrew" />
                        <label for="Hebrew">
                          {" "}
                          <a href="">Hebrew </a>{" "}
                        </label>
                      </div>
                      <div className="i-agree inline text_13 span3">
                        <input type="checkbox" name="Russian" id="Russian" />
                        <label for="Russian">
                          {" "}
                          <a href="">Russian </a>{" "}
                        </label>
                      </div>
                    </div>
                  </fieldset>
                </div>
                <div className="mt-30">
                  <h4 className="hbb">Other Information</h4>
                  <fieldset className="form-check-inline  required">
                    <label
                      for="marital_status"
                      className="control-label col-sm-4  col-lg-4"
                    >
                      Marital Status
                    </label>
                    <select
                      name="marital_status"
                      id="marital_status"
                      className="col-sm-8 col-lg-8 form-control"
                    >
                      <option value="0">Select One</option>
                      <option value="1">Never Married</option>
                      <option value="2">Divorced</option>
                      <option value="3">Widow/Widower</option>
                    </select>
                  </fieldset>
                  <fieldset className="form-check-inline  required">
                    <label
                      for="want_childern"
                      className="control-label col-sm-4  col-lg-4"
                    >
                      Want Children
                    </label>
                    <select
                      name="want_childern"
                      id="want_childern"
                      className="col-sm-8 col-lg-8 form-control"
                    >
                      <option value="0">Select One</option>
                      <option value="1">Yes</option>
                      <option value="2">No</option>
                      <option value="3">May be</option>
                    </select>
                  </fieldset>
                  <fieldset className="form-check-inline  required">
                    <label
                      for="have_children"
                      className="control-label col-sm-4  col-lg-4"
                    >
                      Have Children
                    </label>
                    <select
                      name="have_children"
                      id="have_children"
                      className="col-sm-8 col-lg-8 form-control"
                    >
                      <option value="0">Select One</option>
                      <option value="1">Yes</option>
                      <option value="2">No</option>
                    </select>
                  </fieldset>
                  <fieldset className="form-check-inline  required">
                    <label
                      for="smoke"
                      className="control-label col-sm-4  col-lg-4"
                    >
                      Smoke?
                    </label>
                    <select
                      name="smoke"
                      id="smoke"
                      className="col-sm-8 col-lg-8 form-control"
                    >
                      <option value="0">Select One</option>
                      <option value="1">Yes</option>
                      <option value="2">No</option>
                    </select>
                  </fieldset>
                  <fieldset className="form-check-inline  required ">
                    <label
                      for="message"
                      className="control-label col-sm-4  col-lg-4 message"
                    >
                      Message{" "}
                      <small className="lable_caption">
                        (Min 150 & Max 1000 Chars)
                      </small>
                    </label>
                    <div>
                      {" "}
                      <small>
                        Your profile will not be approved if you add email or
                        phone no. in the text.
                      </small>
                      <textarea
                        id="message"
                        name="message"
                        placeholder="Comments"
                        className="col-sm-8 col-lg-8 form-control"
                      ></textarea>
                    </div>
                  </fieldset>
                  <fieldset className="form-check-inline  required">
                    <label
                      for="partner_qualities"
                      className="control-label col-sm-4  col-lg-4 message"
                    >
                      Desired Partner's Qualities{" "}
                      <small className="lable_caption">(Max 500 Chars)</small>
                    </label>
                    <textarea
                      id="partner_qualities"
                      name="partner_qualities"
                      placeholder="Comments"
                      className="col-sm-8 col-lg-8 form-control"
                    ></textarea>
                  </fieldset>
                  <fieldset className="form-check-inline">
                    <label
                      className="control-label col-sm-4  col-lg-4"
                      for="disability"
                    >
                      State Disablity <small>(if any)</small>
                    </label>
                    <input
                      type="text"
                      id="disability"
                      name="disability"
                      placeholder="Disablity"
                      value=""
                      className="col-sm-8 col-lg-8 form-control"
                    />{" "}
                  </fieldset>
                </div>
                <div className="mt-30">
                  <h4 className="hbb">Referral Information</h4>
                  <fieldset className="form-check-inline">
                    <label
                      for="mStatus"
                      className="control-label col-sm-4  col-lg-4"
                    >
                      &nbsp;
                    </label>
                    <div className="controls">
                      <div className="i-agree inline text_13 ">
                        <input type="checkbox" name="plz-chk" id="plz-chk" />
                        <label for="plz-chk">
                          {" "}
                          <a href="">
                            Please check this if this account is for someone
                            else and i am the parent/guardian (walli){" "}
                          </a>{" "}
                        </label>
                      </div>
                    </div>
                  </fieldset>
                  <div id="referral_info">
                    <fieldset className="form-check-inline  required">
                      <label
                        className="control-label col-sm-4  col-lg-4"
                        for="guardian_name"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="guardian_name"
                        name="guardian_name"
                        placeholder="Guardian name"
                        value=""
                        className="col-sm-8 col-lg-8 form-control"
                        readonly
                      />{" "}
                    </fieldset>
                    <fieldset className="form-check-inline  required">
                      <label
                        className="control-label col-sm-4  col-lg-4"
                        for="relation"
                      >
                        Relation With The Person
                      </label>
                      <input
                        type="text"
                        id="relation"
                        name="relation"
                        placeholder="Relation"
                        value=""
                        className="col-sm-8 col-lg-8 form-control"
                        readonly
                      />{" "}
                    </fieldset>
                  </div>
                </div>
                <div className="mt-30">
                  <h4 className="hbb">References Information</h4>
                  <fieldset className="form-check-inline">
                    <label
                      for="firs_referance"
                      className="control-label col-sm-4  col-lg-4"
                    >
                      First Reference
                    </label>
                    <div className="controls">
                      {" "}
                      <span style={{ float: "left" }}>
                        <input
                          type="text"
                          id="first_referance_name"
                          name="first_referance_name"
                          placeholder="Name"
                          value=""
                        />
                        &nbsp;&nbsp;
                        <label
                          for="first_referance_name"
                          generated="true"
                          className="error"
                          style={{ display: "none" }}
                        >
                          <span>Letters Only</span>
                        </label>
                      </span>{" "}
                      <span style={{ float: "left" }}>
                        <input
                          type="text"
                          id="first_contact_num"
                          name="first_contact_num"
                          placeholder="Contact Number"
                          value=""
                        />
                        <label
                          for="first_contact_num"
                          generated="true"
                          className="error"
                          style={{ display: "none" }}
                        >
                          <span>
                            Please specify a valid phone number format xxx xxx
                            xxxx
                          </span>
                        </label>
                      </span>
                    </div>
                  </fieldset>
                  <fieldset className="form-check-inline">
                    <label
                      for="second_referance"
                      className="control-label col-sm-4  col-lg-4"
                    >
                      Second Reference
                    </label>
                    <div className="controls">
                      {" "}
                      <span style={{ float: "left" }}>
                        <input
                          type="text"
                          id="second_referance_name"
                          name="second_referance_name"
                          placeholder="Name"
                          value=""
                        />
                        &nbsp;&nbsp;
                        <label
                          for="second_referance_name"
                          generated="true"
                          className="error"
                          style={{ display: "none" }}
                        >
                          <span>Letters Only</span>
                        </label>
                      </span>{" "}
                      <span style={{ float: "left" }}>
                        <input
                          type="text"
                          id="second_contact_num"
                          name="second_contact_num"
                          placeholder="Contact Number"
                          value=""
                        />
                        <label
                          for="second_contact_num"
                          generated="true"
                          className="error"
                          style={{ display: "none" }}
                        >
                          <span>
                            Please specify a valid phone number format xxx xxx
                            xxxx
                          </span>
                        </label>
                      </span>
                    </div>
                  </fieldset>
                </div>
                <div className="mt-30">
                  <hr />
                  <fieldset className="form-check-inline mt-2">
                    <div className="i-agree inline text_13 ">
                      <input type="checkbox" name="uncheck" id="uncheck" />
                      <label for="uncheck">
                        {" "}
                        <a href="">
                          If you uncheck this your profile will not appear in
                          search results.{" "}
                        </a>{" "}
                      </label>
                    </div>
                  </fieldset>
                  <fieldset className="form-check-inline d-flex justify-content-center">
                    <div className="btn-group">
                      <button
                        type="submit"
                        className="theme-button-success mr-3"
                      >
                        Save
                      </button>
                      <button type="submit" className="theme-button-dannger">
                        Cancel
                      </button>
                    </div>
                  </fieldset>
                </div>
              </form>
            </div>
            <div className="col-lg-4 mt-5">
              <div className="card Featured-profile manage-profile">
                <h4 className="hbb">Featured Profile</h4>
                <div className="media">
                  <a href=" " className="pull-left ipg">
                    {" "}
                    <img
                      src="/assets/images/2/profile_images/Nursing.jpg"
                      className="img-fluid"
                    />{" "}
                  </a>
                  <div className="media-body ml-2">
                    <h5 className="media-heading">
                      <a href=" ">MSiddique</a>
                    </h5>
                    <p>
                      Age: &nbsp; 21
                      <br />
                      Religion: &nbsp; Muslim
                      <br />
                      State: &nbsp; Indiana
                      <br /> Country: &nbsp; United States
                    </p>
                    <div align="right">
                      <a href=" " className="linke-style">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card Featured-profile manage-profile">
                <h4 className="hbb">Profile of the Week</h4>
                <div className="media">
                  <a href=" " className="pull-left ipg">
                    {" "}
                    <img
                      src="/assets/images/2/profile_images/Midwife-intern.jpg"
                      className="img-fluid"
                    />{" "}
                  </a>
                  <div className="media-body ml-2">
                    <h5 className="media-heading">
                      <a href=" ">MSiddique</a>
                    </h5>
                    <p>
                      Age: &nbsp; 21
                      <br />
                      Religion: &nbsp; Muslim
                      <br />
                      State: &nbsp; Indiana
                      <br /> Country: &nbsp; United States
                    </p>
                    <div align="right">
                      <a href=" " className="linke-style">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
