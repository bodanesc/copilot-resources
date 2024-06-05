---
layout: page
nav_exclude: true
title: How to create users in the tenant
permalink: m365/demo/create_users
---

{% include note_info.html content="This chapter takes about 5 minutes to read and 10 minutes to implement" %}

One of the main tasks of an admin is to create and manage users in the Microsoft 365 tenant. Users are the people who have access to the Microsoft 365 apps and services that you have subscribed to. You can create users one by one or in bulk, assign them licenses and configure their settings and permissions.

To create a user in the tenant, follow these steps:
1. Go to the [**Admin Center**](https://admin.microsoft.com) and sign in with your admin account.
2. In the left navigation pane, click on `Users` > `Active users`.
3. On the Active users page, click on `Add a user button` at the top of the page.
4. On the `Add a user` panel, fill in the required information for the new user, such as name, username, automatically creating a password and attached license. You can also choose to send an email to the user with their account information and password reset link.
5. Click on `Next` to review the user's settings, such as roles, groups and product licenses. You can edit any of these settings as needed.
6. Click on `Finish` to create the user and add them to the tenant.

{% include note_info.html content="You can repeat this process for each user you want to create or you can use the <a href='https://learn.microsoft.com/en-us/microsoft-365/enterprise/add-several-users-at-the-same-time?view=o365-worldwide'><strong>bulk upload option</strong></a> to create multiple users at once using a CSV file." %}


For more information on how to create and manage users in the tenant, you can visit the [Microsoft Learn documentation for Microsoft 365](https://learn.microsoft.com/en-us/microsoft-365/enterprise/manage-microsoft-365-accounts?view=o365-worldwide).

# User security

A few best practices to ensure security for users are:
- create a random password for each user
- mandate that the user should change the password at their first login
- push and advise users to enroll in using Multi Factor Authentication from the first second

{% include note_caution.html content="Administrators for any service should always use Multi Factor Authentication. <br>
This is also highly recommended to ensure safety for all users and data within the organization." %}
