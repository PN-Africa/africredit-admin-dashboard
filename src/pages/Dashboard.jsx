import {  useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

import "./Dashboard.css";

function Dashboard({ onLogout }) {

   const [showLogoutModal, setShowLogoutModal] = useState(false);

const dashboardStats = {
    pendingReview: 10,
    approvedToday: 10,
    disbursed: 100000,
    repaymentRate: 10,
    overdueLoans: 10,
  }

  const weeklyData = [
  { week: "W1", approved: 6, disbursed: 4 },
  { week: "W2", approved: 8, disbursed: 5 },
  { week: "W3", approved: 7, disbursed: 6 },
  { week: "W4", approved: 9, disbursed: 7 },
  { week: "W5", approved: 6, disbursed: 5 },
  { week: "W6", approved: 10, disbursed: 8 },
  { week: "W7", approved: 8, disbursed: 6 },
  { week: "W8", approved: 11, disbursed: 9 },
  { week: "W9", approved: 7, disbursed: 6 },
  { week: "W10", approved: 10, disbursed: 8 },
  { week: "W11", approved: 12, disbursed: 9 },
  { week: "W12", approved: 9, disbursed: 7 },
];

const applicationStatus = {
  approved: 30,
  pending: 30,
  rejected: 20,
  disbursed: 30,
};

const reviewApplications = [
  {
    name: "Ngozi Akeyemi",
    type: "Salary Advance",
    amount: 188000,
    time: "in 5m",
  },
  {
    name: "David Okoro",
    type: "Business Loan",
    amount: 250000,
    time: "in 12m",
  },
  {
    name: "Amaka Eze",
    type: "Emergency Loan",
    amount: 120000,
    time: "in 18m",
  },
  {
    name: "Ibrahim Musa",
    type: "Working Capital",
    amount: 350000,
    time: "in 25m",
  },
];

const riskFlags = [
  {
    title: "Duplicate BVN detected",
    description: "Possible duplicate identity record",
  },
  {
    title: "Default risk rising",
    description: "Borrower repayment is overdue",
  },
  {
    title: "High loan-to-income ratio",
    description: "Borrower may be over-leveraged",
  },

  {
    title: "Multiple loan applications from same IP",
    description: "Borrower has submitted multiple applications. Potential fraudulent activity detected",
  }
];

  return (
    <div className="dashboard">
      
        <aside className="sidebar">
  <h1>AfriCredit</h1>

  <nav className="sidebar-nav">
    <a href="#" className="active">Overview</a>
    <a href="#">Applications</a>
    <a href="#">Borrowers</a>
    <a href="#">Risk Monitoring</a>
    <a href="#">Repayments</a>
    <a href="#">Disbursements</a>
    <a href="#">Reports</a>
  </nav>
  <div className="sidebar-logout">
  <button type="button" onClick={() => setShowLogoutModal(true)}>
    Log out
  </button>
</div>
      </aside>

     <main className="main-content">

  <div className="dashboard-header">
    <div>
      <h2>Hello Courage,</h2>
      <p>Here's what's moving across risk and finance today</p>
    </div>

    <div className="dashboard-actions">
      <input
        type="text"
        placeholder="Search borrowers"
      />

      <button type="button" className="notification-button">
        🔔
      </button>
    </div>
  </div>

  <section className="stats-grid">

    <div className="stat-card">
      <span>Pending review</span>
      <strong>{dashboardStats.pendingReview}</strong>
      <small>+3 today</small>
    </div>

    <div className="stat-card">
      <span>Approved today</span>
      <strong>{dashboardStats.approvedToday}</strong>
      <small>+2 from yesterday</small>
    </div>

    <div className="stat-card">
      <span>Disbursed</span>
      <strong>₦{dashboardStats.disbursed.toLocaleString()}</strong>
      <small>+20% this month</small>
    </div>

    <div className="stat-card">
      <span>Repayment rate</span>
      <strong>{dashboardStats.repaymentRate}%</strong>
      <small>+1.5%</small>
    </div>

    <div className="stat-card">
      <span>Overdue loans</span>
      <strong>{dashboardStats.overdueLoans}</strong>
      <small>5 this week</small>
    </div>

  </section>
<div className="charts-grid">
<section className="overview-chart-card">
  <div className="section-heading">
    <div>
      <h3>Application & Disbursement</h3>
      <p>Weekly activity over the last 12 weeks</p>
    </div>
  </div>

  <div className="chart-container">
    <ResponsiveContainer width="100%" height={320}>
      <BarChart data={weeklyData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="week" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="approved" name="Applications" />
        <Bar dataKey="disbursed" name="Disbursements" />
      </BarChart>
    </ResponsiveContainer>
  </div>
</section>

<section className="overview-chart-card status-card">
  <div className="section-heading">
    <div>
      <h3>Application by Status</h3>
      <p>Current application distribution</p>
    </div>
  </div>

  <div className="status-chart-container">
    <ResponsiveContainer width="100%" height={320}>
      <PieChart>
        <Pie
          data={[
            { name: "Approved", value: applicationStatus.approved },
            { name: "Pending", value: applicationStatus.pending },
            { name: "Rejected", value: applicationStatus.rejected },
            { name: "Disbursed", value: applicationStatus.disbursed },
          ]}
          cx="50%"
          cy="50%"
          innerRadius={75}
          outerRadius={115}
          paddingAngle={3}
          dataKey="value"
        >
          <Cell fill="#16A34A" />
<Cell fill="#F59E0B" />
<Cell fill="#EF4444" />
<Cell fill="#2563EB" />
        </Pie>

        <Tooltip />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  </div>
</section>
</div>


<div className="bottom-grid">
<section className="review-section">
  <div className="section-heading">
    <div>
      <h3>Needs Your Review</h3>
      <p>Applications waiting for your attention</p>
    </div>
  </div>

  <div className="review-list">
    <div className="review-item">
      <div>
        <strong>Ngozi Akeyemi</strong>
        <span>Salary Advance</span>
      </div>
      <div className="review-amount">
        ₦188,000
      </div>
      <button type="button">Review</button>
    </div>

    <div className="review-item">
      <div>
        <strong>David Okoro</strong>
        <span>Business Loan</span>
      </div>
      <div className="review-amount">
        ₦250,000
      </div>
      <button type="button">Review</button>
    </div>

    <div className="review-item">
      <div>
        <strong>Amaka Eze</strong>
        <span>Emergency Loan</span>
      </div>
      <div className="review-amount">
        ₦120,000
      </div>
      <button type="button">Review</button>
    </div>

    <div className="review-item">
      <div>
        <strong>Ibrahim Musa</strong>
        <span>Working Capital</span>
      </div>
      <div className="review-amount">
        ₦350,000
      </div>
      <button type="button">Review</button>
    </div>
  </div>
</section>

<section className="dashboard-section risk-section">
  <div className="section-heading">
    <h3>Risk Flags</h3>
    <p>Items requiring risk attention</p>
  </div>

  <div className="risk-list">
    {riskFlags.map((flag, index) => (
      <div className="risk-item" key={index}>
        <div className="risk-icon">!</div>

        <div className="risk-content">
          <strong>{flag.title}</strong>
          <span>{flag.description}</span>
        </div>

        <button type="button" className="risk-review-button">
          Review
        </button>
      </div>
    ))}
  </div>
</section>

</div>

</main> 

{showLogoutModal && (
  <div className="logout-modal-overlay">
    <div className="logout-modal">
      
      <div className="logout-icon">
        ↪
      </div>

      <h3>Log out of your account?</h3>

      <div className="logout-actions">
        <button
          type="button"
          className="cancel-logout"
          onClick={() => setShowLogoutModal(false)}
        >
          Cancel
        </button>

        <button
          type="button"
          className="confirm-logout"
          onClick={onLogout}
        >
          Log out
        </button>
      </div>

    </div>
  </div>
)}

    </div>
  )
}

export default Dashboard;
