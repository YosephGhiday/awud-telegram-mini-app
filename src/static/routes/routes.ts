// import LoginScreen from "../../features/auth/views/pages/LoginPage";
// import ClientPage from "../../features/clients/views/pages/ClientsPage";
// import SavingsPaymentRequests from "../../features/payment_requests/views/pages/SavingsPaymentRequestsPage";
// import SavingsPaymentRequestDetail from "../../features/payment_requests/views/components/SavingsPaymentRequestDetail";
// import EqubPaymentRequests from "../../features/payment_requests/views/pages/EqubPaymentRequestsPage";
// import EqubPaymentRequestDetail from "../../features/payment_requests/views/components/EqubPaymentRequestDetail";
// import PageNotFound from "../../utils/PageNotFound";
// import EqubProductsPage from "../../features/equb_products/views/pages/EqubProductsPage";
// import PaymentsPage from "../../features/payments/views/pages/PaymentsPage";
// import TransactionsPage from "../../features/transactions/views/pages/TransactionsPage";
// import { PermissionType } from "../types/permissions";
// import ClientDetailPage from "../../features/clients/views/pages/ClientDetailPage";
// import FinancialActivitiesPage from "../../features/financial_activities/views/pages/FinancialActivitiesPage";
// import GlAccountMappingsClientsPage from "../../features/gl_account_mappings/views/pages/GlAccountMappingsClientsPage";
// import GlAccountMappingsEqubsPage from "../../features/gl_account_mappings/views/pages/GlAccountMappingsEqubsPage";
// import GlAccountMappingsSavingsPage from "@/features/gl_account_mappings/views/pages/GlAccountMappingSavingPage";
// import EditAccountMapping from "../../features/gl_account_mappings/views/components/EditAccountMapping";
// import EqubsPage from "@/features/equbs/views/pages/EqubsPage";
// import GlAccountsPage from "@/features/gl_accounts/views/pages/GlAccountsPage";
// import JournalEntriesPage from "@/features/journal_entries/views/pages/JournalEntriesPage";
// import JournalEntryDetailPage from "@/features/journal_entries/views/components/JournalEntryDetail";
// import EditGlAccount from "@/features/gl_accounts/views/components/EditGlAccount";
// import EqubDetailPage from "@/features/equbs/views/pages/EqubDetailPage";
// import PaymentTypesPage from "@/features/payment_types/views/pages/PaymentTypesPage";
// import EditPaymentType from "@/features/payment_types/views/components/EditPaymentType";
// import DashboardPage from "@/features/dasboard/views/pages/Dashboard";
// import ClientSavingDetailPage from "@/features/savings/views/pages/ClientSavingDetailPage";
// import EditEqubProductsPage from "@/features/equb_products/views/pages/EditEqubProductsPage";
// import ChargesPage from "@/features/charges/views/pages/ChargesPage";
// import RolesPage from "@/features/roles/views/pages/RolesPage";
// import AddRolesPage from "@/features/roles/views/pages/AddRolesPage";
// import AddressesPage from "@/features/address/views/pages/AddressesPage";
// import BranchesPage from "@/features/branches/views/pages/BranchesPage";
// import WinnerGuarantorPage from "@/features/guarantors/views/pages/WinnerGuarantorsPage";
// import DepositRequestsPage from "@/features/deposit_requests/views/pages/DepositRequestsPage";

// interface PageRoute {
//   path: string;
//   isProtected?: boolean;
//   element: (() => JSX.Element) | React.FC;
//   permissions?: PermissionType[];
// }

// const routes: PageRoute[] = [
//   {
//     path: "/login",
//     isProtected: false,
//     element: LoginScreen,
//   },
//   {
//     path: "/",
//     isProtected: true,
//     element: DashboardPage,
//   },
//   {
//     path: "/equbs",
//     isProtected: true,
//     permissions: ["ALL_PERMISSIONS"],
//     element: EqubsPage,
//   },
//   {
//     path: "equb-details/:id",
//     isProtected: true,
//     element: EqubDetailPage,
//   },
//   {
//     path: "/payment-types",
//     isProtected: true,
//     element: PaymentTypesPage,
//   },
//   {
//     path: "/payment-types/:id",
//     isProtected: true,
//     element: EditPaymentType,
//   },
//   {
//     path: "/equb-products",
//     isProtected: true,
//     element: EqubProductsPage,
//   },
//   {
//     path: "/clients",
//     isProtected: true,
//     element: ClientPage,
//     permissions: ["ADD_CLIENT", "GET_CLIENTS", "ALL_PERMISSIONS"],
//   },
//   {
//     path: "/client-details/:id",
//     isProtected: true,
//     element: ClientDetailPage,
//     permissions: ["ADD_CLIENT", "GET_CLIENTS", "ALL_PERMISSIONS"],
//   },
//   {
//     path: "/saving-detail/:id",
//     isProtected: true,
//     element: ClientSavingDetailPage,
//     permissions: ["ADD_CLIENT", "GET_CLIENTS", "ALL_PERMISSIONS"],
//   },
//   {
//     path: "/payment-requests/savings",
//     isProtected: true,
//     permissions: ["ALL_PERMISSIONS"],
//     element: SavingsPaymentRequests,
//   },
//   {
//     path: "savings-payment-request-details/:id",
//     isProtected: true,
//     element: SavingsPaymentRequestDetail,
//   },
//   {
//     path: "/payment-requests/equbs",
//     isProtected: true,
//     element: EqubPaymentRequests,
//   },
//   {
//     path: "/equb-payment-request-details/:id",
//     isProtected: true,
//     element: EqubPaymentRequestDetail,
//   },
//   {
//     path: "/gl-accounts",
//     element: GlAccountsPage,
//     isProtected: true,
//     permissions: ["GET_GL_ACCOUNTS", "ALL_PERMISSIONS"],
//   },
//   {
//     path: "/edit-gl-account/:id",
//     element: EditGlAccount,
//     isProtected: true,
//     permissions: ["UPDATE_GL_ACCOUNT", "ALL_PERMISSIONS"],
//   },
//   {
//     path: "/journal-entries",
//     element: JournalEntriesPage,
//     isProtected: true,
//     permissions: ["GET_JOURNAL_ENTRIES", "ALL_PERMISSIONS"],
//   },
//   {
//     path: "/journal-entry-detail/:id",
//     element: JournalEntryDetailPage,
//     isProtected: true,
//     permissions: ["GET_JOURNAL_ENTRIES", "ALL_PERMISSIONS"],
//   },
//   {
//     path: "*",
//     element: PageNotFound,
//     isProtected: false,
//   },
//   {
//     path: "/payments",
//     element: PaymentsPage,
//     isProtected: true,
//   },
//   {
//     path: "/transactions",
//     element: TransactionsPage,
//     isProtected: true,
//     permissions: [
//       "GET_TRANSACTIONS",
//       "GET_TRANSACTIONS_BY_DATE",
//       "ALL_PERMISSIONS",
//     ],
//   },
//   {
//     path: "/gl-account-mappings/savings",
//     element: GlAccountMappingsSavingsPage,
//     isProtected: true,
//     permissions: ["GET_SAVING_GL_ACCOUNT_MAPPINGS", "ALL_PERMISSIONS"],
//   },
//   {
//     path: "/gl-account-mappings/equbs",
//     element: GlAccountMappingsEqubsPage,
//     isProtected: true,
//     permissions: ["GET_EQUB_GL_ACCOUNT_MAPPINGS", "ALL_PERMISSIONS"],
//   },
//   {
//     path: "/gl-account-mappings/clients",
//     element: GlAccountMappingsClientsPage,
//     isProtected: true,
//     permissions: ["GET_CLIENT_GL_ACCOUNT_MAPPINGS", "ALL_PERMISSIONS"],
//   },
//   {
//     path: "/edit-account-mapping/:type/:id",
//     element: EditAccountMapping,
//     isProtected: true,
//     permissions: ["ALL_PERMISSIONS"],
//   },

//   {
//     path: "/financial-activities",
//     element: FinancialActivitiesPage,
//     isProtected: true,
//     permissions: [
//       "GET_FINANCIAL_ACTIVITY",
//       "ADD_FINANCIAL_ACTIVITY",
//       "ALL_PERMISSIONS",
//     ],
//   },
//   {
//     path: "/edit-equb-product/:id",
//     element: EditEqubProductsPage,
//     isProtected: true,
//     permissions: ["CREATE_EQUB_PRODUCTS", "ALL_PERMISSIONS"],
//   },
//   {
//     path: "/charges",
//     element: ChargesPage,
//     isProtected: true,
//     permissions: [
//       "ADD_EQUB_PRODUCT_CHARGE",
//       "GET_EQUB_PRODUCT_CHARGE",
//       "ALL_PERMISSIONS",
//     ],
//   },
//   {
//     path: "/roles",
//     element: RolesPage,
//     isProtected: true,
//     permissions: ["ALL_PERMISSIONS"],
//   },
//   {
//     path: "/roles/add-role",
//     element: AddRolesPage,
//     isProtected: true,
//     permissions: ["ALL_PERMISSIONS"],
//   },
//   {
//     path: "/addresses",
//     element: AddressesPage,
//     isProtected: true,
//     permissions: ["ADD_ADDRESS", "GET_ADDRESSES", "ALL_PERMISSIONS"],
//   },
//   {
//     path: "/branches",
//     element: BranchesPage,
//     isProtected: true,
//     permissions: ["GET_OFFICE", "ADD_OFFICE", "ALL_PERMISSIONS"],
//   },
//   {
//     path: "/deposit-requests",
//     element: DepositRequestsPage,
//     isProtected: true,
//     permissions: ["ALL_PERMISSIONS"],
//   },
//   {
//     path: "/guarantors/:id",
//     element: WinnerGuarantorPage,
//     isProtected: true,
//     permissions: [
//       "GET_GUARANTORS_OF_MEMBER",
//       "ADD_GUARANTOR",
//       "ALL_PERMISSIONS",
//     ],
//   },
// ];

// export { routes, type PageRoute };
