export enum RecurringSavingsCategory {
  RENT_UTILITIES = "Rent & Utilities",
  BIRTHDAY = "Birthday",
  MARIAM_GINBOT = "Mariam Ginbot",
  CHILDRENS_EDUCATION_FUND = "Children’s Education Fund",
  GYM_SUBSCRIPTION = "Gym Subscription",
}

export enum ShortTermSavingsCategory {
  EMERGENCY_FUND = "Emergency Fund",
  WEDDING = "Wedding",
  VACATION = "Vacation",
  ELECTRONICS_GADGETS = "Electronics & Gadgets",
  HOME_RENOVATION = "Home Renovation",
  HOUSEHOLD_ESSENTIALS = "Household Essentials",
  BUSINESS_EXPANSION_SAVINGS = "Business Expansion Savings",
  BUSINESS_STARTUP_SAVINGS = "Business Start-Up Savings",
}

export enum LongTermSavingsCategory {
  CHILDCARE_SAVINGS = "Childcare Savings",
  HOUSE_PURCHASE_SAVINGS = "House Purchase Savings",
  HIGHER_EDUCATION_SAVINGS = "Higher Education Savings",
  INVESTMENT_PORTFOLIO_SAVINGS = "Investment Portfolio Savings",
  RETIREMENT_SAVINGS = "Retirement Savings",
}

export interface SavingsPlan {
  category: string;
  minimumTargetAmount: number | null;
  minimumLength: string;
  frequency: string;
  description: string;
}

export const recurringSavingsPlans: SavingsPlan[] = [
  {
    category: RecurringSavingsCategory.RENT_UTILITIES,
    minimumTargetAmount: 4000,
    minimumLength: "1 month",
    frequency: "Daily, Weekly, Monthly",
    description:
      "To help users set aside money for monthly financial obligations",
  },
  {
    category: RecurringSavingsCategory.BIRTHDAY,
    minimumTargetAmount: 20000,
    minimumLength: "6 months",
    frequency: "Monthly",
    description:
      "A savings plan for celebrating birthdays with a targeted amount saved annually",
  },
  {
    category: RecurringSavingsCategory.MARIAM_GINBOT,
    minimumTargetAmount: null,
    minimumLength: "6 months",
    frequency: "Monthly",
    description: "",
  },
  {
    category: RecurringSavingsCategory.CHILDRENS_EDUCATION_FUND,
    minimumTargetAmount: 2600,
    minimumLength: "1 month",
    frequency: "Monthly",
    description: "",
  },
  {
    category: RecurringSavingsCategory.GYM_SUBSCRIPTION,
    minimumTargetAmount: 2000,
    minimumLength: "1 month",
    frequency: "Monthly",
    description: "",
  },
];

export const shortTermSavingsPlans: SavingsPlan[] = [
  {
    category: ShortTermSavingsCategory.EMERGENCY_FUND,
    minimumTargetAmount: null,
    minimumLength: "6 months",
    frequency: "Monthly",
    description:
      "To help users cover unexpected expenses such as medical emergencies, job loss, or other critical needs.",
  },
  {
    category: ShortTermSavingsCategory.WEDDING,
    minimumTargetAmount: 100000,
    minimumLength: "6 months",
    frequency: "Monthly",
    description: "A savings plan for wedding expenses",
  },
  {
    category: ShortTermSavingsCategory.VACATION,
    minimumTargetAmount: 30000,
    minimumLength: "6 months",
    frequency: "Monthly",
    description: "Helps users save for vacations and trips they plan to take",
  },
  {
    category: ShortTermSavingsCategory.ELECTRONICS_GADGETS,
    minimumTargetAmount: 50000,
    minimumLength: "6 months",
    frequency: "Monthly",
    description:
      "To help users save for planned purchases of electronics, gadgets, or household equipment",
  },
  {
    category: ShortTermSavingsCategory.HOME_RENOVATION,
    minimumTargetAmount: 100000,
    minimumLength: "6 months",
    frequency: "Monthly",
    description: "Aimed at users looking to save for home renovation projects",
  },
  {
    category: ShortTermSavingsCategory.HOUSEHOLD_ESSENTIALS,
    minimumTargetAmount: 50000,
    minimumLength: "6 months",
    frequency: "Monthly",
    description: "To help users save for planned purchases",
  },
  {
    category: ShortTermSavingsCategory.BUSINESS_EXPANSION_SAVINGS,
    minimumTargetAmount: 100000,
    minimumLength: "6 months",
    frequency: "Monthly",
    description:
      "Helps business owners save for expansion projects or growth opportunities",
  },
  {
    category: ShortTermSavingsCategory.BUSINESS_STARTUP_SAVINGS,
    minimumTargetAmount: 150000,
    minimumLength: "6 months",
    frequency: "Monthly",
    description:
      "Assists aspiring entrepreneurs in saving for the capital needed to start a business",
  },
];

export const longTermSavingsPlans: SavingsPlan[] = [
  {
    category: LongTermSavingsCategory.CHILDCARE_SAVINGS,
    minimumTargetAmount: 180000,
    minimumLength: "5 years",
    frequency: "Monthly",
    description:
      "Designed to help users save consistently for their children's long-term.",
  },
  {
    category: LongTermSavingsCategory.HOUSE_PURCHASE_SAVINGS,
    minimumTargetAmount: 200000,
    minimumLength: "12 months",
    frequency: "Monthly",
    description:
      "For users looking to save towards purchasing a home, with regular contributions",
  },
  {
    category: LongTermSavingsCategory.HIGHER_EDUCATION_SAVINGS,
    minimumTargetAmount: 30000,
    minimumLength: "12 months",
    frequency: "Monthly",
    description:
      "To help users save consistently for future education expenses.",
  },
  {
    category: LongTermSavingsCategory.INVESTMENT_PORTFOLIO_SAVINGS,
    minimumTargetAmount: 50000,
    minimumLength: "12 months",
    frequency: "Monthly",
    description:
      "To help users save regularly and build capital for investments.",
  },
  {
    category: LongTermSavingsCategory.RETIREMENT_SAVINGS,
    minimumTargetAmount: 300000,
    minimumLength: "10 years",
    frequency: "Monthly",
    description: "",
  },
];
