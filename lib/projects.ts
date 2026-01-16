export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  detailedDescription: string;
  overview: string;
  techStack: string[];
  image: string;
  link: string;
  codeSnippet: string;
}

export const projects: Project[] = [
  {
    id: "ai-resume-analyzer",
    title: "AI Resume Analyzer",
    category: "AI / Python",
    description: "An advanced tool to parse and analyze resumes using machine learning for better talent matching.",
    detailedDescription: "The AI Resume Analyzer leverages natural language processing to extract key skills, experience, and contact information from resumes. It provides a match score against job descriptions, helping recruiters save hours of manual screening.",
    overview: "Built using Python and OpenAI's GPT-4, this project focuses on precision and scale. It supports multiple file formats including PDF and DOCX, making it a versatile tool for modern HR departments.",
    techStack: ["Next.js", "Python", "FastAPI", "OpenAI API", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=1170&auto=format&fit=crop",
    link: "#",
    codeSnippet: `import openai
import PyPDF2

def analyze_resume(file_path):
    # Extract text from PDF
    with open(file_path, 'rb') as file:
        reader = PyPDF2.PdfReader(file)
        text = ""
        for page in reader.pages:
            text += page.extract_text()
    
    # Analyze with OpenAI
    response = openai.ChatCompletion.create(
        model="gpt-4",
        messages=[{"role": "user", "content": f"Analyze this resume: {text}"}]
    )
    return response.choices[0].message.content`,
  },
  {
    id: "uber-clone",
    title: "Uber Clone",
    category: "Mobile / Fullstack",
    description: "A comprehensive ride-sharing application clone with real-time tracking and payment integration.",
    detailedDescription: "This Uber clone is a full-featured marketplace application. It handles user authentication, real-time location tracking using Google Maps API, and seamless payment processing via Stripe.",
    overview: "The architecture is split into a robust React Native frontend and a scalable Node.js backend. Real-time communication is powered by Socket.io, ensuring that ride requests and updates are delivered instantly.",
    techStack: ["React Native", "Node.js", "Express", "MongoDB", "Socket.io", "Stripe"],
    image: "https://images.unsplash.com/photo-1554672408-730436b60dde?q=80&w=1032&auto=format&fit=crop",
    link: "#",
    codeSnippet: `// Socket.io Real-time tracking
io.on('connection', (socket) => {
  socket.on('update-location', (data) => {
    const { driverId, location } = data;
    // Broadcast to relevant users
    socket.to(\`ride-\${data.rideId}\`).emit('driver-moved', {
      driverId,
      location
    });
  });
});`,
  },
  {
    id: "greenwave-music",
    title: "Greenwave Music",
    category: "Web / UI",
    description: "A sleek, animation-rich music streaming platform with a focus on premium user experience.",
    detailedDescription: "Greenwave Music is a design-first streaming application. It features fluid transitions, glassmorphic UI elements, and a custom audio engine built on top of the Web Audio API.",
    overview: "The goal was to create an interface that felt alive. We used Framer Motion for complex orchestrations and GSAP for high-performance scroll animations, resulting in a buttery smooth experience.",
    techStack: ["Next.js", "Framer Motion", "GSAP", "Web Audio API", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1170&auto=format&fit=crop",
    link: "#",
    codeSnippet: `// Framer Motion Animation Logic
const cardVariants = {
  initial: { scale: 0.9, opacity: 0 },
  animate: { 
    scale: 1, 
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

export const MusicCard = () => (
  <motion.div 
    variants={cardVariants}
    className="glass-card"
  >
    {/* Content */}
  </motion.div>
);`,
  },
  {
    id: "health-portal",
    title: "Health Portal",
    category: "Healthcare",
    description: "A centralized platform for patient record management and appointment scheduling.",
    detailedDescription: "A HIPAA-compliant medical portal that connects patients with healthcare providers. It includes features for secure messaging, record uploading, and a dynamic scheduling system.",
    overview: "Security was the top priority. We implemented end-to-end encryption for all patient data and used RBAC (Role-Based Access Control) to ensure sensitive information is only accessible by authorized personnel.",
    techStack: ["React", "TypeScript", "Prisma", "PostgreSQL", "Auth.js", "AWS S3"],
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1170&auto=format&fit=crop",
    link: "#",
    codeSnippet: `// Secure Patient Data Retrieval
export const getPatientData = async (userId: string) => {
  const session = await getServerSession(authOptions);
  
  if (!session || session.user.role !== 'DOCTOR') {
    throw new Error('Unauthorized');
  }

  return await prisma.patientRecord.findUnique({
    where: { userId },
    include: { vitals: true, history: true }
  });
};`,
  },
  {
    id: "ai-business-analyst",
    title: "AI Business Analyst",
    category: "Data Science",
    description: "Automated business insights generator using LLMs to analyze financial reports and trends.",
    detailedDescription: "This tool automates the tedious process of financial analysis. It can digest large CSV or PDF reports and generate executive summaries, identifying key risks and growth opportunities.",
    overview: "We utilized LangChain to create a specialized agent that understands financial terminology. The frontend features interactive charts that visualize the AI's findings in real-time.",
    techStack: ["React", "LangChain", "Python", "Pandas", "Recharts"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1115&auto=format&fit=crop",
    link: "#",
    codeSnippet: `// LangChain Analysis Agent
const agent = await initializeAgentExecutorWithOptions(
  tools,
  model,
  {
    agentType: "zero-shot-react-description",
    verbose: true,
  }
);

const result = await agent.call({
  input: "Analyze the Q3 earnings report and identify the top 3 risks."
});`,
  },
  {
    id: "cost-calculator",
    title: "Cost Calculator",
    category: "Fintech",
    description: "Dynamic budget planning and project cost estimation tool with interactive data viz.",
    detailedDescription: "A precise financial tool designed for project managers. It allows for complex budget modeling, expense tracking, and ROI forecasting with real-time adjustments.",
    overview: "The calculator uses a custom-built mathematical engine to handle complex formulas and dependencies. The UI is built using a tabular system that feels familiar yet modern.",
    techStack: ["Next.js", "Zustand", "Chart.js", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1170&auto=format&fit=crop",
    link: "#",
    codeSnippet: `// Dynamic Calculation Engine
const useCalculator = create((set) => ({
  costs: [],
  total: 0,
  addCost: (item) => set((state) => {
    const newCosts = [...state.costs, item];
    const newTotal = newCosts.reduce((acc, curr) => acc + curr.amount, 0);
    return { costs: newCosts, total: newTotal };
  }),
  calculateROI: (revenue) => {
    // Custom ROI logic
  }
}));`,
  },
];
