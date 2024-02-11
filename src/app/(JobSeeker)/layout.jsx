import DashNav from '@/components/JobSeekerDashboard/DashNav/DashNav';
import '../globals.css'

export const metadata = {
  title: "MeetReady || JobSeekerDashboard",
  description: "Generated by Tech Army",
};

const JobSeekerDashboardLayout = ({ children }) => {
  return (
    <div className="">
      <div><DashNav/></div>
      <div className="max-w-7xl mx-auto min-h-screen">{ children }</div>
    </div>
  )
}

export default JobSeekerDashboardLayout