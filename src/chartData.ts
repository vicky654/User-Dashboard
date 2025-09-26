export const HoriZontalChart = {
  title: 'Overall Count',
  series: [
    {
      name: 'Product A',
      data: [44, 55, 41, 67, 22, 43],
    },
    {
      name: 'Product B',
      data: [13, 23, 20, 8, 13, 27],
    },
  ],
  categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
};

export const pieChartData: any = {
  series: [44, 55, 13, 43, 22],
  options: {
    chart: {
      height: 300,
      type: 'pie',
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
    },
    labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
    colors: ['#4361ee', '#805dca', '#00ab55', '#e7515a', '#e2a03f'],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
        },
      },
    ],
    stroke: {
      show: false,
    },
    legend: {
      position: 'bottom',
    },
  },
};

export const rightsData = {
  "Right to be informed": { Completed: 4, Red: 1 },
  "Right to access information": { Completed: 7, Red: 6 },
  "Right to correction": { Completed: 12, Red: 3 },
  "Right of grievance redressal": { Completed: 7, Red: 2 },
  "Right to erasure": { Completed: 3, Red: 4 },
  "Right to restrict processing": { Completed: 2 },
  "Right to data portability": { Red: 1 },
  "Right to object": { Completed: 2, Red: 3 },
  "Rights related to automated decision-making including profiling": { Completed: 4, Red: 4 },
  "Withdraw Your Consent": { Amber: 16, Completed: 316, Green: 2, Red: 181 },
  "Right to Nominate": { Amber: 1, Completed: 3, Red: 1 },
  "Legacy consent revoke request": { Amber: 1, Completed: 64, Red: 38 },
  "Risk Color": "#FF0000"
};
// . Consent Management
export const ConsentChart = {
  title: 'Overall Count',
  categories: ['Consented', 'Deemed consent', 'Not Delivered', 'Withdrawn'],
  series: [
    { name: 'Consented', data: [3, 0, 0, 0] },
    { name: 'Deemed consent', data: [0, 0, 0, 0] },
    { name: 'Not Delivered', data: [0, 0, 0, 0] },
    { name: 'Withdrawn', data: [0, 0, 0, 33] },
  ],
  colors: ['#b8b8b8', '#e2a03f', '#805dca', '#4361ee'],
};


export const ConsentPie: any = {
  series: [3, 33],
  options: {
    chart: {
      type: 'pie',
      height: '100%',
      width: '100%',
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
    },
    labels: ['Consented', 'Withdrawn'],
    colors: ['#b8b8b8', '#4361ee'],
    stroke: {
      show: false,
    },
    legend: {
      show: false,
    },
    responsive: [
      {
        breakpoint: 768,
        options: {
          chart: {
            width: '100%',
          },
          legend: {
            position: 'bottom',
          },
        },
      },
    ],
  },
};


// 2. Employee Awareness
export const AwarenessChart = {
  title: 'Overall Count',
  categories: ['Completed', 'In Progress', 'Not Started', 'Initiated', 'Not Delivered'],
  series: [
    { name: 'Completed', data: [29, 0, 0, 0, 0] },
    { name: 'In Progress', data: [0, 54, 0, 0, 0] },
    { name: 'Not Started', data: [0, 0, 76, 0, 0] },
    { name: 'Initiated', data: [0, 0, 0, 14, 0] },
    { name: 'Not Delivered', data: [0, 0, 0, 0, 2] },
  ],
  colors: ['#00ab55', '#4361ee', '#e2a03f', '#805dca', '#e7515a'], // ✅ Same as pie chart
};


export const EmployeeAwarenessPie: any = {
  series: [29, 54, 76, 14, 2], // Completed, In Progress, Not Started, Initiated, Not Delivered
  options: {
    chart: {
      height: 300,
      type: 'pie',
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
    },
    labels: ['Completed', 'In Progress', 'Not Started', 'Initiated', 'Not Delivered'],
    colors: ['#00ab55', '#4361ee', '#e2a03f', '#805dca', '#e7515a'],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
        },
      },
    ],
    stroke: {
      show: false,
    },
      legend:  { show: false },
  },
};

// Rights Management
export const RightsChart = {
  title: 'Overall Count',
  categories: [
    'Right to be informed',
    'Right to correction',
    'Right to erasure',
    'Right to data portability',
    'Profiling objection',
    'Legacy consent revoke - Completed',
    'Legacy consent revoke - Red',
  ],
  series: [
    { name: 'Right to be informed', data: [1, 0, 0, 0, 0, 0, 0] },
    { name: 'Right to correction', data: [0, 1, 0, 0, 0, 0, 0] },
    { name: 'Right to erasure', data: [0, 0, 1, 0, 0, 0, 0] },
    { name: 'Right to data portability', data: [0, 0, 0, 0, 0, 0, 0] },
    { name: 'Profiling objection', data: [0, 0, 0, 0, 0, 0, 0] },
    { name: 'Legacy consent revoke - Completed', data: [0, 0, 0, 0, 0, 52, 0] },
    { name: 'Legacy consent revoke - Red', data: [0, 0, 0, 0, 0, 0, 49] },
  ],
  colors: ['#4361ee', '#805dca', '#00ab55', '#e7515a', '#e2a03f', '#00ab55', '#ff00ff'],
};


export const RightsPie: any = {
  series: [1, 1, 1, 0, 0, 52, 49],
  options: {
    chart: {
      height: 300,
      type: 'pie',
      zoom: { enabled: false },
      toolbar: { show: false },
    },
    labels: [
      'Right to be informed',
      'Right to correction',
      'Right to erasure',
      'Right to data portability',
      'Profiling',
      'Legacy - Completed',
      'Legacy - Red'
    ],
    colors: ['#4361ee', '#805dca', '#00ab55', '#e7515a', '#e2a03f', '#00ab55', '#ff00ff'],
    responsive: [{
      breakpoint: 480,
      options: { chart: { width: 200 } },
    }],
    stroke: { show: false },
      legend:  { show: false },
  },
};


// ImpactAssessmentChart
export const ImpactAssessmentChart = {
  title: 'Overall Count',
  categories: [
    'DPIA Completed',
    'In Progress',
    'Not Started',
    'Last Complete',
    'Last Overall Risk',
  ],
  series: [
    { name: 'DPIA Completed', data: [1, 0, 0, 0, 0] },
    { name: 'In Progress', data: [0, 1, 0, 0, 0] },
    { name: 'Not Started', data: [0, 0, 0, 0, 0] },
    { name: 'Last Complete', data: [0, 0, 0, 0, 0] },
    { name: 'Last Overall Risk', data: [0, 0, 0, 0, 0] },
  ],
  colors: ['#b8b8b8', '#4361ee', '#e2a03f', '#805dca', '#00ab55'], // Extend if needed
};



export const ImpactAssessmentPie: any = {
  series: [1, 1], // 50% each
  options: {
    chart: {
      height: 300,
      type: 'pie',
      zoom: { enabled: false },
      toolbar: { show: false },
    },
    labels: ['DPIA Completed', 'In Progress'],
    colors: ['#b8b8b8', '#4361ee'],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
        },
      },
    ],
    stroke: { show: false },
     legend:  { show: false },
  },
};


// ThirdPartyPie
export const ThirdPartyChart = {
  title: 'Overall Count',
  categories: ['Not Started', 'In Progress', 'Submit', 'Under Review', 'Review Done'],
  series: [
    { name: 'Not Started', data: [3, 0, 0, 0, 0] },
    { name: 'In Progress', data: [0, 5, 0, 0, 0] },
    { name: 'Submit', data: [0, 0, 1, 0, 0] },
    { name: 'Under Review', data: [0, 0, 0, 1, 0] },
    { name: 'Review Done', data: [0, 0, 0, 0, 24] },
  ],
  colors: ['#e2a03f', '#4361ee', '#805dca', '#00ab55', '#a36aff'],
};




export const ThirdPartyPie: any = {
  series: [3, 5, 1, 1, 24],
  options: {
    chart: {
      height: 300,
      type: 'pie',
      zoom: { enabled: false },
      toolbar: { show: false },
    },
    labels: ['Not Started', 'In Progress', 'Submit', 'Under Review', 'Review Done'],
    colors: ['#e2a03f', '#4361ee', '#805dca', '#00ab55', '#a36aff'],
    responsive: [{
      breakpoint: 480,
      options: { chart: { width: 200 } },
    }],
    stroke: { show: false },
    legend:  { show: false },
  },
};



export const ImpactPie = {
  series: [],
  options: {
    labels: [],
    colors: [],
    legend: { position: 'bottom' },
  },
};







export const PrivacyGovData = {
  "status": "success",
  "recordType": "DPDP Dashboard",
  "processingActivity": "Organization",
  "overallRiskStatus": "#FF0000",
  "DPAP": {
    "Initiated": 63,
    "Not Started": 115,
    "In Progress": 259,
    "Completed": 1202,
    "Not Delivered": 93,
    "fail": 3,
    "Risk Color": "#FF0000"
  },
  "DPCM": {
    "Initiated": 0,
    "Deemed consent": 584,
    "Consented": 3099,
    "Rejected": 245,
    "Not Delivered": 86,
    "Withdrawn": 515,
    "Expired": 1744,
    "false": 3,
    "Risk Color": "#FF0000"
  },
  "DPGR": {
    "Right to be informed": {
      "Completed": 4,
      "Red": 1
    },
    "Right to access information": {
      "Completed": 7,
      "Red": 6
    },
    "Right to correction": {
      "Completed": 13,
      "Red": 3
    },
    "Right of grievance redressal": {
      "Completed": 7,
      "Red": 2
    },
    "Right to erasure": {
      "Completed": 3,
      "Red": 4
    },
    "Right to restrict processing": {
      "Completed": 2
    },
    "Right to data portability": {
      "Red": 1
    },
    "Right to object": {
      "Completed": 2,
      "Red": 3
    },
    "Rights related to automated decision-making including profiling": {
      "Completed": 4,
      "Red": 4
    },
    "Withdraw Your Consent": {
      "Amber": 15,
      "Completed": 316,
      "Red": 184
    },
    "Right to Nominate": {
      "Amber": 1,
      "Completed": 3,
      "Red": 1
    },
    "Legacy consent revoke request": {
      "Amber": 1,
      "Completed": 64,
      "Red": 38
    },
    "Risk Color": "#FF0000"
  }
}


// Add more if needed...


const processingActivity = {
  "status": "success",
  "recordType": "Processing Activities",
  "totalProcessingActivities": 34,
  "processingActivities": [
    {
      "id": 85,
      "processingActivitiesName": "TataFleet"
    },
    {
      "id": 56,
      "processingActivitiesName": "Webinars"
    },
    {
      "id": 55,
      "processingActivitiesName": "Events"
    },
    {
      "id": 54,
      "processingActivitiesName": "Research"
    },
    {
      "id": 53,
      "processingActivitiesName": "Whitepapers"
    },
    {
      "id": 52,
      "processingActivitiesName": "Finance"
    },
    {
      "id": 51,
      "processingActivitiesName": "Consultant"
    },
    {
      "id": 50,
      "processingActivitiesName": "Product"
    },
    {
      "id": 49,
      "processingActivitiesName": "Newsletters"
    },
    {
      "id": 48,
      "processingActivitiesName": "Vendor-Onboarding"
    },
    {
      "id": 47,
      "processingActivitiesName": "Investor-Onboarding"
    },
    {
      "id": 46,
      "processingActivitiesName": "Seller-Onboarding"
    },
    {
      "id": 45,
      "processingActivitiesName": "Buyer-Onboarding"
    },
    {
      "id": 44,
      "processingActivitiesName": "Onboarding"
    },
    {
      "id": 43,
      "processingActivitiesName": "Vendor"
    },
    {
      "id": 42,
      "processingActivitiesName": "Marketing"
    },
    {
      "id": 39,
      "processingActivitiesName": "Contact Us"
    },
    {
      "id": 38,
      "processingActivitiesName": "Sales Enquiry"
    },
    {
      "id": 36,
      "processingActivitiesName": "Visitor Desk"
    },
    {
      "id": 35,
      "processingActivitiesName": "Admin"
    },
    {
      "id": 33,
      "processingActivitiesName": "Careers"
    },
    {
      "id": 32,
      "processingActivitiesName": "HR"
    },
    {
      "id": 29,
      "processingActivitiesName": "Organization"
    },
    {
      "id": 28,
      "processingActivitiesName": "UK accounting 3"
    },
    {
      "id": 20,
      "processingActivitiesName": "IT"
    },
    {
      "id": 15,
      "processingActivitiesName": "Online API"
    },
    {
      "id": 10,
      "processingActivitiesName": "Accounts"
    },
    {
      "id": 9,
      "processingActivitiesName": "Sales"
    },
    {
      "id": 8,
      "processingActivitiesName": "Prepaid Cards"
    },
    {
      "id": 6,
      "processingActivitiesName": "Investments"
    },
    {
      "id": 4,
      "processingActivitiesName": "Working Capital"
    },
    {
      "id": 3,
      "processingActivitiesName": "Loans"
    },
    {
      "id": 2,
      "processingActivitiesName": "Cards"
    },
    {
      "id": 1,
      "processingActivitiesName": "Deposit"
    }
  ]
}