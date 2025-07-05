# Budget Buddy - Personal Finance Tracker

A modern, responsive web application for tracking personal income and expenses with budget management and financial insights.

## 🚀 Features

### 📊 **Dashboard Overview**
- **Financial Summary**: View total income, expenses, and current balance
- **Interactive Charts**: Visual representation of income vs expenses over time
- **Category Analysis**: Pie chart showing spending distribution by category
- **Real-time Updates**: Live data synchronization with Supabase

### 💰 **Transaction Management**
- **Add Transactions**: Log income and expenses with detailed categorization
- **Custom Categories**: Create personalized spending categories
- **Transaction History**: Comprehensive filtering and search capabilities
- **Date Tracking**: Automatic date stamping for all transactions

### 📈 **Budget Planning**
- **Category Budgets**: Set spending limits for different categories
- **Budget vs Actual**: Visual comparison of planned vs actual spending
- **Budget Alerts**: Track when spending approaches budget limits
- **Flexible Budgeting**: Support for both predefined and custom categories

### 📅 **Monthly Summary**
- **Monthly Breakdown**: Detailed financial summary for each month
- **Category Spending**: Track spending patterns by category per month
- **Savings Calculation**: Automatic calculation of monthly savings
- **Data Export**: Export monthly data as CSV for external analysis

### 🔍 **Advanced Filtering**
- **Date Range Filtering**: Filter transactions by specific date ranges
- **Category Filtering**: View transactions by spending category
- **Type Filtering**: Separate income and expense transactions
- **Search Functionality**: Search through transaction notes and descriptions

### 🔐 **User Authentication**
- **Secure Login**: Email and password authentication via Supabase
- **User Registration**: Simple sign-up process with email verification
- **Password Recovery**: Secure password reset flow with email links
- **Session Management**: Automatic session handling and persistence

## 🛠️ Technology Stack

- **Frontend**: Next.js 15, React 19
- **UI Framework**: Material-UI (MUI) with custom styling
- **Backend**: Supabase (PostgreSQL database, authentication, real-time)
- **Charts**: Recharts for data visualization
- **Forms**: React Hook Form for form management
- **Notifications**: React Toastify for user feedback
- **Icons**: Lucide React and Material Icons

## 📁 Project Structure

```
Budget-Buddy/
├── src/
│   ├── app/
│   │   ├── auth/                 # Authentication pages
│   │   │   ├── login/           # Login page
│   │   │   ├── register/        # Registration page
│   │   │   ├── forgot-password/ # Password reset request
│   │   │   ├── new-password/    # Password reset form
│   │   │   └── callback/        # Auth callback handler
│   │   ├── dashboard/           # Main dashboard
│   │   │   ├── add-transaction/ # Add new transactions
│   │   │   ├── budget-setting/  # Budget management
│   │   │   ├── monthly-summary/ # Monthly reports
│   │   │   └── transHistory/    # Transaction history
│   │   ├── layout.js            # Root layout
│   │   └── page.js              # Landing page
│   ├── components/              # Reusable components
│   │   ├── Navbar/             # Navigation component
│   │   ├── categorySelector/    # Category selection
│   │   └── DynamicComponent.js # Loading component
│   └── supabase.js             # Supabase configuration
├── public/                     # Static assets
└── package.json               # Dependencies
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Supabase account

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Spend-Snap
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up Supabase**
   - Create a new Supabase project
   - Set up the following tables:
     - `transactions` (user_id, amount, category, type, notes, date)
     - `categories` (user_id, name)
     - `budgets` (user_id, category, amount, created_at)

4. **Configure environment**
   - Update `src/supabase.js` with your Supabase URL and anon key

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   - Navigate to `http://localhost:3000`

## 📊 Database Schema

### Transactions Table
```sql
CREATE TABLE transactions (
  id SERIAL PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id),
  amount DECIMAL(10,2) NOT NULL,
  category VARCHAR(100) NOT NULL,
  type VARCHAR(20) NOT NULL CHECK (type IN ('income', 'expense')),
  notes TEXT,
  date DATE NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);
```

### Categories Table
```sql
CREATE TABLE categories (
  id SERIAL PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id),
  name VARCHAR(100) NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);
```

### Budgets Table
```sql
CREATE TABLE budgets (
  id SERIAL PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id),
  category VARCHAR(100) NOT NULL,
  amount DECIMAL(10,2) NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);
```

## 🔧 Configuration

### Supabase Setup
1. **Authentication Settings**
   - Enable Email authentication
   - Set Site URL to: `http://localhost:3000/auth/callback`
   - Add redirect URL: `http://localhost:3000/auth/callback`

2. **Row Level Security (RLS)**
   - Enable RLS on all tables
   - Create policies for user data isolation

### Environment Variables
Create a `.env.local` file (optional, as keys are in supabase.js):
```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## 🎨 Customization

### Styling
- CSS modules are used for component-specific styling
- Material-UI theme can be customized in `src/app/layout.js`
- Color scheme and typography can be modified in CSS files

### Features
- Add new categories in the category selector
- Modify predefined categories in component files
- Customize chart colors in dashboard components

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Other Platforms
- Update Supabase Site URL to your production domain
- Set environment variables
- Build and deploy using `npm run build`

## 🔒 Security Features

- **Authentication**: Secure user authentication via Supabase
- **Data Isolation**: Row-level security ensures users only see their data
- **Password Security**: Secure password reset flow with email verification
- **Session Management**: Automatic session handling and cleanup

## 📱 Responsive Design

- **Mobile-First**: Optimized for mobile devices
- **Tablet Support**: Responsive layout for tablet screens
- **Desktop Experience**: Full-featured desktop interface
- **Touch-Friendly**: Optimized touch interactions

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

For support and questions:
- Create an issue in the repository
- Check the Supabase documentation for backend issues
- Review Next.js documentation for frontend issues

---

**Built with ❤️ using Next.js and Supabase**

