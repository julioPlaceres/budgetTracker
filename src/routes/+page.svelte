<script lang="ts">
    // Import necessary components and utilities if needed
  </script>
  
  <style>
    /* Base styles */
    :global(body) {
      font-family: 'Roboto', sans-serif;
    }
    
    /* Hero section */
    .hero {
      background-color: #f0f2f5;
      padding: 2rem;
      text-align: center;
    }
    
    /* Overview widgets */
    .overview-widgets {
      display: flex;
      justify-content: space-around;
      padding: 2rem 0;
    }
    .widget {
      background: white;
      padding: 1rem;
      border-radius: 8px;
      box-shadow: 0 4px 6px rgba(0,0,0,0.1);
      width: 30%;
      text-align: center;
    }
    
    /* Features section */
    .features {
      display: flex;
      justify-content: space-around;
      padding: 2rem 0;
    }
    .feature {
      text-align: center;
    }
    
    /* Visual Reports & Budgeting CTA */
    .reports-cta {
      background-color: #e3f2fd;
      padding: 2rem;
      margin: 2rem 0;
      text-align: center;
    }
  </style>
  
  <div class="hero">
    <h1>Welcome to Finance Me!</h1>
    <button>Get Started</button>
  </div>
  
  <div class="overview-widgets">
    <div class="widget">Current Balance</div>
    <div class="widget">Recent Transactions</div>
    <div class="widget">Savings Goal</div>
  </div>
  
  <div class="features">
    <div class="feature">
      <i class="bi bi-graph-up"> </i>
      <p>Dashboard</p>
    </div>
    <div class="feature">
      <i class="bi bi-wallet2"> </i>
      <p>Transactions</p>
    </div>
    <div class="feature">
      <i class="bi bi-pie-chart-fill"> </i>
      <p>Reporting</p>
    </div>
    <div class="feature">
      <i class="bi bi-journal-check"> </i>
      <p>Budgeting</p>
    </div>
  </div>
  
  <div class="reports-cta">
    <h2>Visualize Your Finances</h2>
    <p>Get a clear view of your spending habits with our reporting tools.</p>
  </div>
  