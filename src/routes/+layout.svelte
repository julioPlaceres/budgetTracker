<script lang="ts">
    import { onMount } from 'svelte';
    
    // Directly close the navbar without checking conditions
    const collapseNavbar = () => {
        const navbarCollapse = document.querySelector('.navbar-collapse');
        if (navbarCollapse?.classList.contains('show')) {
            navbarCollapse?.classList.remove('show');
        }
    };
    
    const closeNavbar = (event?: MouseEvent) => {
        const navbarToggler = document.querySelector('.navbar-toggler') as HTMLElement;
        const navbarCollapse = document.querySelector('.navbar-collapse') as HTMLElement;
        
        // Close the navbar if it's open and if:
        // 1. The click is outside the navbarCollapse,
        // 2. The clicked element is not the navbarToggler,
        // 3. The navbarToggler is visible (which means we're on a small screen).
        if (navbarCollapse.classList.contains('show') &&
          event &&
          !navbarCollapse.contains(event.target as Node) &&
          event.target !== navbarToggler &&
          navbarToggler.offsetParent !== null) {
            navbarCollapse.classList.toggle('show');
        }
    }
    
    onMount(() => {
        window.addEventListener('click', (event) => {
            closeNavbar(event);
        });
        
        return () => {
            // Cleanup the event listener when the component is destroyed
            window.removeEventListener('click', (event) => {
                closeNavbar(event);
            });
        };
    });
</script>
<style>
    .page-container {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    }
    
    .content-wrapper {
        flex: 1;
    }
    
    .logo {
        width: 50px;
        height: 50px;
    }
    
    nav {
        background-color: #222222 !important; /* Adjust background color */
        box-shadow: 0 2px 4px rgba(0,0,0,.1); /* Soft shadow for depth */
    }
    
    .navbar-toggler {
        color: #ffffff;
    }
    
    .nav-link {
        display: block;
        padding: 1rem;
        color: #ffffff;
        text-decoration: none;
        transition: color 0.3s ease;
    }
    
    .nav-link:hover {
        color: #007bff; /* Adjust hover color */
    }
    
    footer {
        background-color: #222222;
        color: #6c757d;
        text-align: center;
        padding: 1rem 0;
        border-top: 1px solid #e9ecef;
    }
</style>

<div class="page-container">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <a class="navbar-brand" href="/">
                <img src="/logo.webp" alt="Finance Me! Logo" class="logo">
            </a>
            <button class="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <i class="bi bi-list"></i>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item"><a class="nav-link" href="/" on:click={collapseNavbar}>Home</a></li>
                    <li class="nav-item"><a class="nav-link" href="/dashboard" on:click={collapseNavbar}>Dashboard</a></li>
                    <li class="nav-item"><a class="nav-link" href="/transactions" on:click={collapseNavbar}>Transaction</a></li>
                    <li class="nav-item"><a class="nav-link" href="/bills" on:click={collapseNavbar}>Budgeting</a></li>
                </ul>
            </div>
        </div>
    </nav>

    <div class="content-wrapper">
    <slot></slot> <!-- Your page content will be injected here -->
    </div>
    
    <footer>
        <p>© 2024 Finance Me! All rights reserved.</p>
    </footer>
</div>
