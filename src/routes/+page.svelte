<script lang="ts">
</script>
  
  <style>
    /* Base styles */
    :global(body) {
      font-family: 'Roboto', sans-serif;
      font-size: 0.7rem;
    }
    
    /* Hero section */
    .hero {
      background-image: url("/bkg-lion03.webp");
      background-size: cover;
      background-position: center;
      padding: 2rem;
      text-align: center;
      height: 200px;
    }
    
    .hero > h1 {
      color: #007bff;
    }
    
    .hero > p {
      color: #ffffff;
      text-align: center;
      font-size: 0.6rem;
      margin-top: 2rem;
    }
    
    /* Overview widgets */
    .overview-widgets {
      display: flex;
      justify-content: space-around;
      padding: 2rem 0;
    }
    .widget {
      background: white;
      padding: 0.5rem;
      border-radius: 8px;
      box-shadow: 0 4px 6px rgba(0,0,0,0.1);
      width: 30%;
      color: black;
      text-align: center;
      text-decoration: none;
    }
    
    /* Features section */
    .features {
      display: flex;
      justify-content: space-around;
      padding: 2rem 0;
    }
    .feature {
      color: black;
      text-decoration: none;
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
    <p>Weep no more; behold, the Lion of the tribe of Judah, the Root of David, has conquered - Revelation 5:5</p>
  </div>
  
  <div class="overview-widgets">
    <a href="/dashboard" class="widget">Current Balance</a>
    <a href="/transactions" class="widget">Recent Transactions</a>
    <a href="/dashboard" class="widget">Savings Goal</a>
  </div>
  
  <div class="features">
    <a href="/dashboard" class="feature">
      <i class="bi bi-graph-up"> </i>
      <p>Dashboard</p>
    </a>
    <a href="/transactions" class="feature">
      <i class="bi bi-wallet2"> </i>
      <p>Transactions</p>
    </a>
    <a href="/reporting" class="feature">
      <i class="bi bi-pie-chart-fill"> </i>
      <p>Reporting</p>
    </a>
    <a href="/bills" class="feature">
      <i class="bi bi-journal-check"> </i>
      <p>Budgeting</p>
    </a>
  </div>
  
  <div class="reports-cta">
    <h2>Visualize Your Finances</h2>
    <p>Get a clear view of your spending habits with our reporting tools.</p>
  </div>
  