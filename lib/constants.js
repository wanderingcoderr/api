const SHEET = process.env.SHEET_ID;
const SHEET_RESOURCES = process.env.RESOURCES_SHEET_ID;

// Sheet IDs can be obtained here: https://spreadsheets.google.com/feeds/worksheets/<HIDDEN>/private/full
const SHEET_RAW_DATA = "od6";
const SHEET_STATEWISE_TAB = "ovd0hzm";
const SHEET_CASES_TIME_SERIES_TAB = "o6emnqt";
const SHEET_KEY_VALUES_TAB = "owlnkho";
const SHEET_TESTED_NUMBERS_ICMR_DATA = "ozg9iqq";
const SHEET_STATEWISE_TESTED_NUMBERS_DATA = "o81fdow"
const SHEET_FAQ = "oknbjsw";
const SHEET_NAME_FACTOIDS = "ooka3he";
const SHEET_TRAVEL_HISTORY = "opc5w4v";
const SHEET_DATE_WISE_DELTA = "on2tlaw";
const SHEET_DEATHS_AND_RECOVERIES = "o3biev0";
const SHEET_RESOURCES_SHEET = "otcvog0";


const DIR = "./";

const FILE_RAW_DATA = "/raw_data.json";
const FILE_DATA = "/data.json";
const FILE_FAQ = "/faq.json";
const FILE_WEBSITE_DATA = "/website_data.json";
const FILE_TRAVEL_HISTORY = "/travel_history.json";
const FILE_DATE_WISE_DELTA = "/states_daily.json";
const FILE_STATEWISE_TESTED_DATA = "/state_test_data.json";
const FILE_RESOURCES_ESSENTIALS = "/resources/resources.json";
const FILE_DEATHS_RECOVERIES = "/deaths_recoveries.json";

module.exports = {
    SHEET,
    SHEET_RESOURCES,
    SHEET_RAW_DATA,
    SHEET_STATEWISE_TAB,
    SHEET_CASES_TIME_SERIES_TAB,
    SHEET_KEY_VALUES_TAB,
    SHEET_TESTED_NUMBERS_ICMR_DATA,
    SHEET_FAQ,
    SHEET_NAME_FACTOIDS,
    SHEET_TRAVEL_HISTORY,
    SHEET_DATE_WISE_DELTA,
    SHEET_STATEWISE_TESTED_NUMBERS_DATA,
    SHEET_DEATHS_AND_RECOVERIES,
    DIR,
    FILE_RAW_DATA,
    SHEET_RESOURCES_SHEET,
    FILE_DATA,
    FILE_FAQ,
    FILE_WEBSITE_DATA,
    FILE_TRAVEL_HISTORY,
    FILE_DATE_WISE_DELTA,
    FILE_STATEWISE_TESTED_DATA,
    FILE_RESOURCES_ESSENTIALS,
    FILE_DEATHS_RECOVERIES,
};
