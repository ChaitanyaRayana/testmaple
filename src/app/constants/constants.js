// Home page Never miss a deadline.
import MRRecordImage from '@/public/assets/images/png/mr-records-one.png';
import MRRequestImage from '@/public/assets/images/png/mr-request-one.png';
import MRWorkFlowImage from '@/public/assets/images/png/mr-workflow-one.png';
import MRFormBuilderImage from '@/public/assets/images/png/mr-form-builder.png';

// Blog Image
import BlogOneImage from '@/public/assets/images/png/blogImages/blogOne.png';
import BlogTwoImage from '@/public/assets/images/png/blogImages/blogTwo.png';
import BlogThreeImage from '@/public/assets/images/png/blogImages/blogThree.png';
import BlogFourImage from '@/public/assets/images/png/blogImages/blogFour.png';
import VideoImage from '@/public/assets/images/png/videoImages/videoImage.png';
import BlogAIImage from '@/public/assets/images/png/BlogAIImage.png';
import WebinarImage from '@/public/assets/images/png/webinarImages/mainImage.png';
import WebinarImageTwo from '@/public/assets/images/png/webinarImages/webinarTwo.png';

import EventOneImage from '@/public/assets/images/png/events/eventOneImage.png';
import EventTwoImage from '@/public/assets/images/png/events/eventTwoImage.png';

import MediaImage from '@/public/assets/images/png/blogImages/mediaImage.png';

import AboutUsImage from '@/public/assets/images/png/meetingImage.png';
import AboutUsImageOne from '@/public/assets/images/png/aboutUsOne.png';
// zikzag
import StateGovernImage from '@/public/assets/images/png/datagovernance.png';
import RetentionPoliciesImage from '@/public/assets/images/png/Zerofriction.png';
import SeamlessIntegration from '@/public/assets/images/png/SeamlessIntegration.png';
import EnterprisegradesecurityImage from '@/public/assets/images/png/Enterprisegradesecurity.png';
import FinanceImage from '@/public/assets/images/png/department/Finance.png';
import CustomerServiceImage from '@/public/assets/images/png/department/CustomerService.png';
import LegalImage from '@/public/assets/images/png/department/Legal.png';
import OperationsImage from '@/public/assets/images/png/department/operations.png';
import RDImage from '@/public/assets/images/png/department/R&D.png';
import HealthcareImage from '@/public/assets/images/png/department/Healthcare.png';
import HumanResource from '@/public/assets/images/png/department/Humanresources.png';
import MRRecordIndustryImage from '@/public/assets/images/png/mrProducts/MRecords.png';
import MRReqeustIndustryImage from '@/public/assets/images/png/mrProducts/MRequests.png';
import MRWorkIndustryImage from '@/public/assets/images/png/mrProducts/Workflows.png';
import MRWorkFlowIndustryImage from '@/public/assets/images/png/mrProducts/MRWordFlow.png';
import MRRecordWorkingImage from '@/public/assets/images/png/platform/MRRecordsFlow.png';
import MRRequestWorkingImage from '@/public/assets/images/png/platform/Requestworking.png';
import MRWorkflowWorkingImage from '@/public/assets/images/png/platform/workfolwworking.png';

import {
  AwardIcon,
  BarChatIcon,
  BlubIcon,
  BrainIcon,
  CalculatorIcon,
  CalendarIcon,
  ClockIcon,
  DollarIcon,
  FactoryIcon,
  FileIcon,
  FileRightIcon,
  FileSearchIcon,
  FinanceIcon,
  FolderIcon,
  FunnelIcon,
  GraphImproveIcon,
  HeadSetIcon,
  HealthIcon,
  HumanResourcesCardIcon,
  HumanResourcesIcon,
  LegalIcon,
  LightingIcon,
  LockIcon,
  MagnifyingIcon,
  MessagerIcon,
  PlugIcon,
  PuzzleIcon,
  ResearchDeploymentIcon,
  SettingIcon,
  SheldCardIcon,
  SheldIcon,
  UnlimitedIcon,
  UserIcon,
  WarningIcon,
  WorkflowIcon,
} from '../components/common/svgImage';

export const neverMissDeadLine = [
  {
    label: 'MR Records',
    description:
      'Your central hub for secure, structured, and searchable recordkeeping.',
    featureHighlight: [
      'Smart retention',
      'Full audit trails',
      'Role-based access',
    ],
    image: MRRecordImage,
    icon: <FileIcon width={16} height={16} color="text-[#226fb7]" />,
    href: '/platform/mr-records',
  },
  {
    label: 'MR Requests',
    description:
      'Streamlined system for managing public and internal information requests.',
    featureHighlight: ['Auto intake', 'Secure redaction', 'Public portal'],
    image: MRRequestImage,
    icon: <MessagerIcon width={16} height={16} color="text-[#226fb7]" />,
    href: '/platform/mr-request',
  },
  {
    label: 'MR Workflows',
    description: 'No-code automation that connects your apps, teams, and data.',
    featureHighlight: [
      'Cross-app triggers',
      'Ready-made templates',
      'Live monitoring',
    ],
    image: MRWorkFlowImage,
    icon: <WorkflowIcon width={16} height={16} color="text-[#226fb7]" />,
    href: '/platform/mr-workflows',
  },
  {
    label: 'MR Forms',
    description:
      'Create professional forms in seconds with AI-powered automation and seamless integration.',
    featureHighlight: [
      'AI form generation',
      'Mobile-responsive design',
      'Direct record integration',
    ],
    image: MRFormBuilderImage,
    icon: <FileRightIcon width={16} height={16} color="text-[#226fb7]" />,
    href: '/platform/mr-forms',
  },
];

export const howWeHelpContent = [
  {
    label: 'Finance',
    featureHighlight: [
      'Centralize financial records with automated retention and audit trails',
      'Speed up approvals, reconciliations, and compliance reporting by up to 40%',
      'Control access to invoices, contracts, and financial statements securely',
    ],
    image: FinanceImage,
    icon: <DollarIcon />,
  },
  {
    label: 'Legal',
    featureHighlight: [
      'Maintain easily defensible records with lifecycle governance',
      'Simplify audits, eDiscovery, and regulatory reporting',
      'FOI/RTI and legal requests resolved 2-4x faster with secure redaction',
    ],
    image: LegalImage,
    icon: <LegalIcon />,
  },
  {
    label: 'Human Resources',
    featureHighlight: [
      'Securely manage employee records from onboarding to exit, reducing manual effort by up to 40%.',
      'Automate HR workflows such as policy acknowledgements and requests',
      'Ensure privacy, role-based access, and retention compliance',
    ],
    image: HumanResource,
    icon: <HumanResourcesIcon />,
  },
  {
    label: 'Operations',
    featureHighlight: [
      'Eliminate manual, paper-based processes with automated workflows, reducing processing time by 30-50%',
      'Improve process visibility, tracking, and accountability',
      'Standardise operational documentation across teams',
    ],
    image: OperationsImage,
    icon: <SettingIcon />,
  },
  {
    label: 'Healthcare',
    featureHighlight: [
      'Manage administrative and patient-related records securely',
      'Ensure compliance with healthcare regulations and retention policies',
      'Enable up to 3x faster request handling with audit-ready records',
    ],
    image: HealthcareImage,
    icon: <HealthIcon />,
  },
  {
    label: 'Research & Development',

    featureHighlight: [
      'Protect sensitive research data with controlled access',
      'Maintain version control, traceability, and documentation governance',
      'Support collaboration while ensuring IP protection',
    ],
    image: RDImage,
    icon: <ResearchDeploymentIcon />,
  },
  {
    label: 'Customer Service',
    featureHighlight: [
      'Access complete, accurate records for faster issue resolution',
      'Automate request intake, routing, and response workflows',
      'Improve transparency, cut response times by up to 40%, and boost customer satisfaction',
    ],
    image: CustomerServiceImage,
    icon: <HeadSetIcon />,
  },
];

export const homeZipZapContent = [
  {
    chipText: 'Smart data governance',
    chipIcon: 'BrainIcon',
    label: 'MapleRecord delivers intelligent information management',
    featureHighlight: [
      'Find records <strong>up to 10x faster</strong> with metadata-driven search',
      'Organize everything with secure, custom workspaces',
      'Gain actionable process insights through built-in Analytics',
    ],
    image: StateGovernImage,
  },
  {
    chipText: 'Zero-friction workflows',
    chipIcon: 'WorkflowIcon',
    label: 'Low-code workflow automation',
    featureHighlight: [
      'Automate creation, review, and approvals',
      'Configure workflows quickly with low-code templates',
      'Reduce manual finance and invoice handling by 84%',
    ],
    image: RetentionPoliciesImage,
  },
  {
    chipText: 'Enterprise-grade security guaranteed',
    chipIcon: 'SheldIcon',
    label: 'Enterprise-grade security powered by context-based access',
    featureHighlight: [
      'Maintain <strong>100% version control</strong> with complete audit trails',
      'Enforce retention and compliance policies <strong>automatically</strong>',
      'Stay audit-ready with secure archiving',
    ],
    image: EnterprisegradesecurityImage,
  },
  {
    chipText: 'Seamless integration',
    chipIcon: 'PlugIcon',
    label: 'Built to integrate. Designed to deploy anywhere.',
    featureHighlight: [
      'Enable secure access across web, mobile, and desktop',
      'Integrate seamlessly with ERP/CRM systems in <strong>weeks, not months</strong>',
      'Deploy flexibly across cloud or on-premise infrastructure',
    ],
    image: SeamlessIntegration,
  },
];

export const powerfulCardSectionData = {
  label: 'Everything you need to manage records',
  chipText: 'Powerful Features',
  description: 'Built for teams of all sizes, from startups to enterprises',
  cardSection: [
    {
      label: 'AI-Powered Insights',
      description:
        'Leverage advanced AI to automatically categorize, tag, and extract insights from your records.',
      icon: 'BrainIcon',
    },
    {
      label: 'Enterprise Security',
      description:
        'Bank-level encryption and compliance with industry standards to keep your data safe.',
      icon: 'LockIcon',
    },
    {
      label: 'Lightning Fast',
      description:
        'Search and retrieve millions of records in milliseconds with our optimized infrastructure.',
      icon: 'LightingIcon',
    },
    {
      label: 'Unlimited Storage',
      description:
        'Store as many records as you need without worrying about storage limits or costs.',
      icon: 'UnlimitedIcon',
    },
    {
      label: 'Team Collaboration',
      description:
        'Work together seamlessly with role-based access control and real-time updates.',
      icon: 'HumanResourcesCardIcon',
    },
    {
      label: 'Advanced Analytics',
      description:
        'Get actionable insights with powerful reporting and visualization tools.',
      icon: 'BarChatIcon',
    },
  ],
};

export const homePageFaq = [
  {
    Qes: 'Why do organizations choose MapleRecord?',
    ans: 'Organizations choose MapleRecord to securely manage records, automate information requests, and streamline workflows in one integrated platform.',
  },
  {
    Qes: 'Who is MapleRecord designed for?',
    ans: 'MapleRecord is built for enterprises and public-sector organizations operating in regulated environments.',
  },
  {
    Qes: 'How does MapleRecord support security and compliance?',
    ans: 'MapleRecord supports enterprise-grade security, role-based access, audit trails, and retention controls.',
  },
  {
    Qes: 'Can MapleRecord integrate with our existing systems?',
    ans: 'Yes. MapleRecord integrates with ERP, CRM, and other enterprise systems without disrupting existing operations.',
  },
  {
    Qes: 'How quickly can MapleRecord be deployed?',
    ans: 'MapleRecord is designed for rapid deployment and can be configured in weeks, depending on organizational needs.',
  },
];

/*        Platform Content starts here.     */

export const mrRecordsPlatformContent = {
  'mr-records': {
    sectionOne: {
      label: 'An Intelligent, Secure, and Scalable Records Management Core',
      description:
        'Seamlessly manage both electronic documents and physical records in one unified, AI-powered platform with intelligent automation and complete lifecycle control.',
      image: MRRecordIndustryImage,
      buttonsText: [
        {
          label: 'See the Platform in Action',
          href: '/platform/mr-records#How-MR-Records-Works',
        },
        { label: 'Explore Capabilities', href: '/contact-us#schedule-demo' },
      ],

      bottomText:
        'Secure &nbsp; • &nbsp; Compliant &nbsp; • &nbsp; Enterprise-Ready',
    },
    sectionTwo: {
      label: 'Why MR Records?',
      description:
        'Fragmented records. Manual handling. Compliance & audit risk.',
      cardSection: [
        {
          label: 'Disconnected Electronic & Physical Records',
          description:
            'Records scattered across multiple platforms create inefficiencies',
          icon: 'FolderIcon',
        },
        {
          label: 'Compliance & Security Risks',
          description:
            'Meeting HIPAA and regulatory requirements is complex and costly',
          icon: 'SheldCardIcon',
        },
        {
          label: 'Slow Access & Retrieval',
          description:
            'Time-consuming manual processes delay patient care delivery',
          icon: 'ClockIcon',
        },
      ],
    },
    sectionThree: {
      chipText: 'How It Operates',
      chipIcon: 'LightingIcon',
      label: 'How MR Records Works',
      image: MRRecordWorkingImage,
      ref: 'How-MR-Records-Works',
      cardSection: [
        {
          label: '1. Ingest & Classify',
          description:
            'Automatically categorize records on intake using AI-enabled metadata and smart tagging.',
          icon: 'FileIcon',
        },
        {
          label: '2. Govern & Secure',
          description:
            'Apply retention policies and access controls to every record, with full audit visibility.',
          icon: 'SheldCardIcon',
        },
        {
          label: '3. Find & Respond',
          description:
            'Use AI search to locate records instantly and fulfill internal or public information requests with confidence.',
          icon: 'MagnifyingIcon',
        },
        {
          label: '4. Automate Workflows',
          description:
            'Orchestrate workflows for approvals, compliance reviews, and cross-departmental requests — all without manual steps.',
          icon: 'LightingIcon',
        },
      ],
    },

    sectionFour: {
      chipText: 'Measurable Impact',
      chipIcon: 'LightingIcon',
      label: 'Benefits You Can Measure',
      stats: [
        {
          value: '10×',
          title: 'Faster Record Retrieval',
          description: 'Up to 10× faster record retrieval with smart search',
        },
        {
          value: '60–75%',
          title: 'Reduction in Manual Tasks',
          description: '60–75% reduction in manual, document-driven tasks',
        },
        {
          value: '50%',
          title: 'Less Audit-Related Effort',
          description:
            '50% less audit-related effort with automated compliance',
        },
        {
          value: '30–50%',
          title: 'Improvement in Approval Cycles',
          description: '30–50% improvement in approval cycle times',
        },
        {
          value: 'SheldCardIcon',
          title: 'Audit-Ready History',
          description: 'Fully traceable, audit-ready record history',
          isIcon: true,
        },
      ],
    },

    sectionFive: {
      chipText: 'Features',
      chipIcon: 'LightingIcon',
      label: 'Key Capabilities',
      cardSection: [
        {
          label: 'AI-Powered Hybrid Search',
          description:
            '<ul><li>• &nbsp;Unified search across electronic and physical records</li><li>• &nbsp; Real-time location tracking for physical files</li><li>• &nbsp;Intelligent metadata extraction with AI</li></ul>',
          icon: 'MagnifyingIcon',
        },
        {
          label: 'Physical Records Management',
          description:
            '<ul><li>• &nbsp;Barcode/RFID tracking integration</li><li>• &nbsp;Check-in/check-out workflows</li><li>• &nbsp;Location management and tracking</li></ul>',
          icon: 'LightingIcon',
        },
        {
          label: 'Unified Governance & Compliance',
          description:
            '<ul><li>• &nbsp; Hybrid retention policy management</li><li>• &nbsp;Automated disposition workflows</li><li>• &nbsp;Complete audit trails for both formats</li></ul>',
          icon: 'SheldCardIcon',
        },
        {
          label: 'Intelligent Automation',
          description:
            '<ul><li>• &nbsp;AI-driven classification and indexing</li><li>• &nbsp;Automated workflow triggers</li><li>• &nbsp;Smart recommendations for lifecycle actions</li></ul>',
          icon: 'PuzzleIcon',
        },
      ],
    },
    sectionSix: {
      chipText: 'Use Cases',
      chipIcon: 'HumanResourcesIcon',
      label: 'Who It Helps',
      description: 'MR Records empowers a wide range of operational teams:',
      cardSection: [
        {
          label: 'Finance & Accounting',
          description:
            'Improve approvals, reconciliation visibility, and audit readiness.',
          icon: 'FinanceIcon',
        },
        {
          label: 'Legal & Compliance',
          description:
            'Enhance eDiscovery, legal holds, and regulatory reporting.',
          icon: 'LegalIcon',
        },
        {
          label: 'Human Resources',
          description:
            'Manage personnel files securely and automate lifecycle tasks.',
          icon: 'HumanResourcesCardIcon',
        },
        {
          label: 'Operations',
          description:
            'Standardize documentation, reduce manual routing, and increase visibility.',
          icon: 'SettingIcon',
        },
        {
          label: 'Healthcare Administration',
          description:
            'Maintain retention compliance and respond quickly to data requests.',
          icon: 'HealthIcon',
        },
        {
          label: 'Research & Development',
          description:
            'Protect research assets and ensure version traceability.',
          icon: 'ResearchDeploymentIcon',
        },
        {
          label: 'Customer Service',
          description:
            'Deliver faster, transparent responses with complete context.',
          icon: 'HeadSetIcon',
        },
      ],
    },
    scheduleSection: {
      label: 'Ready to unify your electronic and physical records?',
      description:
        'Experience the power of an AI-first hybrid platform that brings all your records together with intelligent automation, unified governance, and seamless lifecycle management.',
      buttonsText: ['Schedule a Demo', 'Contact Sales'],
    },
  },
  'mr-request': {
    sectionOne: {
      buttonsText: [
        {
          label: 'See the Platform in Action',
          href: '/platform/mr-request#How-MR-Requests-Works',
        },
        { label: 'Explore Capabilities', href: '/contact-us#schedule-demo' },
      ],
      label:
        'AI-Driven Request Management for Timely and Transparent Responses',
      description:
        'Capture, track, and fulfill information requests with intelligent workflows while meeting deadlines and ensuring accountability.',
      image: MRReqeustIndustryImage,
      bottomText:
        'Secure &nbsp; • &nbsp; Compliant &nbsp; • &nbsp; Enterprise-Ready',
    },
    sectionTwo: {
      label: 'Why MR Requests?',
      description: 'Manage requests. Track deadlines. Respond with confidence.',
      cardSection: [
        {
          label: 'Fragmented Request Intake',
          description:
            'Requests arrive through email forms portals and offline channels. Without a single system teams struggle to track ownership status and progress.',
          icon: 'FolderIcon',
        },
        {
          label: 'Missed Deadlines and Compliance Risk',
          description:
            'Manual tracking increases the risk of missed statutory deadlines delayed responses and audit findings.',
          icon: 'SheldCardIcon',
        },
        {
          label: 'Limited Transparency and Control',
          description:
            'Without structured workflows approvals and audit trails it becomes difficult to ensure accuracy consistency and accountability.',
          icon: 'ClockIcon',
        },
      ],
    },
    sectionThree: {
      chipText: 'How It Operates',
      chipIcon: 'LightingIcon',
      label: 'How MR Requests Works',
      ref: 'How-MR-Requests-Works',
      image: MRRequestWorkingImage,
      cardSection: [
        {
          label: '1. Centralize Request Intake',
          description:
            'Capture all public and internal requests in one place using custom request forms email intake and a dedicated requester portal.',
          icon: 'FileIcon',
        },
        {
          label: '2. Track Deadlines Automatically',
          description:
            'Monitor statutory and internal deadlines with automated tracking alerts and escalation rules to ensure every request stays on schedule.',
          icon: 'ClockIcon',
        },
        {
          label: '3. Review Approve and Redact',
          description:
            'Route requests through approval workflows apply secure redaction tools and control access to sensitive information.',
          icon: 'SheldCardIcon',
        },
        {
          label: '4. Respond and Audit',
          description:
            'Deliver accurate responses manage bulk disclosures and maintain a complete audit trail for every request.',
          icon: 'MagnifyingIcon',
        },
      ],
    },

    sectionFour: {
      chipText: 'Measurable Impact',
      label: 'Benefits You Can Measure',
      stats: [
        {
          // value: '10×',
          title: 'Faster and On Time Responses',
          description:
            'Reduce request response times by 30 to 45 percent through automated routing and deadline tracking.',
          isIcon: true,
          value: 'ClockIcon',
        },
        {
          // value: '60–75%',
          title: 'RComplete Deadline Visibility',
          description:
            'Ensure every request meets compliance and service level requirements.',
          isIcon: true,
          value: 'WarningIcon',
        },
        {
          // value: '50%',
          title: 'Reduced Manual Effort',
          description:
            'Cut manual effort in request intake approvals redaction and follow ups by 40 to 60 percent.',
          isIcon: true,
          value: 'LightingIcon',
        },
        {
          // value: '30–50%',
          title: 'Audit Ready Request History',
          description:
            'Maintain a full defensible record of every request action and response.',
          isIcon: true,
          value: 'SheldCardIcon',
        },
        // {
        //   value: '🛡️',
        //   title: 'Audit-Ready History',
        //   description: 'Fully traceable, audit-ready record history',
        //   isIcon: true,
        // },
      ],
    },

    sectionFive: {
      chipText: 'Features',
      chipIcon: 'LightingIcon',
      label: 'Key Capabilities',
      cardSection: [
        {
          label: 'Centralized Request Intake',
          description:
            '<ul><li>• &nbsp; Capture requests from email forms and portals</li><li>• &nbsp; Support custom request forms for different use cases</li><li>• &nbsp; Provide a public requester portal for transparency</li></ul>',
          icon: 'FolderIcon',
        },
        {
          label: 'Automated Deadline Tracking',
          description:
            '<ul><li>• &nbsp; Track statutory and internal deadlines automatically</li><li>• &nbsp; Receive alerts reminders and escalations</li><li>• &nbsp; Ensure consistent on time responses</li></ul>',
          icon: 'ClockIcon',
        },
        {
          label: 'Approval and Workflow Management',
          description:
            '<ul><li>• &nbsp; Route requests through configurable approval workflows</li><li>• &nbsp; Enable collaboration across departments</li><li>• &nbsp; Support bulk request and response handling</li></ul>',
          icon: 'LightingIcon',
        },
        {
          label: 'Secure Redaction and Governance',
          description:
            '<ul><li>• &nbsp;Apply secure redaction tools to protect sensitive data</li><li>• &nbsp;Enforce role based access and permissions</li><li>• &nbsp;Maintain a full request audit trail</li></ul>',
          icon: 'SheldCardIcon',
        },
        {
          label: 'Compliance Ready Framework',
          description:
            '<ul><li>• &nbsp;Align with regulatory and governance requirements</li><li>• &nbsp; Support reporting audits and reviews</li><li>• &nbsp;Ensure consistent compliant request handling</li></ul>',
          icon: 'FunnelIcon',
        },
        {
          label: 'Multi-Department Coordination',
          description:
            '<ul><li>• &nbsp;Tools for handling requests requiring input from multiple departments</li><li>• &nbsp; Cross-departmental collaboration and review</li><li>• &nbsp;Third-party notification workflows</li></ul>',
          icon: 'HumanResourcesCardIcon',
        },
      ],
    },
    sectionSix: {
      chipText: 'Use Cases',
      chipIcon: 'HumanResourcesIcon',
      label: 'Who It Helps',
      description: 'MR Requests empowers a wide range of operational teams:',
      cardSection: [
        {
          label: 'Finance and Accounting',
          description:
            'Respond efficiently to audit vendor and financial information requests.',
          icon: 'FinanceIcon',
        },
        {
          label: 'Legal and Compliance',
          description:
            'Manage public regulatory and legal requests with complete traceability.',
          icon: 'LegalIcon',
        },
        {
          label: 'Human Resources',
          description:
            'Handle employee information requests securely and consistently.',
          icon: 'HumanResourcesCardIcon',
        },
        {
          label: 'Operations',
          description:
            'Coordinate cross functional requests and improve process visibility.',
          icon: 'SettingIcon',
        },
        {
          label: 'Healthcare Administration',
          description:
            'Respond to information requests while maintaining privacy and compliance.',
          icon: 'HealthIcon',
        },
        {
          label: 'Customer Service',
          description:
            'Deliver transparent timely responses with complete request context.',
          icon: 'HeadSetIcon',
        },
      ],
    },
    scheduleSection: {
      label: 'Ready to Modernize Your Request Management?',
      description:
        'Automate information requests with centralized intake automated tracking secure redaction and compliance ready workflows.',
      buttonsText: ['Contact Sales'],
    },
  },
  'mr-workflow': {
    sectionOne: {
      buttonsText: [
        {
          label: 'See the Platform in Action',
          href: '/platform/mr-workflow#How-MR-Workflows-Works',
        },
        { label: 'Explore Capabilities', href: '/contact-us#schedule-demo' },
      ],
      label: 'AI-Driven Workflow Automation for Enterprise Efficiency',
      description:
        'Design, automate, and monitor business processes with a no-code workflow engine that scales securely across your organization.',
      image: MRWorkIndustryImage,
      bottomText:
        'Secure &nbsp; • &nbsp; Compliant &nbsp; • &nbsp; Enterprise-Ready',
    },
    sectionTwo: {
      label: 'Why MR Workflows?',
      // description: 'Manage requests. Track deadlines. Respond with confidence.',
      cardSection: [
        {
          label: 'Manual Processes Slow You Down',
          description:
            'Requests arrive through email forms portals and offline channels. Without a single system teams struggle to track ownership status and progress.',
          icon: 'ClockIcon',
        },
        {
          label: 'Complexity Across Systems',
          description:
            'Processes often span multiple applications and teams; traditional workflow tools struggle to integrate seamlessly.',
          icon: 'PuzzleIcon',
        },
        {
          label: 'Lack of Visibility and Accountability',
          description:
            'Without real-time monitoring and audit logs, it is hard to ensure process compliance or measure performance.',
          icon: 'WarningIcon',
        },
      ],
    },
    sectionThree: {
      chipText: 'How It Operates',
      chipIcon: 'LightingIcon',
      label: 'How MR Workflows Works',
      ref: 'How-MR-Workflows-Works',
      image: MRWorkFlowIndustryImage,
      cardSection: [
        {
          label: '1. Build Without Code',
          description:
            'Create process automation with a visual, no-code designer. Drag and drop workflow components to orchestrate tasks, approvals, and actions — no developers required.',
          icon: 'PuzzleIcon',
        },
        {
          label: '2. Trigger Across Systems',
          description:
            'Set up cross-app triggers that connect to other MR products, ERP, CRM, databases, and downstream systems so workflows act across your entire ecosystem.',
          icon: 'LightingIcon',
        },
        {
          label: '3. Route with Logic',
          description:
            'Use conditional logic and dynamic routing to ensure tasks follow the right paths based on real-time data, roles, and outcomes.',
          icon: 'FunnelIcon',
        },
        {
          label: '4. Monitor Real Time',
          description:
            'Track workflow execution as it happens. Monitor performance, bottlenecks, and outcomes with dashboards that provide visibility across processes.',
          icon: 'ClockIcon',
        },
        {
          label: '5. Governance and Audit',
          description:
            'Every workflow execution is logged for audit readiness. Version history, execution logs, and role-based access ensure secure governance.',
          icon: 'SheldCardIcon',
        },
      ],
    },

    sectionFour: {
      chipText: 'Measurable Impact',
      chipIcon: 'LightingIcon',
      label: 'Benefits You Can Measure',
      stats: [
        {
          value: '30–50%',
          title: 'Faster Process Completion',
          description:
            'Reduce process cycle times by 30–50% by automating routine tasks and approvals.',
        },
        {
          value: '100%',
          title: 'Improved Operational Visibility',
          description:
            'Gain 100% real-time visibility into workflow execution, bottlenecks, and performance metrics.',
        },
        {
          value: '60–75%',
          title: 'Reduced Manual Intervention',
          description:
            'Eliminate 60–75% of manual steps using intelligent triggers and conditional logic.',
        },
        {
          value: '100%',
          title: 'Enterprise-Ready Compliance',
          description:
            'Achieve 100% audit traceability with execution logs and role-based access controls.',
        },
        // {
        //   value: '🛡️',
        //   title: 'Audit-Ready History',
        //   description: 'Fully traceable, audit-ready record history',
        //   isIcon: true,
        // },
      ],
    },

    sectionFive: {
      chipText: 'Features',
      chipIcon: 'LightingIcon',
      label: 'Key Capabilities',
      cardSection: [
        {
          label: 'No-Code Workflow Design',
          description:
            '<ul><li>• &nbsp; Visual drag and drop workflow builder</li><li>• &nbsp; Create complex logic without writing code</li><li>• &nbsp; Rapid workflow creation and deployment</li></ul>',
          icon: 'PuzzleIcon',
        },
        {
          label: 'Intelligent Routing and Triggers',
          description:
            '<ul><li>• &nbsp; Conditional logic and dynamic routing</li><li>• &nbsp; Cross app triggers across systems and platforms</li><li>• &nbsp; Parallel paths and exception handling</li></ul>',
          icon: 'FunnelIcon',
        },
        {
          label: 'Real-Time Monitoring and Insights',
          description:
            '<ul><li>• &nbsp; Live execution dashboards</li><li>• &nbsp; Bottleneck and performance tracking</li><li>• &nbsp; Operational insights at a glance</li></ul>',
          icon: 'ClockIcon',
        },
        {
          label: 'Enterprise Governance and Security',
          description:
            '<ul><li>• &nbsp;Audit ready execution logs with timestamps</li><li>• &nbsp;Role based access and controlled privileges</li><li>• &nbsp;End to end data protection and policy enforcement</li></ul>',
          icon: 'SheldCardIcon',
        },
        {
          label: 'Scalable and Versioned Orchestration',
          description:
            '<ul><li>• &nbsp;Designed for enterprise scale and reliability</li><li>• &nbsp; Versioned workflow history with rollback support</li><li>• &nbsp; Consistent performance under high volume</li></ul>',
          icon: 'SettingIcon',
        },
      ],
    },
    sectionSix: {
      chipText: 'Use Cases',
      chipIcon: 'HumanResourcesIcon',
      label: 'Who It Helps',
      description: 'MR Workflows empowers a wide range of operational teams:',
      cardSection: [
        {
          label: 'Finance & Accounting',
          description:
            'Automate approvals, reconciliations, and finance close processes.',
          icon: 'FinanceIcon',
        },
        {
          label: 'Legal & Compliance',
          description:
            'Standardize compliance checks, notifications, and regulatory workflows.',
          icon: 'LegalIcon',
        },
        {
          label: 'Human Resources',
          description:
            'Automate onboarding, performance reviews, and HR tasks.',
          icon: 'HumanResourcesCardIcon',
        },
        {
          label: 'Operations',
          description:
            'Orchestrate cross-departmental tasks and operational handoffs.',
          icon: 'SettingIcon',
        },
        {
          label: 'Healthcare Administration',
          description:
            'Automate clinical admin, records routing, and service tasks.',
          icon: 'HealthIcon',
        },
        {
          label: 'Customer Service',
          description:
            'Drive faster customer responses with automated service workflows.',
          icon: 'HeadSetIcon',
        },
      ],
    },
    scheduleSection: {
      label: 'Ready to Automate Your Processes?',
      description:
        'Streamline your enterprise with AI-enabled workflows, secure governance, and real-time process visibility.',
      buttonsText: ['Contact Sales'],
    },
  },
  'mr-forms': {
    sectionOne: {
      buttonsText: [
        {
          label: 'See the Platform in Action',
          href: '/platform/mr-records#How-MR-Forms-Works',
        },
        { label: 'Explore Templates', href: '/platform/mr-forms#' },
      ],

      label: 'Build Smart Forms with AI',
      description:
        "Create professional forms in seconds with MapleRecord's AI-powered form builder. Seamlessly integrate data collection with your records management system.",
      image: MRWorkIndustryImage,
      bottomText:
        'AI-Powered &nbsp; • &nbsp; Secure &nbsp; • &nbsp; Mobile-Ready',
    },
    sectionTwo: {
      label: 'Why MR Forms?',
      description:
        'Manual form creation. Disconnected data. Slow deployment cycles.',
      cardSection: [
        {
          label: 'Slow Form Development',
          description:
            'Building forms manually takes hours or days, delaying data collection initiatives',
          icon: 'ClockIcon',
        },
        {
          label: 'Disconnected Data Systems',
          description:
            'Form data scattered across platforms creates integration challenges',
          icon: 'UnlimitedIcon',
        },
        {
          label: 'Compliance Complexity',
          description:
            'Ensuring forms meet regulatory requirements requires expertise and oversight',
          icon: 'SheldCardIcon',
        },
      ],
    },
    sectionThree: {
      chipText: 'How It Operates',
      chipIcon: 'LightingIcon',
      label: 'How MR Forms Works',
      image: MRWorkflowWorkingImage,
      ref: 'How-MR-Forms-Works',

      cardSection: [
        {
          label: '1. AI Form Generation',
          description:
            'Describe your needs in plain English and watch AI build a complete form with appropriate fields, validations, and logic.',
          icon: 'AIIcon',
        },
        {
          label: '2. Customize & Brand',
          description:
            "Use drag-and-drop editor to refine layouts, add conditional logic, and apply your brand's colors and styling.",
          icon: 'PaintHolderIcon',
        },
        {
          label: '3. Deploy Anywhere',
          description:
            'Publish forms via web link, embed on websites, or integrate into mobile apps—all responsive and optimized.',
          icon: 'GlobeIcon',
        },
        {
          label: '4. Collect & Integrate',
          description:
            "Form submissions automatically flow into MapleRecord's system with full audit trails and secure storage.",
          icon: 'UnlimitedIcon',
        },
      ],
    },

    sectionFour: {
      chipText: 'Measurable Impact',
      chipIcon: 'LightingIcon',
      label: 'Benefits You Can Measure',
      stats: [
        {
          value: '90%',
          title: 'Faster Form Creation',
          description:
            'Up to 90% faster form creation with AI-powered generation',
        },
        {
          value: '80%',
          title: 'Reduction in Development Time',
          description:
            '80% reduction in form development and deployment cycles',
        },
        {
          value: '100%',
          title: 'Mobile Responsive',
          description:
            '100% mobile-responsive forms that work perfectly on any device',
        },
        {
          value: '65%',
          title: 'Improvement in Completion Rates',
          description:
            '65% improvement in form completion rates with smart design',
        },
        {
          value: 'UnlimitedIcon',
          title: 'Seamless Data Integration',
          description:
            "Direct integration with MapleRecord's records management system",
          isIcon: true,
        },
      ],
    },

    sectionFive: {
      chipText: 'Features',
      chipIcon: 'LightingIcon',
      label: 'Key Capabilities',
      cardSection: [
        {
          label: 'Drag & Drop Builder',
          description:
            '<ul><li>• &nbsp; 100+ field types and widgets</li><li>• &nbsp; Real-time preview and editing</li><li>• &nbsp; Custom themes and branding</li></ul>',
          icon: 'PaintHolderIcon',
        },
        {
          label: 'Conditional Logic',
          description:
            '<ul><li>• &nbsp; Show/hide field rules</li><li>• &nbsp; Skip logic and branching</li><li>• &nbsp; Dynamic calculated fields</li></ul>',
          icon: 'LightingIcon',
        },
        {
          label: 'Analytics & Insights',
          description:
            '<ul><li>• &nbsp; Real-time submission dashboards</li><li>• &nbsp; Completion rate tracking</li><li>• &nbsp; Export to Excel/PDF</li></ul>',
          icon: 'BarChatIcon',
        },
        {
          label: 'Security & Compliance',
          description:
            '<ul><li>• &nbsp; End-to-end encryption</li><li>• &nbsp; HIPAA and GDPR compliance</li><li>• &nbsp; Role-based access control</li></ul>',
          icon: 'SheldCardIcon',
        },
        // {
        //   label: 'Scalable and Versioned Orchestration',
        //   description:
        //     '<ul><li>• &nbsp;Designed for enterprise scale and reliability</li><li>• &nbsp; Versioned workflow history with rollback support</li><li>• &nbsp; Consistent performance under high volume</li></ul>',
        //   icon: 'SettingIcon',
        // },
      ],
    },
    sectionSix: {
      chipText: 'Use Cases',
      chipIcon: 'HumanResourcesIcon',
      label: 'Who It Helps',
      description: 'MR Forms empowers a wide range of operational teams:',
      cardSection: [
        {
          label: 'Human Resources',
          description:
            'Streamline employee onboarding, time-off requests, and performance reviews with digital forms.',
          icon: 'HumanResourcesCardIcon',
        },
        {
          label: 'Healthcare Administration',
          description:
            'HIPAA-compliant patient intake, consent forms, and satisfaction surveys.',
          icon: 'HealthIcon',
        },
        {
          label: 'Legal & Compliance',
          description:
            'Create intake forms, document requests, and compliance attestation workflows.',
          icon: 'LegalIcon',
        },
        {
          label: 'Operations',
          description:
            'Automate service requests, facility bookings, and vendor management forms.',
          icon: 'SettingIcon',
        },
        {
          label: 'Research & Development',
          description:
            'Collect research data, project submissions, and experimental protocols securely.',
          icon: 'ResearchDeploymentIcon',
        },
        {
          label: 'Finance & Accounting',
          description:
            'Create expense reports, purchase orders, and budget request forms.',
          icon: 'FinanceIcon',
        },
      ],
    },
    scheduleSection: {
      label: 'Ready to build smarter forms?',
      description:
        'Transform data collection with AI-powered form building, seamless integrations, and enterprise-grade security.',
      buttonsText: ['Contact Sales'],
    },
  },
};

/*      Solutions Industries Content starts here */

export const industriesSolutions = {
  'financial-services': {
    sectionOne: {
      label: 'Financial Services Solutions',
      chipText: 'Industry Solutions',
      chipIcon: 'FinanceIcon',
      description:
        'Transform your financial institution with intelligent document management, automated workflows, and enterprise-grade compliance built for banking, wealth management, and insurance.',
      buttonsText: [
        { label: 'Request a Demo', href: '/contact-us#schedule-demo' },
      ],
      bottomText: 'Bank-Grade Security',
      image: FinanceImage,
    },
    sectionTwo: {
      label: 'Financial Services Challenges',
      description:
        'Modern financial institutions face increasing regulatory pressure, data security requirements, and customer expectations for rapid service delivery.',
      cardSection: [
        {
          label: 'Regulatory Compliance',
          description:
            'Navigate complex regulations including SOX, FINRA, SEC, GDPR, and AML requirements while maintaining complete audit trails.',
          icon: 'SheldCardIcon',
        },
        {
          label: 'Document Overload',
          description:
            'Manage millions of loan documents, account records, transaction data, and compliance reports across multiple systems and locations.',
          icon: 'FileIcon',
        },
        {
          label: 'Operational Efficiency',
          description:
            'Reduce manual processing times for loan origination, account opening, KYC verification, and fraud investigation workflows.',
          icon: 'ClockIcon',
        },
      ],
    },
    sectionThree: {
      chipText: 'MapleRecord Solutions',
      chipIcon: 'LightingIcon',
      label: 'How MapleRecord Serves Financial Services',
      cardSection: [
        {
          label: ' Intelligent Records Management',
          icon: 'UnlimitedIcon',
          description:
            'Secure document repository for loan files, account records, transaction history, and compliance documentation with automated retention policies.',
          featureHighlight: [
            'Centralized loan and account document storage',
            'Automated classification and metadata tagging',
            'Regulatory retention schedule enforcement',
            'Bank-grade encryption and access controls',
          ],
          buttonsText: ['Learn More About MR Records'],
          image: StateGovernImage,
        },
        {
          label: 'Requests Intake & Management',
          icon: 'FileIcon',
          description:
            'Streamline audit responses, regulatory inquiries, FOIA requests, and internal document requests with automated search and fulfillment.',
          featureHighlight: [
            'Rapid response to regulatory examinations',
            'Automated legal hold and eDiscovery support',
            'Customer account inquiry resolution',
            'Complete audit trail of all requests',
          ],
          buttonsText: ['Learn More About MR Requests'],
          image: MRRequestImage,
        },
        {
          label: 'Workflow Management',
          icon: 'LightingIcon',
          description:
            'Automate loan origination, account opening, KYC verification, compliance reviews, and approval workflows with no-code process orchestration.',
          featureHighlight: [
            'Automated loan processing and approvals',
            'KYC/AML compliance workflow automation',
            'Real-time process monitoring dashboards',
            'Integration with core banking systems',
          ],
          buttonsText: ['Learn More About MR Workflows'],
          image: MRWorkFlowImage,
        },
      ],
    },
    sectionFour: {
      chipText: 'Business Impact',
      chipIcon: 'GraphImproveIcon',
      label: 'Measurable Results for Financial Institutions',

      cardSection: [
        {
          percentage: '30-50%',
          label: 'Faster Response Times',
          description: 'faster regulatory and audit response times',
        },
        {
          percentage: '60%',
          label: 'Reduced Manual Effort',
          description: 'reduction in manual compliance effort',
        },
        {
          percentage: '100%',
          label: 'Audit Traceability',
          description:
            'audit traceability across records, requests, and workflows',
        },
        {
          percentage: 'Risk',
          label: 'Faster Response Times',
          description:
            'foperational and compliance risk through automated governance',
        },
      ],
    },
    sectionFive: {
      chipText: 'Use Cases',
      chipIcon: 'BarChatIcon',
      label: 'Financial Services Use Cases',

      cardSection: [
        {
          label: 'Loan Origination',
          description:
            'Automate document collection, verification, approval workflows, and record keeping for mortgage and commercial loans.',
        },
        {
          label: 'Account Opening',
          description:
            'Streamline KYC verification, identity checks, document capture, and approval processes for new customer accounts.',
        },
        {
          label: 'Regulatory Reporting',
          description:
            'Automate data collection, report generation, and submission for SEC, FINRA, FDIC, and other regulatory requirements.',
        },
        {
          label: 'Audit & Examination',
          description:
            'Respond rapidly to internal audits, regulatory exams, and third-party assessments with automated document retrieval.',
        },
        {
          label: 'Claims Processing',
          description:
            'Insurance carriers can automate claims intake, document review, fraud detection, and payment approval workflows.',
        },
        {
          label: 'Client Onboarding',
          description:
            'Wealth management and advisory firms can streamline client intake, suitability assessments, and account setup.',
        },
      ],
    },
    sectionSix: {
      chipText: 'Security & Compliance',
      chipIcon: 'SheldIcon',
      label: 'Built for Financial Services Security',
      description:
        'MapleRecord meets the stringent security and compliance requirements of banks, credit unions, insurance companies, and investment firms.',

      cardSection: [
        {
          label: 'Security Features',
          featureHighlight: [
            'End-to-end encryption (256-bit AES)',
            'Multi-factor authentication (MFA)',
            'Role-based access controls (RBAC)',
            'Complete audit logging',
            'Data residency options',
          ],
          featureMarkDownIcon: 'CircleThickIcon',
        },
      ],
    },
    scheduleSection: {
      // chipIcon: 'LockIcon',
      // chipText: 'Security & Compliance',
      label: 'Ready to Transform Your Financial Institution?',
      description:
        'Join leading banks, credit unions, and financial services firms using MapleRecord to modernize document management and workflow automation.',
      buttonsText: ['Schedule a Demo'],
    },
  },
  // Insurance
  insurance: {
    sectionOne: {
      label: 'Insurance Solutions',
      chipIcon: 'SheldIcon',
      chipText: 'Industry Solutions',
      description:
        'Accelerate claims processing, streamline policy administration, and ensure compliance with intelligent document management and automated workflows built for insurance carriers, brokers, and MGAs.',
      buttonsText: [
        { label: 'Request a Demo', href: '/contact-us#schedule-demo' },
      ],
      bottomText: 'Secure, Compliant Information Management',
      image: FinanceImage,
    },
    sectionTwo: {
      label: 'Insurance Industry Challenges',
      description:
        'Insurance companies face pressure to process claims faster, reduce operational costs, manage regulatory compliance, and deliver exceptional customer experiences.',
      cardSection: [
        {
          label: 'Claims Cycle Time',
          description:
            'Manual claims processing creates delays, increased costs, and customer dissatisfaction while managing documentation across multiple systems.',
          icon: 'ClockIcon',
        },
        {
          label: 'Policy Administration',
          description:
            'Managing policy documents, endorsements, renewals, and underwriting files across distributed teams and legacy systems.',
          icon: 'FileIcon',
        },
        {
          label: 'Regulatory Compliance',
          description:
            'Navigate state insurance regulations, data privacy laws, and audit requirements while maintaining complete record traceability.',
          icon: 'SheldCardIcon',
        },
      ],
    },
    sectionThree: {
      chipText: 'MapleRecord Solutions',
      chipIcon: 'LightingIcon',
      label: 'How MapleRecord Serves Insurance',
      cardSection: [
        {
          label: ' Intelligent Records Management',
          description:
            'Centralized repository for policy documents, claims files, underwriting records, and regulatory filings with automated retention and disposition.',
          featureHighlight: [
            'Unified storage for policies, claims, and underwriting files',
            'AI-powered document classification and indexing',
            'Automated retention based on policy type and state regulations',
            'Integration with core insurance platforms',
          ],
          buttonsText: ['Learn More About MR Records'],
          image: StateGovernImage,
          icon: 'UnlimitedIcon',
        },
        {
          label: 'Requests Intake & Management',
          description:
            'Accelerate responses to claims documentation requests, policy inquiries, regulatory audits, and subpoenas with intelligent search and retrieval.',
          featureHighlight: [
            'Fast response to claims adjuster document requests',
            'Automated handling of policyholder inquiries',
            'Regulatory audit and examination support',
            'Complete request tracking and audit trails',
          ],
          buttonsText: ['Learn More About MR Requests'],
          image: MRRequestImage,
          icon: 'FileIcon',
        },
        {
          label: 'Workflow Management',
          description:
            'Automate claims processing, policy underwriting, new business workflows, and renewal processes with AI-enabled workflow orchestration.',
          featureHighlight: [
            'End-to-end claims adjudication automation',
            'Underwriting workflow and risk assessment',
            'Policy renewal and endorsement processing',
            'Real-time workflow analytics and reporting',
          ],
          buttonsText: ['Learn More About MR Workflows'],
          image: MRWorkFlowImage,
          icon: 'LightingIcon',
        },
      ],
    },
    sectionFour: {
      chipText: 'Business Impact',
      chipIcon: 'GraphImproveIcon',
      label: 'Measurable Results for Insurance Companies',

      cardSection: [
        {
          percentage: '30-50%',
          label: 'Faster Processing',
          description: 'faster claims and request processing times',
        },
        {
          percentage: '60%',
          label: 'Reduced Manual Work',
          description: 'reduction in manual document handling',
        },
        {
          percentage: '100%',
          label: 'Audit Traceability',
          description:
            'audit traceability across policies, claims, and requests',
        },
        {
          percentage: 'Improved',
          label: 'Customer Satisfaction',
          description: 'through faster and more transparent responses',
        },
      ],
    },
    sectionFive: {
      chipText: 'Use Cases',
      chipIcon: 'BarChatIcon',
      label: 'Insurance Use Cases',

      cardSection: [
        {
          label: 'Claims Processing',
          description:
            'Automate FNOL intake, claims assignment, document collection, adjuster workflows, and payment approval for faster settlements.',
        },
        {
          label: 'Policy Underwriting',
          description:
            'Streamline application review, risk assessment, document verification, and underwriting decision workflows.',
        },
        {
          label: 'New Business Processing',
          description:
            'Accelerate policy issuance with automated document collection, verification, approval routing, and policy delivery.',
        },
        {
          label: 'Renewals & Endorsements',
          description:
            'Automate renewal processing, policy changes, endorsements, and customer communications with intelligent workflows.',
        },
        {
          label: 'Regulatory Compliance',
          description:
            'Ensure compliance with state insurance regulations, market conduct exams, and data privacy requirements.',
        },
        {
          label: 'Fraud Detection',
          description:
            'Support fraud investigation with complete document trails, automated flagging, and special investigation unit workflows.',
        },
      ],
    },
    sectionSix: {
      chipText: 'Security & Compliance',
      chipIcon: 'SheldIcon',
      label: 'Built for Insurance Security',
      description:
        'MapleRecord meets the strict security and compliance requirements of insurance carriers, MGAs, brokers, and reinsurers.',

      cardSection: [
        {
          label: 'Security Features',
          featureHighlight: [
            'Enterprise grade security and data protection',
            'Built for regulatory compliance and audit readiness',
            'Scales across high volume claims and policy operations',
            'Seamless integration across records, requests, and workflows',
            'Designed for reliability and operational continuity',
          ],
          featureMarkDownIcon: 'CircleThickIcon',
        },
      ],
    },
    scheduleSection: {
      // chipIcon: 'LockIcon',
      // chipText: 'Security & Compliance',
      label: 'Ready to Transform Your Insurance Operations?',
      description:
        'Join leading insurance carriers and MGAs using MapleRecord to modernize claims processing, policy administration, and compliance.',
      buttonsText: ['Contact Sales'],
    },
  },
  // Healthcare
  healthcare: {
    sectionOne: {
      label: 'Healthcare Solutions',
      chipText: 'Industry Solutions',
      chipIcon: 'HealthIcon',
      description:
        'Transform healthcare administration with secure patient record management, automated workflows, and HIPAA-compliant document handling built for hospitals, clinics, and health systems.',
      buttonsText: [
        { label: 'Request a Demo', href: '/contact-us#schedule-demo' },
      ],
      bottomText: 'Secure, Compliant Information Management',
      image: HealthcareImage,
    },
    sectionTwo: {
      label: 'Healthcare Industry Challenges',
      description:
        'Healthcare organizations face pressure to manage patient records securely, respond to medical record requests quickly, maintain HIPAA compliance, and reduce administrative burden.',
      cardSection: [
        {
          label: 'Record Request Delays',
          description:
            'Manual processing of patient record requests creates delays, increased costs, and patient dissatisfaction while managing documentation across multiple systems.',
          icon: 'ClockIcon',
        },
        {
          label: 'Administrative Records',
          description:
            'Managing patient files, administrative documents, operational records, and clinical documentation across distributed facilities and legacy systems.',
          icon: 'FileIcon',
        },
        {
          label: 'HIPAA Compliance',
          description:
            'Navigate HIPAA privacy and security rules, state regulations, and audit requirements while maintaining complete record traceability and patient privacy.',
          icon: 'SheldCardIcon',
        },
      ],
    },
    sectionThree: {
      chipText: 'MapleRecord Solutions',
      chipIcon: 'LightingIcon',
      label: 'How MapleRecord Serves Healthcare',
      cardSection: [
        {
          label: ' Intelligent Records Management',
          description:
            'Centralized repository for administrative records, operational documentation, and patient-related files with automated retention and HIPAA-compliant security.',
          featureHighlight: [
            'Unified storage for administrative and operational records',
            'AI-powered document classification and indexing',
            'Automated retention based on record type and regulations',
            'Integration with healthcare systems and EMRs',
          ],
          buttonsText: ['Learn More About MR Records'],
          image: StateGovernImage,
          icon: 'UnlimitedIcon',
        },
        {
          label: 'Requests Intake & Management',
          description:
            'Accelerate responses to patient record requests, legal inquiries, regulatory audits, and subpoenas with intelligent search and HIPAA-compliant retrieval.',
          featureHighlight: [
            'Fast response to patient record requests',
            'Automated handling of authorization and release forms',
            'Regulatory audit and compliance support',
            'Complete request tracking and audit trails',
          ],
          buttonsText: ['Learn More About MR Requests'],
          image: MRRequestImage,
          icon: 'FileIcon',
        },
        {
          label: 'Workflow Management',
          description:
            'Automate patient record requests, authorization processing, compliance workflows, and administrative tasks with AI-enabled workflow orchestration.',
          featureHighlight: [
            'End-to-end patient record request automation',
            'Authorization verification and release workflows',
            'Compliance and audit preparation automation',
            'Real-time workflow analytics and reporting',
          ],
          buttonsText: ['Learn More About MR Workflows'],
          image: MRWorkFlowImage,
          icon: 'LightingIcon',
        },
      ],
    },
    sectionFour: {
      chipText: 'Business Impact',
      chipIcon: 'GraphImproveIcon',
      label: 'Measurable Results for Healthcare Organizations',

      cardSection: [
        {
          percentage: '3x',
          label: 'Faster Fulfillment',
          description: 'faster request handling with automation',
        },
        {
          percentage: '60%',
          label: 'Reduced Admin Work',
          description: 'reduction in manual administrative tasks',
        },
        {
          percentage: '100%',
          label: 'Audit Traceability',
          description: 'complete audit trails for compliance',
        },
        {
          percentage: 'Improved',
          label: 'Patient Experience',
          description: 'through faster and more transparent responses',
        },
      ],
    },
    sectionFive: {
      chipText: 'Use Cases',
      chipIcon: 'BarChatIcon',
      label: 'Healthcare Use Cases',

      cardSection: [
        {
          label: 'Patient Record Requests',
          description:
            'Automate patient record request intake, authorization verification, record retrieval, redaction, and delivery with complete HIPAA compliance.',
        },
        {
          label: 'Administrative Records',
          description:
            'Centralize operational documents, policies, procedures, contracts, and administrative files with automated retention management.',
        },
        {
          label: 'Legal & Subpoena Response',
          description:
            'Streamline legal hold, subpoena response, litigation support, and eDiscovery with complete audit trails and chain of custody.',
        },
        {
          label: 'Compliance & Audits',
          description:
            'Automate compliance reporting, audit preparation, regulatory filings, and record retention with built-in governance controls.',
        },
        {
          label: 'Authorization Management',
          description:
            'Track and verify patient authorizations, release forms, and consent documentation with automated workflow routing.',
        },
        {
          label: 'Inter-facility Transfers',
          description:
            'Facilitate secure record sharing between facilities, providers, and care teams while maintaining HIPAA compliance.',
        },
      ],
    },
    sectionSix: {
      chipText: 'Security & Compliance',
      chipIcon: 'LockIcon',
      label: 'Built for Healthcare Security',
      description:
        'MapleRecord meets the strict security and compliance requirements of hospitals, health systems, clinics, and healthcare providers.',

      cardSection: [
        {
          label: 'Security Features',
          featureHighlight: [
            'Enterprise grade security and data protection',
            'Built for HIPAA compliance and audit readiness',
            'Scales across multi-facility healthcare operations',
            'Seamless integration across records, requests, and workflows',
            'Designed for reliability and operational continuity',
          ],
          featureMarkDownIcon: 'CircleThickIcon',
        },
      ],
    },
    scheduleSection: {
      label: 'Ready to Transform Your Healthcare Administration?',
      description:
        'Join leading healthcare organizations using MapleRecord to modernize record management, automate workflows, and ensure HIPAA compliance.',
      buttonsText: ['Contact Sales'],
    },
  },
  // Education
  education: {
    sectionOne: {
      label: 'Educational Institutions',
      chipText: 'Industry Solutions',
      chipIcon: 'AwardIcon',
      description:
        'Transform academic administration with secure, compliant student record management and automated workflows for K–12 schools, colleges, and universities.',
      buttonsText: [
        { label: 'Request a Demo', href: '/contact-us#schedule-demo' },
      ],
      bottomText: 'Secure, Compliant Information Management',
      image: RDImage,
    },
    sectionTwo: {
      label: 'Education Industry Challenges',
      description:
        'Educational institutions face pressure to manage student records securely, respond to transcript requests quickly, and reduce administrative burden while maintaining regulatory compliance.',
      cardSection: [
        {
          label: 'Record Request Delays',
          description:
            'Manual processing of transcript and student record requests creates delays, increased costs, and student dissatisfaction while managing documentation across multiple systems.',
          icon: 'ClockIcon',
        },
        {
          label: 'Student Records Management',
          description:
            'Managing student files, academic records, enrollment documents, and administrative records across distributed campuses and legacy systems.',
          icon: 'FileIcon',
        },
        {
          label: 'FERPA Compliance',
          description:
            'Navigate FERPA privacy rules, state regulations, and audit requirements while maintaining complete record traceability and student privacy protection.',
          icon: 'SheldCardIcon',
        },
      ],
    },
    sectionThree: {
      chipText: 'MapleRecord Solutions',
      chipIcon: 'LightingIcon',
      label: 'How MapleRecord Serves Education',
      cardSection: [
        {
          label: ' Intelligent Records Management',
          description:
            'Centralized repository for student records, academic transcripts, enrollment documents, and administrative files with automated retention and compliant security.',
          featureHighlight: [
            'Unified storage for student and administrative records',
            'AI-powered document classification and indexing',
            'Automated retention based on record type and regulations',
            'Integration with student information systems',
          ],
          buttonsText: ['Learn More About MR Records'],
          image: StateGovernImage,
          icon: 'UnlimitedIcon',
        },
        {
          label: 'Requests Intake & Management',
          description:
            'Accelerate responses to transcript requests, student record inquiries, verification requests, and subpoenas with intelligent search and compliant retrieval.',
          featureHighlight: [
            'Fast response to transcript and record requests',
            'Automated handling of verification and authorization forms',
            'Regulatory audit and compliance support',
            'Complete request tracking and audit trails',
          ],
          buttonsText: ['Learn More About MR Requests'],
          image: MRRequestImage,
          icon: 'FileIcon',
        },
        {
          label: 'Workflow Management',
          description:
            'Automate transcript requests, enrollment processing, records transfer, and administrative tasks with AI-enabled workflow orchestration.',
          featureHighlight: [
            'End-to-end transcript request automation',
            'Enrollment and registration workflows',
            'Student records transfer and verification',
            'Real-time workflow analytics and reporting',
          ],
          buttonsText: ['Learn More About MR Workflows'],
          image: MRWorkFlowImage,
          icon: 'LightingIcon',
        },
      ],
    },
    sectionFour: {
      chipText: 'Business Impact',
      chipIcon: 'GraphImproveIcon',
      label: 'Measurable Results for Educational Institutions',

      cardSection: [
        {
          percentage: '3x',
          label: 'Faster Fulfillment',
          description: 'faster transcript and record request handling',
        },
        {
          percentage: '60%',
          label: 'Reduced Admin Work',
          description: 'reduction in manual administrative tasks',
        },
        {
          percentage: '100%',
          label: 'Audit Traceability',
          description: 'complete audit trails for compliance',
        },
        {
          percentage: 'Improved',
          label: 'Student Experience',
          description: 'through faster and more transparent responses',
        },
      ],
    },
    sectionFive: {
      chipText: 'Use Cases',
      chipIcon: 'BarChatIcon',
      label: 'Education Use Cases',

      cardSection: [
        {
          label: 'Transcript Requests',
          description:
            'Automate transcript request intake, verification, record retrieval, processing, and delivery with complete FERPA compliance and audit trails.',
        },
        {
          label: 'Student Records Management',
          description:
            'Centralize academic records, enrollment documents, disciplinary files, and administrative documents with automated retention management.',
        },
        {
          label: 'Enrollment Processing',
          description:
            'Streamline student admissions, registration, enrollment verification, and records transfer with automated workflow routing and approval.',
        },
        {
          label: 'Compliance & Audits',
          description:
            'Automate compliance reporting, audit preparation, regulatory filings, and record retention with built-in governance controls.',
        },
        {
          label: 'Verification Services',
          description:
            'Process degree verification, employment verification, background checks, and third-party authorization requests efficiently.',
        },
        {
          label: 'Records Transfer',
          description:
            'Facilitate secure record sharing between institutions, districts, and external parties while maintaining FERPA compliance.',
        },
      ],
    },
    sectionSix: {
      chipText: 'Security & Compliance',
      chipIcon: 'LockIcon',
      label: 'Built for Education Security',
      description:
        'MapleRecord meets the strict security and compliance requirements of K-12 schools, colleges, universities, and school districts.',

      cardSection: [
        {
          label: 'Security Features',
          featureHighlight: [
            'Enterprise grade security and data protection',
            'Built for FERPA compliance and audit readiness',
            'Scales across multi-campus educational operations',
            'Seamless integration across records, requests, and workflows',
            'Designed for reliability and operational continuity',
          ],
          featureMarkDownIcon: 'CircleThickIcon',
        },
      ],
    },
    scheduleSection: {
      label: 'Ready to Transform Your Educational Administration?',
      description:
        'Join leading educational institutions using MapleRecord to modernize student records management, automate workflows, and ensure FERPA compliance.',
      buttonsText: ['Schedule a Demo'],
    },
  },

  // Manufacturing

  manufacturing: {
    sectionOne: {
      label: 'Manufacturing Operations',
      chipIcon: 'FactoryIcon',
      chipText: 'Industry Solutions',
      description:
        'Streamline quality documentation, manage compliance records, and automate manufacturing workflows with intelligent document management built for production excellence and regulatory compliance.',
      buttonsText: [
        { label: 'Request a Demo', href: '/contact-us#schedule-demo' },
      ],
      bottomText: 'Secure, Compliant Information Management',
      image: OperationsImage,
    },
    sectionTwo: {
      label: 'Manufacturing Industry Challenges',
      description:
        'Manufacturing companies face pressure to maintain quality documentation, ensure regulatory compliance, manage supply chain records, and drive operational efficiency across production facilities.',
      cardSection: [
        {
          label: 'Quality Documentation',
          description:
            'Manual processing of transcript and student record requests creates delays, increased costs, and student dissatisfaction while managing documentation across multiple systems.',
          icon: 'ClockIcon',
        },
        {
          label: 'Compliance Records',
          description:
            'Managing ISO certifications, safety documentation, environmental permits, and regulatory filings across distributed manufacturing sites.',
          icon: 'FileIcon',
        },
        {
          label: 'Audit Preparedness',
          description:
            'Navigate complex regulatory audits, customer inspections, and certification renewals while maintaining complete traceability and documentation control.',
          icon: 'SheldCardIcon',
        },
      ],
    },
    sectionThree: {
      chipText: 'MapleRecord Solutions',
      chipIcon: 'LightingIcon',
      label: 'How MapleRecord Serves Manufacturing',
      cardSection: [
        {
          label: ' Intelligent Records Management',
          description:
            'Centralized repository for quality records, technical documentation, compliance certificates, and operational files with automated retention and version control.',
          featureHighlight: [
            'Unified storage for quality and compliance documentation',
            'AI-powered document classification and indexing',
            'Automated retention based on document type and regulations',
            'Integration with ERP and manufacturing systems',
          ],
          buttonsText: ['Learn More About MR Records'],
          image: StateGovernImage,
          icon: 'UnlimitedIcon',
        },
        {
          label: 'Requests Intake & Management',
          description:
            'Accelerate responses to quality documentation requests, customer audits, regulatory inquiries, and certification renewals with intelligent search and retrieval.',
          featureHighlight: [
            'Fast response to quality and certification requests',
            'Automated handling of customer audit documentation',
            'Regulatory audit and compliance support',
            'Complete request tracking and audit trails',
          ],
          buttonsText: ['Learn More About MR Requests'],
          image: MRRequestImage,
          icon: 'FileIcon',
        },
        {
          label: 'Workflow Management',
          description:
            'Automate quality approval processes, document control workflows, change management, and compliance reporting with AI-enabled workflow orchestration.',
          featureHighlight: [
            'End-to-end quality document approval automation',
            'Engineering change order (ECO) workflows',
            'Non-conformance and CAPA process automation',
            'Real-time workflow analytics and reporting',
          ],
          buttonsText: ['Learn More About MR Workflows'],
          image: MRWorkFlowImage,
          icon: 'LightingIcon',
        },
      ],
    },
    sectionFour: {
      chipText: 'Business Impact',
      chipIcon: 'GraphImproveIcon',
      label: 'Measurable Results for Manufacturing Organizations',

      cardSection: [
        {
          percentage: '50%',
          label: 'Faster Documentation',
          description: 'reduction in quality document processing time',
        },
        {
          percentage: '60%',
          label: 'Reduced Admin Work',
          description: 'reduction in manual compliance tasks',
        },
        {
          percentage: '100%',
          label: 'Audit Traceability',
          description: 'complete audit trails for quality and compliance',
        },
        {
          percentage: 'Improved',
          label: 'Audit Readiness',
          description: 'through organized and accessible documentation',
        },
      ],
    },
    sectionFive: {
      chipText: 'Use Cases',
      chipIcon: 'BarChatIcon',
      label: 'Manufacturing Use Cases',

      cardSection: [
        {
          label: 'Quality Management',
          description:
            'Centralize quality records, inspection reports, test results, and certifications with automated workflows for non-conformance and corrective actions.',
        },
        {
          label: 'ISO Certification',
          description:
            'Maintain ISO 9001, ISO 14001, and industry-specific certifications with automated document control, version management, and audit trails.',
        },
        {
          label: 'Engineering Documentation',
          description:
            'Manage technical drawings, specifications, BOMs, and engineering change orders with version control and approval workflows.',
        },
        {
          label: 'Compliance & Audits',
          description:
            'Streamline regulatory compliance, customer audits, and certification renewals with centralized documentation and automated reporting.',
        },
        {
          label: 'Supplier Quality',
          description:
            'Track supplier certifications, quality agreements, inspection reports, and performance documentation across your supply chain.',
        },
        {
          label: 'Safety & Environmental',
          description:
            'Manage safety data sheets, environmental permits, incident reports, and compliance documentation with automated retention.',
        },
      ],
    },
    sectionSix: {
      chipText: 'Security & Compliance',
      chipIcon: 'LockIcon',
      label: 'Built for Manufacturing Security',
      description:
        'MapleRecord meets the strict security and compliance requirements of manufacturing companies, from aerospace and automotive to pharmaceuticals and electronics.',

      cardSection: [
        {
          label: 'Security Features',
          featureHighlight: [
            'Enterprise grade security and data protection',
            'Built for regulatory compliance and audit readiness',
            'Scales across multi-site manufacturing operations',
            'Seamless integration across records, requests, and workflows',
            'Designed for reliability and operational continuity',
          ],
          featureMarkDownIcon: 'CircleThickIcon',
        },
      ],
    },
    scheduleSection: {
      label: 'Ready to Transform Your Manufacturing Operations?',
      description:
        'Join leading manufacturers using MapleRecord to modernize quality documentation, automate compliance workflows, and ensure audit readiness.',
      buttonsText: ['Schedule a Demo'],
    },
  },
  // Manufacturing

  'state-local': {
    sectionOne: {
      label: 'State & Local Government Solutions',
      chipText: 'Industry Solutions',
      chipIcon: 'FactoryIcon',
      description:
        'Transform public records management with secure document handling, automated FOIA processing, and compliant workflows built for municipal governments, state agencies, counties, and public institutions.',
      buttonsText: [
        { label: 'Request a Demo', href: '/contact-us#schedule-demo' },
      ],
      bottomText: 'Secure, Compliant Information Management',
      image: LegalImage,
    },
    sectionTwo: {
      label: 'Government Sector Challenges',
      description:
        'State and local governments face pressure to respond to public records requests quickly, maintain transparency, ensure compliance with retention laws, and manage legacy documentation systems.',
      cardSection: [
        {
          label: 'FOIA Request Backlog',
          description:
            'Manual processing of Freedom of Information Act and public records requests creates delays, increased costs, and public dissatisfaction while managing documentation across departments.',
          icon: 'ClockIcon',
        },
        {
          label: 'Records Management',
          description:
            'Managing public records, administrative documents, permits, licenses, and legacy files across distributed agencies and antiquated systems.',
          icon: 'FileIcon',
        },
        {
          label: 'Compliance & Transparency',
          description:
            'Navigate state and federal regulations, public records laws, retention schedules, and audit requirements while maintaining transparency and accountability.',
          icon: 'SheldCardIcon',
        },
      ],
    },
    sectionThree: {
      chipText: 'MapleRecord Solutions',
      label: 'How MapleRecord Serves Government',
      cardSection: [
        {
          label: ' Intelligent Records Management',
          description:
            'Centralized repository for public records, administrative documents, permits, licenses, and historical files with automated retention schedules and compliant security.',
          featureHighlight: [
            'Unified storage for public and administrative records',
            'AI-powered document classification and indexing',
            'Automated retention based on state retention schedules',
            'Integration with legacy government systems',
          ],
          buttonsText: ['Learn More About MR Records'],
          image: StateGovernImage,
          icon: 'UnlimitedIcon',
        },
        {
          label: 'Requests Intake & Management',
          description:
            'Accelerate responses to FOIA requests, public records inquiries, subpoenas, and information requests with intelligent search and compliant retrieval workflows.',
          featureHighlight: [
            'Fast response to FOIA and public records requests',
            'Automated redaction and exemption handling',
            'Regulatory audit and compliance support',
            'Complete request tracking and audit trails',
          ],
          buttonsText: ['Learn More About MR Requests'],
          image: MRRequestImage,
          icon: 'FileIcon',
        },
        {
          label: 'Workflow Management',

          description:
            'Automate permit processing, license renewals, records requests, and administrative tasks with AI-enabled workflow orchestration for government efficiency.',
          featureHighlight: [
            'End-to-end FOIA request automation',
            'Permit and license processing workflows',
            'Inter-departmental routing and collaboration',
            'Real-time workflow analytics and reporting',
          ],
          buttonsText: ['Learn More About MR Workflows'],
          image: MRWorkFlowImage,
          icon: 'LightingIcon',
        },
      ],
    },
    sectionFour: {
      chipText: 'Business Impact',
      chipIcon: 'GraphImproveIcon',
      label: 'Measurable Results for Government Agencies',

      cardSection: [
        {
          percentage: '70%',
          label: 'Faster FOIA Response',
          description: 'reduction in public records request fulfillment time',
        },
        {
          percentage: '55%',
          label: 'Reduced Admin Costs',
          description:
            'decrease in manual processing and administrative overhead',
        },
        {
          percentage: '100%',
          label: 'Compliance Traceability',
          description:
            'complete audit trails for transparency and accountability',
        },
        {
          percentage: 'Improved',
          label: 'Public Trust',
          description: 'through transparent and timely responses',
        },
      ],
    },
    sectionFive: {
      chipText: 'Use Cases',
      chipIcon: 'BarChatIcon',
      label: 'Government Use Cases',

      cardSection: [
        {
          label: 'FOIA Request Processing',
          description:
            'Automate Freedom of Information Act request intake, search, review, redaction, approval, and delivery with complete compliance and audit trails.',
        },
        {
          label: 'Public Records Management',
          description:
            'Centralize meeting minutes, ordinances, resolutions, contracts, and historical records with automated retention schedule management.',
        },
        {
          label: 'Permits & Licenses',
          description:
            'Streamline building permits, business licenses, zoning approvals, and inspections with automated workflow routing and tracking.',
        },
        {
          label: 'Compliance & Audits',
          description:
            'Automate compliance reporting, audit preparation, state reporting requirements, and record retention with built-in governance controls.',
        },
        {
          label: 'Inter-Agency Collaboration',
          description:
            'Facilitate secure document sharing between departments, agencies, and jurisdictions while maintaining proper access controls.',
        },
        {
          label: 'Historical Archive',
          description:
            'Digitize and preserve historical records, vital records, and legacy documents with long-term retention and public access capabilities.',
        },
      ],
    },
    sectionSix: {
      chipText: 'Security & Compliance',
      chipIcon: 'LockIcon',
      label: 'Built for Government Security',
      description:
        'MapleRecord meets the strict security and compliance requirements of state agencies, municipal governments, county offices, and public institutions.',

      cardSection: [
        {
          label: 'Security Features',
          featureHighlight: [
            'Government-grade security and data protection',
            'Built for public records laws and FOIA compliance',
            'Scales across multi-agency government operations',
            'Seamless integration across records, requests, and workflows',
            'Designed for transparency and public accountability',
          ],
          featureMarkDownIcon: 'CircleThickIcon',
        },
      ],
    },
    scheduleSection: {
      label: 'Ready to Transform Your Public Sector Operations?',
      description:
        'Join state and local governments using MapleRecord to modernize public records management, automate FOIA processing, and ensure transparency and compliance.',
      buttonsText: ['Schedule a Demo'],
    },
  },
};

// Department Solutions Content starts here

export const departmentalSolutions = {
  'finance-accounting': {
    sectionOne: {
      label: 'Finance & Accounting',
      chipIcon: 'CalculatorIcon',
      chipText: 'Department Solutions',
      description:
        'Streamline financial document management, automate accounting workflows, and ensure regulatory compliance with intelligent solutions designed for finance and accounting departments.',
      buttonsText: [
        { label: 'Request a Demo', href: '/contact-us#schedule-demo' },
      ],
      bottomText: 'Audit-Ready | Secure',
      image: FinanceImage,
    },
    sectionTwo: {
      label: 'Finance & Accounting Challenges',
      description:
        'Finance and accounting teams struggle with managing vast amounts of financial documents, ensuring audit compliance, maintaining version control, and meeting strict regulatory deadlines.',
      cardSection: [
        {
          label: 'Manual Document Processing',
          description:
            'Time-consuming manual processing of invoices, receipts, expense reports, and financial statements creates bottlenecks and delays in month-end close.',
          icon: 'ClockIcon',
        },
        {
          label: 'Audit & Compliance Risk',
          description:
            'Difficulty maintaining audit trails, ensuring document retention compliance, and quickly retrieving records for audits and regulatory reviews.',
          icon: 'FileIcon',
        },
        {
          label: 'Data Security Concerns',
          description:
            'Protecting sensitive financial data, ensuring proper access controls, and maintaining compliance with SOX, GDPR, and other financial regulations.',
          icon: 'SheldCardIcon',
        },
      ],
    },
    sectionThree: {
      chipText: 'MapleRecord Solutions',
      chipIcon: 'LightingIcon',
      label: 'End to End Use Case Flow',
      cardSection: [
        {
          label: 'A financial or audit request is initiated',
          description:
            'Information requests related to audits, vendors, or internal reviews are captured and tracked with defined timelines.',
          icon: '1',
        },
        {
          label: 'Relevant financial records are retrieved securely',
          description:
            'Invoices, contracts, financial statements, and audit documents are accessed from a governed, centralized repository with full version history.',
          icon: '2',
        },
        {
          label: 'Reviews and approvals are automated',
          description:
            'Approval workflows route documents through finance managers, compliance teams, and leadership based on predefined rules.',
          icon: '3',
        },
        {
          label: 'A compliant outcome is delivered',
          description:
            'Requests are completed on time with secure delivery, full traceability, and audit ready documentation.',
          icon: '4',
        },
      ],
    },
    sectionFour: {
      chipText: 'Business Impact',
      chipIcon: 'GraphImproveIcon',
      label: 'Measurable Benefits',

      cardSection: [
        {
          percentage: '75%',
          label: 'Faster Month-End Close',
          description: 'reduction in time spent on financial close processes',
        },
        {
          percentage: '60%',
          label: 'Reduced Processing Time',
          description: 'decrease in invoice and expense report processing time',
        },
        {
          percentage: '100%',
          label: 'Audit Readiness',
          description: 'complete audit trails and compliance documentation',
        },
        {
          percentage: '85%',
          label: 'Improved Accuracy',
          description: 'reduction in manual data entry errors',
        },
      ],
    },
    sectionFive: {
      chipText: 'Use Cases',
      chipIcon: 'BarChatIcon',
      label: 'How MapleRecord Helps',

      cardSection: [
        {
          label: 'Accounts Payable Automation',
          description:
            'Automate invoice receipt, data extraction, approval routing, payment processing, and vendor record updates with full audit trails.',
        },
        {
          label: 'Expense Management',
          description:
            'Streamline expense report submission, receipt validation, approval workflows, and reimbursement processing with policy compliance checks.',
        },
        {
          label: 'Financial Close Management',
          description:
            'Accelerate month-end and year-end close processes with automated checklist management, document collection, and reconciliation workflows.',
        },
        {
          label: 'Audit & Compliance',
          description:
            'Prepare for audits with automated document gathering, audit trail generation, compliance reporting, and secure auditor access.',
        },
        {
          label: 'Tax Document Management',
          description:
            'Organize and manage tax documents, forms, filings, and supporting documentation with automated retention and retrieval.',
        },
        {
          label: 'Contract & Agreement Tracking',
          description:
            'Manage vendor contracts, service agreements, and financial commitments with automated renewal alerts and compliance monitoring.',
        },
      ],
    },
    sectionSix: {
      chipText: 'Security & Compliance',
      chipIcon: 'LockIcon',
      label: 'Built for Financial Security',
      description:
        'MapleRecord meets the strict security and compliance requirements of finance and accounting departments across all industries.',

      cardSection: [
        {
          label: 'Security & Compliance Features',
          featureHighlight: [
            'SOX compliance with complete audit trails',
            'Bank-level encryption and data protection',
            'Role-based access controls and segregation of duties',
            'Automated retention policies for tax and regulatory compliance',
            'Integration with ERP systems (SAP, Oracle, NetSuite, QuickBooks)',
            ,
          ],
          featureMarkDownIcon: 'CircleThickIcon',
        },
      ],
    },
    scheduleSection: {
      label: 'Ready to Transform Your Finance Operations?',
      description:
        'Join finance and accounting teams using MapleRecord to automate document processing, accelerate financial close, and ensure audit readiness.',
      buttonsText: ['Schedule a Demo'],
    },
  },

  // Legal & Compliance
  'legal-compliance': {
    sectionOne: {
      label: 'Legal & Compliance',
      chipText: 'Department Solutions',
      description:
        'Centralize legal document management, automate compliance workflows, and mitigate risk with intelligent solutions designed for legal and compliance departments.',
      buttonsText: [
        { label: 'Request a Demo', href: '/contact-us#schedule-demo' },
      ],
      bottomText: 'Audit-Ready | Secure',
      image: LegalImage,
    },
    sectionTwo: {
      label: 'Legal & Compliance Challenges',
      description:
        'Legal and compliance teams face mounting pressure to manage complex regulatory requirements, maintain document retention policies, respond to legal requests, and mitigate organizational risk.',
      cardSection: [
        {
          label: 'Slow Legal Responses',
          description:
            'Delayed responses to litigation holds, discovery requests, and regulatory inquiries due to scattered documents and manual search processes.',
          icon: 'ClockIcon',
        },
        {
          label: 'Compliance Risk Exposure',
          description:
            'Difficulty tracking regulatory changes, ensuring policy adherence, maintaining retention schedules, and demonstrating compliance to auditors.',
          icon: 'WarningIcon',
        },
        {
          label: 'Document Fragmentation',
          description:
            'Contracts, agreements, policies, and legal records scattered across departments, systems, and locations without centralized governance.',
          icon: 'FileSearchIcon',
        },
      ],
    },
    sectionThree: {
      chipText: 'Workflow',
      chipIcon: 'LightingIcon',
      label: 'End to End Use Case Flow',
      cardSection: [
        {
          label: 'A legal or compliance request is received',
          description:
            'Litigation holds, discovery requests, regulatory inquiries, or internal compliance reviews are logged and tracked with defined deadlines.',
          icon: '1',
        },
        {
          label: 'Relevant documents are identified and preserved',
          description:
            'Contracts, policies, communications, and records are located using intelligent search and automatically placed on legal hold with preservation notices.',
          icon: '2',
        },
        {
          label: 'Review and approval workflows execute',
          description:
            'Documents route through legal counsel, compliance officers, and stakeholders for review, redaction, and approval based on matter type.',
          icon: '3',
        },
        {
          label: 'Compliant production and delivery',
          description:
            'Responsive documents are produced in required formats with proper redactions, privilege logs, and complete chain-of-custody documentation.',
          icon: '4',
        },
      ],
    },
    sectionFour: {
      chipText: 'Business Impact',
      chipIcon: 'GraphImproveIcon',
      label: 'Measurable Benefits',

      cardSection: [
        {
          percentage: '80%',
          label: 'Faster Response Times',
          description:
            'reduction in time to respond to discovery and legal requests',
        },
        {
          percentage: '70%',
          label: 'Lower Legal Costs',
          description: 'decrease in external legal and eDiscovery expenses',
        },
        {
          percentage: '100%',
          label: 'Compliance Coverage',
          description: 'complete audit trails and regulatory documentation',
        },
        {
          percentage: '90%',
          label: 'Risk Reduction',
          description:
            'improvement in compliance adherence and policy enforcement',
        },
      ],
    },
    sectionFive: {
      chipText: 'Use Cases',
      chipIcon: 'BarChatIcon',
      label: 'How MapleRecord Helps',

      cardSection: [
        {
          label: 'Contract Lifecycle Management',
          description:
            'Centralize contract creation, negotiation, approval, execution, and renewal tracking with automated alerts for key dates and obligations.',
        },
        {
          label: 'Legal Hold & eDiscovery',
          description:
            'Implement litigation holds, preserve relevant documents, conduct defensible searches, and manage discovery production with complete audit trails.',
        },
        {
          label: 'Regulatory Compliance Management',
          description:
            'Track regulatory requirements, maintain compliance documentation, automate policy updates, and generate regulatory reports for audits.',
        },
        {
          label: 'Policy & Procedure Management',
          description:
            'Create, distribute, track acknowledgment, and ensure version control for corporate policies, procedures, and compliance guidelines.',
        },
        {
          label: 'Legal Matter Management',
          description:
            'Organize documents by matter, track case timelines, manage outside counsel relationships, and control legal spend with centralized visibility.',
        },
        {
          label: 'Records Retention & Disposal',
          description:
            'Automate retention schedules, ensure proper disposal of expired records, maintain defensible destruction records, and reduce storage costs.',
        },
      ],
    },
    sectionSix: {
      chipText: 'Security & Compliance Features',
      chipIcon: 'LockIcon',
      label: 'Built for Legal Security',
      description:
        'MapleRecord meets the rigorous security and compliance requirements of legal and compliance departments handling sensitive and privileged information.',
      cardSection: [
        {
          label: 'Security & Compliance Features',
          featureHighlight: [
            'Attorney-client privilege protection and ethical walls',
            'Legal hold management with defensible preservation',
            'Role-based access controls and need-to-know restrictions',
            'Automated retention and defensible deletion policies',
            'Integration with contract management and legal tech platforms',
            ,
          ],
          featureMarkDownIcon: 'CircleThickIcon',
        },
      ],
    },
    scheduleSection: {
      label: 'Ready to Transform Your Legal Operations?',
      description:
        'Join legal and compliance teams using MapleRecord to accelerate response times, reduce legal costs, and mitigate organizational risk.',
      buttonsText: ['Schedule a Demo'],
    },
  },

  // Human Resource
  'human-resource': {
    sectionOne: {
      label: 'Human Resource',
      chipText: 'Department Solutions',
      chipIcon: 'HumanResourcesIcon',
      description:
        'Streamline employee records management, automate HR workflows, and ensure compliance with comprehensive document management solutions built for modern HR departments.',
      buttonsText: [
        { label: 'Request a Demo', href: '/contact-us#schedule-demo' },
      ],
      bottomText: 'Simplify HR operations',
      image: HumanResource,
    },
    sectionTwo: {
      label: 'Human Resource Challenges',
      description:
        'HR teams struggle with managing employee files across multiple systems, responding to internal requests, maintaining compliance with employment regulations, and protecting sensitive employee information.',
      cardSection: [
        {
          label: 'Manual Record Retrieval',
          description:
            'Time-consuming searches through file cabinets, shared drives, and multiple systems to locate employment records, certifications, and performance documents.',
          icon: 'ClockIcon',
        },
        {
          label: 'Compliance & Data Privacy Risks',
          description:
            'Difficulty maintaining EEOC compliance, managing retention schedules, protecting PII, and responding to employment verification and audit requests.',
          icon: 'SheldCardIcon',
        },
        {
          label: 'Fragmented Employee Records',
          description:
            'Employee files scattered across HR systems, payroll platforms, email, and physical storage without a single source of truth or version control.',
          icon: 'UnlimitedIcon',
        },
      ],
    },
    sectionThree: {
      chipText: 'Workflow',
      chipIcon: 'LightingIcon',
      label: 'End to End Use Case Flow',
      cardSection: [
        {
          label: 'An HR request or process is initiated',
          description:
            'Employee or internal requests such as onboarding, document access, or policy acknowledgements are captured and tracked with defined timelines.',
          icon: '1',
        },
        {
          label: 'Relevant employee records are retrieved securely',
          description:
            'Personnel files, contracts, policies, and historical documents are accessed from a centralized, governed repository with full version history.',
          icon: '2',
        },
        {
          label: 'Reviews and approvals are automated',
          description:
            'Workflow automation routes tasks through HR managers, legal, and leadership based on predefined rules and roles.',
          icon: '3',
        },
        {
          label: 'A secure outcome is delivered',
          description:
            'Requests are completed on time with controlled access, secure delivery, and full audit traceability.',
          icon: '4',
        },
      ],
    },
    sectionFour: {
      chipText: 'Business Impact',
      chipIcon: 'GraphImproveIcon',
      label: 'Measurable Benefits',

      cardSection: [
        {
          percentage: '30–45%',
          label: 'Faster Request Processing',
          description: 'faster employee request processing',
        },
        {
          percentage: '60%',
          label: 'Reduction in Manual Work',
          description: 'reduction in manual HR administrative work',
        },
        {
          percentage: '100%',
          label: 'Audit Traceability',
          description:
            'audit traceability across employee records and workflows',
        },
        {
          percentage: '✓',
          label: 'Data Privacy & Compliance',
          description: 'improved data privacy and compliance',
        },
      ],
    },
    sectionFive: {
      chipText: 'Use Cases',
      chipIcon: 'BarChatIcon',
      label: 'How MapleRecord Helps',

      cardSection: [
        {
          label: 'Employee Records Management',
          description:
            'Centralize complete employee files from hire to retire including applications, onboarding paperwork, performance reviews, and exit documentation.',
        },
        {
          label: 'Employment Verification',
          description:
            'Automate responses to verification requests from lenders, background screeners, and government agencies with proper authorization and audit trails.',
        },
        {
          label: 'Onboarding & Offboarding',
          description:
            'Streamline new hire paperwork collection, document signing, and offboarding checklists with automated workflows and status tracking.',
        },
        {
          label: 'Compliance & Audit Support',
          description:
            'Maintain I-9s, EEOC reports, FMLA documentation, and other compliance records with proper retention and easy retrieval for audits and investigations.',
        },
        {
          label: 'Training & Certifications',
          description:
            'Track mandatory training completion, professional licenses, certifications, and continuing education with automated expiration alerts and renewals.',
        },
        {
          label: 'Benefits Administration',
          description:
            'Organize enrollment forms, beneficiary designations, leave requests, and benefits communications with secure employee self-service access.',
        },
      ],
    },
    sectionSix: {
      chipText: 'Security & Compliance',
      chipIcon: 'LockIcon',
      label: 'Built for HR Security',
      description:
        'MapleRecord meets the stringent security and privacy requirements of HR departments managing sensitive employee personal information.',
      cardSection: [
        {
          label: 'Security & Compliance Features',
          featureHighlight: [
            'PII and PHI protection with encryption at rest and in transit',
            'Role-based access controls for employee confidentiality;',
            'Automated retention schedules for employment records',
            'EEOC, FLSA, FMLA, and labor law compliance support',
            'Integration with HRIS, payroll, and benefits platforms',
            ,
          ],
          featureMarkDownIcon: 'CircleThickIcon',
        },
      ],
    },
    scheduleSection: {
      label: 'Ready to Transform Your HR Operations?',
      description:
        'Join HR teams using MapleRecord to streamline employee records management, accelerate request fulfillment, and ensure compliance.',
      buttonsText: ['Schedule a Demo'],
    },
  },

  // Operations
  operations: {
    sectionOne: {
      label: 'Operations',
      chipIcon: 'SettingIcon',
      chipText: 'Department Solutions',
      description:
        'Optimize operational workflows, centralize process documentation, and ensure supply chain compliance with intelligent document management built for operations teams.',
      buttonsText: [
        { label: 'Request a Demo', href: '/contact-us#schedule-demo' },
      ],
      bottomText: 'Reduced bottlenecks',
      image: OperationsImage,
    },
    sectionTwo: {
      label: 'Operations Challenges',
      description:
        'Operations teams struggle with managing vendor documentation, maintaining standard operating procedures, tracking quality certifications, and ensuring supply chain visibility across complex workflows.',
      cardSection: [
        {
          label: 'Slow Vendor Onboarding',
          description:
            'Delays in collecting, verifying, and approving vendor documentation including insurance certificates, compliance documents, and quality certifications.',
          icon: 'ClockIcon',
        },
        {
          label: 'Document Fragmentation',
          description:
            'SOPs, work instructions, quality records, and operational documents scattered across departments, systems, and locations without version control.',
          icon: 'FileIcon',
        },
        {
          label: 'Compliance & Quality Risks',
          description:
            'Difficulty tracking certifications, maintaining audit trails, ensuring ISO compliance, and demonstrating quality control for regulatory inspections.',
          icon: 'SheldCardIcon',
        },
      ],
    },
    sectionThree: {
      chipText: 'Workflow',
      chipIcon: 'LightingIcon',
      label: 'End to End Use Case Flow',
      cardSection: [
        {
          label: 'An operational request or process is initiated',
          description:
            'Requests related to process changes, approvals, or documentation are captured and tracked with defined timelines.',
          icon: '1',
        },
        {
          label: 'Relevant operational records are accessed securely',
          description:
            'SOPs, process documents, policies, and records are retrieved from a centralized, governed repository with full version history.',
          icon: '2',
        },
        {
          label: 'Tasks and approvals are automated',
          description:
            'Workflow automation routes tasks across operations, compliance, and leadership teams based on predefined rules.',
          icon: '3',
        },
        {
          label: 'Execution is completed with full visibility',
          description:
            'Requests are resolved on time with real time tracking, controlled access, and audit ready documentation.',
          icon: '4',
        },
      ],
    },
    sectionFour: {
      chipText: 'Business Impact',
      chipIcon: 'GraphImproveIcon',
      label: 'Measurable Benefits',

      cardSection: [
        {
          percentage: '70%',
          label: 'Faster Vendor Onboarding',
          description:
            'reduction in time to onboard and verify vendor documentation',
        },
        {
          percentage: '65%',
          label: 'Process Efficiency Gains',
          description:
            'decrease in time spent searching for operational documents',
        },
        {
          percentage: '100%',
          label: 'Quality Traceability',
          description:
            'complete audit trails for ISO and regulatory compliance',
        },
        {
          percentage: '80%',
          label: 'Supply Chain Visibility',
          description:
            'improvement in vendor documentation and compliance tracking',
        },
      ],
    },
    sectionFive: {
      chipText: 'Use Cases',
      chipIcon: 'BarChatIcon',
      label: 'How MapleRecord Helps',

      cardSection: [
        {
          label: 'Vendor & Supplier Management',
          description:
            'Centralize vendor contracts, insurance certificates, quality certifications, and compliance documentation with automated expiration tracking and alerts.',
        },
        {
          label: 'Standard Operating Procedures',
          description:
            'Create, distribute, version control, and track acknowledgment of SOPs, work instructions, and process documentation across facilities.',
        },
        {
          label: 'Quality Management',
          description:
            'Maintain inspection records, quality control documentation, corrective action reports, and non-conformance tracking with ISO compliance support.',
        },
        {
          label: 'Supply Chain Documentation',
          description:
            'Track purchase orders, shipping documents, bills of lading, customs documentation, and supply chain records with real-time visibility.',
        },
        {
          label: 'Equipment & Asset Management',
          description:
            'Organize maintenance records, calibration certificates, equipment manuals, and asset documentation with automated maintenance schedules.',
        },
        {
          label: 'Safety & Compliance',
          description:
            'Manage safety data sheets, training records, incident reports, and compliance documentation for OSHA and environmental regulations.',
        },
      ],
    },
    sectionSix: {
      chipText: 'Security & Compliance',
      chipIcon: 'LockIcon',
      label: 'Built for Operational Excellence',
      description:
        'MapleRecord meets the rigorous requirements of operations teams managing critical process documentation, vendor compliance, and quality control records.',
      cardSection: [
        {
          label: 'Security & Compliance Features',
          featureHighlight: [
            'ISO 9001, AS9100, and quality management system support',
            'Version control and change management for SOPs and procedures',
            'Automated certification and compliance tracking with alerts',
            'Complete audit trails for regulatory inspections and audits',
            'Integration with ERP, procurement, and supply chain systems',
            ,
          ],
          featureMarkDownIcon: 'CircleThickIcon',
        },
      ],
    },
    scheduleSection: {
      label: 'Ready to Optimize Your Operations?',
      description:
        'Join operations teams using MapleRecord to streamline vendor management, accelerate process efficiency, and ensure quality compliance.',
      buttonsText: ['Schedule a Demo'],
    },
  },

  // Research & Development
  'research-development': {
    sectionOne: {
      label: 'Research & Development',
      chipIcon: 'BlubIcon',
      chipText: 'Department Solutions',
      description:
        'Accelerate innovation cycles, protect intellectual property, streamline regulatory submissions, and ensure research compliance with intelligent document management built for R&D teams.',
      buttonsText: [
        { label: 'Request a Demo', href: '/contact-us#schedule-demo' },
      ],
      bottomText: 'IP protection | Governance',
      image: RDImage,
    },
    sectionTwo: {
      label: 'R&D Challenges',
      description:
        'Research and development teams face complex challenges managing experimental data, protecting intellectual property, maintaining lab notebooks, coordinating regulatory submissions, and ensuring compliance across multi-year research initiatives.',
      cardSection: [
        {
          label: 'Slow Research Documentation',
          description:
            'Delays in organizing lab notebooks, experimental data, protocols, and research findings across multiple projects and research teams.',
          icon: 'ClockIcon',
        },
        {
          label: 'IP & Data Fragmentation',
          description:
            'Patents, trade secrets, research data, and intellectual property scattered across departments, labs, and legacy systems without version control or proper security.',
          icon: 'FileIcon',
        },
        {
          label: 'Regulatory & Compliance Risks',
          description:
            'Difficulty maintaining FDA, EPA, or international regulatory compliance, managing clinical trial documentation, and preparing audit-ready submission packages.',
          icon: 'SheldCardIcon',
        },
      ],
    },
    sectionThree: {
      chipText: 'Workflow',
      chipIcon: 'LightingIcon',
      label: 'End to End Use Case Flow',
      cardSection: [
        {
          label: 'A research activity or request is initiated',
          description:
            'Research documentation requests, experiment approvals, or design changes are captured and tracked with defined timelines.',
          icon: '1',
        },
        {
          label: 'Relevant research records are accessed securely',
          description:
            'Research files, design documents, test results, and reports are retrieved from a centralized, governed repository with full version history.',
          icon: '2',
        },
        {
          label: 'Reviews and approvals are automated',
          description:
            'Workflow automation routes documents through reviewers, leads, compliance, and management teams based on predefined rules.',
          icon: '3',
        },
        {
          label: 'Research outcomes are finalized with traceability',
          description:
            'Records are secured, versioned, and retained with full audit trails to support validation, audits, and future reference.',
          icon: '4',
        },
      ],
    },
    sectionFour: {
      chipText: 'Business Impact',
      chipIcon: 'GraphImproveIcon',
      label: 'Measurable Benefits',

      cardSection: [
        {
          percentage: '60%',
          label: 'Faster Innovation Cycles',
          description:
            'reduction in time from research to regulatory submission',
        },
        {
          percentage: '75%',
          label: 'Research Efficiency Gains',
          description: 'decrease in time spent searching for experimental data',
        },
        {
          percentage: '100%',
          label: 'IP Protection & Traceability',
          description:
            'complete audit trails for patents and regulatory compliance',
        },
        {
          percentage: '85%',
          label: 'Regulatory Submission Speed',
          description:
            'improvement in assembling compliant submission packages',
        },
      ],
    },
    sectionFive: {
      chipText: 'Use Cases',
      chipIcon: 'BarChatIcon',
      label: 'How MapleRecord Helps',

      cardSection: [
        {
          label: 'Electronic Lab Notebooks',
          description:
            'Digitize and organize research notebooks, experimental protocols, raw data, and observations with timestamped entries and secure access controls.',
        },
        {
          label: 'Intellectual Property Management',
          description:
            'Centralize patent applications, invention disclosures, trade secrets, and IP documentation with secure version control and confidentiality protection.',
        },
        {
          label: 'Regulatory Submissions',
          description:
            'Streamline FDA, EPA, EMA, and international regulatory submissions with organized documentation packages and compliance tracking.',
        },
        {
          label: 'Clinical Trial Documentation',
          description:
            'Manage clinical study protocols, informed consent forms, case report forms, and trial master files with GCP compliance support.',
        },
        {
          label: 'Research Collaboration',
          description:
            'Enable secure sharing of research data, protocols, and findings with internal teams, external partners, and academic collaborators.',
        },
        {
          label: 'Quality & Validation Records',
          description:
            'Maintain validation protocols, test methods, quality control records, and technical documentation with complete audit trails.',
        },
      ],
    },
    sectionSix: {
      chipText: 'Security & Compliance',
      chipIcon: 'LockIcon',
      label: 'Built for Research Excellence',
      description:
        'MapleRecord meets the rigorous requirements of research teams managing sensitive experimental data, intellectual property, and regulatory submissions.',
      cardSection: [
        {
          label: 'Security & Compliance Features',
          featureHighlight: [
            'Scales across complex and distributed R&D environments',
            'IP protection with encryption and access controls',
            'Complete audit trails for regulatory inspections and patent defense',
            'Integration with LIMS, ELN, and research management systems',
            ,
          ],
          featureMarkDownIcon: 'CircleThickIcon',
        },
      ],
    },
    scheduleSection: {
      label: 'Ready to Accelerate Your Research?',
      description:
        'Join research teams using MapleRecord to streamline innovation, protect intellectual property, and ensure regulatory compliance.',
      buttonsText: ['Schedule a Demo'],
    },
  },

  // Customer Service
  'customer-service': {
    sectionOne: {
      label: 'Customer Service',
      chipIcon: 'HeadSetIcon',
      chipText: 'Department Solutions',
      description:
        'Deliver exceptional customer experiences, streamline case resolution, centralize customer documentation, and ensure service compliance with intelligent document management built for customer service teams.',
      buttonsText: [
        { label: 'Request a Demo', href: '/contact-us#schedule-demo' },
      ],
      bottomText: 'Faster | Transparent service',
      image: CustomerServiceImage,
    },
    sectionTwo: {
      label: 'Customer Service Challenges',
      description:
        'Customer service teams struggle with fragmented customer records, slow information retrieval during calls, inconsistent service documentation, and difficulty maintaining compliance with service level agreements and regulatory requirements.',
      cardSection: [
        {
          label: 'Slow Case Resolution',
          description:
            'Delays in accessing customer history, contracts, warranties, and support documentation while customers are waiting on hold or in chat.',
          icon: 'ClockIcon',
        },
        {
          label: 'Document Fragmentation',
          description:
            'Customer records, service tickets, communication logs, and support materials scattered across CRM systems, email, and shared drives.',
          icon: 'FileIcon',
        },
        {
          label: 'Compliance & SLA Risks',
          description:
            'Difficulty tracking service level agreements, maintaining audit trails for customer interactions, and ensuring regulatory compliance for sensitive customer data.',
          icon: 'SheldCardIcon',
        },
      ],
    },
    sectionThree: {
      chipText: 'Workflow',
      chipIcon: 'LightingIcon',
      label: 'End to End Use Case Flow',
      cardSection: [
        {
          label: 'A customer inquiry or request is received',
          description:
            'Customer requests are captured, categorized, and tracked with defined response timelines.',
          icon: '1',
        },
        {
          label: 'Relevant customer records are accessed instantly',
          description:
            'Account details, previous interactions, and supporting documents are retrieved securely from a centralized repository.',
          icon: '2',
        },
        {
          label: 'Tasks and approvals are automated',
          description:
            'Workflow automation routes requests to the appropriate teams based on issue type and priority.',
          icon: '3',
        },
        {
          label: 'A timely and accurate response is delivered',
          description:
            'Requests are resolved with secure communication, full traceability, and audit ready documentation.',
          icon: '4',
        },
      ],
    },
    sectionFour: {
      chipText: 'Business Impact',
      chipIcon: 'GraphImproveIcon',
      label: 'Measurable Benefits',

      cardSection: [
        {
          percentage: '50%',
          label: 'Faster Case Resolution',
          description:
            'reduction in average handling time for customer inquiries',
        },
        {
          percentage: '70%',
          label: 'Document Retrieval Speed',
          description: 'decrease in time spent searching for customer records',
        },
        {
          percentage: '95%',
          label: 'SLA Compliance Rate',
          description: 'improvement in meeting service level commitments',
        },
        {
          percentage: '40%',
          label: 'Customer Satisfaction Increase',
          description:
            'boost in CSAT scores through faster, more informed service',
        },
      ],
    },
    sectionFive: {
      chipText: 'Use Cases',
      chipIcon: 'BarChatIcon',
      label: 'How MapleRecord Helps',

      cardSection: [
        {
          label: 'Customer Record Management',
          description:
            'Centralize customer profiles, purchase history, communication logs, and support tickets with 360-degree view during service interactions.',
        },
        {
          label: 'Contract & Warranty Access',
          description:
            'Instantly retrieve service contracts, warranty information, terms and conditions, and entitlements while assisting customers in real-time.',
        },
        {
          label: 'Knowledge Base Management',
          description:
            'Organize troubleshooting guides, FAQs, product manuals, and best practices for consistent and accurate customer support across all channels.',
        },
        {
          label: 'Case Documentation & Escalation',
          description:
            'Track case history, document resolutions, manage escalations, and maintain complete audit trails for quality assurance and training.',
        },
        {
          label: 'Returns & Refund Processing',
          description:
            'Streamline return authorizations, refund requests, and exchange documentation with automated workflows and approval routing.',
        },
        {
          label: 'Compliance & Quality Assurance',
          description:
            'Monitor SLA performance, track regulatory compliance for customer data, and maintain quality standards with complete interaction records.',
        },
      ],
    },
    sectionSix: {
      chipText: 'Security & Compliance',
      chipIcon: 'LockIcon',
      label: 'Built for Customer Service Excellence',
      description:
        'MapleRecord meets the rigorous requirements of customer service teams managing sensitive customer information, service agreements, and regulatory compliance obligations.',
      cardSection: [
        {
          label: 'Security & Compliance Features',
          featureHighlight: [
            'GDPR, CCPA, and customer data privacy compliance',
            'Role-based access controls for customer sensitive information',
            'Complete audit trails for customer interactions and case handling',
            'SLA monitoring and automated alerts for compliance tracking',
            'Integration with CRM, ticketing, and communication platforms',
            ,
          ],
          featureMarkDownIcon: 'CircleThickIcon',
        },
      ],
    },
    scheduleSection: {
      label: 'Ready to Transform Your Customer Service?',
      description:
        'Join customer service teams using MapleRecord to deliver faster resolutions, improve satisfaction scores, and ensure service compliance.',
      buttonsText: ['Schedule a Demo'],
    },
  },
};

/* MapleRecord Blogs Resources Place */

export const dummyBlogsPosts = [
  {
    id: '5-key-compliance-requirements',
    category: 'Compliance',
    label: '5 Key Compliance Requirements Every Organization Should Know',
    description:
      'Navigate the complex landscape of regulatory compliance with our comprehensive guide to essential requirements.',
    author: 'Michael Chen',
    date: 'December 20, 2024',
    authorDateWrap: (
      <div className="w-auto flex flex-wrap gap-2">
        <span className="flex flex-row gap-2">
          <UserIcon width={16} height={16} /> <span> Michael Chen</span>
        </span>
        <span className="flex flex-row gap-2">
          <CalendarIcon width={16} height={16} /> <span>December 20, 2024</span>
        </span>
      </div>
    ),
    href: '/blogs/5-key-compliance-requirements',
    image: BlogOneImage,
  },
  {
    id: 'digital-record-retention-best-practices',
    category: 'Best Practices',
    label: 'Best Practices for Digital Record Retention',
    description:
      'Learn how to implement effective retention policies that balance compliance, storage costs, and operational efficiency.',
    author: 'Emily Parker',
    date: 'December 15, 2024',
    authorDateWrap: (
      <div className="w-auto flex flex-wrap gap-2">
        <span className="flex flex-row gap-2">
          <UserIcon width={16} height={16} /> <span> Emily Parker</span>
        </span>
        <span className="flex flex-row gap-2">
          <CalendarIcon width={16} height={16} /> <span>December 15, 2024</span>
        </span>
      </div>
    ),
    href: '/blogs/digital-record-retention-best-practices',
    image: BlogTwoImage,
  },
  {
    id: 'automating-workflows-guide',
    category: 'Automation',
    label: 'Automating Workflows: A Step-by-Step Guide',
    description:
      'Transform manual processes into efficient automated workflows with our practical implementation roadmap.',
    author: 'David Martinez',
    date: 'December 5, 2024',
    authorDateWrap: (
      <div className="w-auto flex flex-wrap gap-2">
        <span className="flex flex-row gap-2">
          <UserIcon width={16} height={16} /> <span> David Martinez</span>
        </span>
        <span className="flex flex-row gap-2">
          <CalendarIcon width={16} height={16} /> <span>December 5, 2024</span>
        </span>
      </div>
    ),
    href: '/blogs/automating-workflows-guide',
    image: BlogThreeImage,
  },
  {
    id: 'roi-modern-records-management',
    category: 'Business Value',
    label: 'The ROI of Modern Records Management Systems',
    description:
      'Quantifying the business value of investing in intelligent records management platforms.',
    author: 'John Anderson',
    date: 'November 20, 2024',
    authorDateWrap: (
      <div className="w-auto flex flex-wrap gap-2">
        <span className="flex flex-row gap-2">
          <UserIcon width={16} height={16} /> <span> John Anderson</span>
        </span>
        <span className="flex flex-row gap-2">
          <CalendarIcon width={16} height={16} /> <span>December 20, 2024</span>
        </span>
      </div>
    ),
    href: '/blogs/roi-modern-records-management',
    image: BlogFourImage,
  },
];

export const aboutUS = {
  sectionOne: [
    {
      image: AboutUsImageOne,
      cardSection: [
        {
          label: 'Our Mission',
          description:
            'To help organizations gain control of their information ecosystem by replacing fragmented systems and manual processes with secure, intelligent, and automated information management.',
          icon: '',
        },
        {
          label: 'Our Vision',
          description:
            'To be the leading records management platform trusted by organizations worldwide, setting the standard for secure, efficient, and intelligent document management.',
          icon: '',
        },
      ],
    },
    {
      image: AboutUsImage,
      cardSection: [
        {
          label: 'Our Story',
          description:
            'MapleRecord was founded to rethink how organizations manage information in a fast-changing digital world. As data volumes grow and regulations tighten, many teams still rely on fragmented tools and manual processes that slow them down. <br/> We built MapleRecord as an AI-driven platform that unifies records, requests, and workflows in one place. By simplifying how information is captured, governed, and shared, we help teams work faster and respond with confidence. <br/> Today, MapleRecord supports enterprises and public-sector organizations looking to modernize information management without added complexity. Our focus is on secure, scalable solutions that grow with our customers and keep teams focused on outcomes—not administration.',
          icon: '',
        },
      ],
    },
  ],

  sectionTwo: {
    chipText: 'Our Values',
    label: 'What Drives Us',
    description:
      'Our core values guide everything we do, from product development to customer relationships.',
    cardSection: [
      {
        id: 'security-first',
        title: 'Security First',
        description:
          'Enterprise-grade security, role-based access, and end-to-end data protection are built into the platform.',
        icon: 'SheldCardIcon',
      },
      {
        id: 'compliance-ready',
        title: 'Compliance Ready',
        description:
          'Designed to support regulatory, retention, and audit requirements without adding operational burden.',
        icon: 'AwardIcon',
      },
      {
        id: 'designed-for-scale',
        title: 'Designed for Scale',
        description:
          'Built to handle high volumes of records, requests, and workflows across large, distributed organizations.',
        icon: 'GraphImproveIcon',
      },
      {
        id: 'practical-ai',
        title: 'Practical AI',
        description:
          'AI is applied where it delivers real value—classification, discovery, routing, and insights—without unnecessary complexity.',
        icon: 'LightingIcon',
      },
    ],
  },
  sectionThree: {
    chipText: '',
    label: 'MapleRecord by the Numbers',
    description:
      'Trusted by organizations worldwide to manage their critical documents and records.',
    cardSection: [
      {
        id: 'organizations',
        value: '50+',
        label: 'Organizations',
        description: 'Trust MapleRecord for their records management',
      },
      {
        id: 'documents',
        value: '10M+',
        label: 'Documents',
        description: 'Managed securely on our platform',
      },
      {
        id: 'uptime',
        value: '99.9%',
        label: 'Uptime',
        description: 'Reliable platform you can count on',
      },
      {
        id: 'support',
        value: '24/7',
        label: 'Support',
        description: 'Always here when you need us',
      },
    ],
  },
  sectionFour: {
    chipText: '',
    label: 'Industries We Serve',
    description:
      'MapleRecord provides tailored solutions for organizations across diverse sectors.',
    cardSection: [
      {
        id: 'financial-services',
        label: 'Financial Services',
        description: 'Banking, investment, and financial compliance solutions',
        icon: 'GraphImproveIcon',
      },
      {
        id: 'healthcare',
        label: 'Healthcare',
        description: 'HIPAA-compliant patient records management',
        icon: 'SheldCardIcon',
      },
      {
        id: 'education',
        label: 'Education',
        description: 'Student records and academic document management',
        icon: 'AwardIcon',
      },
      {
        id: 'insurance',
        label: 'Insurance',
        description: 'Policy and claims document management',
        icon: 'SheldCardIcon',
      },
      {
        id: 'manufacturing',
        label: 'Manufacturing',
        description: 'Quality, compliance, and supply chain records',
        icon: 'LightingIcon',
      },
      {
        id: 'government',
        label: 'Government',
        description: 'Public sector document and records management',
        icon: 'HumanResourceIcon',
      },
    ],
  },
};

export const eventsContent = {
  sectionOne: {
    chipText: 'Events & Conferences',
    label: 'Connect, Learn, and Grow Together',
    description:
      'Join MapleRecord at industry conferences, workshops, webinars, and exclusive events designed to help you master records management.',
    cardSection: [
      {
        id: 'annual-events',
        icon: '50+',
        label: 'Annual Events',
      },
      {
        id: 'attendees',
        icon: '10K+',
        label: 'Attendees',
      },
      {
        id: 'expert-speakers',
        icon: '200+',
        label: 'Expert Speakers',
      },
      {
        id: 'cities-worldwide',
        icon: '35+',
        label: 'Cities Worldwide',
      },
    ],
    buttonsText: ['Upcomming Events', 'Past Events'],
  },

  sectionTwo: {
    label: 'Upcoming Events',
    description: 'Register now to secure your spot at our upcoming events',
    eventList: [
      {
        features: true,
        chipText: ['Conference', 'In-Person', 'Networking'],
        label: 'MapleRecord Connect 2026 - Annual User Conference',
        description:
          'Join us for our flagship annual conference featuring keynotes, breakout sessions, hands-on workshops, and networking opportunities with industry leaders.',

        featureHighlight: [
          'Keynote: The Future of Intelligent Records Management',
          '50+ breakout sessions across 6 tracks',
          'Hands-on product workshops',
          'Customer awards ceremony',
          'Networking reception and gala dinner',
        ],

        eventMeta: {
          id: 'main-conference-2026',
          date: 'March 15-17, 2026',
          time: '9:00 AM - 5:00 PM EST',
          location: 'San Francisco, CA',
          venue: 'Moscone Center',
          expectedAttendees: 2500,
          registered: 'Register Now',
        },
        button: {
          label: 'Register Now',
          icon: '',
        },
        image: EventOneImage,
      },
      {
        image: EventTwoImage,

        chipText: ['Summit', 'Virtual', 'Healthcare'],
        label: 'Healthcare Records Management Summit',
        description:
          'Specialized summit for healthcare organizations focusing on HIPAA compliance, patient data security, and workflow optimization.',

        featureHighlight: [
          'HIPAA compliance best practices',
          'Patient data security strategies',
          'Workflow automation case studies',
          'Q&A with healthcare experts',
        ],

        eventMeta: {
          id: 'virtual-workshop-feb-2026',
          date: 'February 10, 2026',
          time: '1:00 PM - 4:00 PM EST',
          location: 'Virtual Event',
          venue: 'Online',
          expectedAttendees: 800,
          priceCta: 'Free',
        },
        button: {
          label: 'Register Now',
          icon: '',
        },
      },
      {
        chipText: ['Product Launch', 'Virtual'],
        label: 'Product Launch: MR Analytics Platform',
        image: BlogThreeImage,
        description:
          'Be the first to see our new analytics platform that provides deep insights into your records management operations.',

        featureHighlight: [
          'Live product demonstration',
          'Feature deep-dive sessions',
          'Early adopter benefits',
          'Executive Q&A',
        ],

        eventMeta: {
          id: 'virtual-workshop-feb-2026',
          date: 'February 10, 2026',
          time: '1:00 PM - 4:00 PM EST',
          location: 'Virtual Event',
          venue: 'Online',
          expectedAttendees: 800,
          priceCta: 'Free',
        },
        button: {
          label: 'Register Now',
          icon: '',
        },
      },
    ],
  },

  sectionThree: {
    chipText: '',
    label: 'Event Types',
    description:
      'We host a variety of events to meet your learning and networking needs',
    cardSection: [
      {
        icon: '',
        label: 'Conferences',
        description:
          'Large-scale events with keynotes, sessions, and networking',
        subdescrp: 'Annual flagship events',
      },
      {
        icon: '',
        label: 'Roadshows',
        description: 'City-by-city tours bringing MapleRecord to you',
        subdescrp: '35+ cities annually',
      },
      {
        icon: '',
        label: 'Virtual Events',
        description: 'Online sessions accessible from anywhere',
        subdescrp: 'Monthly programs',
      },
      {
        icon: '',
        label: 'Workshops',
        description: 'Hands-on training and interactive learning',
        subdescrp: 'Industry-specific',
      },
    ],
  },
};

export const videoCardContent = [
  {
    id: '5-key-compliance-requirements',
    category: 'Product Demos',
    title: 'AI-Powered Document Classification Demo',
    description:
      "See how MapleRecord's intelligent classification automatically organizes thousands of documents.",
    likes: '398',
    views: '6.7K',
    date: 'December 28, 2024',
    // href: '/blogs/5-key-compliance-requirements',
    image: BlogAIImage,
    readMore: false,
  },
  {
    id: 'digital-record-retention-best-practices',
    category: 'Product Demos',
    title: 'MR Workflows: Complete Feature Walkthrough',
    description:
      'Detailed demonstration of all workflow features and capabilities.',
    likes: '398',
    views: '6.7K',
    date: 'December 08, 2024',
    href: '/blogs/digital-record-retention-best-practices',
    image: VideoImage,
    readMore: false,
  },
  {
    id: 'automating-workflows-guide',
    category: 'Product Demos',
    title: 'MR Requests: Streamline Record Retrieval',
    description:
      'Complete overview of the MR Requests module and its powerful features.',
    likes: '398',
    views: '6.7K',
    date: 'November 12, 2024',
    href: '/blogs/automating-workflows-guide',
    image: BlogTwoImage,
    readMore: false,
  },
];

export const webinarsContent = [
  {
    image: WebinarImage,
    chipText: [
      'AI & Automation',
      'Intelligent Classification',
      'OCR Technology',
      'Workflow Optimization',
    ],
    featured: true,
    label: 'Built for Customer Service Excellence',
    description:
      'Join us for our flagship annual conference featuring keynotes, breakout sessions, hands-on workshops, and networking opportunities with industry leaders.',
    eventMeta: {
      date: 'January 15, 2026',
      time: '2:00 PM EST',
      registered: '342 registered',
      duration: '60 minutes',
    },
    speaker: {
      label: 'Speaker',
      name: 'Dr. Jennifer Chen',
      title: 'Chief Product Officer, MapleRecord',
    },
    button: {
      label: 'Register Now',
      icon: '',
    },
  },
  {
    image: WebinarImageTwo,

    featured: false,
    chipText: [
      'Financial Services',
      'Risk Management',
      'Regulatory Compliance',
      'SEC Requirements',
    ],
    label: 'Financial Services Records: Managing Risk & Regulation',
    description:
      'Navigate complex regulatory requirements while optimizing records management operations in financial services.',
    eventMeta: {
      date: 'January 29, 2026',
      time: '3:00 PM EST',
      registered: '198 registered',
      duration: '60 minutes',
    },
    speaker: {
      label: 'Speaker',
      name: 'Sarah Thompson',
      title: 'Financial Services Expert',
    },
    button: {
      label: 'Register Now',
      icon: '',
    },
  },
  {
    image: VideoImage,
    featured: true,
    chipText: [
      'Digital Transformation',
      'Change Management',
      'Implementation',
      'Best Practices',
    ],
    label: 'Digital Transformation: From Paper to Platform',
    description:
      'Step-by-step guide to successfully transitioning from paper-based to digital records management systems.',
    eventMeta: {
      date: 'February 05, 2026',
      time: '2:30 PM EST',
      registered: '421 registered',
      duration: '45 minutes',
    },
    speaker: {
      label: 'Speaker',
      name: 'David Park',
      title: 'Digital Transformation Lead',
    },
    button: {
      label: 'Register Now',
      icon: '',
    },
  },
];

export const mediaPageContent = [
  {
    label: 'The Future of Records Management: AI and Automation',
    description:
      "TechCrunch profiles MapleRecord's innovative approach to intelligent document management and automation.",
    location: 'TechCrunch',
    date: 'December 15, 2025',
    image: BlogAIImage,
    buttonText: { label: 'Read Article', icon: '', href: '' },
  },
  {
    label: 'Financial Services Firms Turn to MapleRecord for Compliance',
    description:
      'How leading banks and financial institutions are using MapleRecord to meet regulatory requirements.',
    location: 'Financial Times',
    date: 'November 20, 2025',
    image: MediaImage,
    buttonText: { label: 'Read Article', icon: '', href: '' },
  },
  {
    label: 'Why Enterprises Are Ditching Legacy Systems for MapleRecord',
    description:
      'VentureBeat explores the migration trend from legacy ECM systems to modern cloud platforms.',
    location: 'VentureBeat',
    date: 'October 18, 2025',
    image: VideoImage,
    buttonText: { label: 'Read Article', icon: '', href: '' },
  },
];

export const awardsSection = {
  label: 'Awards & Recognition',
  description: 'Industry recognition for innovation and excellence',
  cardSection: [
    {
      label: 'Best Enterprise Software',
      description: 'SaaS Awards',
      subdescrp: 'Enterprise Technology',
      iconText: '2025',
      icon: 'AwardIcon',
    },
    {
      label: 'Innovation Award',
      description: 'TechCrunch Disrupt',
      subdescrp: 'AI & Machine Learning',
      iconText: '2025',
      icon: 'AwardIcon',
    },
  ],
};

export const contactUsContent = {
  id: 'security-first',
  label: 'Connect with our sales team to transform your records management',
  description:
    'Ready to elevate your records management? Contact us today to explore how our solutions can transform your organization. Our sales team is here to help you get the answers to all your queries!',
  buttonsText: [{ label: 'Get started', href: '/contact-us#schedule-demo' }],
  image: MRRecordImage,
};

export const termsOfService = {
  termsIntro: `
**Last Updated:** [Date] <br/><br/>
Welcome to **MapleRecord**. These Terms of Service (“Terms”) govern your access to and use of the MapleRecord website, platform, products, and services (collectively, the “Services”).

By accessing or using the Services, you agree to be bound by these Terms.  
If you do not agree to these Terms, you may not access or use the Services.
`,

  acceptanceOfTerms: `
By accessing or using the MapleRecord Services, you confirm that you are legally capable of entering into a binding agreement and that you agree to comply with these Terms.
`,

  descriptionOfServices: `
MapleRecord provides an **AI-first hybrid records management platform** designed to manage electronic and physical records, automate workflows, enforce governance and retention policies, and maintain audit trails for enterprises and government bodies.
`,

  accountRegistration: `
Certain features of the Services require account registration. You agree to provide accurate and complete information and to maintain the confidentiality of your account credentials. You are responsible for all activities conducted through your account.
`,

  subscriptionAndBilling: `
If you subscribe to a paid plan:

- • Fees are billed in advance on a recurring basis.
- • You agree to pay all applicable fees and taxes.
- • MapleRecord reserves the right to modify pricing with prior notice.

Failure to pay may result in suspension or termination of access to the Services.
`,

  userResponsibilities: `
You agree not to:

- • Use the Services for unlawful or unauthorized purposes
- • Attempt to bypass security or access controls
- • Interfere with or disrupt the Services
- • Upload, store, or share content that infringes intellectual property or legal rights
`,

  acceptableUse: `
You must use the Services in compliance with all applicable laws, regulations, and internal policies. MapleRecord reserves the right to restrict, suspend, or terminate access if misuse or violations are identified.
`,

  dataPrivacy: `
MapleRecord processes data in accordance with applicable data protection laws. Information regarding data handling and protection practices is available in MapleRecord’s Privacy Policy.
`,

  intellectualPropertyRights: `
All intellectual property rights related to the Services—including software, interfaces, designs, documentation, and content—remain the exclusive property of MapleRecord or its licensors.

You are granted a limited, non-exclusive, non-transferable license to use the Services in accordance with these Terms.
`,

  thirdPartyIntegrations: `
The Services may integrate with third-party platforms or services. MapleRecord does not control and is not responsible for the availability, performance, or functionality of such third-party services.
`,

  security: `
MapleRecord implements industry-standard technical and organizational measures to protect data stored within the platform. However, no system can be guaranteed to be completely secure, and MapleRecord does not warrant absolute security.
`,

  aiSpecificRisksAndLimitations: `
MapleRecord utilizes artificial intelligence (“AI”) and automated processing to assist with records classification, metadata extraction, search, workflow routing, and related functions.

**Limitations include:**
- •  AI-generated outputs may not always be complete, accurate, or up to date
- •  Automated classifications and recommendations may require human validation
- •  AI-based features may not identify all relevant records, metadata, or risks
- •  Outputs may be influenced by data quality and completeness

**You remain solely responsible for:**
- •  Reviewing and approving AI-assisted outputs
- •  Ensuring compliance with laws, regulations, and retention schedules
- •  Determining suitability for legal, regulatory, or operational purposes

MapleRecord disclaims liability for decisions made without appropriate human oversight.
`,

  disclaimers: `
The Services are provided on an **“as is”** and **“as available”** basis. MapleRecord disclaims all warranties, whether express or implied, including warranties of merchantability, fitness for a particular purpose, and non-infringement.
`,

  limitationOfLiability: `
To the maximum extent permitted by law, MapleRecord shall not be liable for:

- Indirect, incidental, special, or consequential damages
- Loss of profits, revenue, business, or data

Your exclusive remedy for dissatisfaction with the Services is to discontinue use.
`,

  indemnification: `
You agree to indemnify and hold harmless MapleRecord from any claims, damages, liabilities, losses, or expenses arising from:

- • Your use of the Services
- • Your violation of these Terms
- • Your violation of applicable laws or third-party rights
`,

  modificationsToTerms: `
MapleRecord may revise these Terms from time to time. Updated Terms will be posted on the website with a revised **“Last Updated”** date. Continued use of the Services constitutes acceptance of the revised Terms.
`,

  governingLawAndJurisdiction: `
These Terms shall be governed by and construed in accordance with applicable laws. Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the competent courts.
`,

  termination: `
MapleRecord may suspend or terminate access to the Services for violation of these Terms, non-payment, or operational reasons. Upon termination, all rights to access and use the Services shall immediately cease.
`,

  contactInformation: `
**MapleRecord**  
Email: s  
Address: [Company Address]
`,
};

export const privacyPolicy = {
  privacyIntro: `
**Last Updated:** [Date] <br/><br/>

**MapleRecord** (“we,” “our,” or “us”) is committed to protecting the privacy and security of information entrusted to us. This Privacy Policy explains how we collect, use, disclose, and safeguard information when you access or use the MapleRecord website, platform, and services (collectively, the “Services”).

By using the Services, you agree to the practices described in this Privacy Policy.
`,

  informationWeCollect: `

#### <b>a. Information You Provide </b> 
We may collect information you voluntarily provide, including:

- • Name, email address, phone number, and organizational details  
- • Account credentials and user role information  
- • Communications, support requests, and feedback  
- • Records, documents, and metadata uploaded or managed through the Services  

#### <b>b. Automatically Collected Information  </b>
When you use the Services, we may collect:

- • IP address, browser type, device information, and operating system  
- • Log data, usage activity, and access timestamps  
- • Performance and diagnostic data to improve service reliability  

#### <b>c. Records and Content Data  </b>
MapleRecord processes electronic and physical records data as directed by customers. We act as a data processor for customer-managed content and do not claim ownership over such data.
`,

  howWeUseInformation: `

We use collected information to:

- • Provide, operate, and maintain the Services  
- • Authenticate users and manage access controls  
- • Process records, workflows, and requests as configured by customers  
- • Improve platform performance, security, and usability  
- • Communicate service-related notices and support responses  
- • Comply with legal, regulatory, and contractual obligations  
`,

  aiAndAutomatedProcessing: `

MapleRecord uses AI and automated technologies to support records classification, metadata extraction, workflow routing, and search capabilities.

- • AI-assisted outputs are designed to enhance efficiency but require human review  
- • We do not use customer data to train generalized AI models without explicit authorization  
- • Customers remain responsible for validating outputs and ensuring regulatory compliance  
`,

  legalBasisForProcessing: `

We process personal data based on:

- • Contractual necessity to provide the Services  
- • Legitimate business interests, including security and service improvement  
- • Legal and regulatory obligations  
- • Customer instructions and configurations  
`,

  dataSharingAndDisclosure: `

We do not sell personal data. Information may be shared only:

- • With authorized users within your organization  
- • With trusted service providers under confidentiality obligations  
- • To comply with legal requirements or government requests  
- • To protect the rights, safety, or security of MapleRecord or its users  
`,

  dataRetention: `

We retain information only for as long as necessary to:

- • Fulfill contractual obligations  
- • Meet regulatory and compliance requirements  
- • Support audit and legal obligations  

Retention periods are configurable based on customer-defined policies.
`,

  dataSecurity: `

MapleRecord implements administrative, technical, and organizational safeguards designed to protect data, including:

- • Role-based access controls  
- • Encryption in transit and at rest (where applicable)  
- • Audit logging and monitoring  
- • Secure infrastructure practices  

No method of transmission or storage is completely secure; however, we continuously enhance our security controls.
`,

  yourRightsAndChoices: `

Depending on applicable laws, you may have the right to:

- • Access, correct, or update personal information  
- • Request deletion or restriction of processing  
- • Object to certain data uses  
- • Request data portability  

Requests may be subject to verification and legal limitations.
`,

  governmentAndPublicSectorUse: `

For government and public-sector customers, MapleRecord processes data strictly in accordance with contractual terms, applicable regulations, and customer-defined governance and retention policies.
`,

  thirdPartyServices: `

The Services may integrate with third-party platforms. This Privacy Policy does not cover third-party practices, and MapleRecord is not responsible for their privacy controls.
`,

  internationalDataTransfers: `

Data may be processed in locations where MapleRecord or its service providers operate, subject to appropriate safeguards and legal requirements.
`,

  childrensPrivacy: `

The Services are not intended for use by individuals under the age of 18. MapleRecord does not knowingly collect personal data from minors.
`,

  changesToPrivacyPolicy: `

We may update this Privacy Policy from time to time. Changes will be posted with an updated **“Last Updated”** date. Continued use of the Services constitutes acceptance of the revised policy.
`,

  contactInformation: `

If you have questions or concerns regarding this Privacy Policy, please contact:

**MapleRecord**  
Email: [Email Address]  
Address: [Company Address]
`,
};
