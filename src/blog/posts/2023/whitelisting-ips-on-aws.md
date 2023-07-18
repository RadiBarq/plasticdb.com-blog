---
date: 2023-07-16
title: Whitelisting IPs to access AWS RDS from PlasticDB
author: Radi Barq
category: Tutorial
tags: Security, AWS, Database, RDS
---

Welcome to our tutorial on whitelisting IP addresses for AWS RDS (Relational Database Service)! AWS RDS is a powerful and flexible cloud-based service that allows you to set up, operate, and scale relational databases with ease. However, to ensure the security of your data, it is crucial to control access to your RDS instances by configuring IP whitelisting.

---

# Get the IP you are planing to whitelist

If you are using PlasticDB, the PlasticDB servers rely on two static IP addresses for accessing your databases. You can easily locate these IPs by navigating to the "Add New Connection" page in PlasticDB. Take note of the IPs listed below:

![Add new connection page](/images/whitelisting-ips-aws/1.png)

However, if you are not utilizing PlasticDB, you have the freedom to choose any IP address you prefer. Rest assured, you can continue following this tutorial without encountering any complications or obstacles.

# Check if RDS is publicly accessible
The first thing we need to do is ensure that the RDS is publicly accessible. By default, RDS databases are not accessible upon creation. Follow these steps to check the accessibility status:

1. Go to the RDS service in your AWS Management Console.
2. Navigate to the "Databases" section and select your desired database by clicking on its name.
3. Within the "Connectivity & security" section, check the "Publicly accessible" field.

![Check if RDS is publicly accessible or not](/images/whitelisting-ips-aws/2.png)

By examining this field, you can confirm whether your RDS database is currently set as publicly accessible or not.

If your RDS database is not currently set as publicly accessible, you can modify the settings to enable public access. Follow these steps to make the necessary changes:

Go to the RDS service in your AWS Management Console.
Navigate to the "Databases" section and select your desired database by clicking on its name.
Within the "Connectivity & security" section, click on the "Modify" button on the top.

1. In the "Modify DB Instance" page, scroll down to the "Connectivity" section.
2. Locate the "Publicly accessible" field and set it to "Yes" to allow public access.
Publicly accessible field

![Change RDS to be publicly accessible](/images/whitelisting-ips-aws/2.png)

3. Scroll down and click on the "Continue" button to proceed.
4. Review the summary of changes, and if everything appears correct, click on the "Modify DB Instance" button to apply the changes.

Please note that making your RDS database publicly accessible may expose it to potential security risks. Ensure that you have implemented appropriate security measures such as strong authentication credentials and firewall rules to protect your data.

With the above steps, you have successfully made your RDS database publicly accessible. Now, we can move on to the next section.

# Whitelisting IPs using Security Group
Now that your RDS database is publicly accessible, we can proceed with whitelisting specific IP addresses to control access. In AWS, we can achieve this by configuring the Security Group associated with your RDS instance. Follow these steps to whitelist IPs using the Security Group:

1. Go to the RDS service in your AWS Management Console.
2. Navigate to the "Databases" section and select your desired database by clicking on its name.
3. Within the "Connectivity & security" section, click on the name of the associated Security Group.
![Security group link](/images/whitelisting-ips-aws/4.png)
4. In the Security Group page, locate the "Inbound rules" section and click on the "Edit inbound rules" button.
![Edit inbound rules](/images/whitelisting-ips-aws/5.png)
5. Click on the "Add rule" to define new inboun rule.
6. Specify the following details for the new rule:
  * Type: Select the appropriate protocol and port number based on your requirements (e.g., MySQL/Aurora, port 3306).
  * Source: Enter the custom IP address to whitelist. For example, if you want to whitelist a single IP address, enter the IP in the format X.X.X.X/32. To whitelist a range of IP addresses, provide the appropriate CIDR range. If you are using PlasticDB then you need to enter the two IPs sources 138.68.127.131/32 and 139.59.196.218/32 in different inboun rules.
  * Description: Optionally, add a meaningful description for the rule.
![Add inbound rules](/images/whitelisting-ips-aws/6.png)
7. Click on the "Save rules" button to apply the changes to the Security Group.

By following these steps, you have successfully whitelisted the specified IP address in the Security Group associated with your RDS instance. Repeat these steps for each IP or CIDR range you want to whitelist.

It's important to regularly review and update the IP whitelisting rules to ensure that only authorized IP addresses have access to your RDS instance.

## Get answers from your database using AI
[Try PlasticDB for Free](https://plasticdb.com)