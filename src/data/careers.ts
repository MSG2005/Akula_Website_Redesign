export type JobSection = { heading: string; items?: string[]; paragraphs?: string[] };

export type Job = {
  slug: string;
  title: string;
  location: string;
  type: string;
  schedule: string;
  summary: string;
  sections: JobSection[];
  applyEmail: string;
};

export const applyEmail = "christie.sourivong@akulalaw.com";

export const jobs: Job[] = [
  {
    slug: "front-desk-receptionist",
    title: "Front Desk Receptionist",
    location: "Dallas, TX (In-office)",
    type: "Full-Time, Hourly — $18/hour, paid bi-weekly",
    schedule: "Monday–Friday, 8:30 AM–5:30 PM",
    summary:
      "Akula & Associates, P.C. is a dynamic immigration firm dedicated to providing exceptional legal services to our clients. We are seeking a professional, empathetic, and reliable Front Desk Receptionist to join our team and serve as the first point of contact for our clients.",
    sections: [
      {
        heading: "Key Responsibilities",
        items: [
          "Client Communication: Engage with clients professionally via phone, email, and in person, ensuring clear and effective communication.",
          "Appointment Scheduling: Coordinate and schedule consultations for new and existing clients, maintaining an organized calendar.",
          "Document Management: Oversee processes for client document pick-up and delivery, ensuring accuracy and efficiency.",
          "Call Log Maintenance: Maintain detailed and accurate firm call logs, promptly notifying staff of relevant communications.",
          "Administrative Support: Perform additional processing administrative tasks as assigned to support the firm's operations.",
          "Upholding Professionalism: Represent the firm with a positive attitude, fostering a welcoming environment for all clients and visitors.",
        ],
      },
      {
        heading: "Qualifications",
        items: [
          "Adaptability: Thrives in a dynamic, fast-paced legal setting, staying composed and effective in a busy, client-focused environment.",
          "Communication Skills: Exceptional verbal and written communication skills to interact effectively with clients and team members.",
          "Cultural Competency: Ability to work respectfully and effectively with diverse individuals, demonstrating empathy and emotional intelligence.",
          "Reliability & Punctuality: Strong commitment to dependability, with a track record of being on time and meeting deadlines.",
          "Organizational Skills: Ability to manage multiple tasks, prioritize effectively, and maintain attention to detail.",
          "Professionalism: A positive, client-focused demeanor with the ability to handle sensitive situations with discretion.",
          "Experience: Prior experience in a receptionist or administrative role is preferred but not required.",
          "Language: Bilingual preferred but not required.",
        ],
      },
      {
        heading: "Benefits",
        items: [
          "Sick Leave: 48 hours of sick leave per year, accrued based on hours worked per pay period.",
          "Health Insurance: The firm covers 50% of the employee's health insurance premium; employees cover 100% of premiums for immediate family members.",
          "Dental & Vision Insurance: The firm covers 50% of dental and vision premiums for employees and their immediate family members.",
          "Short-Term Disability: The firm covers 100% of short-term disability coverage.",
          "Eligibility: Benefits begin on the first day of the month following 30 days of employment.",
          "Note: All company benefits are subject to change at the firm's discretion, with or without notice.",
        ],
      },
      {
        heading: "Additional Information",
        items: [
          "Probationary Period: Employment is subject to a 90-day probationary period.",
          "Work Environment: Join a collaborative and supportive team dedicated to client service and professional excellence.",
        ],
      },
      {
        heading: "How to Apply",
        paragraphs: [
          `To apply, please submit your resume and a brief cover letter outlining your qualifications and interest in the position to ${applyEmail}. We look forward to welcoming a dedicated professional to our team!`,
        ],
      },
    ],
    applyEmail,
  },
  {
    slug: "immigration-paralegal",
    title: "Immigration Paralegal",
    location: "Dallas, TX (In-office)",
    type: "Full-time",
    schedule: "Monday–Friday, 8:30 AM–5:30 PM CST",
    summary:
      "Our established boutique immigration law firm in Dallas, Texas, is seeking a seasoned paralegal with employment-based immigration experience to join our passionate, client-focused team. We specialize in serving corporate and individual clients, navigating the complexities of U.S. immigration processes, including but not limited to L-1, EB1-A, O, E1, H-1B, TN, and PERM cases.",
    sections: [
      {
        heading: "Key Responsibilities",
        items: [
          "Assist attorneys in preparing and filing employment-based immigration petitions and other applications with government agencies.",
          "Draft support letters, forms, and documentation using cloud-based platforms.",
          "Manage client communications with professionalism and empathy, ensuring exceptional service.",
          "Interact with government officials to advance cases efficiently.",
          "Conduct legal research as needed to support casework.",
        ],
      },
      {
        heading: "Qualifications",
        items: [
          "Minimum of 1-2 years of experience in employment-based immigration law.",
          "Proficiency in Microsoft Office Suite and familiarity with online legal platforms.",
          "Exceptional written and verbal communication skills.",
        ],
      },
      {
        heading: "Required Skills & Attributes",
        paragraphs: [
          "We seek a highly organized, reliable, detail-oriented professional who thrives in a fast-paced, time-sensitive environment. The ideal candidate will:",
        ],
        items: [
          "Efficiently manage complex tasks and prioritize workloads under periodic time constraints.",
          "Demonstrate emotional intelligence through empathetic client and team interactions with strong interpersonal skills.",
          "Exhibit adaptability, a team-oriented mindset, and a positive, professional demeanor.",
          "Be self-motivated with a commitment to delivering outstanding client service.",
        ],
      },
      {
        heading: "Benefits",
        items: [
          "Competitive salary commensurate with experience.",
          "Comprehensive health, vision, and dental insurance.",
          "Paid vacation and a supportive work-life balance.",
        ],
      },
      {
        heading: "To Apply",
        paragraphs: [
          `Please submit your resume and salary requirements to ${applyEmail}.`,
          "Join our dedicated team and make a difference in the lives of our clients!",
        ],
      },
    ],
    applyEmail,
  },
];
