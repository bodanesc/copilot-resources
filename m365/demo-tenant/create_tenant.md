---
layout: page
nav_exclude: true
permalink: m365/demo/create_tenant
---
# Create a Microsoft 365 Business Premium tenant in Advisory

{% include note_info.html content="This chapter takes about 10 minutes to read and 15 minutes to implement" %}

To use Microsoft 365, you need to create a tenant, which is a dedicated and isolated space in the Microsoft cloud where your organization's data and settings are stored. A tenant is also the basis for your identity and access management, and it determines the services and features that you can use. Creating a tenant is the first step to setting up your Microsoft 365 subscription and getting started with your cloud-based business solution.

# Prerequisites

Before you create a Microsoft 365 Business Premium tenant, you need to have the following:
- A valid email address that you can use to sign up for Microsoft 365 Business Premium. 
- A valid credit card or other payment method that you can use to pay for your subscription. You can also choose to start with a free trial for one month.
- A list of users that you want to add to your tenant and assign licenses to. You can start with 1 user and add up to 300 users to your Microsoft 365 Business Premium subscription.
- An internet connection that is fast and reliable enough to access Microsoft 365 cloud services.
- Optional: a domain name that you want to use for your business email and website. You can use an existing domain name that you own or buy a new one from Microsoft or a third-party provider. Please note that the domain should have a DNS server configured, whose management panel you should have access to – to add a series of registrations.

# Isolating data & privacy recomandation 

{% include note_tip.html content="When creating a demo tenant for Microsoft 365, it's recommended to use private browsing mode. This ensures that the process is not linked to any potential existing accounts you may have. " %}

Reasons why private browsing is beneficial:

- **No Linkage to Existing Accounts**: Private browsing helps prevent any accidental association with your existing Microsoft accounts.
- **Data Separation**: It ensures that the data and settings for your demo tenant are kept separate from any of your existing accounts.
- **Isolated Authentication Sessions**: Utilizing private browsing ensures that each session is isolated. This prevents authentication overlap, which could inadvertently affect the configuration of your demo tenant or interfere with the settings of your existing accounts.

# Steps to take

To create a Microsoft 365 Business Premium tenant, follow these steps:

1. Open your browser of choice and start a Private Browsing session
2. Go to the [**Microsoft 365 for Business**](https://www.microsoft.com/en-us/microsoft-365/business) website and click on the ["**Buy now**"](https://go.microsoft.com/fwlink/p/?LinkID=510933&clcid=0x409&culture=en-us&country=us) button or the ["**Try free for one month**"](https://go.microsoft.com/fwlink/p/?LinkID=2147547&clcid=0x409&culture=en-us&country=us) button for the Business Premium plan.
3. Select the number of users & licenses that you wish to add to your future created tenant 

{% include note_info.html content="You can start with 1 user and then further scale the number of ordered licenses" %}

4. Chose the length of your subscription and your desired payment terms 
5. Enter your email address to check if you have an existing account – note: this email address will become the reset details for the Global Administrator account of your tenant
6. Enter your personal and business information, such as your business name, address, phone number, etc. – note: the country you will be selecting here will decide where the data from your tenant will reside
7. Perform the security check through one of the preferred methods – select text or call and then enter the received verification code 

{% include note_important.html content="Before you enter your domain name or buy a new one, you will see that your tenant has a default domain name with the format <strong>`[tenant-name].onmicrosoft.com`</strong>. This is a globally unique identifier for your tenant that cannot be changed or deleted. You can use this domain name to sign in to your admin account and other user accounts, as well as access online services such as Teams, SharePoint or OneDrive. You will have the possibility to add your own custom domain at a later date and even change the default domain used throughout your tenant – for existing users in your tenant at the date of adding a domain, a migration process exists in place." %}

8.	You will then need to create the first initial user of your new tenant and to decide what is the `[subdomain].onmicrosoft.com` subdomain, which together will become a root Global Administrator and the base identity for your tenant. Chose these wisely, avoid using `admin@` and use a complex password, as this account will have complete ownership of the tenant, so it must be kept secure. 
9.	Reconfirm the number of licenses and users that you wish to buy in this initial stage and then add your payment details that will be used for this account
10.	Review your order and confirm your purchase. You will receive a confirmation email with your subscription details and a link to access your admin center.
After completing all of these steps, you can go to the [**Admin Center**](https://admin.microsoft.com) and sign in with the account you have defined. We highly recommend the first thing that you do is [**adding a Multi Factor Authentication**]( https://learn.microsoft.com/en-us/microsoft-365/admin/security-and-compliance/set-up-multi-factor-authentication?view=o365-worldwide) to this account, as it has complete permissions on all of the settings from the tenant.

# Conclusion

You have successfully created a Microsoft 365 Business Premium tenant and set up your cloud-based business solution. You can now use Microsoft 365 apps and services to work, communicate and collaborate with your team and customers. You can also manage your subscription, users and settings from your admin center. 

For more information you can visit the [Microsoft Learn documentation](https://learn.microsoft.com/en-us/microsoft-365/admin/admin-overview/admin-center-overview?view=o365-worldwide) or [contact support]( https://learn.microsoft.com/en-us/microsoft-365/admin/get-help-support?view=o365-worldwide).
