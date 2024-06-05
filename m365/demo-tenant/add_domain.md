---
layout: page
nav_exclude: true
title: How to add a custom domain
permalink: m365/demo/add_domain
---


{% include note_info.html content="This chapter takes about 20 minutes to read and 30 minutes to implement" %}

If you want to use your own domain name for your Microsoft 365 email addresses and website, you can add a custom domain to your tenant. A domain is a unique name that appears after the @ sign in email addresses and after www. in web addresses. For example, if your current email address is `user@contoso.onmicrosoft.com`, you can change it to `user@contoso.com` by adding the `contoso.com` domain to your tenant.

# Prerequisites

- a pre-purchased domain
- an active DNS server - if not available, see section for Azure DNS
- access to make changes to the DNS records

# How to configure Microsoft 365 with a generic DNS 

To add a custom domain to your tenant, follow these steps:
1. Go to the [**Admin Center**](https://admin.microsoft.com) and sign in with your admin account.
2. In the left navigation pane, click Setup and then Domains.
3. Click Add domain and enter the domain name that you own or want to buy.
4. Follow the instructions to verify that you own the domain and configure the DNS records to point to Microsoft 365 services.
5. Select the users and groups that you want to assign the new domain to and update their email addresses.
6. Review your settings and click Finish.

You have successfully added a custom domain to your tenant. You can now use it for your email and website addresses. For more information, you can visit the [Microsoft Learn documentation for domains]([URL]).

# How to configure the domain nameservers in Azure DNS

If you do not have your DNS configured for your domain, in order to use your custom domain for your email and website addresses, you need to have one and configure it. An option that you have for this is hosting it in Azure using DNS Zones, which is a hosting service for DNS domains that provides name resolution using Microsoft Azure infrastructure. Azure DNS allows you to manage your DNS records using the same credentials, APIs, tools and billing as your other Azure and Microsoft 365 services.  

To configure your domain in Azure DNS, follow these steps:
1. Sign in to the [**Azure portal**](https://portal.azure.com) with your admin credentials.
2. Make sure you have an active Subscription on your account
3. Select `All services` and search for `DNS zones`.
4. Select `+ Add` to create a new `DNS zone`.
5. Enter your custom domain name (for example, `contoso.com`) in the Name field and select your subscription and resource group.
6. Click `Review + create` and then `Create` to create the DNS zone.
7. Select `Go to resource` to open the DNS zone overview page.
8. Copy the values of the name servers that are assigned to your DNS zone. You will need them in the next step.
9. Go to your domain registrar's website and sign in with your account.
10. Find the DNS settings or name servers section for your domain and update them with the values that you copied from Azure DNS. This will delegate your domain to Azure DNS and allow it to resolve your domain records.
11. Save your changes and wait for the DNS propagation to take effect. 

{% include note_info.html content="This may take up to 48 hours depending on your registrar and any previous DNS settings." %}


# How to configure Microsoft 365 with Azure DNS

If you delegated your domain to Azure DNS, you will need to configure Microsoft 365 to use Azure DNS as well. This will enable you to use Microsoft 365 services such as Exchange Online, SharePoint Online and Teams with your custom domain name. To do this, you need to add some DNS records to your Azure DNS zone that verify your domain ownership and direct traffic to Microsoft 365 servers.  

Here are the steps to follow:
1. Sign in to the [**Microsoft 365 Admin Center**](https://admin.microsoft.com) with your global administrator account.
2. Go to `Settings` > `Domains` and click on `Add domain`.
3. Enter your domain name and click on `Use this domain`.
4. On the `Verify domain` page, select `Add a TXT record instead` and copy the value of the TXT record that Microsoft 365 provides. This is a unique code that will verify your domain ownership.
5. Go back to the Azure portal and open your DNS zone. Click on `+ Record` set to add a new record.
6. In the `Name` field, enter `@` to indicate the root domain. In the Type field, select `TXT` from the drop-down menu. In the `TTL` field, enter `3600` to set the time to live to one hour. In the `Value` field, paste the value of the `TXT record` that you copied from Microsoft 365. Click on `OK` to create the record.
7. Go back to the Microsoft 365 admin center and click on `Verify`. It may take a few minutes for the verification to complete. If it fails, wait for some time and try again.
8. After your domain is verified, you will see a list of DNS records that you need to add to your Azure DNS zone to enable different Microsoft 365 services. These include `CNAME records` for autodiscover, enterprise enrollment, enterprise registration and `SIP`, as well as an `MX record` for mail delivery and an `SPF record` for spam protection. Copy the values of these records from Microsoft 365.
9. Go back to the Azure portal and add each record to your DNS zone by following the same steps as before. Make sure to select the correct type and value for each record. For the `MX record`, you also need to specify a priority value, which is usually 0. For the `SPF record`, you need to enter `@` in the Name field and select `TXT` as the type.
10. After you have added all the records, go back to the Microsoft 365 admin center and click on `Verify`. It may take some time for the changes to propagate. If any record fails to verify, check the spelling and format of the values and try again.
11. Once all the records are verified, your domain is ready to use with Microsoft 365. You can now create users, groups and aliases with your custom domain name and enjoy the full functionality of Microsoft 365 services.

