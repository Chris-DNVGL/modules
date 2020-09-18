(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{353:function(e,t,r){"use strict";r.r(t);var i=r(42),a=Object(i.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"azure-service-fabric"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#azure-service-fabric"}},[e._v("#")]),e._v(" Azure Service Fabric")]),e._v(" "),r("p",[r("strong",[e._v("19.09.2018 | Contributor: Michael Marrow | Reviewed: Sandy McFarlane |  Approval: No")])]),e._v(" "),r("h2",{attrs:{id:"verit-on-azure"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#verit-on-azure"}},[e._v("#")]),e._v(" VerIT on Azure")]),e._v(" "),r("h3",{attrs:{id:"what-is-azure-service-fabric"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#what-is-azure-service-fabric"}},[e._v("#")]),e._v(" What is Azure Service Fabric?")]),e._v(" "),r("p",[e._v("Azure Service Fabric began its existence as an internal Application Services Orchestrator built to support Microsoft’s journey to the cloud.  Using this platform, Microsoft developed many of their key Cloud offerings including Skype for Business, Cosmos DB, Cortana and Microsoft Power BI.  Based on their internal success Microsoft has made the Service Fabric platform available both to be used on Premise and as a Managed Cloud Service.   For the sake of this document, the focus will be on the managed cloud service although many of the key concepts can be applied to any Service Fabric implementation.")]),e._v(" "),r("p",[e._v("Azure Service Fabric simplifies the packaging, deployment, and scaling of microservices and containers. The underlying infrastructure components are completely managed to allow developers to focus on service development rather than having to manage the compute, storage and networking components.  Reliability and Scalability are achieved through the use of the Service Fabric distributed platform.")]),e._v(" "),r("p",[e._v("Microservices and containers allow developers to break down large applications into manageable workloads that are easier to develop, deploy and manage.  This simplified approach offers many benefits but managing a varied set of microservices and containers can bring with it some unique challenges as well. This is where Azure Service Fabric steps in to provide for the management of the application environment.")]),e._v(" "),r("p",[r("img",{attrs:{src:"media/servicefabricplatform.png",alt:"Service Fabric Platform"}})]),e._v(" "),r("h3",{attrs:{id:"what-is-a-microservice"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#what-is-a-microservice"}},[e._v("#")]),e._v(" What is a Microservice?")]),e._v(" "),r("p",[e._v("Traditional applications bundled all of their functionality into a single service. This single service could become very complex and generally meant that the entire service would need to be down in order to implement new features and bug fixes. Scalability was complicated as the entire service would need to be scaled even if only a single function required additional resources. Achieving high availability with these services often required a significant investment in redundant hardware that added complexity to the overall architecture.")]),e._v(" "),r("p",[e._v("The trend towards moving workloads into the Cloud has driven the need to reduce development time, reduce downtime and to allow for scaling on demand. The traditional single service approach is no longer practical for supporting production DevOps environments. These single large services can now be broken into a loosely coupled set of function-specific services, or microservices, that can be upgraded and scaled individually.")]),e._v(" "),r("p",[e._v("From an architectural standpoint, Microservices can be seen as a variant of service-oriented architecture(SOA).  In a microservices architecture, services perform a very specific function.  Communication between services is handled via lightweight protocols, most notably via APIs.  At their simplest, microservices receive input from the calling service, perform their task and provide output.  Due to their simplified nature, microservices can be developed, deployed, scaled, updated and managed independently. Multiple microservices can be developed in parallel which improves development efficiency and reduces overall time to delivery.")]),e._v(" "),r("h3",{attrs:{id:"what-is-in-a-microservice"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#what-is-in-a-microservice"}},[e._v("#")]),e._v(" What is in a Microservice?")]),e._v(" "),r("p",[e._v("A Microservice generally consists of the following components:")]),e._v(" "),r("p",[r("strong",[e._v("Code Package")]),r("br"),e._v("\nA code package is a collection of all of the executables, dlls, and binaries that are required to run an individual service.   A service may contain multiple code packages with each being versioned individually.   Code Packages do not need to contain binary files, they can simply be pointers to a container image located in a container registry.")]),e._v(" "),r("p",[r("strong",[e._v("Configuration Package")]),r("br"),e._v("\nA configuration package contains all of the configuration files(.json,.xml,etc.) required by a service.")]),e._v(" "),r("p",[r("img",{attrs:{src:"media/microservice.png",alt:"Microservice"}})]),e._v(" "),r("h3",{attrs:{id:"what-is-an-azure-service-fabric-cluster"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#what-is-an-azure-service-fabric-cluster"}},[e._v("#")]),e._v(" What is an Azure Service Fabric Cluster?")]),e._v(" "),r("p",[e._v("The basic architecture of an Azure Service Fabric(ASF) cluster is a bit different than other Azure cloud services.   Implementing an ASF cluster consists of deploying a number of customer defined virtual machines known as nodes.   Each node can host multiple instances of different services within the application stack.  This allows many service instances to be hosted by a few servers.  This reduces the number of servers required and cost of compute resources.\nThe Azure Service Fabric service manages the basic operations of the cluster including:")]),e._v(" "),r("ul",[r("li",[e._v("Lifecycle Management")]),e._v(" "),r("li",[e._v("Scaling and Density")]),e._v(" "),r("li",[e._v("Rolling Upgrades")]),e._v(" "),r("li",[e._v("Availability Guarantees")]),e._v(" "),r("li",[e._v("Policy Enforcement")]),e._v(" "),r("li",[e._v("Always on Availability")]),e._v(" "),r("li",[e._v("Resource Governance")]),e._v(" "),r("li",[e._v("Support of Stateless and Stateful")]),e._v(" "),r("li",[e._v("Packaging and Deployment")]),e._v(" "),r("li",[e._v("Granular Versioning")])]),e._v(" "),r("p",[e._v("After the virtual machines(nodes) have been implemented, the Service Fabric components are deployed to each node.   A cluster manifest is generated containing IP address information for each node in the cluster.   The cluster manifest is a dynamic configuration file which is updated each time a node is added or removed from the cluster.  This allows each node to communicate to each other allowing the cluster to be formed.")]),e._v(" "),r("p",[e._v("A Load Balancer is implemented as part of the cluster deployment.  This allows requests to the cluster to be balanced across each node hosting a specific service.")]),e._v(" "),r("p",[r("img",{attrs:{src:"media%5Cmanagedcluster.png",alt:"Service Fabric Managed Cluster"}})]),e._v(" "),r("p",[e._v("Developer code is uploaded to a single node in the cluster, via the Load Balancer.  The code is then stored in the Image Store where it can then be deployed to as many nodes as is required.")]),e._v(" "),r("p",[e._v("Azure Service Fabric is made up of the following infrastructure services:")]),e._v(" "),r("p",[r("strong",[e._v("Cluster Manager Service")]),r("br"),e._v("\nProvides for Cluster Management."),r("br"),e._v("\nPorts: Rest(HTTP=19080, Powershell/Fabric Client(TCP=[19000])")]),e._v(" "),r("p",[r("strong",[e._v("Failover Manager Service")]),r("br"),e._v("\nManages service load as instance are added/removed.")]),e._v(" "),r("p",[r("strong",[e._v("Naming Service")]),r("br"),e._v("\nRegistry mapping service instances to endpoints.")]),e._v(" "),r("p",[r("strong",[e._v("Fault Analysis Service")]),r("br"),e._v("\nAllows faults to be injected into a running service for testing purposes.")]),e._v(" "),r("p",[r("strong",[e._v("Image Store Service")]),r("br"),e._v('\nStores uploaded application packages.  This service does not exist on "OneBox" single server solutions.')]),e._v(" "),r("p",[r("strong",[e._v("Upgrade Manager Service")]),r("br"),e._v("\nManages the upgrade of the Service Fabric platform.")]),e._v(" "),r("h3",{attrs:{id:"planning-before-implementing-azure-service-fabric"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#planning-before-implementing-azure-service-fabric"}},[e._v("#")]),e._v(" Planning Before Implementing Azure Service Fabric")]),e._v(" "),r("p",[e._v("Prior to deploying an Azure Service Fabric Cluster, it’s important to plan out an environment that meets business requirements.  ASF provides a lot of flexibility from a scaling perspective but a poor design can have cost and performance consequences. The following topics should be taken into consideration during the planning phases:")]),e._v(" "),r("p",[r("strong",[e._v("Capacity Planning")]),e._v("\nThis is not an easy exercise but it is an important part of an effective design.  It will take some time to evaluate the expected workload, growth and best combination of the number of nodes and their compute sizing.  Remember, adding capacity on demand is not instantaneous so proper capacity for peak usage should be planned.  Additional details on capacity planning can be found "),r("a",{attrs:{href:"https://docs.microsoft.com/en-us/azure/service-fabric/service-fabric-capacity-planning",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("p",[r("strong",[e._v("Define Security/Compliance Requirements.")]),r("br"),e._v("\nSecurity and Compliance requirements can influence where and how an ASF cluster is deployed.  Understanding these requirements before implementing the cluster can save a lot of work and headaches down the road if the solution is found to be non-compliant.")]),e._v(" "),r("p",[r("strong",[e._v("Define the Availability Requirements")]),r("br"),e._v("\nPlanning should take into consideration both planned and unplanned downtime.   Having seven nodes in a single cluster will protect against an outage due to the failure of a single node.  However, if all seven nodes reside in the same Fault Domain, a larger issue in the hosting data center could result in all seven nodes being down.  In addition, if all nodes reside in the same Upgrade Domain, an issue related to an upgrade of the service fabric platform could affect all seven nodes as well.   With careful planning, a balance between cost and uptime can be found that meets requirements without overspending.")]),e._v(" "),r("p",[r("strong",[e._v("Determine the Required Level of Reliability")]),r("br"),e._v("\nThe more replicas of each service that exist directly influences the reliability of the entire solution. Microsoft defines reliability tiers based on the number of service replicas there are in the cluster.  The reliability tiers, as defined by Microsoft, are as follows:"),r("br"),e._v(" "),r("strong",[e._v("Bronze Reliability Tier")]),e._v(":  Requires 3 Service Replicas."),r("br"),e._v(" "),r("strong",[e._v("Silver Reliability Tier")]),e._v(":  Requires 5 Service Replicas."),r("br"),e._v(" "),r("strong",[e._v("Gold Reliability Tier")]),e._v(":  Requires 7 Service Replicas."),r("br"),e._v(" "),r("strong",[e._v("Platinum Reliability Tier")]),e._v(": Requires 9 Service Replicas.")]),e._v(" "),r("h2",{attrs:{id:"security-considerations"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#security-considerations"}},[e._v("#")]),e._v(" Security Considerations")]),e._v(" "),r("p",[e._v("Azure Service Fabric(ASF) manages the cluster of machines that have been provisioned to execute application workloads in the form of microservices.  It’s important to secure the server cluster from unauthorized access, especially when they are running production workloads.  Failure to take the appropriate steps to secure the ASF Cluster could result in allowing anonymous users to connect to the cluster.")]),e._v(" "),r("p",[e._v("When deploying an ASF cluster the following topics should be considered:")]),e._v(" "),r("h3",{attrs:{id:"node-to-node-security"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#node-to-node-security"}},[e._v("#")]),e._v(" Node-to-node Security")]),e._v(" "),r("p",[e._v("Within the ASF Cluster, it’s important to ensure that only authorized servers can participate in the server cluster.  ASF makes use of X.509 certificates to confirm the identity of authorized cluster servers.  The primary certificate is set during the provisioning process.  Optionally, a secondary certificate can be created to be used for certificate rollovers.  Certificates used for Node-to-node security should be unique for this purpose and should not be used to secure other ASF components. It’s important that these certificates are properly managed as an invalid or expired certificate will cause the cluster to fail.  Details for managing these certificates can be found "),r("a",{attrs:{href:"https://docs.microsoft.com/en-us/azure/service-fabric/service-fabric-cluster-security-update-certs-azure",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("h3",{attrs:{id:"client-to-node-security"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#client-to-node-security"}},[e._v("#")]),e._v(" Client-to-node Security")]),e._v(" "),r("p",[e._v("Access to the Azure Service Fabric cluster can be secured using Azure Active Directory.  This allows clients to be authenticated making use of their normal active directory credentials regardless of how they are accessing the cluster(Azure Portal, CLI, Azure Service Fabric Explorer or Visual Studio).  Microsoft provides instructions for setting up Azure AD for ASF "),r("a",{attrs:{href:"https://docs.microsoft.com/en-us/azure/service-fabric/service-fabric-cluster-creation-via-arm#set-up-azure-active-directory-for-client-authentication",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),r("OutboundLink")],1)]),e._v(" "),r("p",[e._v("In addition, providing access to the cluster, for Administrators and Users, can be secured making use of certificates.  When the cluster is provisioned an administrator and a user certificate can be specified.  Clients connecting to the cluster must make use of one of these certificates.  Each certificate provides a different level of access to the cluster:")]),e._v(" "),r("ul",[r("li",[e._v("Administrator Certificate: Provides full access to cluster management functions.")]),e._v(" "),r("li",[e._v("User Certificate: Provides read-only access to cluster management functions.")])]),e._v(" "),r("p",[e._v("Microsoft recommends using certificates to secure Node-to-node communication and Azure AD for client-to-node security.")]),e._v(" "),r("h3",{attrs:{id:"automated-deployment"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#automated-deployment"}},[e._v("#")]),e._v(" Automated Deployment")]),e._v(" "),r("p",[e._v("When deploying cloud services, it is generally considered the best practice to automate the deployment of required resources.  Azure Service Fabric is no different and support is available for scripting its deployment making use of Powershell and ARM templates.  Templates should drive all changes to the cluster in order to simplify configuration management.  All templates and supporting scripts should be part of your code management process.")]),e._v(" "),r("p",[e._v("Additional details can be found later in this document or in the Microsoft documentation found "),r("a",{attrs:{href:"https://docs.microsoft.com/en-us/azure/service-fabric/service-fabric-cluster-creation-via-arm",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("p",[e._v("In addition, the following features should be considered as part of the automation process:")]),e._v(" "),r("ul",[r("li",[e._v("Azure Key Vault should be used to store certificates, keys and secrets used to deploy and operate the ASF cluster.")]),e._v(" "),r("li",[e._v("Scripts should be used to manage the generation, deployment, and rollover of secrets.")]),e._v(" "),r("li",[e._v("Access to the Azure Key Vault by users should be tightly managed.")])]),e._v(" "),r("h3",{attrs:{id:"networking"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#networking"}},[e._v("#")]),e._v(" Networking")]),e._v(" "),r("p",[e._v("An Azure Service Fabric cluster is made up of virtual servers that are part of an "),r("a",{attrs:{href:"https://docs.microsoft.com/en-us/azure/virtual-machine-scale-sets/overview",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Virtual Machine Scale Set"),r("OutboundLink")],1),e._v(". This allows ASF clusters to make use of any feature that has been developed for use with VM Scale Sets.  This includes a rather large networking toolbox that includes Azure ExpressRoute, Azure VPN Gateway and Azure Network Security Groups.")]),e._v(" "),r("p",[e._v("When implementing an ASF cluster, careful consideration should be taken to evaluate the best way to secure network access for cluster nodes, management clients, and application users.   Network Security Groups should be used to set up rules that can be used to manage cluster traffic including:")]),e._v(" "),r("ul",[r("li",[e._v("Internal Cluster Communication")]),e._v(" "),r("li",[e._v("Segregation of Application Tiers")]),e._v(" "),r("li",[e._v("Creation of a Perimeter Network(DMZ)")]),e._v(" "),r("li",[e._v("Access to published Application")]),e._v(" "),r("li",[e._v("Limiting Management Access to the cluster(Use of a Jump Server)")])]),e._v(" "),r("p",[e._v("However, care must be taken when implementing these rules in order to ensure that internal cluster communication is maintained.")]),e._v(" "),r("p",[e._v("Microsoft provides examples of specific Service Fabric networking patterns "),r("a",{attrs:{href:"https://docs.microsoft.com/en-us/azure/service-fabric/service-fabric-patterns-networking",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("h3",{attrs:{id:"application-security-recommendations"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#application-security-recommendations"}},[e._v("#")]),e._v(" Application Security Recommendations")]),e._v(" "),r("p",[e._v("For the purposes of this document, the security of the developed code is primarily out of scope.  However, there are a few features developers should consider when developing code to be used in an Azure Service Fabric environment:")]),e._v(" "),r("ul",[r("li",[e._v("Azure AD Credentials can be used to manage access to both web-based and native client applications.")]),e._v(" "),r("li",[e._v("Azure Key Vault provides a secure place to store keys and secrets used to deploy and execute applications.  More details can be found "),r("a",{attrs:{href:"https://docs.microsoft.com/en-us/azure/service-fabric/service-fabric-application-secret-management",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("li",[e._v("Make use of security policies to manage the following, service setup entry point, console redirection and security access policy for HTTP and HTTPs endpoints.")])]),e._v(" "),r("h2",{attrs:{id:"secure-implementation-requirements-summary"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#secure-implementation-requirements-summary"}},[e._v("#")]),e._v(" Secure implementation requirements summary")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("[must] Use unique Certificates to secure Node-to-Node communications.\n[must] Secure Client-to-node communications using Azure AD or Certificate.\n[must] Use RBAC to secure access to the Azure Service Fabric Cluster.\n[must] Limit Administrator Access to the Azure Service Fabric Cluster.\n[must] Include Deployment Templates and Scripts in Code Management process.\n[must] Use Network Security Groups to manage and secure Cluster and Application traffic.\n[must] Ensure application data is accessed and stored securely (“in transit” and “at rest”) in accordance with other VerIT on Azure documentation.\n[should] Create a Secondary Certificate to be used during Certificate Rollover.\n[should] Use Azure Key Vault to store AFS Cluster certificates, keys and secrets.\n[should] Use Azure AD to secure Client-to-node communications.\n[should] Use Templates and Scripts to deploy and update Azure Service Fabric Clusters.\n[should] Implement Azure Service Fabric Clusters using the Secure Cluster Template.\n[should] Implement a Perimeter Network(DMZ).\n[should] Use Jump Servers to Manage Azure Service Fabric Clusters\n[should] Use Azure AD Credentials to authenticate to applications, where possible.\n[should] Use Azure Key Vault to store Application Keys and Secrets.\n[should] Use ASF Security Policies to secure applications.\n\n[must]=required security implementation, [should]=recommended security best practice\n\n")])])]),r("h2",{attrs:{id:"provision-by-code"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#provision-by-code"}},[e._v("#")]),e._v(" Provision by Code")]),e._v(" "),r("h3",{attrs:{id:"powershell-script-for-creating-a-secure-azure-service-fabric-cluster"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#powershell-script-for-creating-a-secure-azure-service-fabric-cluster"}},[e._v("#")]),e._v(" PowerShell script for creating a Secure Azure Service Fabric Cluster")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v('# Parameters Section\n$rgName   \t= "GSSIT-InfraDev-ServiceFabric-EUS"    \t# Name of resource group to create\n$certfolder      \t=  "c:\\mycertificates\\"                 \t\t# Path to store Certificate\n$adminuser     \t= "vmadmin"                            \t\t# Administrator User\n$clustername  \t= "gssitinfraafs"                      \t\t# Service Fabric Cluster Name\n$vmsku             \t= "Standard_D2_v2"                     \t\t# Azure VM Sku\n$kvname          \t= "kvgssitinfraafs"                    \t\t# Key Vault Name\n$clustersize     \t= 5                                    \t\t\t# Set the number of cluster nodes(1, 3-99)\n\n# Passwords\n$certpwd        = "Password#1234" | ConvertTo-SecureString -AsPlainText -Force  \t# Certificate Password\n$adminpwd    = "Password#1234" | ConvertTo-SecureString -AsPlainText -Force  \t# Administrator Password\n\n#Import AzureRM modules\nImport-Module AzureRM.Profile\nImport-Module AzureRM.Resources\nImport-Module AzureRM.ServiceFabric\n\n# Sign in\nAdd-AzureRMAccount\n\n# Select Azure Subscription\n$subscriptionId = (Get-AzureRMSubscription).Name | Out-GridView -Title "Select Azure Subscription" -PassThru\nSelect-AzureRMSubscription -SubscriptionName $subscriptionId\n\n#Select Location\n$clusterloc= (Get-AzureRMLocation).DisplayName | Out-GridView -Title "Select Azure Location:" -PassThru\n\n#Generate Sub Domain Name\n$subname="$clustername.$clusterloc.cloudapp.azure.com"\n\n# Create Resource Group\n$resourcegroup=New-AzureRmResourceGroup -Name $rgName -Location $clusterloc -Force\n\n# Create the Service Fabric cluster.\nNew-AzureRmServiceFabricCluster -Name $clustername -ResourceGroupName $resourcegroup.ResourceGroupName `\n-Location $clusterloc -ClusterSize $clustersize -VmUserName $adminuser -VmPassword $adminpwd `\n-CertificateSubjectName $subname -CertificatePassword $certpwd -CertificateOutputFolder $certfolder `\n-OS WindowsServer2016DatacenterwithContainers -VmSku $vmsku -KeyVaultName $kvname\n')])])]),r("h2",{attrs:{id:"accessing-an-azure-service-fabric-cluster"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#accessing-an-azure-service-fabric-cluster"}},[e._v("#")]),e._v(" Accessing an Azure Service Fabric Cluster")]),e._v(" "),r("p",[e._v("Once the Service Fabric Cluster has been provisioned, the Service Fabric Explorer can be used to manage and monitor the performance of the cluster.  Service Fabric Explorer is a web-based tool hosted directly within the cluster.\nThe first time you access the Service Fabric Explorer, the certificate created during the installation must be installed on the local PC.  In order to do this:")]),e._v(" "),r("ol",[r("li",[e._v("Open Windows Explorer and browse to the folder where the certificate was created during the implementation of the Service Fabric Cluster.  In the example script, this is stored in the $certfolder variable.")]),e._v(" "),r("li",[e._v("Right Click on the certificate file(.pfx) and select Install PFX.")]),e._v(" "),r("li",[e._v("Complete the Certificate Import Wizard providing the Certificate Password used in the Service Fabric Cluster setup script.")])]),e._v(" "),r("p",[e._v("Once the certificate has been installed, the Service Fabric Cluster can be accessed using the link documented in the Service Fabric Cluster configuration in the Azure Portal.")]),e._v(" "),r("p",[e._v("Additional details regarding the use of the Service Fabric Explorer can be found "),r("a",{attrs:{href:"https://docs.microsoft.com/en-us/azure/service-fabric/service-fabric-visualizing-your-cluster",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("p",[e._v("In addition, the Service Fabric Cluster can be accessed via PowerShell or the Azure CLI.   Instructions for accessing the cluster can be found "),r("a",{attrs:{href:"https://docs.microsoft.com/en-us/azure/service-fabric/service-fabric-connect-to-secure-cluster",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),r("OutboundLink")],1),e._v(".   Command Line access does require the installation of the "),r("a",{attrs:{href:"https://docs.microsoft.com/en-us/azure/service-fabric/service-fabric-get-started",target:"_blank",rel:"noopener noreferrer"}},[e._v("Service Fabric SDK"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("p",[e._v("An example of establishing a connection to the cluster from Powershell and checking the overall health:")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v('# Parameters Section\n$endpoint \t= "[name].[region].cloudapp.azure.com:19000"\n$thumbprint \t= “*****************************************”\t\t\t#Can be found in the Azure Portal.  \n\n# Sign in\nAdd-AzureRMAccount\n\n# Select Azure Subscription\n$subscriptionId = (Get-AzureRMSubscription).Name | Out-GridView -Title "Select Azure Subscription" -PassThru\nSelect-AzureRMSubscription -SubscriptionName $subscriptionId\n\n# Establish connection to the Service Fabric Cluster\n\nConnect-ServiceFabricCluster -ConnectionEndpoint $endpoint `\n          -KeepAliveIntervalInSec 10 `\n          -X509Credential -ServerCertThumbprint $thumbprint `\n          -FindType FindByThumbprint -FindValue $thumbprint `\n          -StoreLocation CurrentUser -StoreName My\n\n#Check Cluster Health\nGet-ServiceFabricClusterHealth\n')])])]),r("h3",{attrs:{id:"scaling-an-azure-service-fabric-cluster"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#scaling-an-azure-service-fabric-cluster"}},[e._v("#")]),e._v(" Scaling an Azure Service Fabric Cluster")]),e._v(" "),r("p",[e._v("Adding additional capacity to an Azure Service Fabric Cluster consists of adding additional nodes to the cluster.  Service Fabric will automatically recognize the new the nodes and make them available for use.  The PowerShell Code below will add one additional node to the existing cluster.")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v('# Parameters Section\n$rgName         \t= "GSSIT-InfraDev-ServiceFabric-EUS"   \t\t\t# Name of the Resource Group\n$endpoint \t= "[name].[region].cloudapp.azure.com:19000"\n$thumbprint \t= “*****************************************”\t\t\t#Can be found in the Azure Portal.  \n\n\n# Sign in\nAdd-AzureRMAccount\n\n# Select Azure Subscription\n$subscriptionId = (Get-AzureRMSubscription).Name | Out-GridView -Title "Select Azure Subscription" -PassThru\nSelect-AzureRMSubscription -SubscriptionName $subscriptionId\n\n# Establish connection to the Service Fabric Cluster\n\nConnect-ServiceFabricCluster -ConnectionEndpoint $endpoint `\n          -KeepAliveIntervalInSec 10 `\n          -X509Credential -ServerCertThumbprint $thumbprint `\n          -FindType FindByThumbprint -FindValue $thumbprint `\n          -StoreLocation CurrentUser -StoreName My\n\n$scaleset = Get-AzureRmVmss -ResourceGroupName $rgname -VMScaleSetName nt1vm\n$scaleset.Sku.Capacity += 1\n\nUpdate-AzureRmVmss -ResourceGroupName $rgName -VMScaleSetName nt1vm `\n-VirtualMachineScaleSet $scaleset\n')])])]),r("p",[e._v("Removing a node from the cluster requires that the node be disabled first and then removed.  The script below identifies the most recently created node then disables and removes it:")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v('# Parameters Section\n$rgName         \t= "GSSIT-InfraDev-ServiceFabric-EUS"   \t\t\t# Name of the Resource Group\n$endpoint \t= "[name].[region].cloudapp.azure.com:19000"\n$thumbprint \t= “*****************************************”\t\t\t#Can be found in the Azure Portal.  \n\n# Sign in\nAdd-AzureRMAccount\n\n# Select Azure Subscription\n$subscriptionId = (Get-AzureRMSubscription).Name | Out-GridView -Title "Select Azure Subscription" -PassThru\nSelect-AzureRMSubscription -SubscriptionName $subscriptionId\n\n# Establish connection to the Service Fabric Cluster\n\nConnect-ServiceFabricCluster -ConnectionEndpoint $endpoint `\n          -KeepAliveIntervalInSec 10 `\n          -X509Credential -ServerCertThumbprint $thumbprint `\n          -FindType FindByThumbprint -FindValue $thumbprint `\n          -StoreLocation CurrentUser -StoreName My\n# Get the node that was created last\n$node = Get-ServiceFabricNode | Sort-Object NodeInstanceId -Descending | Select-Object -First 1\n\n# Node details for the disable/stop process\n$nodename = $node.NodeName\n$nodeid = $node.NodeInstanceId\n\n$loopTimeout = 10\n\n# Run disable logic\nDisable-ServiceFabricNode -NodeName $nodename -Intent RemoveNode -TimeoutSec 300 -Force\n\n$state = Get-ServiceFabricNode | Where-Object NodeName -eq $nodename | Select-Object -ExpandProperty NodeStatus\n\nwhile (($state -ne [System.Fabric.Query.NodeStatus]::Disabled) -and ($loopTimeout -ne 0))\n{\n    Start-Sleep 5\n    $loopTimeout -= 1\n    $state = Get-ServiceFabricNode | Where-Object NodeName -eq $nodename | Select-Object -ExpandProperty NodeStatus\n    Write-Host "Checking state... $state found"\n}\n\n# Exit if the node was unable to be disabled\nif ($state -ne [System.Fabric.Query.NodeStatus]::Disabled)\n{\n    Write-Error "Disable failed with state $state"\n}\nelse\n{\n    # Stop node\n    $stopid = New-Guid\n    Start-ServiceFabricNodeTransition -Stop -OperationId $stopid -NodeName $nodename -NodeInstanceId $nodeid -StopDurationInSeconds 300\n\n    $state = (Get-ServiceFabricNodeTransitionProgress -OperationId $stopid).State\n    $loopTimeout = 10\n\n    # Watch the transaction\n    while (($state -eq [System.Fabric.TestCommandProgressState]::Running) -and ($loopTimeout -ne 0))\n    {\n        Start-Sleep 5\n        $state = (Get-ServiceFabricNodeTransitionProgress -OperationId $stopid).State\n        Write-Host "Checking state... $state found"\n    }\n\n    if ($state -ne [System.Fabric.TestCommandProgressState]::Completed)\n    {\n        Write-Error "Stop transaction failed with $state"\n    }\n    else\n    {\n        # Remove the node from the cluster\n        Remove-ServiceFabricNodeState -NodeName $nodename -TimeoutSec 300 -Force\n    }\n}\n\n$scaleset = Get-AzureRmVmss -ResourceGroupName $rgName -VMScaleSetName nt1vm\n$scaleset.Sku.Capacity -= 1\n\nUpdate-AzureRmVmss -ResourceGroupName $rgName -VMScaleSetName nt1vm -VirtualMachineScaleSet $scaleset\n')])])])])}),[],!1,null,null,null);t.default=a.exports}}]);