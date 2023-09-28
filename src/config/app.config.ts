interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: [],
  tenantRoles: ['Business Owner', 'Loan Officer'],
  tenantName: 'Lender',
  applicationName: 'Vehicle Financing Application v1',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [],
  ownerAbilities: ['Manage user information', 'Manage lenders', 'Manage loans', 'Manage vehicles'],
  getQuoteUrl: 'https://app.roq.ai/proposal/975face9-cb82-4e1b-b915-2d94c6b09cec',
};
