<header>
	<a class="logo" href="/"><img src="/crown.svg" alt="site logo" /></a>
	<nav>
		<a href="/shop">Shop</a>
		<a href="/login">Log In</a>
		<div class="cart-icon">
			<img src="/shopping-bag.svg" alt="shopping bag" />
            <span>0</span>
        </div>
	</nav>
</header>

<style>
	header {
		height: 70px;
		width: 100%;
		display: flex;
		justify-content: space-between;
		margin-bottom: 25px;
		align-items: center;
	}

	.logo {
		padding: 25px;
	}

	nav {
		height: 100%;
		flex: 1;
		display: flex;
		align-items: center;
		justify-content: flex-end;
	}

	nav a {
		text-transform: uppercase;
		cursor: pointer;
		padding: 10px 15px;
	}

    .cart-icon {
        width: 45px;
        height: 45px;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }

	.cart-icon img {
		width: 24px;
		height: 24px;
	}

    .cart-icon span {
        position: absolute;
        font-size: 10px;
        font-weight: bold;
        bottom: 12px;
    }

	@media screen and (max-width: 800px) {
		header {
			height: 60px;
			padding: 10px;
			margin-bottom: 20px;
		}

		.logo {
			width: 50px;
			padding: 0;
		}
	}
</style>
