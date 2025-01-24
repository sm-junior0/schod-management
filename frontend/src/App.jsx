import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useNavigate,
} from "react-router-dom";
import { AuthPage } from "./components/AuthPage";
import Sidebar from "./components/layout/Sidebar";
import { Header } from "./components/dashboard/Header";
import { StatsCard } from "./components/dashboard/StatsCard";
import { SchoolsTable } from "./components/dashboard/SchoolsTable";
import { ClaimsChart } from "./components/dashboard/ClaimsChart";
import { SchoolsStats } from "./components/dashboard/SchoolsStats";
import { AccountSettings } from "./components/settings/AccountSettings";
import { ProfilePage } from "./components/profile/ProfilePage";
import Messaging from "./components/messageComponents/messaging";
import { AcademicTerm } from "./components/academic/AcademicTerm";
import { AcademicYear } from "./components/academic/AcademicYear";
import LandingPage from "./components/LandingPage";
import StudentsPage from "./components/students/StudentsPage";
import { ClassManagement } from "./components/students/ClassManagement";
import { TeachersPage } from "./components/teachers/TeachersPage";
import CoursesPage from "./components/courses/CoursesPage";
import { StudentLogin } from "./components/student/auth/StudentLogin";
import { StudentLayout } from "./components/student/layout/StudentLayout";
import { StudentDashboard } from "./components/student/dashboard/StudentDashboard";
import { ReportCards } from "./components/student/pages/ReportCards";
import { ParentMeetings } from "./components/student/pages/ParentMeetings";
import { Announcements } from "./components/student/dashboard/Announcements";
import { Appeals } from "./components/student/pages/Appeals";
import { Timetable } from "./components/student/pages/Timetable";
import { Performance } from "./components/student/pages/Perfomance";
import { Notifications } from "./components/student/pages/Notification";
import { SaAuthPage } from "./components/super_admin/auth/SaAuthPage";
import SaSidebar from "./components/super_admin/layout/SaSidebar";
import { SaClaimsChart } from "./components/super_admin/dashboard/SaClaimsChart";
import { SaHeader } from "./components/super_admin/dashboard/SaHeader";
import { SaStatsCard } from "./components/super_admin/dashboard/SaStatsCard";
import { SaSchoolsTable } from "./components/super_admin/dashboard/SaSchoolsTable";
import { SaSchoolsStats } from "./components/super_admin/dashboard/SaSchoolsStats";
import SchoolsList from "./components/super_admin/pages/SchoolsList";
import { SaProfileDropdown } from "./components/super_admin/dashboard/SaProfileDropDown";
import { SaProfilePage } from "./components/super_admin/profile/SaProfilePage";
import { SaAccountSettings } from './components/super_admin/settings/SaAccountSettings';
import { TeacherLogin } from "./components/teacher/auth/TeacherLogin";
import { TeacherSidebar } from "./components/teacher/layout/TeacherSidebar";
import { AppealsTeacher } from "./components/teacher/pages/AppealsTeacher";
import { TeacherLayout } from "./components/teacher/layout/TeacherLayout";
import { Classes } from "./components/teacher/pages/Classes";
import { School, Users, DollarSign, UserCircle } from "lucide-react";
import { AdminDashboard } from "./components/dashboard/AdminDashboard";

const DashboardHome = () => (
  <div className="p-6">
    <div className="mb-6">
      <h1 className="text-2xl font-semibold text-gray-800 mb-1">
        Welcome Back, Super Admin!
      </h1>
      <p className="text-gray-600">Enjoy World's No.1 Education Software</p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
      <StatsCard
        title="Total Schools"
        value="25.1k"
        change={15}
        icon={<School className="text-blue-600" />}
      />
      <StatsCard
        title="Total Students"
        value="2,435k"
        change={-1.9}
        icon={<Users className="text-blue-600" />}
      />
      <StatsCard
        title="Total Income"
        value="3.5M"
        change={15}
        icon={<DollarSign className="text-blue-600" />}
      />
      <StatsCard
        title="Total Users"
        value="10.5M"
        change={15}
        icon={<UserCircle className="text-blue-600" />}
      />
    </div>

    <SchoolsTable />

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
      <div className="lg:col-span-2">
        <ClaimsChart />
      </div>
      <SchoolsStats />
    </div>
  </div>
);

const DashboardLayout = ({ children }) => (
  <div className="flex min-h-screen bg-gray-50">
    <Sidebar />
    <div className="flex-1">
      <Header />
      <main>{children}</main>
    </div>
  </div>
);

const ProtectedRoute = ({ children }) => {
  // For now, we'll assume the user is always authenticated
  const isAuthenticated = true;

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return children;
};

const SettingsWrapper = () => {
  const navigate = useNavigate();
  return <AccountSettings onBack={() => navigate("/dashboard")} />;
};

const ProfileWrapper = () => {
  const navigate = useNavigate();
  return <ProfilePage onBack={() => navigate("/dashboard")} />;
};

const SaDashboardHome = () => (
  <div className="p-6">
    <div className="mb-6">
      <h1 className="text-2xl font-semibold text-gray-800 mb-1">
        Welcome Back, Super Admin!
      </h1>
      <p className="text-gray-600">Enjoy World's No.1 Education Software</p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
      <SaStatsCard
        title="Total Schools"
        value="25.1k"
        change={15}
        icon={<School className="text-blue-600" />}
      />
      <SaStatsCard
        title="Total Students"
        value="2,435k"
        change={-1.9}
        icon={<Users className="text-blue-600" />}
      />
      <SaStatsCard
        title="Total Income"
        value="3.5M"
        change={15}
        icon={<DollarSign className="text-blue-600" />}
      />
      <SaStatsCard
        title="Total Users"
        value="10.5M"
        change={15}
        icon={<UserCircle className="text-blue-600" />}
      />
    </div>

    <SaSchoolsTable />

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
      <div className="lg:col-span-2">
        <SaClaimsChart />
      </div>
      <SaSchoolsStats />
    </div>
  </div>
);

const SaDashboardLayout = ({ children }) => (
  <div className="flex min-h-screen bg-gray-50">
    <SaSidebar />
    <div className="flex-1">
      <SaHeader />
      <main>{children}</main>
    </div>
  </div>
);

const SaProtectedRoute = ({ children }) => {
  // For now, we'll assume the user is always authenticated
  const isAuthenticated = true;

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return children;
};

const SaSettingsWrapper = () => {
  const navigate = useNavigate();
  return <SaAccountSettings onBack={() => navigate("sadmin/dashboard")} />;
};

const SaProfileWrapper = () => {
  const navigate = useNavigate();
  return <SaProfilePage onBack={() => navigate("sadmin/dashboard")} />;
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/AuthPage" element={<AuthPage />} />
        <Route path="/student/login" element={<StudentLogin />} />
        <Route path="/student" element={<StudentLayout />}>
          <Route path="dashboard" element={<StudentDashboard />} />
          <Route path="announcements" element={<Announcements />} />
          <Route path="report-cards" element={<ReportCards />} />
          <Route path="parent-meetings" element={<ParentMeetings />} />
          <Route path="appeals" element={<Appeals />} />
          <Route path="performance" element={<Performance />} />
          <Route path="timetable" element={<Timetable />} />
          <Route path="notifications" element={<Notifications />} />
        </Route>
        <Route>
          <Route path="/teacher/teacherLogin" element={<TeacherLogin />} />
          <Route path="/teacher" element={<TeacherLayout />}>
             <Route path="classes" element={<Classes />} />
             <Route path="appeals" element={<AppealsTeacher />} />
          </Route>
        </Route>
        <Route>
          <Route path="/" element={<LandingPage />} />
          <Route path="/sadmin/auth" element={<SaAuthPage />} />
          <Route
            path="sadmin/dashboard"
            element={
              <SaProtectedRoute>
                <SaDashboardLayout>
                  <SaDashboardHome />
                </SaDashboardLayout>
              </SaProtectedRoute>
            }
          />
          <Route
            path="sadmin/settings"
            element={
              <SaProtectedRoute>
                <SaDashboardLayout>
                <SaSettingsWrapper />
                </SaDashboardLayout>
              </SaProtectedRoute>
            }
          />
          <Route
            path="sadmin/profile"
            element={
              <SaProtectedRoute>
                <SaProfileWrapper />
              </SaProtectedRoute>
            }
          />
          <Route
          path="sadmin/dashboard/schools"
          element={
             <SaProtectedRoute>
              <SaDashboardLayout>
                <SchoolsList />
              </SaDashboardLayout>
             </SaProtectedRoute>            
          }/>
        </Route>

        <Route
          path="dashboard/courses"
          element={
            <ProtectedRoute>
              <DashboardLayout>
                <CoursesPage />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="dashboard/students/class"
          element={
            <ProtectedRoute>
              <DashboardLayout>
                <ClassManagement />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/students"
          element={
            <ProtectedRoute>
              <DashboardLayout>
                <StudentsPage />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard/academic-year"
          element={
            <ProtectedRoute>
              <DashboardLayout>
                <AcademicYear />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard/academic-term"
          element={
            <ProtectedRoute>
              <DashboardLayout>
                <AcademicTerm />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="dashboard/students/class"
          element={
            <ProtectedRoute>
              <DashboardLayout>
                <ClassManagement />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="dashboard/teachers"
          element={
            <ProtectedRoute>
              <DashboardLayout>
                <TeachersPage />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardLayout>
                <AdminDashboard />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard/messages"
          element={
            <ProtectedRoute>
              <DashboardLayout>
                <Messaging />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/settings"
          element={
            <ProtectedRoute>
              <SettingsWrapper />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <ProfileWrapper />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
};

export default App;
