---
title: Customized authentication for WordPress users
date: 2011-06-17
---

I wanted to integrate Facebook's authentication with my WordPress site's user login system. This had led me stuck for a couple of days because of all the authentication routes that I've known in WordPress would require a correct password to complete authentication. But, in my case, I just needed to authenticate a user without actually user providing a password. That means, I needed a method by which I could authenticate users using just their username or user ID. So after a lot of hacking and reading, I finally found this method that works out for me.
It basically deals with using filters, precisely `authenticate` filter. The functions added to this filter are executed in `wp_authenticate` function which is defined in `pluggable.php` and is the authentication end point in WordPress. If you watch the code in `user.php`, there you would find that two functions added to this `authenticate` filter, which are `wp_authenticate_username_password` with priority 20 and `wp_authenticate_cookie` with priority 30. `wp_authenticate_cookie` is not that we want to care about. `It's wp_authenticate_username_password` that we need to deal with. So when you want to bypass this username and password combined authentication you basically need to bypass the execution of this function and return the user before it. So we'll hook our own method to this filter with a priority less than 20 by the following line of code.

<pre class="php">
add_filter('authenticate','forceLogin',0,3);
</pre>

Now suppose you want to define an authentication that doesn't really need a password, just write a function `forceLogin()` like the following.

<pre class="php">
function forceLogin($user,$username,$password)
{
  if(username_exists($username))
  {
    $user=get_user_by('login',$username);
    remove_action('authenticate', 'wp_authenticate_username_password', 20);
    return $user;
  }
}
</pre>

Thats it, now when you call the `wp_signon()` with just a username in the credentials, the user with the username in the credentials will be authenticated without actually requiring the password. Thats how its done. One can integrate OAuth and construct customized logins for their WordPress websites.

