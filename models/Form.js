const mongoose = require('mongoose');
const { Schema } = mongoose;

const FormSchema = new Schema({
    //1) Profile Details
    //1A) Applied to office in City / Country
    present_rank: {
        // 
        type: String
    },
    rank_applied: {
        // 
        type: String
    },
    date_of_application: {
        // 
        type: String
    },
    date_of_availability: {
        // required : true,
        type: String
    },
    agency: {
        type: String
    },
    //1B) Profile Details
    first_name: {

        type: String
    },
    middle_name: {

        type: String
    },
    last_name: {

        type: String
    },
    date_of_birth: {

        type: String
    },
    place_of_birth: {

        type: String
    },
    nationality: {

        type: String
    },
    maritial_status: {

        type: String
    },
    smoker: {

        type: String
    },
    permanent_address: {

        type: String
    },
    present_address: {

        type: String
    },
    city_permanent: {

        type: String
    },
    pin_code_permanent: {

        type: Number
    },
    city_present: {

        type: String
    },
    pin_code_present: {

        type: Number
    },
    telephone_permanent: {

        type: Number
    },
    email_permanent: {

        type: String
    },
    telephone_present: {

        type: Number
    },
    email_present: {

        type: String
    },
    nearest_domestic_airport: {

        type: String
    },
    nearest_international_airport: {

        type: String
    },
    //2) NEXT OF KINS/ DEPENDENTS
    name_of_kin: {

        type: String
    },
    relation: {

        type: String
    },
    add_nkd: {

        type: String
    },
    kin_array: {

        type: Array
    },
    //3)Passport Details
    passport_no: {

        type: Number
    },
    passport_place_of_issue: {

        type: String
    },
    passport_date_of_issue: {

        type: String
    },
    passport_date_of_expiry: {

        type: String
    },
    us_visa_no: {

        type: Number
    },
    us_visa_place_of_issue: {

        type: String
    },
    us_visa_date_of_issue: {

        type: String
    },
    us_visa_date_of_expiry: {

        type: String
    },
    yellow_fever_no: {

        type: Number
    },
    yellow_fever_place_of_issue: {

        type: String
    },
    yellow_fever_date_of_issue: {

        type: String
    },
    yellow_fever_date_of_expiry: {

        type: String
    },
    //4)Continuous Discharge Certificate / Seaman Book
    indian_certificate_no: {

        type: Number
    },
    indian_place_of_issue: {

        type: String
    },
    indian_date_of_issue: {

        type: String
    },
    indian_date_of_expiry: {

        type: String
    },
    panama_certificate_no: {

        type: Number
    },
    panama_date_of_issue: {

        type: String
    },
    panama_date_of_expiry: {

        type: String
    },
    others_certificate_no: {

        type: Number
    },
    others_place_of_issue: {

        type: String
    },
    others_date_of_issue: {

        type: String
    },
    others_date_of_expiry: {

        type: String
    },
    //5)Academic Qualifications
    elementary_name_of_institution: {

        type: String
    },
    elementary_degree: {

        type: String
    },
    elementary_from: {

        type: Number
    },
    elementary_to: {

        type: Number
    },
    secondary_name_of_institution: {

        type: String
    },
    secondary_degree: {

        type: String
    },
    secondary_from: {

        type: Number
    },
    secondary_to: {

        type: Number
    },
    university_name_of_institution: {

        type: String
    },
    university_degree: {

        type: String
    },
    university_from: {

        type: Number
    },
    university_to: {

        type: Number
    },
    professional_name_of_institution: {

        type: String
    },
    professional_degree: {

        type: String
    },
    professional_from: {

        type: Number
    },
    professional_to: {

        type: Number
    },
    additional_skills: {

        type: String
    },
    //6) Liscence / Certificate of Competency
    indian_grade: {

        type: String
    },
    indian_number: {

        type: Number
    },
    indian_liscence_date_of_issue: {

        type: String
    },
    indian_lisence_date_of_expiry: {

        type: String
    },
    indain_lisence_date_revalidation: {

        type: String
    },
    indian_stcw: {

        type: Boolean
    },
    uk_grade: {

        type: String
    },
    uk_number: {

        type: Number
    },
    uk_liscence_date_of_issue: {

        type: String
    },
    uk_lisence_date_of_expiry: {

        type: String
    },
    uk_lisence_date_revalidation: {

        type: String
    },
    uk_stcw: {

        type: Boolean
    },
    aus_grade: {

        type: String
    },
    aus_number: {

        type: Number
    },
    aus_liscence_date_of_issue: {

        type: String
    },
    aus_lisence_date_of_expiry: {

        type: String
    },
    aus_lisence_date_revalidation: {

        type: String
    },
    aus_stcw: {

        type: Boolean
    },
    singapore_grade: {

        type: String
    },
    singapore_number: {

        type: Number
    },
    singapore_liscence_date_of_issue: {

        type: String
    },
    singapore_lisence_date_of_expiry: {

        type: String
    },
    singapore_lisence_date_revalidation: {

        type: String
    },
    singapore_stcw: {

        type: Boolean
    },
    panama_grade: {

        type: String
    },
    panama_number: {

        type: Number
    },
    panama_liscence_date_of_issue: {

        type: String
    },
    panama_lisence_date_of_expiry: {

        type: String
    },
    panama_lisence_date_revalidation: {

        type: String
    },
    panama_stcw: {

        type: Boolean
    },
    others_grade: {

        type: String
    },
    others_number: {

        type: Number
    },
    others_liscence_date_of_issue: {

        type: String
    },
    others_lisence_date_of_expiry: {

        type: String
    },
    others_lisence_date_revalidation: {

        type: String
    },
    others_stcw: {

        type: Boolean
    },
    //7)stcw and other certificates
    aff_cerificate_no: {
        type: Number
    },
    aff_date_of_issue: {
        type: String
    },
    aff_date_of_expiry: {
        type: String
    },
    aff_place_of_issue: {
        type: String
    },
    aff_issuing_authority: {
        type: String
    },
    fpff_cerificate_no: {
        type: Number
    },
    fpff_date_of_issue: {
        type: String
    },
    fpff_date_of_expiry: {
        type: String
    },
    fpff_place_of_issue: {
        type: String
    },
    fpff_issuing_authority: {
        type: String
    },
    efa_cerificate_no: {
        type: Number
    },
    efa_date_of_issue: {
        type: String
    },
    efa_date_of_expiry: {
        type: String
    },
    efa_place_of_issue: {
        type: String
    },
    efa_issuing_authority: {
        type: String
    },
    mfa_cerificate_no: {
        type: Number
    },
    mfa_date_of_issue: {
        type: String
    },
    mfa_date_of_expiry: {
        type: String
    },
    mfa_place_of_issue: {
        type: String
    },
    mfa_issuing_authority: {
        type: String
    },
    pst_cerificate_no: {
        type: Number
    },
    pst_date_of_issue: {
        type: String
    },
    pst_date_of_expiry: {
        type: String
    },
    pst_place_of_issue: {
        type: String
    },
    pst_issuing_authority: {
        type: String
    },
    pscrb_cerificate_no: {
        type: Number
    },
    pscrb_date_of_issue: {
        type: String
    },
    pscrb_date_of_expiry: {
        type: String
    },
    pscrb_place_of_issue: {
        type: String
    },
    pscrb_issuing_authority: {
        type: String
    },
    pssr_cerificate_no: {
        type: Number
    },
    pssr_date_of_issue: {
        type: String
    },
    pssr_date_of_expiry: {
        type: String
    },
    pssr_place_of_issue: {
        type: String
    },
    pssr_issuing_authority: {
        type: String
    },
    sso_cerificate_no: {
        type: Number
    },
    sso_date_of_issue: {
        type: String
    },
    sso_date_of_expiry: {
        type: String
    },
    sso_place_of_issue: {
        type: String
    },
    sso_issuing_authority: {
        type: String
    },
    stsdsd_cerificate_no: {
        type: Number
    },
    stsdsd_date_of_issue: {
        type: String
    },
    stsdsd_date_of_expiry: {
        type: String
    },
    stsdsd_place_of_issue: {
        type: String
    },
    stsdsd_issuing_authority: {
        type: String
    },
    roc_cerificate_no: {
        type: Number
    },
    roc_date_of_issue: {
        type: String
    },
    roc_date_of_expiry: {
        type: String
    },
    roc_place_of_issue: {
        type: String
    },
    roc_issuing_authority: {
        type: String
    },
    arpa_cerificate_no: {
        type: Number
    },
    arpa_date_of_issue: {
        type: String
    },
    arpa_date_of_expiry: {
        type: String
    },
    arpa_place_of_issue: {
        type: String
    },
    arpa_issuing_authority: {
        type: String
    },
    gmdss_cerificate_no: {
        type: Number
    },
    gmdss_date_of_issue: {
        type: String
    },
    gmdss_date_of_expiry: {
        type: String
    },
    gmdss_place_of_issue: {
        type: String
    },
    gmdss_issuing_authority: {
        type: String
    },
    //8)References
    reference_name_1: {
        type: String
    },
    reference_company_1: {
        type: String
    },
    reference_telephone_1: {
        type: Number
    },
    reference_name_2: {
        type: String
    },
    refernce_company_2: {
        type: String
    },
    reference_telephone_2: {
        type: Number
    },
    //9)How do you come to know about us
    company_presentation: {
        type: String
    },
    marine_club: {
        type: String
    },
    marine_magzine: {
        type: String
    },
    newspaper_advertisement: {
        type: String
    },
    told_by_seagoing_friend: {
        type: String
    },
    direct_mail: {
        type: String
    },
    others_advert: {
        type: String
    },
    //10)Personal Details
    height: {
        type: Number
    },
    weight: {
        type: Number
    },
    BMI: {
        type: Number
    },
    color_of_hair: {
        type: String
    },
    color_of_eyes: {
        type: String
    },
    any_major_surgery: {
        type: String
    },
    details_surgery: {
        type: String
    },
    defect_in_hearing: {
        type: String
    },
    defect_in_vision: {
        type: String
    },
    defect_in_speech: {
        type: String
    },
    health_affected_by_climate: {
        type: String
    },
    health_affected_by_climate_reason: {
        type: String
    },
    last_drawn_wages: {
        type: Number
    },
    //11) Additional Information
    applied_before: {
        type: String
    },
    ever_bonded: {
        type: String
    },
    crime_convicted: {
        type: String
    },
    crime_convicted_details: {
        type: String
    },
    ship_accident: {
        type: String
    },
    ship_accident_details: {
        type: String
    },
    certificate_suspended: {
        type: String
    },
    certificate_suspended_from: {
        type: String
    },
    certificate_suspended_to: {
        type: String
    },
    //12 Reason For Application
    leave_your_present_employment: {
        type: String
    },
    anything_further_support: {
        type: String
    },
    may_approach_employer: {
        type: Number
    },
    employer_contact_details: {
        type: Number
    },
    notice_to_attend_interview: {
        type: String
    },
    //13)SEA Experience
    special_experience: {
        type: Array
    },
    //14)on shore services
    on_shore: {
        type: Array
    },
    //15) Declaration
    declaration_date: {
        type: String
    },
    //upload passport pic and signature



});

const Form = mongoose.model('form', FormSchema);

module.exports = Form;