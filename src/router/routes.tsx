import { lazy } from 'react';
import ToolsAutomation from '../components/Tools&Automation/ToolsAutomation';
import Dashboard from '../components/UserDashboardComponents/Dashboard';
import ConsentHistory from '../components/UserDashboardComponents/ConsentHistory';
import ConsentDetails from '../components/UserDashboardComponents/ConsentDetails';
import RevokeConsent from '../components/UserDashboardComponents/RevokeConsent';
import ConsentNotice from '../components/UserDashboardComponents/ConsentNotice';
import DataProtectionRights from '../components/UserDashboardComponents/DataProtectionRights';
import RequestsFormGrievanceRedressalOptions from '../components/UserDashboardComponents/RequestsFormGrievanceRedressalOptions';
import ComplaintSubmitted from '../components/UserDashboardComponents/ComplaintSubmitted';
import RightsGrievanceHistory from '../components/UserDashboardComponents/RightsGrievanceHistory';
import ComplaintDetails from '../components/UserDashboardComponents/ComplaintDetails';
import NotificationsPage from '../components/UserDashboardComponents/NotificationsPage';
import NomineeForm from '../components/UserDashboardComponents/NomineeForm';
import NominationSummary from '../components/UserDashboardComponents/NominationSummary';
import NomineeRequestStatus from '../components/UserDashboardComponents/NomineeRequestStatus';
import LanguageSelection from '../components/UserDashboardComponents/LanguageSelection';
import LoginWithOtp from '../components/UserDashboardComponents/LoginWithOtp';
import VerifyOtp from '../components/UserDashboardComponents/VerifyOtp';


const Index = lazy(() => import('../pages/Index'));
const Analytics = lazy(() => import('../pages/Analytics'));
const Finance = lazy(() => import('../pages/Finance'));
const Crypto = lazy(() => import('../pages/Crypto'));
const Todolist = lazy(() => import('../pages/Apps/Todolist'));
const Mailbox = lazy(() => import('../pages/Apps/Mailbox'));
const Notes = lazy(() => import('../pages/Apps/Notes'));
const Contacts = lazy(() => import('../pages/Apps/Contacts'));
const Chat = lazy(() => import('../pages/Apps/Chat'));
const Scrumboard = lazy(() => import('../pages/Apps/Scrumboard'));
const Calendar = lazy(() => import('../pages/Apps/Calendar'));
const List = lazy(() => import('../pages/Apps/Invoice/List'));
const Preview = lazy(() => import('../pages/Apps/Invoice/Preview'));
const Add = lazy(() => import('../pages/Apps/Invoice/Add'));
const Edit = lazy(() => import('../pages/Apps/Invoice/Edit'));
const Tabs = lazy(() => import('../pages/Components/Tabs'));
const Accordians = lazy(() => import('../pages/Components/Accordians'));
const Modals = lazy(() => import('../pages/Components/Modals'));
const Cards = lazy(() => import('../pages/Components/Cards'));
const Carousel = lazy(() => import('../pages/Components/Carousel'));
const Countdown = lazy(() => import('../pages/Components/Countdown'));
const Counter = lazy(() => import('../pages/Components/Counter'));
const SweetAlert = lazy(() => import('../pages/Components/SweetAlert'));
const Timeline = lazy(() => import('../pages/Components/Timeline'));
const Notification = lazy(() => import('../pages/Components/Notification'));
const MediaObject = lazy(() => import('../pages/Components/MediaObject'));
const ListGroup = lazy(() => import('../pages/Components/ListGroup'));
const PricingTable = lazy(() => import('../pages/Components/PricingTable'));
const LightBox = lazy(() => import('../pages/Components/LightBox'));
const Alerts = lazy(() => import('../pages/Elements/Alerts'));
const Avatar = lazy(() => import('../pages/Elements/Avatar'));
const Badges = lazy(() => import('../pages/Elements/Badges'));
const Breadcrumbs = lazy(() => import('../pages/Elements/Breadcrumbs'));
const Buttons = lazy(() => import('../pages/Elements/Buttons'));
const Buttongroups = lazy(() => import('../pages/Elements/Buttongroups'));
const Colorlibrary = lazy(() => import('../pages/Elements/Colorlibrary'));
const DropdownPage = lazy(() => import('../pages/Elements/DropdownPage'));
const Infobox = lazy(() => import('../pages/Elements/Infobox'));
const Jumbotron = lazy(() => import('../pages/Elements/Jumbotron'));
const Loader = lazy(() => import('../pages/Elements/Loader'));
const Pagination = lazy(() => import('../pages/Elements/Pagination'));
const Popovers = lazy(() => import('../pages/Elements/Popovers'));
const Progressbar = lazy(() => import('../pages/Elements/Progressbar'));
const Search = lazy(() => import('../pages/Elements/Search'));
const Tooltip = lazy(() => import('../pages/Elements/Tooltip'));
const Treeview = lazy(() => import('../pages/Elements/Treeview'));
const Typography = lazy(() => import('../pages/Elements/Typography'));
const Widgets = lazy(() => import('../pages/Widgets'));
const FontIcons = lazy(() => import('../pages/FontIcons'));
const DragAndDrop = lazy(() => import('../pages/DragAndDrop'));
const Tables = lazy(() => import('../pages/Tables'));
const Basic = lazy(() => import('../pages/DataTables/Basic'));
const Advanced = lazy(() => import('../pages/DataTables/Advanced'));
const Skin = lazy(() => import('../pages/DataTables/Skin'));
const OrderSorting = lazy(() => import('../pages/DataTables/OrderSorting'));
const MultiColumn = lazy(() => import('../pages/DataTables/MultiColumn'));
const MultipleTables = lazy(() => import('../pages/DataTables/MultipleTables'));
const AltPagination = lazy(() => import('../pages/DataTables/AltPagination'));
const Checkbox = lazy(() => import('../pages/DataTables/Checkbox'));
const RangeSearch = lazy(() => import('../pages/DataTables/RangeSearch'));
const Export = lazy(() => import('../pages/DataTables/Export'));
const ColumnChooser = lazy(() => import('../pages/DataTables/ColumnChooser'));
const Profile = lazy(() => import('../pages/Users/Profile'));
const AccountSetting = lazy(() => import('../pages/Users/AccountSetting'));
const KnowledgeBase = lazy(() => import('../pages/Pages/KnowledgeBase'));
const ContactUsBoxed = lazy(() => import('../pages/Pages/ContactUsBoxed'));
const ContactUsCover = lazy(() => import('../pages/Pages/ContactUsCover'));
const Faq = lazy(() => import('../pages/Pages/Faq'));
const ComingSoonBoxed = lazy(() => import('../pages/Pages/ComingSoonBoxed'));
const ComingSoonCover = lazy(() => import('../pages/Pages/ComingSoonCover'));
const ERROR404 = lazy(() => import('../pages/Pages/Error404'));
const ERROR500 = lazy(() => import('../pages/Pages/Error500'));
const ERROR503 = lazy(() => import('../pages/Pages/Error503'));
const Maintenence = lazy(() => import('../pages/Pages/Maintenence'));
const LoginBoxed = lazy(() => import('../pages/Authentication/LoginBoxed'));
const RegisterBoxed = lazy(() => import('../pages/Authentication/RegisterBoxed'));
const UnlockBoxed = lazy(() => import('../pages/Authentication/UnlockBox'));
const RecoverIdBoxed = lazy(() => import('../pages/Authentication/RecoverIdBox'));
const LoginCover = lazy(() => import('../pages/Authentication/LoginCover'));
const RegisterCover = lazy(() => import('../pages/Authentication/RegisterCover'));
const RecoverIdCover = lazy(() => import('../pages/Authentication/RecoverIdCover'));
const UnlockCover = lazy(() => import('../pages/Authentication/UnlockCover'));
const About = lazy(() => import('../pages/About'));
const Error = lazy(() => import('../components/Error'));
const Charts = lazy(() => import('../pages/Charts'));
const FormBasic = lazy(() => import('../pages/Forms/Basic'));
const FormInputGroup = lazy(() => import('../pages/Forms/InputGroup'));
const FormLayouts = lazy(() => import('../pages/Forms/Layouts'));
const Validation = lazy(() => import('../pages/Forms/Validation'));
const InputMask = lazy(() => import('../pages/Forms/InputMask'));
const Select2 = lazy(() => import('../pages/Forms/Select2'));
const Touchspin = lazy(() => import('../pages/Forms/TouchSpin'));
const CheckBoxRadio = lazy(() => import('../pages/Forms/CheckboxRadio'));
const Switches = lazy(() => import('../pages/Forms/Switches'));
const Wizards = lazy(() => import('../pages/Forms/Wizards'));
const FileUploadPreview = lazy(() => import('../pages/Forms/FileUploadPreview'));
const QuillEditor = lazy(() => import('../pages/Forms/QuillEditor'));
const MarkDownEditor = lazy(() => import('../pages/Forms/MarkDownEditor'));
const DateRangePicker = lazy(() => import('../pages/Forms/DateRangePicker'));
const Clipboard = lazy(() => import('../pages/Forms/Clipboard'));
const PrivacyGoverNance = lazy(() => import('../pages/SideBarComponents/PrivacyGovernance/PrivacyGovernance'));
const ConsentManager = lazy(() => import('../pages/SideBarComponents/PrivacyGovernance/DetailedComponents/ConsentManager'));

const ConsentManagerDashboard = lazy(() => import('../pages/SideBarComponents/PrivacyGovernance/DetailedComponents/ConsentManagerDashboard'));
const AllConsentRequest = lazy(() => import('../pages/SideBarComponents/PrivacyGovernance/DetailedComponents/AllConsentRequest'));



const AwarenessManagement = lazy(() => import('../pages/SideBarComponents/PrivacyGovernance/DetailedComponents/AwarenessDetail'));
const RightsManagement = lazy(() => import('../pages/SideBarComponents/Roles/Role&Permission'));
const RolesListing = lazy(() => import('../pages/SideBarComponents/Roles/RolesListing'));
const ImpactAssessment = lazy(() => import('../pages/SideBarComponents/PrivacyGovernance/DetailedComponents/ImpactDetail'));
const ThirdPartyAssessment = lazy(() => import('../pages/SideBarComponents/PrivacyGovernance/DetailedComponents/ThirdPartyDetail'));
const ConsentTemplateEditor = lazy(() => import('../pages/SideBarComponents/PrivacyGovernance/DetailedComponents/ConsentTemplateEditor'));
const Login = lazy(() => import('../pages/Authentication/Login'));
const SettingsPage = lazy(() => import('../components/Settings/SettingsPage'));
const Allsettings = lazy(() => import('../components/Settings/Allsettings'));
const CreateManageProcessingActivity = lazy(() => import('../components/ProcessingActivity/CreateManageProcessingActivity'));
const ManageInternalStakeholders = lazy(() => import('../components/Stakeholders/ManageInternalStakeholders'));
const CreateStackHolder = lazy(() => import('../components/Stakeholders/CreateStackHolder'));
const ManageLanguages = lazy(() => import('../components/Stakeholders/ManageLanguages'));
const ManageProcessingActivity = lazy(() => import('../components/ProcessingActivity/ManageProcessingActivity'));



const PrivacyNoticeDashboard = lazy(() => import('../../src/pages/SideBarComponents/ConsentMannager/PrivacyNotice/PrivacyNoticeDashboard'));
const PrivacyNoticeTableDash = lazy(() => import('../../src/pages/SideBarComponents/ConsentMannager/PrivacyNotice/PrivacyNoticeTableDash'));
const BreachNoticeDashboard = lazy(() => import('../../src/pages/SideBarComponents/ConsentMannager/BreachNotice/BreachNoticeDashboard'));
const BreachNoticeTableDash = lazy(() => import('../../src/pages/SideBarComponents/ConsentMannager/BreachNotice/BreachNoticeTableDash'));
const AllPrivacyNotices = lazy(() => import('../pages/SideBarComponents/ConsentMannager/PrivacyNotice/AllPrivacyNotices'));


const AllBreachNotices = lazy(() => import('../../src/pages/SideBarComponents/ConsentMannager/BreachNotice/AllBreachNotices'));
const CookieConsentDashboard = lazy(() => import('../../src/pages/SideBarComponents/ConsentMannager/CookieConsent/CookieConsentDashboard'));
const CookieConsentView = lazy(() => import('../../src/pages/SideBarComponents/ConsentMannager/CookieConsent/CookieConsentView'));

const CookieManagement = lazy(() => import('../../src/pages/SideBarComponents/ConsentMannager/CookieConsent/CookieManagement'));

const CookieManagementItemDetails = lazy(() => import('../../src/pages/SideBarComponents/ConsentMannager/CookieConsent/CookieManagementItemDetails'));

const DataPrincipalActivity = lazy(() => import('../../src/pages/SideBarComponents/ConsentMannager/Reporting -DataPrincipalActivity/DataPrincipalActivity'));
const Tenants = lazy(() => import('../../src/pages/SideBarComponents/Tenants/Tenants'));


const routes = [        
    // dashboard
    // {
    //     path: '/',
    //     element: <Index />,
    // }, 
    {
        path: '/',
        element: <Dashboard />,
    },
     {
        path: '/processingActivity',
        element: <ManageProcessingActivity />,
    },
      {
        path: '/manage-consents',
        element: <ConsentHistory />,
    },
        {
        path: '/consent-details/:id',
        element: <ConsentDetails />,
        
    },
        {
        path: '/login-otp',
        element: <LoginWithOtp  />,
    },
    {
        path: '/verify-otp',
        element: <VerifyOtp  />,
    },
      {
        path: '/language-selection',
        element: <LanguageSelection />,
    },
        {
        path: '/revoke-consent/:id',
        element: <RevokeConsent />,
        
    },
    {
         path:"/consent-notice/:id",
         element:<ConsentNotice />
    },
{

    path: "/data-protection-rights",
    element: <DataProtectionRights />
},
{

    path: "/nominee/summary",
    element: <NominationSummary />
},
{
    path: "/nominee/status",
    element: <NomineeRequestStatus />
},
{

    path: "/NomineeForm",
    element: <NomineeForm />
},
{

    path: "/notifications",
    element: <NotificationsPage  />
},
{
    path: "/complaint-details/:id",
    element:<ComplaintDetails />
},
 {
    path: "/requests-form-grievance-redressal-options",
    element: <RequestsFormGrievanceRedressalOptions />
},
{path:"/rights-grievance-history",
     element:<RightsGrievanceHistory />},
{path:"/complaint-submitted",
     element:<ComplaintSubmitted />},

       {
        path: '/tenants',
        element: <Tenants />,
    },
      {
        path: '/ToolsAutomation',
        element: <ToolsAutomation />,
    },
    
   {
        path: '/create-ManageProcessingActivity',
        element: <CreateManageProcessingActivity />,
    },
   {
        path: '/internal-stakeholders',
        element: <ManageInternalStakeholders />,
    },
     {
        path: '/create-stakeholders',
        element: <CreateStackHolder />,
    },
  {
        path: '/manage-languages',
        element: <ManageLanguages />,
    },

    {
        path: '/privacy-governance',
        element: <PrivacyGoverNance />,
    },
    {
        path: '/consent-manager-template',
        element: <ConsentManager />,
    },
       {
        path: '/consent-manager-dashboard',
        element: <ConsentManagerDashboard />,
    },
         {
        path: '/all-consent-requests',
        element: <AllConsentRequest />,
    },
   {
        path: '/cookie-consent-view/:id',
        element: <CookieConsentView />,
    },


      {
        path: '/cookie-consent-dashboard',
        element: <CookieConsentDashboard />,
    },
      {
        path: '/cookie-consent-dashboard',
        element: <CookieConsentDashboard />,
    },
    {
        path: '/cookie-management',
        element: <CookieManagement />,
    },
     {
        path: '/cookie-management-item-details/:id',
        element: <CookieManagementItemDetails />,
    },
     {
        path: '/privacy-notice',
        element: <PrivacyNoticeDashboard />,
    },
        {
        path: '/privacy-notice-table',
        element: <PrivacyNoticeTableDash />,
    },
      {
        path: '/breach-notice',
        element: <BreachNoticeDashboard />,
    },
      {
        path: '/breach-notice-list',
        element: <AllBreachNotices />,
    },
       {
        path: '/privacy-notice-list',
        element: <AllPrivacyNotices />,
    },
        {
        path: '/breach-notice-table',
        element: <BreachNoticeTableDash />,
    },
    {
        path: '/consent-manager/template/:id',
        element: <ConsentTemplateEditor />,
    },
    {
        path: '/privacy-governance/consent',
        element: <ConsentManager />,
    },
    {
        path: '/privacy-governance/awareness',
        element: <AwarenessManagement />,
    },
    {
        path: '/roles-and-permissions',
        element: <RightsManagement />,
    },  {
        path: '/roles-listing',
        element: <RolesListing />,
    },
      {
        path: '/all-Settings',
        element: <Allsettings />,
    },
    {
        path: '/Settings',
        element: <SettingsPage />,
    },
    {
        path: '/privacy-governance/impact',
        element: <ImpactAssessment />,
    },
    {
        path: '/privacy-governance/third-party',
        element: <ThirdPartyAssessment />,
    },
       {
        path: '/data-principal-activity',
        element: <DataPrincipalActivity />,
    },


    // {
    //     path: '/index',
    //     element: <Index />,
    // },
    // analytics page
    {
        path: '/analytics',
        element: <Analytics />,
    },
    // finance page
    {
        path: '/finance',
        element: <Finance />,
    },
    // crypto page
    {
        path: '/crypto',
        element: <Crypto />,
    },
    {
        path: '/apps/todolist',
        element: <Todolist />,
    },
    {
        path: '/apps/notes',
        element: <Notes />,
    },
    {
        path: '/apps/contacts',
        element: <Contacts />,
    },
    {
        path: '/apps/mailbox',
        element: <Mailbox />,
    },
    {
        path: '/apps/invoice/list',
        element: <List />,
    },
    // Apps page
    {
        path: '/apps/chat',
        element: <Chat />,
    },
    {
        path: '/apps/scrumboard',
        element: <Scrumboard />,
    },
    {
        path: '/apps/calendar',
        element: <Calendar />,
    },
    // preview page
    {
        path: '/apps/invoice/preview',
        element: <Preview />,
    },
    {
        path: '/apps/invoice/add',
        element: <Add />,
    },
    {
        path: '/apps/invoice/edit',
        element: <Edit />,
    },
    // components page
    {
        path: '/components/tabs',
        element: <Tabs />,
    },
    {
        path: '/components/accordions',
        element: <Accordians />,
    },
    {
        path: '/components/modals',
        element: <Modals />,
    },
    {
        path: '/components/cards',
        element: <Cards />,
    },
    {
        path: '/components/carousel',
        element: <Carousel />,
    },
    {
        path: '/components/countdown',
        element: <Countdown />,
    },
    {
        path: '/components/counter',
        element: <Counter />,
    },
    {
        path: '/components/sweetalert',
        element: <SweetAlert />,
    },
    {
        path: '/components/timeline',
        element: <Timeline />,
    },
    {
        path: '/components/notifications',
        element: <Notification />,
    },
    {
        path: '/components/media-object',
        element: <MediaObject />,
    },
    {
        path: '/components/list-group',
        element: <ListGroup />,
    },
    {
        path: '/components/pricing-table',
        element: <PricingTable />,
    },
    {
        path: '/components/lightbox',
        element: <LightBox />,
    },
    // elements page
    {
        path: '/elements/alerts',
        element: <Alerts />,
    },
    {
        path: '/elements/avatar',
        element: <Avatar />,
    },
    {
        path: '/elements/badges',
        element: <Badges />,
    },
    {
        path: '/elements/breadcrumbs',
        element: <Breadcrumbs />,
    },
    {
        path: '/elements/buttons',
        element: <Buttons />,
    },
    {
        path: '/elements/buttons-group',
        element: <Buttongroups />,
    },
    {
        path: '/elements/color-library',
        element: <Colorlibrary />,
    },
    {
        path: '/elements/dropdown',
        element: <DropdownPage />,
    },
    {
        path: '/elements/infobox',
        element: <Infobox />,
    },
    {
        path: '/elements/jumbotron',
        element: <Jumbotron />,
    },
    {
        path: '/elements/loader',
        element: <Loader />,
    },
    {
        path: '/elements/pagination',
        element: <Pagination />,
    },
    {
        path: '/elements/popovers',
        element: <Popovers />,
    },
    {
        path: '/elements/progress-bar',
        element: <Progressbar />,
    },
    {
        path: '/elements/search',
        element: <Search />,
    },
    {
        path: '/elements/tooltips',
        element: <Tooltip />,
    },
    {
        path: '/elements/treeview',
        element: <Treeview />,
    },
    {
        path: '/elements/typography',
        element: <Typography />,
    },

    // charts page
    {
        path: '/charts',
        element: <Charts />,
    },
    // widgets page
    {
        path: '/widgets',
        element: <Widgets />,
    },
    //  font-icons page
    {
        path: '/font-icons',
        element: <FontIcons />,
    },
    //  Drag And Drop page
    {
        path: '/dragndrop',
        element: <DragAndDrop />,
    },
    //  Tables page
    {
        path: '/tables',
        element: <Tables />,
    },
    // Data Tables
    {
        path: '/datatables/basic',
        element: <Basic />,
    },
    {
        path: '/datatables/advanced',
        element: <Advanced />,
    },
    {
        path: '/datatables/skin',
        element: <Skin />,
    },
    {
        path: '/datatables/order-sorting',
        element: <OrderSorting />,
    },
    {
        path: '/datatables/multi-column',
        element: <MultiColumn />,
    },
    {
        path: '/datatables/multiple-tables',
        element: <MultipleTables />,
    },
    {
        path: '/datatables/alt-pagination',
        element: <AltPagination />,
    },
    {
        path: '/datatables/checkbox',
        element: <Checkbox />,
    },
    {
        path: '/datatables/range-search',
        element: <RangeSearch />,
    },
    {
        path: '/datatables/export',
        element: <Export />,
    },
    {
        path: '/datatables/column-chooser',
        element: <ColumnChooser />,
    },
    // Users page
    {
        path: '/users/profile',
        element: <Profile />,
    },
    {
        path: '/users/user-account-settings',
        element: <AccountSetting />,
    },
    // pages
    {
        path: '/pages/knowledge-base',
        element: <KnowledgeBase />,
    },
    {
        path: '/pages/contact-us-boxed',
        element: <ContactUsBoxed />,
        layout: 'blank',
    },
    {
        path: '/pages/contact-us-cover',
        element: <ContactUsCover />,
        layout: 'blank',
    },
    {
        path: '/pages/faq',
        element: <Faq />,
    },
    {
        path: '/pages/coming-soon-boxed',
        element: <ComingSoonBoxed />,
        layout: 'blank',
    },
    {
        path: '/pages/coming-soon-cover',
        element: <ComingSoonCover />,
        layout: 'blank',
    },
{
  path: "*",
  element: <ComingSoonCover />,
  layout: 'default', // ✅ IMPORTANT: use 'default' instead of 'blank'
},
    //   <Route path="*" element={<ComingSoon />} />
    {
        path: '/pages/error404',
        element: <ERROR404 />,
        layout: 'blank',
    },
    {
        path: '/pages/error500',
        element: <ERROR500 />,
        layout: 'blank',
    },
    {
        path: '/pages/error503',
        element: <ERROR503 />,
        layout: 'blank',
    },
    {
        path: '/pages/maintenence',
        element: <Maintenence />,
        layout: 'blank',
    },
    //Authentication
    {
        path: '/auth/boxed-signin',
        element: <LoginBoxed />,
        layout: 'blank',
    },
    {
        path: '/login',
        element: <Login />,
        layout: 'blank',
    },
    {
        path: '/auth/boxed-signup',
        element: <RegisterBoxed />,
        layout: 'blank',
    },
    {
        path: '/auth/boxed-lockscreen',
        element: <UnlockBoxed />,
        layout: 'blank',
    },
    {
        path: '/auth/boxed-password-reset',
        element: <RecoverIdBoxed />,
        layout: 'blank',
    },
    {
        path: '/auth/cover-login',
        element: <LoginCover />,
        layout: 'blank',
    },
    {
        path: '/auth/cover-register',
        element: <RegisterCover />,
        layout: 'blank',
    },
    {
        path: '/auth/cover-lockscreen',
        element: <UnlockCover />,
        layout: 'blank',
    },
    {
        path: '/auth/cover-password-reset',
        element: <RecoverIdCover />,
        layout: 'blank',
    },
    //forms page
    {
        path: '/forms/basic',
        element: <FormBasic />,
    },
    {
        path: '/forms/input-group',
        element: <FormInputGroup />,
    },
    {
        path: '/forms/layouts',
        element: <FormLayouts />,
    },
    {
        path: '/forms/validation',
        element: <Validation />,
    },
    {
        path: '/forms/input-mask',
        element: <InputMask />,
    },
    {
        path: '/forms/select2',
        element: <Select2 />,
    },
    {
        path: '/forms/touchspin',
        element: <Touchspin />,
    },
    {
        path: '/forms/checkbox-radio',
        element: <CheckBoxRadio />,
    },
    {
        path: '/forms/switches',
        element: <Switches />,
    },
    {
        path: '/forms/wizards',
        element: <Wizards />,
    },
    {
        path: '/forms/file-upload',
        element: <FileUploadPreview />,
    },
    {
        path: '/forms/quill-editor',
        element: <QuillEditor />,
    },
    {
        path: '/forms/markdown-editor',
        element: <MarkDownEditor />,
    },
    {
        path: '/forms/date-picker',
        element: <DateRangePicker />,
    },
    {
        path: '/forms/clipboard',
        element: <Clipboard />,
    },
    {
        path: '/about',
        element: <About />,
        layout: 'blank',
    },
    {
        path: '*',
        element: <Error />,
        layout: 'blank',
    },
];

export { routes };
