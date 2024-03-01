
import JobSeekerDashboardLayout from "../../layout";

export const metadata = {
  title: "MeetReady || Profile",
  description: "Generated by create next app",

};
function layout({ children }) {
  return (
    <JobSeekerDashboardLayout withNavbar={false}>
        
          {children}

    </JobSeekerDashboardLayout>
  );
}

export default layout;
