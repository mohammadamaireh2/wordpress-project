<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wordpress' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '_hy0`cRf*fe~?%Xq1:%$ED>Q2T4<UPjQA-7@nCg?(jQXV>@eCR^ICJvnw>ay*Fj$' );
define( 'SECURE_AUTH_KEY',  'QShMYQ!e;zNaStM+fX_bway:4$wA,G;i48+G~(<zs2NiVdYX}B%p9c*fAmk.R!H$' );
define( 'LOGGED_IN_KEY',    '[1CO=ykST=L=Ex%<iNC`(42&-oS,KXmy(J8:3>]I,b>xpb{%=#]a%r9s@l#(e7QR' );
define( 'NONCE_KEY',        'n=Faj^dvW]6K3T.?xrzq.VK*3()cRgB5L;_LrzxxAVCL>FPLL)G#Xs.>lf57o;b-' );
define( 'AUTH_SALT',        ']^}k2e`BPUH,&z8ME.`4pmji_S_%X`~J?BM],hfluq#hZ]?K?`Rabr%B[&E(:Zd@' );
define( 'SECURE_AUTH_SALT', 'xxn}~^WP7jOe{T8e+p9R6!_(OY~7M&k+4DZTr}A5 =F1Z%*c23qN8b^H/[-c!wTu' );
define( 'LOGGED_IN_SALT',   'Un&JMs.%)mePsIN3eEr,}h$~%JU<O2K3!CR(_5;Rn 5V0hMXcjcn^.)#|J@%C@b$' );
define( 'NONCE_SALT',       'rDonTY+;_+84.xBTH;%>8Ji+e[O{UHH}CIJWb}XI+fQ7?Bf-#>TH<_R:ORx4nB&(' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
