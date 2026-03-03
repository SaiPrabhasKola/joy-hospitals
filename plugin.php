<?php
/**
 * Plugin Name: My React App
 * Description: Embedded React App
 * Version: 1.0.0
 * Author: Antigravity
 */

function my_react_app_shortcode() {
    return '<div id="root"></div>';
}
add_shortcode('my_react_app', 'my_react_app_shortcode');

function my_react_app_enqueue_scripts() {
    // Only enqueue on pages where the shortcode is present, or globally if preferred.
    // For simplicity, we enqueue globally, but checking for shortcode is better for performance.
    
    $dist_path = plugin_dir_path(__FILE__) . 'react-src/dist/assets/';
    $dist_url = plugin_dir_url(__FILE__) . 'react-src/dist/assets/';

    if (!file_exists($dist_path)) {
        return;
    }

    $files = scandir($dist_path);
    foreach ($files as $file) {
        if (pathinfo($file, PATHINFO_EXTENSION) === 'js') {
            // Enqueue the JS file. 
            // 'wp-element' dependency ensures React is available if we were using WP's bundled React, 
            // but since we bundle our own React with Vite, we don't strictly need it unless we want to share.
            // We'll bundle our own to avoid version conflicts.
            wp_enqueue_script('my-react-app-js', $dist_url . $file, array(), null, true);
            
            // Pass data to React if needed
            wp_localize_script('my-react-app-js', 'wpReactSettings', array(
                'root' => esc_url_raw(rest_url()),
                'nonce' => wp_create_nonce('wp_rest')
            ));
        }
        if (pathinfo($file, PATHINFO_EXTENSION) === 'css') {
            wp_enqueue_style('my-react-app-css', $dist_url . $file, array(), null);
        }
    }
}
add_action('wp_enqueue_scripts', 'my_react_app_enqueue_scripts');
