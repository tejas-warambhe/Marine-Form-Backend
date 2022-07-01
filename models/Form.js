const mongoose = require('mongoose');
const { Schema } = mongoose;

const FormSchema = new Schema({
    //1) Profile Details
    //1A) Applied to office in City / Country
    present_rank: {
        required: true,
        type: String
    },
    rank_applied: {
        required: true,
        type: String
    },
    date_of_application: {
        required: true,
        type: String
    },
    //1B) Profile Details
    first_name: {
        required: true,
        type: String
    },
    middle_name: {
        required: true,
        type: String
    },
    last_name: {
        required: true,
        type: String
    },
    date_of_birth: {
        required: true,
        type: String
    },
    place_of_birth: {
        required: true,
        type: String
    },
    nationality: {
        required: true,
        type: String
    },
    maritial_status: {
        required: true,
        type: String
    },
    smoker: {
        required: true,
        type: Boolean
    },
    permanent_address: {
        required: true,
        type: String
    },
    present_address: {
        requied: true,
        type: String
    },
    city_permanent: {
        required: true,
        type: String
    },
    pin_code_permanent: {
        required: true,
        type: Number
    },
    city_present: {
        required: true,
        type: String
    },
    pin_code_present: {
        required: true,
        type: Number
    },
    telephone_permanent: {
        required: true,
        type: Number
    },
    email_permanent: {
        required: true,
        type: String
    },
    telephone_present: {
        required: true,
        type: Number
    },
    email_present: {
        required: true,
        type: String
    },
    nearest_domestic_airport: {
        required: true,
        type: String
    },
    nearest_international_airport: {
        required: true,
        type: String
    },
    //2) NEXT OF KINS/ DEPENDENTS
    name_of_kin: {
        required: true,
        type: String
    },
    relation: {
        required: true,
        type: String
    },
    add_nkd: {
        required: true,
        type: String
    },
    kin_array: {
        required: true,
        type: Array
    },
    //3)Passport Details
    passport_no: {
        required: true,
        type: Number
    },
    passport_place_of_issue: {
        required: true,
        type: String
    },
    passport_date_of_issue: {
        required: true,
        type: String
    },
    passport_date_of_expiry: {
        required: true,
        type: String
    },
    us_visa_no: {
        required: true,
        type: Number
    },
    us_visa_date_of_issue: {
        required: true,
        type: String
    },
    us_visa_date_of_expiry: {
        required: true,
        type: String
    },
    yellow_fever_no: {
        required: true,
        type: Number
    },
    yellow_fever_date_of_issue: {
        required: true,
        type: String
    },
    yellow_fever_date_of_expiry: {
        required: true,
        type: String
    },
    //4)Continuous Discharge Certificate / Seaman Book
    indian_certificate_no: {
        required: true,
        type: Number
    },
    indian_place_of_issue: {
        required: true,
        type: String
    },
    indian_date_of_issue: {
        required: true,
        type: String
    },
    indian_date_of_expiry: {
        required: true,
        type: String
    },
    panama_certificate_no: {
        required: true,
        type: Number
    },
    panama_date_of_issue: {
        required: true,
        type: String
    },
    panama_date_of_expiry: {
        required: true,
        type: String
    },
    others_certificate_no: {
        required: true,
        type: Number
    },
    others_place_of_issue: {
        required: true,
        type: String
    },
    others_date_of_issue: {
        required: true,
        type: String
    },
    others_date_of_expiry: {
        required: true,
        type: String
    },
    //5)Academic Qualifications
    elementary_name_of_institution: {
        required: true,
        type: String
    },
    elementary_degree: {
        required: true,
        type: String
    },
    elementary_from: {
        required: true,
        type: Number
    },
    elementary_to: {
        required: true,
        type: Number
    },
    secondary_name_of_institution: {
        required: true,
        type: String
    },
    secondary_degree: {
        required: true,
        type: String
    },
    secondary_from: {
        required: true,
        type: Number
    },
    university_name_of_institution: {
        required: true,
        type: String
    },
    university_degree: {
        required: true,
        type: String
    },
    university_from: {
        required: true,
        type: Number
    },
    university_to: {
        requirede: true,
        type: Number
    },
    professional_name_of_institution: {
        required: true,
        type: String
    },
    professional_degree: {
        required: true,
        type: String
    },
    professional_from: {
        required: true,
        type: Number
    },
    professional_to: {
        required: true,
        type: Number
    },
    additional_skills: {
        required: true,
        type: String
    },
    //6) Liscence / Certificate of Competency
    indian_grade: {
        required: true,
        type: String
    },
    indian_number: {
        required: true,
        type: Number
    },
    indian_liscence_date_of_issue: {
        required: true,
        type: String
    },
    indian_lisence_date_of_expiry: {
        required: true,
        type: String
    },
    indain_lisence_date_revalidation: {
        required: true,
        type: String
    },
    indian_stcw: {
        required: true,
        type: Boolean
    },
    uk_grade: {
        required: true,
        type: String
    },
    uk_number: {
        required: true,
        type: Number
    },
    uk_liscence_date_of_issue: {
        required: true,
        type: String
    },
    uk_lisence_date_of_expiry: {
        required: true,
        type: String
    },
    uk_lisence_date_revalidation: {
        required: true,
        type: String
    },
    uk_stcw: {
        required: true,
        type: Boolean
    },
    aus_grade: {
        required: true,
        type: String
    },
    aus_number: {
        required: true,
        type: Number
    },
    aus_liscence_date_of_issue: {
        required: true,
        type: String
    },
    aus_lisence_date_of_expiry: {
        required: true,
        type: String
    },
    aus_lisence_date_revalidation: {
        required: true,
        type: String
    },
    aus_stcw: {
        required: true,
        type: Boolean
    },
    singapore_grade: {
        required: true,
        type: String
    },
    singapore_number: {
        required: true,
        type: Number
    },
    singapore_liscence_date_of_issue: {
        required: true,
        type: String
    },
    singapore_lisence_date_of_expiry: {
        required: true,
        type: String
    },
    singapore_lisence_date_revalidation: {
        required: true,
        type: String
    },
    singapore_stcw: {
        required: true,
        type: Boolean
    },
    panama_grade: {
        required: true,
        type: String
    },
    panama_number: {
        required: true,
        type: Number
    },
    panama_liscence_date_of_issue: {
        required: true,
        type: String
    },
    panama_lisence_date_of_expiry: {
        required: true,
        type: String
    },
    panama_lisence_date_revalidation: {
        required: true,
        type: String
    },
    panama_stcw: {
        required: true,
        type: Boolean
    },
    others_grade: {
        required: true,
        type: String
    },
    others_number: {
        required: true,
        type: Number
    },
    others_liscence_date_of_issue: {
        required: true,
        type: String
    },
    others_lisence_date_of_expiry: {
        required: true,
        type: String
    },
    others_lisence_date_revalidation: {
        required: true,
        type: String
    },
    others_stcw: {
        required: true,
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
        type: Boolean
    },
    marine_club: {
        type: Boolean
    },
    marine_magzine: {
        type: Boolean
    },
    newspaper_advertisement: {
        type: Boolean
    },
    told_by_seagoing_friend: {
        type: Boolean
    },
    direct_mail: {
        type: Boolean
    },
    others_advert: {
        type: Boolean
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
        type: Boolean
    },
    details_surgery: {
        type: String
    },
    defect_in_hearing: {
        type: Boolean
    },
    defect_in_vision: {
        type: Boolean
    },
    health_affected_by_climate: {
        type: Boolean
    },
    health_affected_by_climate_reason: {
        type: String
    },
    last_drawn_wages: {
        type: Number
    },
    //11) Additional Information
    applied_



});

const Form = mongoose.model('form', FormSchema);

module.exports = Form;