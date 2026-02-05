export const portfolioData = {
  name: "Hendrik Baskoro",
  title: "Human Resources & IT Professional",
  bio: "Skilled HR and IT professional with strong interpersonal abilities and experience managing recruitment, employee development, HR policies, and IT support. Focused on creating transparent personnel systems that support employee welfare and company growth.",
  email: "Hendrikbaskoro506@gmail.com",
  phone: "+62 821-2316-6870",
  location: "Indonesia",
  
  about: {
    description: "HR and IT professional with expertise in employee recruitment, training, conflict resolution, and technical support. Strong track record in developing HR policies, implementing efficient systems, and managing IT infrastructure across organizations.",
    longDescription: `I bring a combination of HR management expertise and technical knowledge. My background spans human resources management, IT support, and administrative coordination. I have proven ability to streamline recruitment processes, improve employee development programs, reduce operational errors from 5% to less than 2%, and deliver effective technical solutions. Bachelor's graduate in Informatics from Universitas Pamulang with additional multimedia background.`
  },

  skills: [
    { category: "HR Management", items: ["Recruitment", "Employee Training", "Conflict Resolution", "HR Policy Development", "Payroll Management", "Employee Onboarding"] },
    { category: "IT Technical", items: ["Hardware Configuration", "Software Installation", "Network Troubleshooting", "Point of Sale (POS) Systems", "System Maintenance", "User Support"] },
    { category: "Software & Tools", items: ["Microsoft Office", "Graphic Design", "SketchUp", "PHP", "Data Management", "Administrative Systems"] },
    { category: "Soft Skills", items: ["Leadership", "Problem Solving", "Strategic Thinking", "Interpersonal Communication", "Team Management", "Analytical Skills"] }
  ],

  experience: [
    {
      id: 1,
      company: "PT Sinar Sahabat Inti Makmur (Hari Hari Swalayan)",
      position: "Personalia (Human Resource)",
      duration: "Januari 2024 – November 2025",
      description: "Managed recruitment, employee onboarding, training programs, and HR administration for the entire organization. Handled employee grievances, coordinated policy implementation, and supported payroll and benefits management.",
      achievements: ["Optimized recruitment and onboarding processes", "Implemented effective employee training programs", "Conducted investigations and conflict resolution", "Managed payroll, leave, overtime, THR, and health benefits administration"]
    },
    {
      id: 2,
      company: "SIM Simulator GOLF",
      position: "IT Support",
      duration: "Juni 2023 – Desember 2023",
      description: "Provided comprehensive IT support including hardware and software configuration, maintenance, and network troubleshooting for golf simulator and POS systems.",
      achievements: ["Installed and configured computer and network systems", "Resolved technical network issues on golf and POS systems", "Provided user technical support and training for system optimization"]
    },
    {
      id: 3,
      company: "PT. Trakindo Utama",
      position: "Magang (Admin Staff Mailroom)",
      duration: "Desember 2018 – Februari 2020",
      description: "Managed data entry for all incoming invoices and maintained accurate administrative records for the mailroom operations.",
      achievements: ["Achieved error rate less than 2%", "Coordinated data entry processes for all invoices", "Improved accuracy in financial reporting and operational effectiveness"]
    }
  ],

  projects: [
    {
      id: 1,
      title: "HR Management System Implementation",
      description: "Designed and implemented comprehensive HR management system for recruitment tracking, employee data management, and performance evaluation.",
      image: "/projects/hr-system.jpg",
      tags: ["HR Management", "Recruitment", "Data Management"],
      link: "#"
    },
    {
      id: 2,
      title: "Employee Onboarding Process Optimization",
      description: "Developed streamlined employee onboarding program including orientation protocols, contract verification, and company policy coordination.",
      image: "/projects/onboarding-process.jpg",
      tags: ["Onboarding", "Process Optimization", "Training"],
      link: "#"
    },
    {
      id: 3,
      title: "IT Infrastructure & Support System",
      description: "Established comprehensive IT support infrastructure including hardware setup, network configuration, and user support protocols.",
      image: "/projects/it-support.jpg",
      tags: ["IT Support", "Network Configuration", "Hardware Setup"],
      link: "#"
    },
    {
      id: 4,
      title: "Payroll & Benefits Administration System",
      description: "Created efficient payroll management system incorporating salary calculation, leave tracking, overtime management, and benefits administration.",
      image: "/projects/payroll-system.jpg",
      tags: ["Payroll Management", "Benefits Administration", "Data Accuracy"],
      link: "#"
    }
  ],

  techStack: [
    { name: "IoT Systems", icon: "📡" },
    { name: "Database", icon: "🗄️" },
    { name: "TMS Software", icon: "🚚" },
    { name: "System Monitoring", icon: "📊" },
    { name: "Windows", icon: "🖥️" },
    { name: "Linux Basics", icon: "🐧" },
    { name: "Networking", icon: "🌐" },
    { name: "Data Analysis", icon: "📈" },
    { name: "Office Suite", icon: "📋" },
    { name: "Network Troubleshooting", icon: "🔧" },
    { name: "Equipment Maintenance", icon: "⚙️" },
    { name: "Customer Service", icon: "👥" }
  ],

  socialLinks: [
    { name: "Email", url: "mailto:Hendrikbaskoro506@gmail.com", icon: "mail" },
    { name: "Phone", url: "tel:+62821231668870", icon: "phone" },
    { name: "LinkedIn", url: "https://linkedin.com", icon: "linkedin" }
  ],

  education: [
    {
      id: 1,
      degree: "S1 Teknik Informatika",
      school: "Universitas Pamulang",
      year: "2018 – 2023",
      details: "Bachelor's degree in Information Technology"
    },
    {
      id: 2,
      degree: "Jurusan Multimedia",
      school: "SMK Tunas Grafika Informatika",
      year: "2014 – 2017",
      details: "Vocational diploma in Multimedia"
    }
  ],

  certifications: [
    {
      id: 1,
      title: "Pemrogram",
      issuer: "Badan Nasional Sertifikasi Profesi (BNSP)",
      year: "2023",
      description: "Professional Programmer Certification"
    },
    {
      id: 2,
      title: "Certificate of Achievement (TOEFL)",
      issuer: "Lembaga Bahasa Unpam",
      year: "2023",
      description: "English Language Proficiency Certificate"
    }
  ]
}
