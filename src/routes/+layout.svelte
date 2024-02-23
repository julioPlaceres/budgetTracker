<script>
</script>

<style>
    nav {
        background-color: #fff; /* Adjust background color */
        box-shadow: 0 2px 4px rgba(0,0,0,.1); /* Soft shadow for depth */
    }
    .nav-links li a {
        display: block;
        padding: 1rem;
        color: #333; /* Adjust link color */
        text-decoration: none;
        transition: color 0.3s ease;
    }
    .nav-links li a:hover {
        color: #007bff; /* Adjust hover color */
    }
    footer {
        background-color: #f8f9fa;
        color: #6c757d;
        text-align: center;
        padding: 1rem 0;
        border-top: 1px solid #e9ecef;
    }
</style>

<div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <a class="navbar-brand" href="/">Finance Me!</a>
            <button class="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <i class="bi bi-list"></i>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item"><a class="nav-link" href="/">Home</a></li>
                    <li class="nav-item"><a class="nav-link" href="/dashboard">Dashboard</a></li>
                    <li class="nav-item"><a class="nav-link" href="/transaction">Transaction</a></li>
                    <li class="nav-item"><a class="nav-link" href="/budgeting">Budgeting</a></li>
                </ul>
            </div>
        </div>
    </nav>

    <slot></slot> <!-- Your page content will be injected here -->

    <footer>
        <p>© 2024 Finance Me! All rights reserved.</p>
    </footer>
</div>
