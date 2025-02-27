export type PermissionType =
  | "ALL_PERMISSIONS"
  | "CHANGE_PASSWORD"
  | "ADD_CLIENT"
  | "UPDATE_CLIENT"
  | "GET_CLIENT"
  | "DELETE_CLIENT"
  | "ACTIVATE_CLIENT"
  | "DEACTIVATE_CLIENT"
  | "SEARCH_CLIENTS"
  | "GET_CLIENTS"
  | "RESET_CLIENT_DEVICE"
  | "ADD_EMPLOYEE"
  | "UPDATE_EMPLOYEE"
  | "ACTIVATE_EMPLOYEE"
  | "DEACTIVATE_EMPLOYEE"
  | "GET_TRANSACTIONS"
  | "ADD_OFFICE"
  | "UPDATE_OFFICE"
  | "DELETE_OFFICE"
  | "GET_OFFICES"
  | "GET_OFFICE"
  | "ADD_ADDRESS"
  | "UPDATE_ADDRESS"
  | "DELETE_ADDRESS"
  | "GET_ADDRESSES"
  | "ADD_ADDRESS_CONFIG"
  | "UPDATE_ADDRESS_CONFIG"
  | "DELETE_ADDRESS_CONFIG"
  | "GET_ADDRESS_CONFIG"
  | "ACCEPT_EQUB_PAYMENT"
  | "CREATE_EQUB"
  | "UPDATE_EQUB"
  | "DELETE_EQUB"
  | "GET_ALL_EQUBS"
  | "GET_EQUB"
  | "GET_FEATURED_EQUBS"
  | "ADD_MEMBER_TO_EQUBS"
  | "ADD_MEMBER_TO_EQUB"
  | "JOIN_EQUB"
  | "REQUEST_TO_JOIN_EQUB"
  | "GET_EQUB_JOIN_REQUESTS"
  | "ACCEPT_EQUB_JOIN_REQUEST"
  | "REJECT_EQUB_JOIN_REQUEST"
  | "CREATE_EQUB_PRODUCTS"
  | "CREATE_PAYMENT_TYPE"
  | "VIEW_PAYMENT_TYPES"
  | "DELETE_PAYMENT_TYPE"
  | "UPDATE_PAYMENT_TYPE"
  | "CREATE_PAYMENT_REQUEST"
  | "ACCEPT_PAYMENT_REQUEST"
  | "GET_PAYMENT_REQUESTS"
  | "SELF_PAY"
  | "GET_EQUB_PAYMENTS_SELF"
  | "ALL_EQUB_PAYMENTS"
  | "GET_NEXT_EQUB_PAYMENTS"
  | "GET_TRANSACTIONS_SELF"
  | "GET_EQUB_LOTTERIES"
  | "GET_CLIENT_TRANSACTIONS"
  | "GET_CLIENT_TRANSACTIONS_SELF"
  | "INITIATE_DEPOSIT_ELECTRONIC_CASH"
  | "ADD_USER_DEVICE"
  | "GET_EQUB_PAYMENT_INFO"
  | "GET_EQUB_MESSAGES"
  | "SEND_EQUB_MESSAGE"
  | "PAY_FROM_DEPOSIT"
  | "RESEND_ACTIVATION_CODE"
  | "SEND_REFERRAL"
  | "JOIN_REFERRAL"
  | "ADD_EQUB_PRODUCT_CHARGE"
  | "GET_EQUB_PRODUCT_CHARGE"
  | "GET_BANNERS"
  | "ADD_BANNER"
  | "DELETE_BANNER"
  | "CREATE_SAVINGS_ACCOUNT"
  | "CREATE_SAVINGS_ACCOUNT_SELF"
  | "GET_SINGLE_SAVINGS_ACCOUNT"
  | "WITHDRAW_FROM_SAVINGS_ACCOUNT"
  | "GET_SAVINGS_ACCOUNTS_OF_CLIENT"
  | "GET_SAVINGS_ACCOUNTS_OF_CLIENT_SELF"
  | "GET_SAVINGS_TRANSACTIONS_OF_CLIENT"
  | "GET_SAVINGS_PRODUCTS"
  | "GET_SINGLE_SAVINGS_PRODUCT"
  | "CREATE_SAVINGS_PRODUCT"
  | "UPDATE_SAVINGS_PRODUCT"
  | "CREATE_SAVINGS_PRODUCT_SELF"
  | "GET_SAVINGS_TRANSACTIONS_OF_ACCOUNT"
  | "GET_SAVINGS_ACCOUNT_PAYMENT_INFO"
  | "ADD_GUARANTOR"
  | "GET_GUARANTORS_OF_MEMBER"
  | "REQUEST_WITHDRAW"
  | "REJECT_REQUEST_WITHDRAW"
  | "APPROVE_WITHDRAW_REQUEST"
  | "GET_WITHDRAW_REQUESTS"
  | "REJECT_WITHDRAW_REQUESTS"
  | "GET_WITHDRAW_REQUESTS_OF_CLIENT"
  | "GET_APPROVED_REQUESTS"
  | "GET_TRANSACTIONS_BY_DATE"
  | "UPLOAD_IMAGE_ID"
  | "APPROVE_CLIENT"
  | "REJECT_CLIENT"
  | "DEPOSIT_TO_BALANCE"
  | "WITHDRAW_FROM_BALANCE"
  | "PAY_EQUB_CASH"
  | "GET_EQUB_PAYMENT_REQUESTS"
  | "GET_SAVING_PAYMENT_REQUESTS"
  | "GET_GL_ACCOUNTS"
  | "ADD_GL_ACCOUNT"
  | "UPDATE_GL_ACCOUNT"
  | "GET_FINANCIAL_ACTIVITY"
  | "ADD_FINANCIAL_ACTIVITY"
  | "UPDATE_FINANCIAL_ACTIVITY"
  | "GET_PRODUCT_MAPPING"
  | "ADD_PRODUCT_MAPPING"
  | "UPDATE_PRODUCT_MAPPING"
  | "GET_JOURNAL_ENTRIES"
  | "GET_EQUB_GL_ACCOUNT_MAPPINGS"
  | "GET_SAVING_GL_ACCOUNT_MAPPINGS"
  | "GET_CLIENT_GL_ACCOUNT_MAPPINGS";